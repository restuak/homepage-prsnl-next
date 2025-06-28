import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="animate-fade-down animate-once animate-delay-2000 animate-ease-out flex justify-between items-center px-6 md:px-10 xl:px-20 py-4 md:py-6 fixed w-full bg-slate-950/50 backdrop-blur-md z-50">
      <div className="cursor-pointer">
        <span className="text-xl md:text-2xl font-semibold tracking-wide">
          <div className="text-white ">
            <span className="animate-bounce">^_^</span>
          </div>
        </span>
      </div>

      <div className=" hidden md:flex items-center gap-10 text-lg font-semibold tracking-wide">
        <span className="hover:text-yellow-400 transition-all duration-200 ease-in-out cursor-pointer">
          About
        </span>
        <span className="hover:text-yellow-400 transition-all duration-200 ease-in-out cursor-pointer">
          Experience
        </span>
        <span className="hover:text-yellow-400 transition-all duration-200 ease-in-out cursor-pointer">
          Skill
        </span>
        <span className="hover:text-yellow-400 transition-all duration-200 ease-in-out cursor-pointer">
          Contact
        </span>
      </div>

      <div className="flex flex-col gap-[6px] md:hidden" onClick={toggleMenu}>
        <span
          className={`block h-[2px] w-6 bg-white ${
            isMenuOpen ? "-rotate-45 origin-center translate-y-[8px]" : ""
          } transition-all duration-200 ease-in-out`}
        ></span>
        <span
          className={`block h-[2px] bg-white ${
            isMenuOpen ? "w-0" : "w-6"
          } transition-all duration-200`}
        ></span>
        <span
          className={`block h-[2px] w-6 bg-white ${
            isMenuOpen ? "rotate-45 origin-center -translate-y-[8px]" : ""
          } transition-all duration-200`}
        ></span>
      </div>

      <div
        className={`flex md:hidden container flex-col gap-4 text-center absolute top-[-300px] justify-center align-text-center bg-white p-10 text-black rounded-lg ${
          isMenuOpen ? "-translate-y-[-424px]" : ""
        } transition-all duration-100 ease-in-out`}
      >
        <span className="text-lg font-semibold tracking-wide hover:text-yellow-400 transition-all duration-200 ease-in-out cursor-pointer">
          About
        </span>
        <span className="text-lg font-semibold tracking-wide hover:text-yellow-400 transition-all duration-200 ease-in-out cursor-pointer">
          Experience
        </span>
        <span className="text-lg font-semibold tracking-wide hover:text-yellow-400 transition-all duration-200 ease-in-out cursor-pointer">
          Skill
        </span>
        <span className="text-lg font-semibold tracking-wide hover:text-yellow-400 transition-all duration-200 ease-in-out cursor-pointer">
          Contact
        </span>
      </div>
    </div>
  );
}
