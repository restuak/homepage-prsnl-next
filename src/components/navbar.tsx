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
    <section className="animate-fade-down animate-once animate-delay-1000 animate-ease-out flex justify-between items-center px-6 md:px-10 xl:px-20 py-4 md:py-6 fixed w-full backdrop-blur-md z-50">
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
            </div>
      
    </section>
  );
}
