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
  FaBootstrap,
  FaDatabase
} from "react-icons/fa";
import { 
  SiTypescript, 
  SiTailwindcss, 
  SiExpress, 
  SiMongodb, 
  SiNextdotjs, 
  SiCplusplus,
  SiWebsockets
} from "react-icons/si";
import { DiJava } from "react-icons/di";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
  { name: "React JS", icon: <FaReact className="text-cyan-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "Node JS", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express JS", icon: <SiExpress className="text-gray-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "Next JS", icon: <SiNextdotjs className="text-white" /> },
  { name: "SQL", icon: <FaDatabase className="text-blue-400" /> },
  { name: "Python", icon: <FaPython className="text-blue-500" /> },
  { name: "C++", icon: <SiCplusplus className="text-blue-700" /> },
  { name: "Java", icon: <DiJava className="text-red-500" /> },
  { name: "Web Sockets", icon: <SiWebsockets className="text-white" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
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
              <div className="text-6xl md:text-7xl transition-all duration-300 filter grayscale group-hover:grayscale-0 drop-shadow-[0_0_8px_rgba(255,255,255,0.1)] group-hover:drop-shadow-[0_0_15px_rgba(139,92,246,0.5)]">
                {skill.icon}
              </div>
              <span className="text-lg font-medium text-foreground/70 group-hover:text-white transition-colors">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
