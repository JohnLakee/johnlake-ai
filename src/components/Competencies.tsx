"use client";

import { motion } from "framer-motion";
import { Shield, Cloud, Crosshair } from "lucide-react";

const columns = [
  {
    icon: Shield,
    title: "Strategic Leadership",
    skills: [
      "CISO Operations",
      "GRC",
      "NIST 800-53/171",
      "FedRAMP",
      "FISMA",
      "RMF",
      "Cyber Talent Management",
      "Practice Leadership",
      "SOC/MSSP Management",
      "Zero Trust Architecture",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    skills: [
      "AWS (Security Specialty)",
      "GCP (Professional Security)",
      "Terraform / IaC",
      "Kubernetes",
      "Landing Zone Accelerator",
      "GovCloud",
      "SageMaker Security",
      "Cross-Domain Solutions",
      "SIEM (Splunk / ELK)",
      "CrowdStrike",
      "Okta",
    ],
  },
  {
    icon: Crosshair,
    title: "Defense & AI Security",
    skills: [
      "LLM / Frontier AI Threat Modeling",
      "Secure SDLC for AI/ML",
      "OT/SCADA Security",
      "Incident Response",
      "Red/Blue Simulation",
      "Discovery & Counter Infiltration",
      "Vulnerability Management",
      "Penetration Testing",
      "CMMC 2.0",
    ],
  },
];

export default function Competencies() {
  return (
    <section id="competencies" className="py-24 md:py-32 bg-bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Core Competencies
          </h2>
          <div className="w-16 h-1 bg-accent-cyan rounded-full mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {columns.map((col, i) => (
            <motion.div
              key={col.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/[0.08] transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 bg-accent-cyan/10 rounded-lg">
                  <col.icon size={20} className="text-accent-cyan" />
                </div>
                <h3 className="text-lg font-semibold">{col.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {col.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-accent-cyan/5 text-accent-cyan/80 border border-accent-cyan/15 rounded-full text-xs font-mono tracking-wide"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
