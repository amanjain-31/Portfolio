"use client";

import { motion } from "framer-motion";
import { Code2, Server, Layout, Rocket } from "lucide-react";

export default function AboutSection() {
  const cards = [
    {
      icon: <Layout className="text-secondary-400" size={32} />,
      title: "Clean UI/UX",
      description: "Crafting beautiful, intuitive interfaces with modern design principles.",
    },
    {
      icon: <Server className="text-primary-400" size={32} />,
      title: "Scalable Systems",
      description: "Building robust backend architectures that can handle growth.",
    },
    {
      icon: <Code2 className="text-secondary-400" size={32} />,
      title: "Open Source",
      description: "Active contributor to open-source projects and developer communities.",
    },
    {
      icon: <Rocket className="text-primary-400" size={32} />,
      title: "Impactful Apps",
      description: "Turning complex problems into elegant, user-centric solutions.",
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="space-y-6 text-lg text-foreground/80 leading-relaxed"
          >
            <p>
              I am an Electronics and Communication Engineering student at{" "}
              <strong className="text-white">IIIT Jabalpur</strong>, with a deep-rooted
              passion for software engineering.
            </p>
            <p>
              My journey in tech is driven by a fascination for full-stack development,
              open source, and solving complex problems. I thrive on the challenge of
              architecting scalable systems while ensuring a seamless, modern user
              experience.
            </p>
            <p>
              Whether it&apos;s designing a responsive frontend, optimizing database
              queries, or exploring the latest technologies, I love every aspect of
              building impactful applications that make a difference.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {cards.map((card, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="glass-card p-6 rounded-2xl flex flex-col gap-4"
              >
                <div className="p-3 rounded-xl glass w-fit">
                  {card.icon}
                </div>
                <h3 className="text-xl font-semibold">{card.title}</h3>
                <p className="text-sm text-foreground/60">{card.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
