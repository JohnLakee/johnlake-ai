"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, ShieldCheck } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary to-bg-surface" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent-cyan/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Let&apos;s Secure What Matters.
          </h2>
          <p className="text-text-secondary text-lg mb-2">
            Open to CISO, Cybersecurity Manager, and Practice Manager roles.
          </p>
          <p className="text-text-muted mb-10">
            Washington D.C. + Remote.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10"
        >
          <a
            href="mailto:john.lake@hey.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent-cyan text-black font-semibold rounded-lg hover:bg-cyan-300 transition-colors duration-200 text-lg"
          >
            <Mail size={20} />
            Get In Touch
          </a>
          <a
            href="https://www.linkedin.com/in/john-lake/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-accent-cyan text-accent-cyan font-semibold rounded-lg hover:bg-accent-cyan/10 transition-colors duration-200 text-lg"
          >
            <Linkedin size={20} />
            LinkedIn
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center text-text-muted text-sm"
        >
          <div className="flex items-center gap-2">
            <Mail size={14} className="text-accent-cyan" />
            <span>john.lake@hey.com</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-border-subtle" />
          <div className="flex items-center gap-2">
            <Linkedin size={14} className="text-accent-cyan" />
            <span>linkedin.com/in/john-lake</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-border-subtle" />
          <div className="flex items-center gap-2">
            <ShieldCheck size={14} className="text-accent-cyan" />
            <span>TS/SCI with Polygraph</span>
          </div>
        </motion.div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-border-subtle">
          <p className="text-text-muted text-xs">
            &copy; {new Date().getFullYear()} John Lake. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
