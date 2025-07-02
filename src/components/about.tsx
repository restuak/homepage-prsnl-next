"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
  return (
    <section className=" p-5 pt-5" id="about">
      <div className="h-100% max-w-screen-xl pt-1 mx-auto">
        <div className="flex flex-col items-center ">
          <motion.span
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="pt-0 pl-9 pr-9 pb-5 lg:ml-52 lg:mr-52 text-justify mx-auto text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-2xl justify-center-safe text-zinc-300 "
          >
            <p className="pb-3 text-justify">
              I’m a Geodetic & Geomatics Engineer, specialist Geoinformatics.
              Now, I focusing on passion{" "}
              <span className="text-justify font-bold  hover:underline">
                Full-Stack Development Website{" "}
              </span>
              and{" "}
              <span className="text-justify font-bold  hover:underline">
                Website Map Application{" "}
              </span>
              based{" "}
              <span className="text-justify font-bold  hover:underline">
                Geographic Information System (GIS) Development.
              </span>
            </p>
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              href="/about"
              rel="Closer to Me"
              className="m-3 p-5 font-bold flex flex-auto justify-center items-center bg-zinc-500 rounded-b-2xl text-zinc-200 hover:bg-zinc-600 transition-all ease-in-out duration-300"
            >
              CLOSER TO ME{" "}
            </Link>
          </motion.span>
        </div>
      </div>
    </section>
  );
}
