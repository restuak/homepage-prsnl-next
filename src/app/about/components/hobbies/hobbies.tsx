"use client";

import { motion } from "framer-motion";
import { Essays } from "@/lib/statichobbies";
import ScrollUp from "@/components/scrollup";
import FooterIn from "@/components/footerin";
export default function Hobbies() {
  return (
    <main className="bg-[#000000]">
      <div className="h-100% max-w-screen-xl pt-1 mx-auto">
        <div className="flex flex-col items-center ">
          <motion.p
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="pt-8 pb-5 animate-fade-down font-bold text-2xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl text-zinc-300"
          >
            HOBBIES
          </motion.p>

          <motion.span
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="pt-0 pl-9 pr-9 pb-0 mx-auto text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-2xl justify-center-safe text-zinc-400 "
          >
            <p className="pb-10 text-justify lg:text-center xl:text-center">
              I have many hobbies, but I am particularly passionate about two
              activities:{" "}
              <span className="font-bold text-zinc-300 hover:underline">
                cycling and writing essays.{" "}
              </span>
              While I am unsure how to showcase my daily cycling activities on
              this website,{" "}
              <span className="line-through text-zinc-400 hover:underline">
                fetching Strava API? Ha ha, maybe next time{" "}
              </span>
              . In this section, I will share some of my written works, thats{" "}
              <span className="font-bold text-zinc-300 hover:underline">
                essays about music and occasionally social topics, published in
                several online media.{" "}
              </span>
            </p>
          </motion.span>

          <div className="pt-0 pl-9 pr-9 pb-[7%] mx-auto text-[17px] sm:text-lg md:text-xl lg:text-2xl xl:text-2xl justify-center-safe text-zinc-200">
            {Object.entries(Essays).map(([source, data], index) => (
              <div
                key={source}
                className="collapse collapse-arrow bg-zinc-700 border border-base-300 mb-4"
              >
                <input
                  id="accordionessay"
                  type="radio"
                  name="my-accordion-2"
                  defaultChecked={index === 0}
                />

                <label
                  htmlFor="aaccordionessay"
                  className="collapse-title font-semibold uppercase"
                >
                  {source}
                </label>

                <div className="collapse-content text-sm">
                  <table className="table-auto w-full border border-zinc-300">
                    <thead>
                      <tr className="bg-zinc-400"></tr>
                    </thead>
                    <tbody>
                      {data.title.map((title, idx) => (
                        <tr key={idx} className="bg-zinc-900 hover:bg-zinc-700">
                          <td className="border px-4 py-2">
                            <a
                              href={data.link[idx]}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-zinc-300 hover:underline hover:text-zinc-400"
                            >
                              {title}
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </div>
        <FooterIn />
      </div>
      <ScrollUp />
    </main>
  );
}
