"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function HeroSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-32 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="glow-accent top-20 left-[10%] opacity-50" />
      <div className="glow-accent bottom-20 right-[10%] opacity-30" style={{ background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, rgba(0, 0, 0, 0) 70%)' }} />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={item} className="mb-4">
            <span className="px-4 py-2 rounded-full glass text-sm font-medium text-primary-400 inline-block border border-primary-500/20">
              Welcome to my portfolio
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
          >
            Hi, I&apos;m <span className="text-gradient">Aman Jain</span>
          </motion.h1>

          <motion.h2
            variants={item}
            className="text-xl md:text-3xl font-medium text-foreground/80 mb-6"
          >
            Full Stack Developer | Open Source Contributor | Problem Solver
          </motion.h2>

          <motion.p
            variants={item}
            className="text-lg text-foreground/60 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            A B.Tech student at IIIT Jabalpur passionate about scalable web applications,
            clean UI/UX, and building impactful products that solve real-world problems.
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <a
              href="#projects"
              className="px-8 py-4 rounded-full bg-primary-600 hover:bg-primary-500 text-white font-medium flex items-center gap-2 transition-all hover:scale-105"
            >
              View Projects <ArrowRight size={18} />
            </a>
            <a
              href="https://drive.google.com/file/d/1CqqRfhoaMTKRZCU8Zs0XpETaUkK7iKy1/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full glass hover:bg-black/5 dark:hover:bg-white/5 font-medium flex items-center gap-2 transition-all hover:scale-105 text-foreground"
            >
              Download Resume <Download size={18} />
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="flex items-center justify-center gap-6"
          >
            {[
              { icon: FaGithub, href: "https://github.com/amanjain-31" },
              { icon: FaLinkedin, href: "https://linkedin.com/in/amanjain" },
              { icon: Mail, href: "https://mail.google.com/mail/?view=cm&fs=1&to=amanjain310105@gmail.com" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass hover:bg-black/5 dark:hover:bg-white/10 text-foreground/80 hover:text-primary-600 dark:hover:text-white transition-all hover:scale-110"
              >
                <social.icon size={24} />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-sm text-foreground/50">Scroll down</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 rounded-full border-2 border-foreground/20 flex justify-center p-1"
        >
          <div className="w-1.5 h-3 bg-foreground/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
