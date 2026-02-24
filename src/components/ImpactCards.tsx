"use client";

import { motion } from "framer-motion";

const impacts = [
  {
    tag: "Mandiant · Google Public Sector",
    title: "$3M Defense Industrial Base Security Overhaul",
    bullets: [
      "Led end-to-end IT/OT and SCADA transformation for a DIB client",
      "Built comprehensive Splunk Cloud SIEM covering IT and OT networks",
      "Managed SOC as MSSP across VMware Cloud, CrowdStrike, Okta, AWS, Azure, Fortinet, Nozomi, Gigamon",
    ],
  },
  {
    tag: "Amazon Web Services",
    title: "Securing AI/ML Infrastructure for Government",
    bullets: [
      "Led ATO workstreams for AWS SageMaker (AI/ML) into classified environments",
      "Produced full RMF/NIST 800-53 body of evidence including CONOPS, Security Impact Analysis, Critical Control Lists",
      "Established Secure Research Enclaves (GovCloud) for DIB academic institutions under CMMC 2.0",
    ],
  },
  {
    tag: "Amazon Web Services · ISSM",
    title: "Government Sector Information Assurance Program",
    bullets: [
      "Built and led Government Sector Information Assurance Team from scratch",
      "Drove RMF compliance across satellite network infrastructure (NIST 800-53, CMMC, ISO 27001, STIGs)",
      "Led classified systems strategy: Cross Domain Solutions, TRANSEC, S/TS/GOV Clouds, FedRAMP, DOD IL5",
    ],
  },
  {
    tag: "U.S. Army Cyber Command",
    title: "Counter Infiltration & Zero Trust Deployment",
    bullets: [
      "Led Discovery and Counter Infiltration (DCI) efforts validating detections on partner networks",
      "Re-engineered network architecture to implement zero-trust, isolating adversary presence",
      "Deployed distributed IDS solutions (Security Onion, ELK SIEM, Endgame) across multi-state operations",
    ],
  },
];

export default function ImpactCards() {
  return (
    <section id="impact" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Selected Impact
          </h2>
          <div className="w-16 h-1 bg-accent-cyan rounded-full mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {impacts.map((impact, i) => (
            <motion.div
              key={impact.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/[0.08] hover:scale-[1.02] transition-all duration-300"
            >
              <span className="inline-block px-3 py-1 bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20 rounded-full text-xs font-mono tracking-wide mb-4">
                {impact.tag}
              </span>
              <h3 className="text-xl font-bold mb-4 group-hover:text-accent-cyan transition-colors duration-300">
                {impact.title}
              </h3>
              <ul className="space-y-3">
                {impact.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-3 text-text-secondary text-sm leading-relaxed"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-cyan shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
