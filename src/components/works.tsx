import "react-vertical-timeline-component/style.min.css";
import { motion } from "motion/react";
import Link from "next/link";
// import FlowingMenu from "./animate/FlowingMenu";
// import { SampleProject } from "./animate/statisworkdepan";
export default function Works() {


  return (
    <section className="p-5 pt-0" id="works">
      <div className="h-100% max-w-screen-xl pt-1 mx-auto">
        <div className="flex flex-col items-center ">
          <motion.p
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="pt-8 pb-7 animate-fade-down font-bold text-2xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl text-zinc-300"
          >
            EXPERIENCE
          </motion.p>

          <motion.span
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="pt-0 pl-9 pr-9 pb-5 lg:ml-52 lg:mr-52 text-justify mx-auto text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-2xl justify-center-safe text-zinc-300 "
          >
            <p className="pb-3 text-justify">
              I have been working in the field of Geoinformatics for several
              years, and{" "}
              <span className="text-justify font-bold  hover:underline">
                Full-Stack Development{" "}
              </span>
              and{" "}
              <span className="text-justify font-bold  hover:underline">
                Website Map Application{" "}
              </span>
              and{" "}
              <span className="text-justify font-bold  hover:underline">
                Web Map Application based Geographic Information System (GIS)
                Development.
              </span>
            </p>
          </motion.span>

          {/* <div
            className="text-2xl"
            style={{ height: "350px", position: "relative" }}
          >
            <FlowingMenu items={SampleProject} />
          </div> */}

          <motion.span
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              href="/works"
              rel="author"
              className="m-3 p-5 font-bold flex flex-auto justify-center items-center bg-zinc-500 rounded-b-2xl text-zinc-200 hover:bg-zinc-600 transition-all ease-in-out duration-300"
            >
              MORE MY WORKS{" "}
            </Link>
          </motion.span>
        </div>
      </div>
    </section>
  );
}
