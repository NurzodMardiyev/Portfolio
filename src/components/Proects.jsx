import pr1 from "../images/pr1.png";
import react from "../images/react.png";
import js from "../images/js.png";
import tailwind from "../images/tailwind.png";

export default function Proects() {
  return (
    <div className="border-b dark:border-b-[#55E5A4] border-b-gray-800 mb-4">
      <div className="container  md:max-w-8xl px-5 md:px-auto mx-auto text-[#C7C7C7] py-[42px]">
        <div className="flex w-full flex-col items-center md:mb-[110px] mb-[50px]">
          <h2
            className="md:text-[42px] text-[24px] dark:text-white text-gray-800 md:mb-[50px] mb-[20px]"
            style={{ fontWeight: 700 }}
          >
            Loyihalar
          </h2>
          <div className="flex gap-[30px]">
            <button className="md:px-[18px] md:py-[10px] px-[14px] py-[5px] border dark:border-[#55E5A4] bg-gray-700 dark:bg-[#55E5A4] dark:text-gray-800 text-white text-[14px] md:text-[20px] font-medium">
              React loyihalar
            </button>
            <button className="md:px-[18px] md:py-[10px] px-[14px] py-[5px] border dark:border-[#55E5A4] border-gray-800 dark:text-white text-gray-800 text-[14px] md:text-[20px] font-medium">
              Vue loyihalar
            </button>
          </div>
        </div>
        <div className="grid md:grid-cols-12  grid-cols-4 gap-10">
          <div className="card col-span-4 text-center rounded-[20px] bg-[#26313F]">
            <img
              src={pr1}
              alt="Pressa.edu.uz"
              className="rounded-t-[22px]  h-[230px] w-full"
            />
            <div className="flex flex-col items-center p-[40px]">
              <h3
                className="md:text-[38px] text-[20px] text-white"
                style={{ fontWeight: 600 }}
              >
                Pressa.edu.uz
              </h3>
              <p className="md:text-[20px] text-[16px] font-medium text-[#A8A8A8] ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur id optio minima facilis. Obcaecati similique culpa
                quaerat ipsum! Magni, nam?
              </p>
              <h4
                className="text-white md:text-[20px] text-[18px] md:my-[20px] my-[10px]"
                style={{ fontWeight: 600 }}
              >
                Texnologiyadan foydalanganligi
              </h4>
              <div className="flex gap-3">
                <img src={react} alt="react" className="w-[40px] h-[40px]" />
                <img src={js} alt="js" className="w-[40px] h-[40px]" />
                <img
                  src={tailwind}
                  alt="tailwind"
                  className="w-[40px] h-[40px]"
                />
              </div>
              <div className="flex gap-6 mt-5">
                <button className="md:text-[20px] text-[14px] md:px-[18px] md:py-[10px] px-[10px] py-[5px] border">
                  Live versiyasi
                </button>
                <button className="md:text-[20px] text-[14px] md:px-[18px] md:py-[10px] px-[10px] py-[5px] border">
                  Tashrif buyurish
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center md:mt-[70px] mt-[30px]">
          <button className="md:text-[20px] md:px-[18px] md:py-[10px] text-[14px] px-[16  px] py-[5px]  dark:bg-[#55E5A4] dark:text-gray-800 text-white bg-gray-700 font-medium">
            Barcha Loyihalarni ko'rish
          </button>
        </div>
      </div>
    </div>
  );
}
