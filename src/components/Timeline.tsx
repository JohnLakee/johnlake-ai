"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    company: "Mandiant · Google Public Sector",
    initials: "M",
    color: "bg-red-500/20 text-red-400",
    title: "Security Engineer & Emerging Technology Cybersecurity Consultant",
    period: "APR 2024 – PRESENT",
    location: "Reston, VA",
    bullets: [
      "Authored a DoD IL5 ATO Security Strategy and 28-control Security Requirements Traceability Matrix (SRTM) across 6 domains for a US Army agentic AI program, securing cross-cloud AWS/GCP Vertex AI agent workflows",
      "Led $3M IT/OT and SCADA transformation for DIB client; built Splunk Cloud SIEM covering IT/OT networks, managed SOC as MSSP across VMware Cloud, CrowdStrike, Okta, AWS, Azure, Fortinet, Nozomi, Gigamon",
      "Executed AWS Multi-Account Security Assessment for a national security technology firm (AWS-to-GCP replatforming), analyzing 83,000+ configurations across 7 accounts to identify critical exposures",
      "Delivered Security Technical Infrastructure Design Document and foundations workbook for a state government modernization initiative; presented Security Engineering plan to customer executive board",
      "Architected HIPAA and CMMC-compliant Secure Research Enclave design for a major public university within existing GCP footprint",
      "Built and deployed an AI sub-agent to automatically audit proposals and SOWs against Google SAIF, FedRAMP, and DoD compliance baselines",
      "Standardized Security Engineering SOWs, consolidating Gemini Enterprise, Gemini for Government, and Classified AI SOWs into modular templates",
      "Spearheaded enterprise-wide AI security initiatives, integrating frontier models (Claude Enterprise, Gemini for Government) while establishing governance and security controls",
      "Led cloud and AI security assessments for municipal, state, and higher education clients across AWS, GCP, and hybrid environments",
    ],
  },
  {
    company: "Amazon Web Services",
    initials: "AWS",
    color: "bg-orange-500/20 text-orange-400",
    title: "Information Systems Security Manager (ISSM)",
    period: "SEP 2023 – APR 2024",
    location: "Herndon, VA",
    bullets: [
      "Built and led Government Sector Information Assurance Team",
      "Conducted Risk Mitigation Framework (RMF) across satellite network infrastructure",
      "Led classified systems strategy: Cross Domain Solutions, TRANSEC, S/TS/GOV Clouds",
      "Drove compliance roadmaps: FedRAMP, FISMA, DOD IL5, CMMC",
    ],
  },
  {
    company: "Amazon Web Services",
    initials: "AWS",
    color: "bg-orange-500/20 text-orange-400",
    title: "Cloud Security Consultant",
    period: "JUN 2022 – AUG 2023",
    location: "Herndon, VA",
    bullets: [
      "Conducted dozens of Deliverable Security Reviews across all AWS services",
      "Led multiple ATO engagements: WorkSpaces, Direct Connect, SageMaker, Cross-Domain Solutions",
      "Led Landing Zone Accelerator deployment for DIB Academic Institution (CMMC 2.0)",
      "Conducted Engagement Security Assessments across data handling and endpoint protection",
    ],
  },
  {
    company: "United States Army",
    initials: "US",
    color: "bg-green-500/20 text-green-400",
    title: "Senior Cyber Network Defense Program Manager / Technical PM",
    period: "OCT 2016 – MAY 2022",
    location: "Multiple Locations",
    bullets: [
      "PM for red/blue simulation exercises; managed cross-functional geographically dispersed teams",
      "Led Discovery and Counter Infiltration (DCI) efforts on partner networks",
      "Implemented zero-trust via VRF network segmentation",
      "Deployed distributed IDS (Security Onion, ELK, Endgame)",
      "Authored TTPs and SOPs organization-wide",
    ],
  },
];

export default function Timeline() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-bg-surface">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Experience
          </h2>
          <div className="w-16 h-1 bg-accent-cyan rounded-full mb-12" />
        </motion.div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-border-subtle" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={`${exp.company}-${exp.title}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-14"
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-0 top-1 w-10 h-10 rounded-lg ${exp.color} flex items-center justify-center text-xs font-bold font-mono border border-white/10`}
                >
                  {exp.initials}
                </div>

                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-text-primary">
                      {exp.company}
                    </h3>
                    <p className="text-text-secondary font-medium">
                      {exp.title}
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-xs font-mono text-text-muted tracking-wide">
                      {exp.period}
                    </p>
                    <p className="text-xs text-text-muted">{exp.location}</p>
                  </div>
                </div>

                <ul className="space-y-2 mt-3">
                  {exp.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-3 text-text-secondary text-sm leading-relaxed"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-cyan/50 shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
