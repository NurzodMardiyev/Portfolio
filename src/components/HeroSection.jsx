import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import logo2 from "../images/logo2.png";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { TbPointFilled } from "react-icons/tb";
import { DarkThemeToggle, Drawer, Flowbite } from "flowbite-react";
import men from "../images/men.png";
import mendark from "../images/mendark.png";
import { GiHamburgerMenu } from "react-icons/gi";
import "../App.css";
import { useEffect, useState } from "react";
import { BsTwitterX } from "react-icons/bs";
export default function HeroSection() {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);
  return (
    <div className="border-b dark:border-b-[#55E5A4] border-b-[#333] ">
      <div className="container  md:max-w-8xl px-5 md:px-auto mx-auto text-gray-800 dark:text-[#C7C7C7]">
        {/* Navbar Section */}
        <div className="flex justify-between items-center py-[24px]">
          <div className="logo flex items-center md:gap-3 gap-2">
            <img
              src={logo}
              alt="Nurzodbek Mardiyev"
              className="md:w-[50px] w-[30px] dark:block hidden "
            />
            <img
              src={logo2}
              alt="Nurzodbek Mardiyev"
              className="md:w-[50px] w-[30px] dark:hidden block  "
            />
            <p className="md:text-[40px]  text-[20px] font-bold logo">NM</p>
          </div>
          <div className="menu md:flex hidden">
            <ul className="flex gap-4 font-semibold">
              <li>
                <Link
                  to="work"
                  className=" px-[30px] py-[8px] dark:hover:text-white dark:hover:bg-inherit hover:text-gray-800 hover:bg-inherit  transition-all duration-150 rounded-md text-white dark:text-gray-800 dark:bg-[#55E5A4] border-2 bg-gray-700 dark:border-[#55E5A4] inline-block"
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  className=" px-[30px] py-[8px] dark:hover:text-white dark:hover:bg-inherit hover:text-gray-800 hover:bg-inherit transition-all duration-150 rounded-md text-white dark:text-gray-800 dark:bg-[#55E5A4] border-2 bg-gray-700 dark:border-[#55E5A4] inline-block"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  className="px-[30px] py-[8px] dark:hover:bg-[#55E5A4]  hover:bg-gray-700 hover:text-white transition-all duration-150 dark:hover:text-gray-800 rounded-md bg-inherit border-2 dark:text-white dark:border-[#55E5A4]  inline-block"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className=" flex darkModeButton items-center gap-2">
            <div className=" flex">
              <Flowbite className="p-0 ">
                <DarkThemeToggle className="text-gray-800 p-1 md:p-3" />
              </Flowbite>
            </div>
            <div className=" flex md:hidden ">
              <button className="p-1 text-[20px]" onClick={showDrawer}>
                <GiHamburgerMenu />
              </button>
            </div>
          </div>
        </div>

        {/* Drawer Menu */}

        <Drawer
          title="Nurzod Mardiyev"
          placement="left"
          closable={false}
          onClose={onClose}
          open={open}
          className="px-6 max-w-[65%] h-[100vh] flex flex-col justify-between pb-10"
        >
          <div>
            <div className="pt-[10px] text-white flex items-start gap-1">
              <img
                src={logo}
                alt="Nurzod Mardiyev"
                className="w-[20px] h-[20px] dark:block hidden"
              />
              <img
                src={logo2}
                alt="Nurzod Mardiyev"
                className="w-[20px] h-[20px] dark:hidden block"
              />
              <p className="dark:text-white text-gray-800 font-medium">
                Nurzod Mardiyev
              </p>
            </div>
            <ul className="flex gap-4 font-semibold flex-col mt-3">
              <li>
                <Link
                  to="/work"
                  className="text-[14px] border-b w-full inline-block py-1.5"
                >
                  Works
                </Link>
              </li>
              <li>
                <Link
                  to="/work"
                  className="text-[14px] border-b w-full inline-block py-1.5"
                >
                  Loyihalar
                </Link>
              </li>
              <li>
                <Link
                  to="/work"
                  className="text-[14px] border-b w-full inline-block py-1.5"
                >
                  Bog'lanish
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex gap-4 text-[14px] ms-auto  dark:text-[#55E5A4] text-white">
            <Link
              to="/"
              className="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-gray-700"
            >
              <FaLinkedinIn />
            </Link>
            <Link
              to="/"
              className="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-gray-700"
            >
              <FaGithub />
            </Link>
            <Link
              to="/"
              className="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-gray-700"
            >
              <BsTwitterX />
            </Link>
            <Link
              to="/"
              className="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-gray-700"
            >
              <FaInstagram />
            </Link>
          </div>
        </Drawer>
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
              Frontend Developer (React && Vue)x
            </h1>
            <p className="md:text-[20px] text-[16px] max-w-[600px] md:my-[20px]  my-[10px] font-500 dark:text-[#A9A9A9] text-gray-700">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequatur et fugit itaque magni! Quo natus quis, sit, facere
              ducimus porro labore nisi culpa odit consequuntur ad error
              corrupti veritatis aperiam deleniti est!
            </p>
            <div className="flex gap-2 items-center">
              <button className="px-[24px] py-[12px] text-[14px] md:text-[16px] dark:bg-[#55E5A4] bg-gray-700 text-white uppercase dark:text-black font-bold gap-3 rounded-xl flex items-center">
                Contact me
                <TbPointFilled />
              </button>
              <Link className="w-[48px] h-[48px] flex items-center justify-center bg-gray-700 dark:text-[#55E5A4] text-white rounded-full text-[20px]">
                <FaLinkedinIn />
              </Link>
              <Link className="w-[48px] h-[48px] flex items-center justify-center bg-gray-700 dark:text-[#55E5A4] text-white rounded-full text-[20px]">
                <FaGithub />
              </Link>
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
