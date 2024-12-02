import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import logo from "../images/logo.png";
import logo2 from "../images/logo2.png";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { TbPointFilled } from "react-icons/tb";
import { DarkThemeToggle, Drawer, Flowbite } from "flowbite-react";
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
    <div className="dark:border-b-[#55E5A4] border-b-[#333] ">
      <div className="container  md:max-w-8xl px-5 md:px-auto mx-auto text-gray-800 dark:text-[#C7C7C7]">
        {/* Navbar Section */}
        <div className="flex justify-between items-center py-[24px]">
          <RouterLink to="/" className="logo flex items-center md:gap-3 gap-2">
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
          </RouterLink>
          <div className="menu md:flex hidden">
            <ul className="flex gap-4 font-semibold">
              <li>
                <Link
                  to="work"
                  smooth={true}
                  duration={1000}
                  className="cursor-pointer  px-[30px] py-[8px] dark:hover:text-white dark:hover:bg-inherit hover:text-gray-800 hover:bg-inherit  transition-all duration-150 rounded-md text-white dark:text-gray-800 dark:bg-[#55E5A4] border-2 bg-gray-700 dark:border-[#55E5A4] inline-block"
                >
                  Loyihalar
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  smooth={true}
                  duration={1000}
                  className="cursor-pointer  px-[30px] py-[8px] dark:hover:text-white dark:hover:bg-inherit hover:text-gray-800 hover:bg-inherit transition-all duration-150 rounded-md text-white dark:text-gray-800 dark:bg-[#55E5A4] border-2 bg-gray-700 dark:border-[#55E5A4] inline-block"
                >
                  Men Haqimda
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  smooth={true}
                  duration={1000}
                  className="cursor-pointer px-[30px] py-[8px] dark:hover:bg-[#55E5A4]  hover:bg-gray-700 hover:text-white transition-all duration-150 dark:hover:text-gray-800 rounded-md bg-inherit border-2 dark:text-white dark:border-[#55E5A4]  inline-block"
                >
                  Bog'lanish
                </Link>
              </li>
            </ul>
          </div>
          <div className=" flex darkModeButton items-center gap-2">
            <div className=" flex">
              <Flowbite className="p-0 ">
                <DarkThemeToggle className="text-gray-800 p-1 md:p-3 text-[20px]" />
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
                  to="work"
                  smooth={true}
                  duration={1000}
                  onClick={onClose}
                  className="text-[14px] border-b w-full inline-block py-1.5"
                >
                  Loyihalar
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  smooth={true}
                  duration={1000}
                  onClick={onClose}
                  className="text-[14px] border-b w-full inline-block py-1.5"
                >
                  Men Haqimda
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  smooth={true}
                  duration={1000}
                  onClick={onClose}
                  className="text-[14px] border-b w-full inline-block py-1.5"
                >
                  Bog'lanish
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex gap-4 text-[14px] ms-auto  dark:text-[#55E5A4] text-white">
            <RouterLink
              to="https://www.linkedin.com/in/nurzod-mardiyev-35aaaa235/"
              className="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-gray-700"
            >
              <FaLinkedinIn />
            </RouterLink>
            <Link
              to="https://github.com/NurzodMardiyev"
              className="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-gray-700"
            >
              <FaGithub />
            </Link>
            <Link
              to="https://x.com/MardiyevN"
              className="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-gray-700"
            >
              <BsTwitterX />
            </Link>
            <Link
              to="https://www.instagram.com/nurzodbekmardiyev/"
              className="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-gray-700"
            >
              <FaInstagram />
            </Link>
          </div>
        </Drawer>
      </div>
    </div>
  );
}
