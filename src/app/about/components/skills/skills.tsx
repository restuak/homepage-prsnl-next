"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, ReactNode } from "react";
import { SkillAndTech } from "./staticskill";
// import { techList } from "./static";

type Web = {
  title: string;
  icon: React.ComponentType<{ className: string }>;
  desc: string;
  tech: string[];
};
type Webgis = {
  title: string;
  icon: React.ComponentType<{ className: string }>;
  desc: string;
  tech: string[];
};

interface SkillAndTech {
  web: Web;
  webgis: Webgis;
}

type Skill = {
  desc: ReactNode;
  title: string;
  icon: React.ComponentType<{ className: string }>;
  tech: string[];
};

function SkillCard({
  skill,
  isSelected,
  onClick,
}: {
  skill: Skill;
  isSelected: boolean;
  onClick: () => void;
}) {
  const Icon = skill.icon;

  return (
    <motion.div
      onClick={onClick}
      className={`relative text-zinc-200 justify-center cursor-pointer group p-4 rounded-b-3xl backdrop-blur-lg border transition-all duration-200 ${
        isSelected
          ? " bg-zinc-800 border-zinc-300 border-2 shadow-lg"
          : " bg-zinc-600 border-zinc-900 hover:bg-zinc-300/20 hover:border-zinc-600"
      }`}
      whileHover={{
        scale: 1.05,
        rotateY: 5,
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
    >
      {!isSelected && (
        <div className="absolute inset-0 rounded-2xl transition-opacity duration-200 opacity-0 group-hover:opacity-50 bg-gradient-to-r from-zinc-600/20 to-zinc-600/40 blur-xl" />
      )}

      <div className="relative z-10 flex flex-col items-center text-center space-y-4">
        <div
          className={`p-4 rounded-xl transition-all duration-300 ${
            isSelected
              ? "bg-zinc-600/80"
              : "bg-zinc-600/30 group-hover:bg-zinc-600/50"
          }`}
        >
          <Icon className="w-8 h-8 text-zinc-300" />
        </div>
        <div>
          <h3 className="font-semibold text-zinc-200 text-lg mb-2">
            {skill.title}
          </h3>
          <p className="text-zinc-200 text-sm leading-relaxed">{skill.desc}</p>
        </div>
      </div>
    </motion.div>
  );
}

function SkillDetails({ selectedSkill }: { selectedSkill: Skill | null }) {
  if (!selectedSkill) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="mt-12 space-y-8"
    >
      {/* TOOLS AND TECH */}
      <motion.div
        className="pt-0 p-8"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h3 className="text-xl font-semibold text-zinc-200 mb-3 text-center">
          TOOLS & TECH
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          {selectedSkill.tech.map((lang: string, index: number) => (
            <motion.span
              key={lang}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="px-4 py-2  bg-zinc-200 
									 border border-zinc-200/60 rounded-b-2xl text-zinc-900 font-medium
									 backdrop-blur-sm hover:scale-105 transition-transform cursor-default
									 hover:bg-zinc-600 hover:from-zinc-300 hover:text-zinc-200"
            >
              {lang}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<"web" | "webgis">(
    "web"
  );

  return (
    <div className="relative">
      <div className="mx-auto container px-16 py-20 pb-5">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 mb-5"
        >
          <h2 className="text-2xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-zinc-300">
            SKILLS
          </h2>
          <p className="text-zinc-500  mx-auto p-3 text-lg max-w-xl text-justify">
            My skills in Fullstack Web Development and Web App GIS Development encompass a
            broad spectrum of technologies, frameworks, and tools. Dive into the
            categories below to explore my expertise in detail.
          </p>
        </motion.div>

        {/* Skill Categories Grid */}
        <div className="flex justify-center items-center gap-6 flex-wrap mb-8">
          {Object.entries(SkillAndTech).map(([key, skill], index) => {
            const transformedSkill: Skill = {
              title: skill.title,
              icon: skill.icon,
              desc: skill.desc,
              tech: skill.tech,
            };

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <SkillCard
                  skill={transformedSkill}
                  isSelected={selectedCategory === key}
                  onClick={() => setSelectedCategory(key as "web" | "webgis")}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Skill Details */}
        <AnimatePresence mode="wait">
          <SkillDetails
            selectedSkill={
              SkillAndTech[selectedCategory]
                ? {
                    title: SkillAndTech[selectedCategory].title,
                    icon: SkillAndTech[selectedCategory].icon,
                    desc: SkillAndTech[selectedCategory].desc,
                    tech: SkillAndTech[selectedCategory].tech,
                  }
                : null
            }
          />
        </AnimatePresence>
      </div>
    </div>
  );
}
