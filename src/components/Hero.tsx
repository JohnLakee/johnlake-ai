"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-primary to-bg-surface" />
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-cyan/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="relative w-48 h-48 md:w-56 md:h-56 mx-auto rounded-full border-2 border-accent-cyan/30 overflow-hidden bg-bg-surface">
            <Image
              src="/headshot.jpg"
              alt="John Lake"
              fill
              className="object-cover"
              priority
              onError={(e) => {
                const target = e.currentTarget;
                target.style.display = "none";
                const parent = target.parentElement;
                if (parent) {
                  const fallback = parent.querySelector(".fallback-initials");
                  if (fallback) (fallback as HTMLElement).style.display = "flex";
                }
              }}
            />
            <div
              className="fallback-initials absolute inset-0 flex items-center justify-center text-3xl font-bold text-accent-cyan bg-bg-surface"
              style={{ display: "none" }}
            >
              JL
            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6"
        >
          Securing the Frontier:{" "}
          <span className="text-accent-cyan">Cloud, AI,</span> and{" "}
          <span className="text-accent-cyan">National Security.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <p className="text-lg md:text-xl text-text-secondary mb-2">
            <span className="font-semibold text-text-primary">John Lake</span>{" "}
            | TS/SCI Cleared | Security Engineer & Emerging Technology Cybersecurity Consultant
          </p>
          <p className="text-text-secondary">
            Bridging the gap between mission-critical defense and the future of
            AI security.
          </p>
          <p className="text-text-muted text-sm mt-2">
            Based in Washington, D.C. — Available Remotely.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex gap-4 justify-center flex-wrap mb-10"
        >
          <span className="font-mono text-sm text-accent-cyan tracking-wide">
            // Cloud Security
          </span>
          <span className="font-mono text-sm text-accent-cyan tracking-wide">
            // AI Security
          </span>
          <span className="font-mono text-sm text-accent-cyan tracking-wide">
            // National Security
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <a
            href="mailto:john.lake@hey.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent-cyan text-black font-medium rounded-lg hover:bg-cyan-300 transition-colors duration-200"
          >
            <Mail size={18} />
            Get In Touch
          </a>
          <a
            href="https://www.linkedin.com/in/john-lake/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-accent-cyan text-accent-cyan font-medium rounded-lg hover:bg-accent-cyan/10 transition-colors duration-200"
          >
            <Linkedin size={18} />
            View LinkedIn
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 border-2 border-text-muted rounded-full flex items-start justify-center p-1"
        >
          <div className="w-1 h-2 bg-text-muted rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
