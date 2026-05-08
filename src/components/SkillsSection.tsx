"use client";

import { motion } from "framer-motion";
import { Terminal, Cpu, Wrench } from "lucide-react";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Terminal className="text-primary-400 mb-4" size={32} />,
      skills: ["Python", "TypeScript", "JavaScript", "C++", "C", "HTML", "CSS"],
    },
    {
      title: "Frameworks & Tech",
      icon: <Cpu className="text-secondary-400 mb-4" size={32} />,
      skills: [
        "React.js",
        "Next.js",
        "Node.js",
        "Express.js",
        "Django",
        "MongoDB",
        "MySQL",
        "Firebase",
        "Tailwind CSS",
        "Docker",
        "Git/GitHub",
      ],
    },
    {
      title: "Libraries & Tools",
      icon: <Wrench className="text-primary-400 mb-4" size={32} />,
      skills: ["Pandas", "NumPy", "Matplotlib", "Postman", "VS Code"],
    },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="glow-accent top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass-card p-8 rounded-2xl relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                {category.icon}
                <h3 className="text-2xl font-semibold mb-6">{category.title}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-4 py-2 text-sm rounded-full bg-white/5 border border-white/10 text-foreground/80 hover:text-white hover:border-primary-500/50 hover:bg-primary-500/10 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
