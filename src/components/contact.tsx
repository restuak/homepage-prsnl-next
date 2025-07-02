"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import ScrollUp from "@/components/animate/scrollup";

export default function Contact() {
  return (
    <main id="contact" className="">
      <div className="flex flex-col items-center  ">
        <div
          className="hero min-h-screen "
          style={
            {
              // backgroundImage:
              //   "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
            }
          }
        >
          <div className="hero-overlay "></div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0 }}
            className="hero-content text-neutral-content text-center"
          >
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">LET'S CONNECT</h1>
              <p className="mb-5">GET IN TOUCH HERE GUYS!</p>
              <div className="flex flex-row justify-center items-center m-5 pt-10">
                <a
                  href="https://github.com/restuak"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Github Restu Aka"
                  className="m-3 flex justify-center items-center bg-zinc-500 w-20 h-20 rounded-full text-zinc-200 hover:bg-zinc-600 transition-all ease-in-out duration-300"
                >
                  <FaGithub className="w-14 h-14 zinc-200" />
                </a>
                <a
                  href="https://instagram.com/restu.aka"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Restu Aka"
                  className="m-3 flex justify-center items-center bg-zinc-500 w-20 h-20 rounded-full text-zinc-200 hover:bg-zinc-600 transition-all ease-in-out duration-300"
                >
                  <FaInstagram className="w-14 h-14 zinc-200" />
                </a>
                <a
                  href="https://www.linkedin.com/in/restuak/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Restu Aka"
                  className="m-3 flex justify-center items-center bg-zinc-500 w-20 h-20 rounded-full text-zinc-200 hover:bg-zinc-600 transition-all ease-in-out duration-300"
                >
                  <FaLinkedin className="w-14 h-14 zinc-200" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <ScrollUp />
    </main>
  );
}
