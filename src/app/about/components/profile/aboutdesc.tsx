"use client"

import { motion } from "framer-motion";
export default function AboutDesc() {
  return (
    <section className="bg-[#000000]">
      <div className="h-100% max-w-screen-xl pt-1 mx-auto">
        <div className="flex flex-col items-center ">
          <motion.p
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="pt-8 pb-5 animate-fade-down font-bold text-2xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl text-zinc-300"
          >
            LITTLE BIT OF ME
          </motion.p>

          <motion.span
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="pt-0 pl-9 pr-9 pb-0 mx-auto text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-2xl justify-center-safe text-zinc-500 "
          >
            <p className="pb-3 text-justify lg:text-center xl:text-center">
              I’m a Geodetic & Geomatics Engineer, specialist Geoinformatics.
              Lifelong Learner.
            </p>
            <p className="pb-3 text-justify lg:text-center xl:text-center">
              Now, I focusing on passion{" "}
              <span className="font-bold text-zinc-400 hover:underline">
                Full-Stack Development Website{" "}
              </span>
              and{" "}
              <span className="font-bold text-zinc-400 hover:underline">
                Website Map Application{" "}
              </span>
              based{" "}
              <span className="font-bold text-zinc-400 hover:underline">
                Geographic Information System (GIS) Development.
              </span>
            </p>
            <p className="pb-3 text-justify lg:text-center xl:text-center">
              I have an interest in hobbies such as{" "}
              <span className="font-bold text-zinc-400 hover:underline">
                writing essays on music and social topics.
              </span>
            </p>
            <p className="pb-3 text-justify lg:text-center xl:text-center ">
              Simply, I am a{" "}
              <span className="font-bold text-zinc-400 hover:underline">
                Geoinformatician{" "}
              </span>
              with a passion for{" "}
              <span className="font-extrabold text-zinc-400 hover:underline ">
                Web-GIS and Full-Stack Development and have hobbies in
                writing.
              </span>
            </p>
          </motion.span>
        </div>
      </div>
    </section>
  );
}
