"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

export default function ProjectsSection() {
  const projects = [
    {
      title: "EnjoyYourMeal",
      description:
        "Food Ordering & Meal Recommendation Platform featuring secure ordering, meal browsing, a robust cart system, and a highly responsive UI.",
      tags: ["React", "Next.js", "Tailwind CSS", "Django"],
      github: "https://github.com/amanjain-31/EnjoyYourMeal",
      demo: "https://enjoyyourmeal.onrender.com/",
      color: "from-orange-500/20 to-red-500/20",
      image: "/enjoy_your_meal.png",
    },
    {
      title: "Sunrise Ledger (Expense Tracker)",
      description:
        "A full-stack multi-user expense tracking platform featuring secure JWT authentication, granular date-based filtering, data isolation, and a responsive glassmorphism dark-mode dashboard.",
      tags: ["React", "Node.js", "Express", "MongoDB", "JWT"],
      github: "https://github.com/amanjain-31/ExpenseTracker",
      demo: "https://expense-tracker-lac-mu.vercel.app/",
      color: "from-green-500/20 to-emerald-500/20",
      image: "/sunrise_ledger.png",
    },
    {
      title: "RecordIt",
      description:
        "Screen Recording & Video Sharing Platform that includes user authentication, smooth video upload, CDN streaming, and bot protection.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/amanjain-31/RecordIt",
      demo: "#",
      color: "from-blue-500/20 to-cyan-500/20",
      image: "/record_it.png",
    },
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="glow-accent top-0 right-0 opacity-20" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="glass-card rounded-2xl overflow-hidden flex flex-col h-full group"
            >
              {/* Project Image */}
              <div className="h-48 w-full relative overflow-hidden flex items-center justify-center">
                <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} mix-blend-overlay opacity-60 group-hover:opacity-20 transition-opacity duration-500 z-10`} />
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-foreground/70 mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-primary-500/10 text-primary-600 dark:text-primary-300 border border-primary-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors border border-black/10 dark:border-white/10 font-medium text-foreground"
                  >
                    <FaGithub size={18} />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-primary-600 hover:bg-primary-500 transition-colors font-medium text-white shadow-lg shadow-primary-500/20"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
