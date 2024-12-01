import react from "../images/react.svg";
import js from "../images/js.svg";
import tailwind from "../images/tailwind.png";
import html from "../images/sass.svg";
import css from "../images/ts.svg";
import vue from "../images/vue-logo.svg";
import menbumen from "../images/aboutmen.webp";
import menbumendark from "../images/aboutmendark.webp";

export default function About() {
  const downloadPDF = () => {
    // PDF faylning manzili (agar serverda bo'lsa, URL ishlatish mumkin)
    const pdfUrl = "/files/Nurzod Mardiyev (4).docx"; // fayl public papkada joylashgan

    // Faylni yuklab olish
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "NurzodResume.docx"; // Faylni nomi
    link.click();
  };

  return (
    <div id="about" className="border-b dark:border-[#55E5A4] border-gray-800">
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
            <p className="md:text-[20px] text-[15px] dark:text-[#A8A8A8] text-gray-700 mt-4 mb-8">
              Men tajribali frontend dasturchiman. React, Vue, Tailwind CSS, va
              GSAP kabi texnologiyalarda ishlayman. Shu jumladan, UI
              komponentlar yaratishda Ant Design, Flowbite va MUI Design kabi
              kutubxonalardan samarali foydalanaman. Loyihalarni
              optimallashtirish va muammolarni hal qilishda kuchliman.
              Shuningdek, adaptiv dizaynlar yaratib, platformalararo
              muvofiqlikni ta’minlayman. Mening maqsadim – innovatsion yondashuv
              orqali foydalanuvchi tajribasini maksimal darajada oshirish.
            </p>
          </div>
          <div className="flex  justify-between my-4 mt-[17px] mb-[37px] md:mb-auto md:mt-auto">
            <div className="flex flex-col justify-center items-center">
              <img
                src={react}
                alt="reactjs"
                className="md:w-[70px] w-[35px] h-[35px] md:h-[70px] mb-2"
              />
              <p className="md:text-[18px] text-[14px]">React</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                src={vue}
                alt="Vue"
                className="md:w-[70px] w-[35px] h-[35px] md:h-[70px] mb-2"
              />
              <p className="md:text-[18px] text-[14px]">Vue js</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                src={css}
                alt="TypeScript"
                className="md:w-[70px] w-[35px] h-[35px] md:h-[70px] mb-2"
              />
              <p className="md:text-[18px] text-[14px]">TypeScript</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                src={js}
                alt="js"
                className="md:w-[70px] w-[35px] h-[35px] md:h-[70px] mb-2"
              />
              <p className="md:text-[18px] text-[14px]">JavaScript</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                src={tailwind}
                alt="tailwind"
                className="md:w-[80px] w-[35px] h-[35px] md:h-[70px] mb-2"
              />
              <p className="md:text-[18px] text-[14px]">Tailwind</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                src={html}
                alt="Sass"
                className="md:w-[70px] w-[35px] h-[35px] md:h-[70px] mb-2"
              />
              <p className="md:text-[18px] text-[14px]">Sass</p>
            </div>
          </div>
          <div className="flex md:block justify-center mt-4">
            <button
              onClick={downloadPDF}
              className="md:py-[10px] py-[5px] px-[16px] md:text-[20px] text-[16px] md:border-[3px] border-2 dark:border-[#55E5A4] border-gray-700 font-medium dark:text-[#55E5A4] text-gray-700 mt-4"
            >
              Resume Dawnload
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
