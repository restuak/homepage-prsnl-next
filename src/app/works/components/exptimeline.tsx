"use client";
import { BsPersonWorkspace } from "react-icons/bs";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";

export default function ExpTimeline() {
  return (
    <section className="bg-[#000000] ">
      <div className="h-100% max-w-screen-xl pt-1 mx-auto">
        <div className="container p-5 flex flex-col items-center pt-[5%]">
          <motion.p
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="p-10 pb-5 animate-fade-down font-bold text-2xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl text-zinc-200"
          >
            WORKS
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className=" m-6 mt-0 text-[17px] sm:text-lg md:text-xl lg:text-2xl xl:text-2xl justify-center content-center text-center text-zinc-300"
          >
            I have been working in the field of Geodetic & Geomatics Engineer in
            specialist Geoinformatics for several years. Now, I focusing on
            Full-Stack Development and Web Map Application based Geographic
            Information System (GIS) Development
          </motion.p>
          <div className="h-max w-[100%]">
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--work text-zinc-200"
                contentStyle={{ background: "#52525c", color: "#e4e4e7" }}
                contentArrowStyle={{
                  borderRight: "7px solid  #52525c",
                }}
                date="2025 - Present"
                iconStyle={{ background: "#52525c", color: "#e4e4e7" }}
                icon={<BsPersonWorkspace />}
              >
                <h3 className="vertical-timeline-element-title font-extrabold">
                  FULLSTACK & WEB MAP APP / GIS DEVELOPER
                </h3>
                <h4 className="vertical-timeline-element-subtitle font-light text-zinc-400">
                  Freelance
                </h4>
                <h5 className="vertical-timeline-element-subtitle font-light text-zinc-200">
                  Remote, Global
                </h5>
                <p>
                  Development Fullstack Website and or Web App based Geographic
                  Information System (GIS)
                </p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work text-zinc-200"
                contentStyle={{ background: "#52525c", color: "#e4e4e7" }}
                contentArrowStyle={{
                  borderRight: "7px solid  #52525c",
                }}
                date="2021 - 2024"
                iconStyle={{ background: "#52525c", color: "#e4e4e7" }}
                icon={<BsPersonWorkspace />}
              >
                <h3 className="vertical-timeline-element-title font-bold">
                  PROJECT MANAGEMENT TEAM LEAD
                </h3>
                <h4 className="vertical-timeline-element-subtitle font-light text-zinc-400">
                  Kantor Jasa Surveyor Berlisensi
                </h4>
                <h5 className="vertical-timeline-element-subtitle font-light text-zinc-200">
                  Hybrid, Around Java Island-ID
                </h5>
                <p>
                  Becoming the coordinator for Geographic Information System
                  (GIS) data processing and analyst in various national projects
                </p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work text-zinc-200"
                contentStyle={{ background: "#52525c", color: "#e4e4e7" }}
                contentArrowStyle={{
                  borderRight: "7px solid  #52525c",
                }}
                date="2020 and 2022"
                iconStyle={{ background: "#52525c", color: "#e4e4e7" }}
                icon={<BsPersonWorkspace />}
              >
                <h3 className="vertical-timeline-element-title font-bold uppercase">
                  Geographic Information System Analyst
                </h3>
                <h4 className="vertical-timeline-element-subtitle font-light text-zinc-400">
                  PPIDS UGM
                </h4>
                <h5 className="vertical-timeline-element-subtitle font-light text-zinc-200">
                  On Site, Jakarta & Bali-ID
                </h5>
                <p>Staff surveyor and spatial data processing and analyst</p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </section>
  );
}
