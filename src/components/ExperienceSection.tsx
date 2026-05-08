"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      role: "Full-Stack Developer",
      company: "GSSoC'25",
      type: "Open Source Contributor",
      duration: "2025",
      points: [
        "Built responsive UIs with React.js and Tailwind CSS",
        "Developed secure backend APIs using Node.js, Express, Django, and MongoDB",
        "Worked on scalable REST APIs and authentication systems",
        "Collaborated through Git/GitHub workflows and code reviews",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-5 gap-8 items-start relative">
                {/* Timeline Line (Desktop) */}
                <div className="hidden md:block absolute left-[19.5%] top-0 bottom-0 w-px bg-white/10" />

                {/* Timeline Dot */}
                <div className="absolute left-[-33px] md:left-[19.5%] top-2 w-4 h-4 rounded-full bg-primary-500 shadow-[0_0_10px_rgba(124,58,237,0.8)] md:-translate-x-1/2" />

                <div className="md:col-span-1 mb-4 md:mb-0 text-left md:text-right pt-1">
                  <div className="flex items-center gap-2 text-primary-400 font-medium md:justify-end mb-1">
                    <Calendar size={16} />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="text-sm text-foreground/60">{exp.type}</div>
                </div>

                <div className="md:col-span-4 glass-card p-8 rounded-2xl group hover:border-primary-500/30 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-white/5 rounded-lg text-primary-400">
                      <Briefcase size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{exp.role}</h3>
                      <h4 className="text-lg text-foreground/80">{exp.company}</h4>
                    </div>
                  </div>

                  <ul className="mt-6 space-y-3">
                    {exp.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start gap-3 text-foreground/70">
                        <ChevronRight className="text-secondary-400 shrink-0 mt-0.5" size={18} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
