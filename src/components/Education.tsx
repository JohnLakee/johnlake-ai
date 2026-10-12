"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    degree: "M.S. Homeland Security",
    concentration: "concentration Cybersecurity",
    school: "University of the District of Columbia",
    location: "Washington, DC",
    honors: "Magna Cum Laude, 4.0 GPA",
    years: "2013 – 2015",
  },
  {
    degree: "B.S. Computer Information Systems",
    concentration: "",
    school: "Virginia Commonwealth University",
    location: "Richmond, VA",
    honors: "3.24 GPA",
    years: "2009 – 2012",
  },
];

const certifications = [
  "CISSP",
  "CISA",
  "PMP",
  "AWS Security Specialty",
  "AWS Solutions Architect Associate",
  "AWS Cloud Practitioner",
  "GCP Professional Cloud Security Engineer",
  "GCP Professional Cloud Architect",
  "GCP Generative AI",
  "GCP Cloud Digital Leader",
  "Azure Fundamentals",
  "CEH",
  "Security+ CE",
  "CCNA",
  "CCNA Security",
  "Certified Scrum Master",
  "ITIL v4",
];

export default function Education() {
  return (
    <section id="education" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Education & Certifications
          </h2>
          <div className="w-16 h-1 bg-accent-cyan rounded-full mb-12" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-accent-cyan/10 rounded-lg">
                <GraduationCap size={20} className="text-accent-cyan" />
              </div>
              <h3 className="text-xl font-semibold">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu) => (
                <div
                  key={edu.degree}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5"
                >
                  <h4 className="font-bold text-text-primary">
                    {edu.degree}
                    {edu.concentration && (
                      <span className="font-normal text-text-secondary">
                        , {edu.concentration}
                      </span>
                    )}
                  </h4>
                  <p className="text-accent-cyan text-sm mt-1">{edu.school}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-sm text-text-muted">
                      {edu.honors}
                    </span>
                    <span className="text-xs font-mono text-text-muted">
                      {edu.years}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-accent-cyan/10 rounded-lg">
                <Award size={20} className="text-accent-cyan" />
              </div>
              <h3 className="text-xl font-semibold">Certifications</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {certifications.map((cert) => (
                <span
                  key={cert}
                  className="px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-text-secondary font-mono tracking-wide hover:text-accent-cyan hover:border-accent-cyan/30 transition-colors duration-200"
                >
                  {cert}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
