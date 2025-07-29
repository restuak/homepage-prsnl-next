import { SiArcgis } from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiLeaflet,
  SiMapbox,
  SiGoogleearthengine,
  SiPython,
  SiMysql,
  SiPostgresql,
} from "react-icons/si";

export const SkillAndTech = {
  web: {
    title: "FULLSTACK WEB DEVELOPMENT",
    icon: FaLaptopCode,
    desc: "Build Modern, Responsive Website Applications in General",
    tech: [
      { icon: FaHtml5, name: "HTML" },
      { icon: FaCss3Alt, name: "CSS" },
      { icon: FaJs, name: "JavaScript" },
      { icon: SiTypescript, name: "TypeScript" },
      { icon: FaReact, name: "ReactJS" },
      { icon: SiNextdotjs, name: "NextJS" },
      { icon: SiTailwindcss, name: "Tailwind" },
    ],
  },
  webgis: {
    title: "WEBSITE APP GIS DEVELOPMENT",
    icon: SiArcgis,
    desc: "Build Website App based Geography Information System",
    tech: [
      { icon: SiArcgis, name: "ArcGIS Ol" },
      { icon: SiLeaflet, name: "Leaflet" },
      { icon: SiMapbox, name: "MapBox" },
      { icon: SiGoogleearthengine, name: "GE Engine" },
      { icon: SiPython, name: "Python" },
      { icon: SiMysql, name: "MySQL" },
      { icon: SiPostgresql, name: "PostgreSQL" },
    ],
  },
};
