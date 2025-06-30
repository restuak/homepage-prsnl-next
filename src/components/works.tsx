import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { BsPersonWorkspace } from "react-icons/bs";
import { motion } from "motion/react";
import Image from "next/image";
import  Link from "next/link";

export default function Works() {
  return (
    <section className="">
      <div className="flex flex-col items-center ">
        <p className="p-10 animate-fade-down font-bold text-2xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl text-zinc-600 hover:text-zinc-200">
          LITTLE BIT OF ME
        </p>

        <p className="m-6 text-sm sm:text-xl md:text-xl lg:text-2xl xl:text-2xl justify-center content-center text-center text-zinc-200">
          I’m a Geodetic & Geomatics Engineer (Geoinformatician). Lifelong
          Learner.
        </p>
        <p className="m-6 mt-0 text-sm sm:text-xl md:text-xl lg:text-2xl xl:text-2xl justify-center content-center text-center text-zinc-200">
          Now, I focus on my learning in Full-Stack Website Developer for
          support my skill in Geographic Information System (GIS) Developer to
          build Web-based Geographic Information System (GIS). Cheers. 🌻
        </p>
        <p className="m-6 mt-0 text-sm sm:text-xl md:text-xl lg:text-2xl xl:text-2xl justify-center content-center text-center text-zinc-200">
          I have an interest in hobbies such as writing essays on music and
          social topics.
        </p>
        <p className="m-6 mt-0 text-sm sm:text-xl md:text-xl lg:text-2xl xl:text-2xl justify-center content-center text-center text-zinc-200">
          Simply, I am a Geoinformatician with a passion for Web-based GIS and
          Full-Stack Developer and have hobbies in writing essays.
        </p>
      </div>
    </section>
    // <VerticalTimeline>
    //   <VerticalTimelineElement
    //     className="vertical-timeline-element--work"
    //     contentStyle={{
    //       background: "oklch(60.9% 0.126 221.723)",
    //       color: "#fff",
    //     }}
    //     contentArrowStyle={{
    //       borderRight: "7px solid  rgb(33, 150, 243)",
    //     }}
    //     date="2011 - present"
    //     iconStyle={{
    //       background: "oklch(60.9% 0.126 221.723)",
    //       color: "#fff",
    //     }}
    //     icon={<BsPersonWorkspace />}
    //   >
    //     <h3 className="vertical-timeline-element-title">
    //       Creative Director
    //     </h3>
    //     <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
    //     <p>
    //       Creative Direction, User Experience, Visual Design, Project
    //       Management, Team Leading
    //     </p>
    //   </VerticalTimelineElement>
    //   <VerticalTimelineElement
    //     className="vertical-timeline-element--work"
    //     contentStyle={{
    //       background: "oklch(60.9% 0.126 221.723)",
    //       color: "#fff",
    //     }}
    //     contentArrowStyle={{
    //       borderRight: "7px solid  rgb(33, 150, 243)",
    //     }}
    //     date="2011 - present"
    //     iconStyle={{
    //       background: "oklch(60.9% 0.126 221.723)",
    //       color: "#fff",
    //     }}
    //     icon={<BsPersonWorkspace />}
    //   >
    //     <h3 className="vertical-timeline-element-title">
    //       Creative Director
    //     </h3>
    //     <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
    //     <p>
    //       Creative Direction, User Experience, Visual Design, Project
    //       Management, Team Leading
    //     </p>
    //   </VerticalTimelineElement>
    //   <VerticalTimelineElement
    //     className="vertical-timeline-element--work"
    //     contentStyle={{
    //       background: "oklch(60.9% 0.126 221.723)",
    //       color: "#fff",
    //     }}
    //     contentArrowStyle={{
    //       borderRight: "7px solid  rgb(33, 150, 243)",
    //     }}
    //     date="2011 - present"
    //     iconStyle={{
    //       background: "oklch(60.9% 0.126 221.723)",
    //       color: "#fff",
    //     }}
    //     icon={<BsPersonWorkspace />}
    //   >
    //     <h3 className="vertical-timeline-element-title">
    //       Creative Director
    //     </h3>
    //     <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
    //     <p>
    //       Creative Direction, User Experience, Visual Design, Project
    //       Management, Team Leading
    //     </p>
    //   </VerticalTimelineElement>
    //   <VerticalTimelineElement
    //     className="vertical-timeline-element--work"
    //     contentStyle={{
    //       background: "oklch(60.9% 0.126 221.723)",
    //       color: "#fff",
    //     }}
    //     contentArrowStyle={{
    //       borderRight: "7px solid  rgb(33, 150, 243)",
    //     }}
    //     date="2011 - present"
    //     iconStyle={{
    //       background: "oklch(60.9% 0.126 221.723)",
    //       color: "#fff",
    //     }}
    //     icon={<BsPersonWorkspace />}
    //   >
    //     <h3 className="vertical-timeline-element-title">
    //       Creative Director
    //     </h3>
    //     <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
    //     <p>
    //       Creative Direction, User Experience, Visual Design, Project
    //       Management, Team Leading
    //     </p>
    //   </VerticalTimelineElement>
    // </VerticalTimeline>
  );
}
