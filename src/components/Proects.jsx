import { proects } from "./proects";
import { Link } from "react-router-dom";

export default function Proects() {
  return (
    <div
      id="work"
      className="border-b dark:border-b-[#55E5A4] border-b-gray-800 mb-4 md:pb-10"
    >
      <div className="container  md:max-w-8xl px-5 md:px-auto mx-auto text-[#C7C7C7] py-[42px]">
        <div className="flex w-full flex-col items-center md:mb-[70px] mb-[50px]">
          <h2
            className="md:text-[42px] text-[24px] dark:text-white text-gray-800 b-[20px]"
            style={{ fontWeight: 700 }}
          >
            Loyihalar
          </h2>
          <p className="md:text-[20px] text-[15px] dark:text-[#A8A8A8] text-gray-700 ">
            Innovatsion va samarali yechimlar orqali yaratgan loyihalarim.
          </p>
        </div>
        <div className="grid md:grid-cols-12  grid-cols-4 gap-10">
          {proects?.map((item) => (
            <div
              key={item.id}
              className="card col-span-4 text-center rounded-[20px] bg-[#26313F]"
            >
              <img
                src={item.img}
                alt={item.title}
                className="rounded-t-[22px]  h-[230px] w-full"
              />
              <div className="flex flex-col items-center p-[40px]">
                <h3
                  className="md:text-[38px] text-[20px] text-white"
                  style={{ fontWeight: 600 }}
                >
                  {item.title}
                </h3>
                <p className="md:text-[20px] text-[16px] font-medium text-[#A8A8A8] ">
                  {item.description}
                </p>
                <h4
                  className="text-white md:text-[20px] text-[18px] md:my-[20px] my-[10px]"
                  style={{ fontWeight: 600 }}
                >
                  Texnologiyadan foydalanganligi
                </h4>
                <div className="flex gap-3">
                  {item.tecnoligics?.map((i) => (
                    <img
                      src={i.img}
                      alt={i.id}
                      key={i.id}
                      className="w-[40px] h-[40px]"
                    />
                  ))}
                </div>
                <div className="flex gap-6 mt-5">
                  <Link
                    to={item.github}
                    target="_blank"
                    className="md:text-[20px] text-[14px] md:px-[18px] md:py-[10px] px-[10px] py-[5px] border"
                  >
                    Github code
                  </Link>
                  <Link
                    to={item.link}
                    target="_blank"
                    className="md:text-[20px] text-[14px] md:px-[18px] md:py-[10px] px-[10px] py-[5px] border"
                  >
                    Tashrif buyuring
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center md:mt-[70px] mt-[30px] hidden">
          <button className="md:text-[20px] md:px-[18px] md:py-[10px] text-[14px] px-[16px] py-[5px]  dark:bg-[#55E5A4] dark:text-gray-800 text-white bg-gray-700 font-medium">
            Barcha Loyihalarni ko'rish
          </button>
        </div>
      </div>
    </div>
  );
}
