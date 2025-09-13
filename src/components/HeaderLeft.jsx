import React from "react";
import { BiRightArrowAlt, BiHome, BiCode, BiMailSend } from "react-icons/bi";

const HeaderLeft = () => {
  return (
    <div className="md:flex-[1]">
      <div className="min-h-screen top-0 hidden md:sticky md:flex items-center justify-center bg-[#1A273A] text-white">
        <ul className="flex flex-col gap-10">
          {["Home", "Webseiten", "Kontakt"].map((item) => (
            <li
              key={item}
              className="flex items-center justify-start cursor-pointer font-medium transition-all duration-200 group sm:text-lg md:text-xl xl:text-3xl hover:text-[#C24D2C]"
            >
              <BiRightArrowAlt className="text-4xl -translate-x-5 opacity-0 transform transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0" />

              <a
                href={`#${item}`}
                className="transition-all duration-200 hover:translate-x-3"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="fixed left-0 right-0 top-0 z-10 flex justify-evenly bg-[#1A273A] p-5 text-white md:hidden">
        <a
          href="#Home"
          className="flex flex-col items-center justify-center hover:text-[#C24D2C]"
        >
          <BiHome className="text-2xl" />
          <span className="text-xs hover:text-[#C24D2C]">Home</span>
        </a>
        <a
          href="#Webseiten"
          className="flex flex-col items-center justify-center hover:text-[#C24D2C]"
        >
          <BiCode className="text-2xl" />
          <span className="text-xs">Webseiten</span>
        </a>

        <a
          href="#Kontakt"
          className="flex flex-col items-center justify-center hover:text-[#C24D2C]"
        >
          <BiMailSend className="text-2xl" />
          <span className="text-xs">Kontakt</span>
        </a>
      </div>
    </div>
  );
};

export default HeaderLeft;
