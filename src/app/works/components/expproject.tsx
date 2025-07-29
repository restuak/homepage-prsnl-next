"use client";

import ScrollUp from "@/components/scrollup";
import FooterIn from "@/components/footerin";
import { projectDetail } from "../../../lib/projectstatic";
import ProjectCardCard from "./cardproject";
import { motion } from "framer-motion";

export default function ExpProject() {
  return (
    <main className="bg-black" id="project">
      <div className="h-100% max-w-screen-xl pt-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container p-5 flex flex-col items-center pt-[5%]"
          >
          <p className="p-5 pb-3 animate-fade-down font-bold text-2xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl text-zinc-200">
            PROJECTS
          </p>
          <p className=" m-6 mt-0 mb-0 text-[17px] sm:text-lg md:text-xl lg:text-2xl xl:text-2xl justify-center content-center text-center text-zinc-300">
            These are some projects that I have worked on, most of which are Web
            App Map based Geographic Information System (GIS)
          </p>
        </motion.div>

        <div className="container pt-0 pb-20 flex flex-wrap justify-center gap-10">
          <div className="flex flex-wrap gap-10 justify-center py-5">
            {projectDetail.map((card) => (
              <ProjectCardCard key={card.id} {...card} />
            ))}
          </div>
        </div>

        <FooterIn />
      </div>
      <ScrollUp />
    </main>
  );
}
