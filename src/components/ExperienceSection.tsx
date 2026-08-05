"use client";

import { motion } from "framer-motion";
import { Calendar, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function ExperienceSection() {
  const experiences = [
    {
      role: "Software Development Intern",
      company: "Orochiverse",
      logo: "/orochiverse.png",
      type: "Full stack Development Intern • Tokyo, Japan (Remote)",
      duration: "June 2026 – July 2026",
      points: [
        "Engineered dynamic, highly responsive user interfaces utilizing React.js and TailwindCSS, standardizing component architecture and reducing frontend rendering times by 15%.",
        "Built and integrated scalable RESTful APIs using Node.js, Express.js, and Django for seamless client-server communication with a 99.9% uptime standard.",
        "Structured and maintained scalable NoSQL databases using MongoDB, implementing optimized indexing strategies that accelerated complex data retrieval times by 25%.",
      ],
    },
    {
      role: "Full-Stack Developer",
      company: "GSSoC'25",
      logo: "/gssoc.png",
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
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-0 mb-12 last:mb-0"
            >
              <div className="md:grid md:grid-cols-5 gap-8 items-start relative">
                {/* Timeline Line (Desktop) */}
                <div className="hidden md:block absolute left-[19.5%] top-0 bottom-0 w-px bg-white/10" />

                {/* Timeline Dot */}
                <div className="absolute left-[-33px] md:left-[19.5%] top-4 w-4 h-4 rounded-full bg-primary-500 shadow-[0_0_10px_rgba(124,58,237,0.8)] md:-translate-x-1/2 z-10" />

                <div className="md:col-span-1 mb-4 md:mb-0 text-left md:text-right pt-2">
                  <div className="flex items-center gap-2 text-primary-400 font-medium md:justify-end mb-1">
                    <Calendar size={16} />
                    <span className="text-sm md:text-base">{exp.duration}</span>
                  </div>
                  <div className="text-sm text-foreground/60">{exp.type}</div>
                </div>

                <div className="md:col-span-4 glass-card p-8 rounded-2xl group hover:border-primary-500/30 transition-colors">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-white/10 p-1 flex items-center justify-center shrink-0 border border-white/10 group-hover:border-primary-500/40 transition-colors shadow-md">
                      <Image
                        src={exp.logo}
                        alt={`${exp.company} Logo`}
                        width={44}
                        height={44}
                        className="object-contain w-full h-full rounded-lg"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{exp.role}</h3>
                      <h4 className="text-lg text-primary-300 font-semibold">{exp.company}</h4>
                    </div>
                  </div>

                  <ul className="mt-6 space-y-3">
                    {exp.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start gap-3 text-foreground/80 leading-relaxed">
                        <ChevronRight className="text-secondary-400 shrink-0 mt-1" size={18} />
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

