"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "$3M+", label: "Programs Led" },
  { value: "17+", label: "Certifications" },
  { value: "TS/SCI", label: "Clearance" },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Executive Summary
          </h2>
          <div className="w-16 h-1 bg-accent-cyan rounded-full mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-3"
          >
            <p className="text-text-secondary leading-relaxed text-lg mb-6">
              I&apos;m a security leader and engineer dedicated to defending the
              infrastructure that powers our future. With a decade of experience
              spanning Army Cyber Command, AWS, and Mandiant (Google Public
              Sector), I specialize in building resilient security programs for
              the most sensitive environments on earth.
            </p>
            <p className="text-text-secondary leading-relaxed text-lg">
              My approach combines the rigor of national security with the
              agility of modern cloud-native engineering. Whether it&apos;s
              securing frontier AI models, architecting multi-cloud zero-trust
              environments, or leading $3M digital transformations, I focus on
              one thing: reducing the attack surface without slowing down the
              mission.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 grid grid-cols-2 gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="text-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl"
              >
                <div className="text-3xl md:text-4xl font-bold text-accent-cyan mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-text-muted">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
