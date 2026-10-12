"use client";

import { motion } from "framer-motion";

const certifications = [
  "TS/SCI POLY",
  "CISSP",
  "AWS Security Specialty",
  "GCP Professional Security Engineer",
  "GCP Professional Cloud Architect",
  "CISA",
  "PMP",
  "CEH",
  "CCNA Security",
  "Azure Fundamentals",
  "Certified Scrum Master",
  "AWS Solutions Architect Associate",
  "AWS Cloud Practitioner",
  "GCP Generative AI",
  "GCP Cloud Digital Leader",
  "CCNA",
  "Security+ CE",
  "ITIL v4",
];

export default function CredibilityBar() {
  return (
    <section className="relative py-6 border-y border-border-subtle bg-bg-surface/50 backdrop-blur-sm overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex gap-3 flex-wrap justify-center max-w-6xl mx-auto px-6">
          {certifications.map((cert) => (
            <span
              key={cert}
              className="px-3 py-1.5 bg-white/5 text-text-secondary border border-white/10 rounded-full text-xs font-mono tracking-wide whitespace-nowrap hover:text-accent-cyan hover:border-accent-cyan/30 transition-colors duration-200"
            >
              {cert}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
