"use client";
import { useState } from "react";
import Link from "next/link";
// import { motion } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className="animate-fade-down animate-once animate-delay-1200 animate-ease-out flex justify-between items-center px-6 md:px-10 xl:px-20 py-4 md:py-6 fixed w-full backdrop-blur-md z-50">
      <div className="cursor-pointer">
        <span className="text-xl md:text-2xl font-semibold tracking-wide">
          <div className="">
            <span className="text-zinc-600 hover:text-zinc-300 transition-all duration-200 ease-in-out cursor-pointer">
              <Link href="/">RESTUAKA</Link>
            </span>
          </div>
        </span>
      </div>

      <div className="flex gap-4 md:gap-10 items-center text-[15px] md:text-2xl font-light tracking-wide ">
        <span className="text-zinc-600 hover:text-zinc-300 transition-all duration-200 ease-in-out cursor-pointer">
          <Link href="/about">ABOUT</Link>
        </span>
        <span className=" text-zinc-600 hover:text-zinc-300  transition-all duration-200 ease-in-out cursor-pointer">
          <Link href="/works">WORKS</Link>
        </span>
        {/* <span className="text-zinc-600 hover:text-zinc-300 transition-all duration-200 ease-in-out cursor-pointer">
          <Link href={"#contact"}>CONTACT</Link>
        </span> */}
      </div>
      {/* 
      <div className="flex flex-col gap-[6px] md:hidden" onClick={toggleMenu}>
        <span
          className={`block h-[2px] w-6 bg-zinc-600 ${
            isMenuOpen ? "-rotate-45 origin-center translate-y-[8px]" : ""
          } transition-all duration-200 ease-in-out`}
        ></span>
        <span
          className={`block h-[2px] bg-zinc-600 ${
            isMenuOpen ? "w-0" : "w-6"
          } transition-all duration-200`}
        ></span>
        <span
          className={`block h-[2px] w-6 bg-zinc-600 ${
            isMenuOpen ? "rotate-45 origin-center -translate-y-[8px]" : ""
          } transition-all duration-200`}
        ></span>
      </div> */}
      {/* 
      <div
        className={`flex md:hidden flex-col gap-14 text-center absolute right-[0px] left-[0px] top-[-750px] justify-center align-text-center bg-zinc-200 pb-[140px] pt-[140px]  text-black  ${
          isMenuOpen ? "-translate-y-[-824px] " : ""
        } transition-all duration-400 ease-in-out`}
      >
        <span className="text-5xl font-bold tracking-wide text-zinc-600 hover:text-zinc-900 transition-all duration-200 ease-in-out cursor-pointer">
          <Link href="/">HOME</Link>
        </span>
        <span className="text-3xl font-semibold tracking-wide text-zinc-500 hover:text-zinc-900 transition-all duration-200 ease-in-out cursor-pointer">
          <Link href="/about">ABOUT</Link>
        </span>
        <span className="text-3xl font-semibold tracking-wide text-zinc-500 hover:text-zinc-900 transition-all duration-200 ease-in-out cursor-pointer">
          <Link href="/works">WORKS</Link>
        </span>
      </div> */}
    </section>
  );
}
