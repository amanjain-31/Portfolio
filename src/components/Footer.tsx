"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/10 relative overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center gap-2"
        >
          <a href="#home" className="text-xl font-bold tracking-tighter mb-4">
            <span className="text-gradient">Aman</span>.dev
          </a>
          <p className="flex items-center gap-2 text-foreground/70">
            Built with <Heart size={16} className="text-red-500 fill-red-500 animate-pulse" /> by Aman Jain
          </p>
          <p className="text-sm text-foreground/40 mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
