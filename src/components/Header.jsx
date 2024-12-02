import React, { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";

import { Button, Modal } from "antd";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BiLogoTelegram } from "react-icons/bi";

import men from "../images/men.webp";
import mendark from "../images/mendark.webp";
import { TbPointFilled } from "react-icons/tb";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isModalOpen]);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="border-b dark:border-b-[#55E5A4] border-b-[#333] ">
      <div className="container  md:max-w-8xl px-5 md:px-auto mx-auto text-gray-800 dark:text-[#C7C7C7]">
        <Modal
          title="Quyidagilar orqali bog'laning"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={false}
          // className="dark:bg-gray-800"
        >
          <div className="flex flex-col gap-3">
            <RouterLink
              to="tel:+998883921383"
              className="modalContact px-10 py-4 md:text-[20px] text-[14px] font-semibold gap-4 justify-center flex items-center border border-[#55E5A4] dark:bg-gray-700  dark:text-white rounded-xl w-full"
            >
              <FaPhoneAlt className="md:text-[20px]" />
              <p>+998 88 392 13 83</p>
            </RouterLink>

            <RouterLink
              to="https://mail.google.com/mail/u/0/#inbox"
              className="modalContact px-10 py-4 md:text-[20px] text-[14px] font-semibold gap-4 justify-center flex items-center border border-[#55E5A4] dark:bg-gray-700  dark:text-white rounded-xl w-full"
            >
              <MdEmail className="md:text-[25px] text-[16px]" />
              <p>nurzodbekmardiyev1306@gmail</p>
            </RouterLink>

            <RouterLink
              to="https://t.me/nurzodbekmardiyev"
              className="modalContact px-10 py-4 md:text-[20px] text-[14px] font-semibold gap-4 justify-center flex items-center border border-[#55E5A4] dark:bg-gray-700  dark:text-white rounded-xl w-full"
            >
              <BiLogoTelegram className="md:text-[25px]" />
              <p>Nurzod Mardiyev</p>
            </RouterLink>
          </div>
        </Modal>
        {/* Header Section */}
        <div className="header flex md:flex-row flex-col justify-between items-center dark:text-[#fff] text-gray-800 pt-[30px] pb-[80px] ">
          <div className="info">
            <span
              className="text-[20px] text-gray-[800]"
              style={{ fontWeight: 700 }}
            >
              Nurzod Mardiyev
            </span>
            <h1 className="md:text-[42px] text-[26px] hero_title  max-w-[900px] dark:text-[#55E5A4] text-gray-800">
              Frontend Developer (React && Vue)
            </h1>
            <p className="md:text-[20px] text-[16px] max-w-[600px] md:mb-[20px]  my-[10px] font-500 dark:text-[#A9A9A9] text-gray-700">
              Men Vue, React, Ant Design va Tailwind CSS bilan ishlovchi
              frontend dasturchiman. Intuitiv va moslashuvchan foydalanuvchi
              interfeyslarini yarataman. Tajribam samarali kodlash va dizaynni
              optimallashtirishni o'z ichiga oladi.
            </p>
            <div className="flex gap-2 items-center mt-10">
              <button
                onClick={showModal}
                className="px-[24px] py-[12px] text-[14px] md:text-[16px] dark:bg-[#55E5A4] bg-gray-700 text-white uppercase dark:text-black font-bold gap-3 rounded-xl flex items-center"
              >
                Menga bog'laning
                <TbPointFilled />
              </button>
              <RouterLink
                to="https://www.linkedin.com/in/nurzod-mardiyev-35aaaa235/"
                target="_blank"
                className="w-[48px] h-[48px] flex items-center justify-center bg-gray-700 dark:text-[#55E5A4] text-white rounded-full text-[20px]"
              >
                <FaLinkedinIn />
              </RouterLink>
              <RouterLink
                to="https://github.com/NurzodMardiyev"
                target="_blank"
                className="w-[48px] h-[48px] flex items-center justify-center bg-gray-700 dark:text-[#55E5A4] text-white rounded-full text-[20px]"
              >
                <FaGithub />
              </RouterLink>
            </div>
          </div>
          <div className=" md:w-1/2  w-full flex items-end justify-center md:p-20 mt-[60px] md:mt-auto read-only:display">
            <img
              src={men}
              alt="Nurzodbek Mardiyev"
              className={`dark:block hidden w-full `}
            />
            <img
              src={mendark}
              alt="Nurzodbek Mardiyev"
              className={`block dark:hidden w-full `}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
