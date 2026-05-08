"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          // Replace this with your Web3Forms Access Key
          access_key: "17724c17-139e-44d3-bc72-dd4dc8844e28",
          ...formData
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    }

    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus("idle"), 5000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="glow-accent bottom-0 left-0 opacity-20" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full" />
          <p className="mt-6 text-foreground/70 max-w-2xl mx-auto">
            Feel free to reach out if you&apos;re looking for a developer, have a question, or just want to connect.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="flex-1 space-y-6"
          >
            <div className="glass-card p-8 rounded-2xl h-full flex flex-col justify-center space-y-8">
              <h3 className="text-2xl font-bold mb-2">Contact Information</h3>

              <div className="space-y-6">
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=amanjain310105@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-foreground/80 hover:text-primary-400 transition-colors group">
                  <div className="p-4 rounded-full bg-white/5 group-hover:bg-primary-500/20 transition-colors">
                    <Mail className="text-primary-400" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/50">Email</p>
                    <p className="font-medium">amanjain310105@gmail.com</p>
                  </div>
                </a>

                <a href="tel:+91 88395 95077" className="flex items-center gap-4 text-foreground/80 hover:text-secondary-400 transition-colors group">
                  <div className="p-4 rounded-full bg-white/5 group-hover:bg-secondary-500/20 transition-colors">
                    <Phone className="text-secondary-400" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/50">Phone</p>
                    <p className="font-medium">+91 88395 95077</p>
                  </div>
                </a>

                <div className="pt-6 border-t border-white/10 flex gap-4">
                  <a href="https://github.com/amanjain-31" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                    <FaGithub size={20} />
                  </a>
                  <a href="https://www.linkedin.com/in/aman-jain-248b612aa/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                    <FaLinkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="flex-[1.5]"
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground/80">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary-500 transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground/80">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary-500 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground/80">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary-500 transition-colors resize-none"
                  placeholder="Hello Aman, I would like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-lg text-white font-medium flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] ${submitStatus === "success"
                  ? "bg-green-500 hover:bg-green-600"
                  : submitStatus === "error"
                    ? "bg-red-500 hover:bg-red-600"
                    : "bg-primary-600 hover:bg-primary-500 disabled:opacity-70 disabled:cursor-not-allowed"
                  }`}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : submitStatus === "success" ? (
                  "Message Sent!"
                ) : submitStatus === "error" ? (
                  "Error! Try Again"
                ) : (
                  <>Send Message <Send size={18} /></>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
