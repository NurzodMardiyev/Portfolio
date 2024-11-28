import react from "../images/react.png";
import python from "../images/python.png";
import js from "../images/js.png";
import tailwind from "../images/tailwind.png";
import html from "../images/html.png";
import css from "../images/css.png";
import menbumen from "../images/aboutmen.png";
import menbumendark from "../images/aboutmendark.png";

export default function About() {
  return (
    <div className="border-b dark:border-[#55E5A4] border-gray-800">
      <div className="container  md:max-w-8xl px-5 md:px-auto mx-auto text-gray-800 dark:text-[#C7C7C7] flex md:flex-row flex-col-reverse justify-between items-center py-20 gap-20">
        <div className="md:w-1/2 w-full md:p-20 ps-0">
          <img
            src={menbumen}
            alt="Nurzod Mardiyev"
            className="dark:block hidden"
          />
          <img
            src={menbumendark}
            alt="Nurzod Mardiyev"
            className="dark:hidden block"
          />
        </div>
        <div className="md:w-1/2 w-full">
          <div className="flex md:justify-start justify-center">
            <div className="inline-block">
              <h3
                className="md:text-[42px] text-[24px]  dark:text-white text-gray-800"
                style={{ fontWeight: 700 }}
              >
                Men haqimda
              </h3>
              <p
                className="md:mt-[-10px] float-end dark:text-[#55E5A4]  text-gray-700 flex gap-2 items-center text-[14px] md:text-[16px]"
                style={{ fontWeight: 500 }}
              >
                <span className="inline-block md:w-[40px] w-[30px]  h-[2px] dark:bg-[#55E5A4] bg-gray-700"></span>{" "}
                Men kimman?
              </p>
            </div>
          </div>
          <div>
            <p className="md:text-[20px] text-[15px] dark:text-[#A8A8A8] text-gray-700 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus architecto vitae accusamus commodi minus quo
              cupiditate sunt, placeat magnam itaque ad quisquam veniam iure?
              Qui magnam dolores quia id veniam autem maiores fugit, vitae
              dolorem cupiditate quae ducimus, illo sed. Ipsam quod ex totam
              maxime? Facilis nulla alias ab veritatis eligendi velit officiis
              amet.
            </p>
          </div>
          <div className="flex  justify-between my-4 mt-[17px] mb-[37px] md:mb-auto md:mt-auto">
            <div className="flex flex-col justify-center items-center">
              <img
                src={react}
                alt="reactjs"
                className="md:w-[70px] w-[35px] h-[35px] md:h-[70px]"
              />
              <p className="md:text-[18px] text-[14px]">React</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                src={js}
                alt="js"
                className="md:w-[70px] w-[35px] h-[35px] md:h-[70px]"
              />
              <p className="md:text-[18px] text-[14px]">JavaScript</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                src={tailwind}
                alt="tailwind"
                className="md:w-[70px] w-[35px] h-[35px] md:h-[70px]"
              />
              <p className="md:text-[18px] text-[14px]">Tailwind</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                src={html}
                alt="html"
                className="md:w-[70px] w-[35px] h-[35px] md:h-[70px]"
              />
              <p className="md:text-[18px] text-[14px]">Html</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                src={css}
                alt="css"
                className="md:w-[70px] w-[35px] h-[35px] md:h-[70px]"
              />
              <p className="md:text-[18px] text-[14px]">Css</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                src={python}
                alt="python"
                className="md:w-[70px] w-[35px] h-[35px] md:h-[70px]"
              />
              <p className="md:text-[18px] text-[14px]">Python</p>
            </div>
          </div>
          <div className="flex md:block justify-center">
            <button className="md:py-[10px] py-[5px] px-[16px] md:text-[20px] text-[16px] md:border-[3px] border-2 dark:border-[#55E5A4] border-gray-700 font-medium dark:text-[#55E5A4] text-gray-700 mt-4">
              Resume Dawnload
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
