import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";

import "../App.css";

export default function ContactMe() {
  const handleValue = (value) => {
    console.log(value);
  };
  return (
    <div className="pb-[30px] border-b dark:border-b-[#55E5A4] border-b-gray-700">
      <div className="container  md:max-w-8xl px-5 md:px-auto mx-auto text-gray-800 dark:text-[#C7C7C7] flex justify-between items-center py-20 gap-20">
        <div className="flex md:flex-row flex-col w-full gap-10 contact">
          <div className="md:w-1/2 w-full">
            <h3
              className="md:text-[42px] text-[24px] dark:text-white text-gray-800 mb-5"
              style={{ fontWeight: 700 }}
            >
              Menga bog'laning
            </h3>
            <p className="md;text-[20px] text-[16px] mb-3">
              Emailimga Salom deb yozing{" "}
              <Link to="/" className="border-b border-b-[#55E5A4]">
                nurzodbekmardiyev1306@gmail.com
              </Link>
            </p>
            <p className="md:text-[20px] text-[16px] mb-3">
              Ko'proq ma'lumot olmoqchi bo'lsangiz{" "}
              <button className="border-b border-b-[#55E5A4]">Resume</button>
            </p>
            <div className="flex gap-4 md:text-[22px] text-[16px] mt-8 dark:text-[#55E5A4] text-white">
              <Link
                to="/"
                className="md:w-[50px] w-[40px] md:h-[50px] h-[40px] rounded-full flex justify-center items-center bg-gray-700"
              >
                <FaLinkedinIn />
              </Link>
              <Link
                to="/"
                className="md:w-[50px] w-[40px] md:h-[50px] h-[40px] rounded-full flex justify-center items-center bg-gray-700"
              >
                <FaGithub />
              </Link>
              <Link
                to="/"
                className="md:w-[50px] w-[40px] md:h-[50px] h-[40px] rounded-full flex justify-center items-center bg-gray-700"
              >
                <BsTwitterX />
              </Link>
              <Link
                to="/"
                className="md:w-[50px] w-[40px] md:h-[50px] h-[40px] rounded-full flex justify-center items-center bg-gray-700"
              >
                <FaInstagram />
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 w-full">
            <Form onFinish={handleValue}>
              <Form.Item name="name">
                <input
                  type="text"
                  className="dark:bg-gray-700 dark:hover:bg-gray-700  dark:text-white border-none w-full px-3 py-3 focus:outline-none active:outline-none"
                  placeholder="Ismingiz"
                />
              </Form.Item>
              <Form.Item name="email">
                <input
                  type="email"
                  className="dark:bg-gray-700 dark:hover:bg-gray-700  dark:text-white border-none w-full px-3 py-3 focus:outline-none active:outline-none"
                  placeholder="Emailingiz"
                />
              </Form.Item>
              <Form.Item name="message">
                <textarea
                  className="dark:bg-gray-700 dark:hover:bg-gray-700  dark:text-white border-none py-3 resize-none  w-full outline-none focus:border-none focus-within:border-none active:border-none active:outline-none ring-0 focus:ring-1 focus:ring-[#90a4ff] dark:focus:ring-0"
                  placeholder="Xabaringiz"
                  rows={5}
                ></textarea>
              </Form.Item>
              <button
                type="submit"
                className="float-end px-10 py-3 font-medium dark:bg-[#55E5A4] bg-gray-700 text-white dark:text-gray-800 hover:bg-[#55E5A4]"
              >
                Yuborish
              </button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
