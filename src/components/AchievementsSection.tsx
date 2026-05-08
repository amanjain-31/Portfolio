"use client";

import { motion } from "framer-motion";
import { Trophy, Code2, Users, Medal, Star } from "lucide-react";

export default function AchievementsSection() {
  const achievements = [
    {
      icon: <Code2 className="text-primary-400" size={24} />,
      title: "Competitive Programming",
      description: "Solved 400+ DSA problems on LeetCode, Codeforces, and CodeChef",
    },
    {
      icon: <Star className="text-secondary-400" size={24} />,
      title: "Academic Excellence",
      description: "Top 5% in NPTEL Programming in Java",
    },
    {
      icon: <Trophy className="text-primary-400" size={24} />,
      title: "Hackathons",
      description: "Participated in Hackbyte and Can You Hack It hackathons",
    },
    {
      icon: <Users className="text-secondary-400" size={24} />,
      title: "Mentorship",
      description: "Mentored 40+ juniors in coding and Data Structures & Algorithms",
    },
    {
      icon: <Star className="text-primary-400" size={24} />,
      title: "Leadership",
      description: "Coordinator at Jazbaat Dramatics Society",
    },
    {
      icon: <Medal className="text-secondary-400" size={24} />,
      title: "Extracurriculars",
      description: "Secured 3rd place in acting competitions at IIT Guwahati and BITS Hyderabad",
    },
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Achievements</span> & Extracurriculars
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass p-6 rounded-2xl flex items-start gap-4 hover:bg-white/5 transition-colors border border-white/5 hover:border-primary-500/30"
            >
              <div className="p-3 bg-white/5 rounded-xl shrink-0">
                {item.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
