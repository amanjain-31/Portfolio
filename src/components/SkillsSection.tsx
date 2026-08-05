"use client";

import { motion } from "framer-motion";
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJsSquare, 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaGitAlt, 
  FaDatabase
} from "react-icons/fa";
import { 
  SiTypescript, 
  SiTailwindcss, 
  SiExpress, 
  SiMongodb, 
  SiNextdotjs, 
  SiCplusplus
} from "react-icons/si";
import { DiJava } from "react-icons/di";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-[#E34F26]" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-[#1572B6]" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-[#F7DF1E]" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
  { name: "React JS", icon: <FaReact className="text-[#61DAFB]" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
  { name: "Node JS", icon: <FaNodeJs className="text-[#339933]" /> },
  { name: "Express JS", icon: <SiExpress className="text-white" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
  { name: "Next JS", icon: <SiNextdotjs className="text-white" /> },
  { name: "SQL", icon: <FaDatabase className="text-[#4479A1]" /> },
  { name: "Python", icon: <FaPython className="text-[#3776AB]" /> },
  { name: "C++", icon: <SiCplusplus className="text-[#00599C]" /> },
  { name: "Java", icon: <DiJava className="text-[#ED8B00]" /> },
  { name: "Git", icon: <FaGitAlt className="text-[#F05032]" /> },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#0f1115]">
      <div className="glow-accent top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.05,
                type: "spring",
                stiffness: 100 
              }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="flex flex-col items-center gap-4 group"
            >
              <div className="text-6xl md:text-7xl transition-all duration-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.15)] group-hover:drop-shadow-[0_0_20px_rgba(139,92,246,0.6)]">
                {skill.icon}
              </div>
              <span className="text-lg font-medium text-foreground/80 group-hover:text-white transition-colors">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

