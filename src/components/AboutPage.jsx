import React from "react";

export default function AboutPage() {
  return (
    <div>
      <div className="container  md:max-w-8xl px-5 md:px-auto mx-auto text-gray-800 dark:text-[#C7C7C7] flex md:flex-row">
        <div className="flex ">
          <div className="w-1/2">
            <h2>About Me</h2>
          </div>
          <div className="w-1/2">
            <h3>
              I am a front-end developer based in Sydney. Has Mechanical
              Engineering background.{" "}
            </h3>
            <p>
              I am a front-end developer based in Sydney looking for exciting
              opportunities. Has Mechanical Engineering background. Likes to
              focus on accessibility when developing. Passionate and curious
              about solving problems. Currently, I’m exploring Reactjs, Webflow
              and a bit of Designing. While I am not programming, I enjoy
              playing football, photography and playing Valorant. Learning more
              to improve skill
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
        </div>
      </div>
    </div>
  );
}
