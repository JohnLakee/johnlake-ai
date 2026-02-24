"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Search, Users } from "lucide-react";

const principles = [
  {
    icon: ShieldCheck,
    title: "Security as an Enabler",
    description:
      "I build security programs that accelerate the mission, not slow it down.",
  },
  {
    icon: Search,
    title: "Threat-Informed Defense",
    description:
      "Every control I implement is mapped to real adversary TTPs, not checkbox compliance.",
  },
  {
    icon: Users,
    title: "Bridge Builder",
    description:
      "I translate between the boardroom, the SOC, and the engineering team — fluently.",
  },
];

export default function Principles() {
  return (
    <section id="principles" className="py-24 md:py-32 bg-bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            How I Work
          </h2>
          <div className="w-16 h-1 bg-accent-cyan rounded-full mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {principles.map((principle, i) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/[0.08] transition-all duration-300 text-center"
            >
              <div className="inline-flex p-3 bg-accent-cyan/10 rounded-xl mb-5 group-hover:bg-accent-cyan/20 transition-colors duration-300">
                <principle.icon
                  size={28}
                  className="text-accent-cyan"
                />
              </div>
              <h3 className="text-lg font-bold mb-3">{principle.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
