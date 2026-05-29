"use client";

import { motion } from "framer-motion";
import type { RouteKey } from "@/lib/theme";

const panelContent: Record<
  RouteKey,
  {
    label: string;
    nodes: string[];
    metrics: string[];
  }
> = {
  home: {
    label: "Innovation Stack",
    nodes: ["IoT", "VLSI", "Embedded", "FPGA"],
    metrics: ["Signal Integrity", "System Thinking", "Real-Time Logic"],
  },
  about: {
    label: "Engineering Profile",
    nodes: ["Languages", "Mentoring", "Systems", "Discipline"],
    metrics: ["Cross-domain learning", "Execution focus", "Practical mindset"],
  },
  experience: {
    label: "Execution Layers",
    nodes: ["Mentorship", "ASIC", "FPGA", "Leadership"],
    metrics: ["Present role", "Internship depth", "Coordination ability"],
  },
  projects: {
    label: "Project Domains",
    nodes: ["Op-Amp", "Agriculture IoT", "DSP", "Health Monitoring"],
    metrics: ["Measured outcomes", "Hardware-software integration", "Applied engineering"],
  },
  education: {
    label: "Learning Architecture",
    nodes: ["ECE", "Training", "Certifications", "Workshops"],
    metrics: ["Theory to practice", "Tool fluency", "Technical growth"],
  },
  contact: {
    label: "Availability Matrix",
    nodes: ["Embedded", "IoT", "VLSI", "Mentoring"],
    metrics: ["Open to roles", "Direct response", "Project discussion"],
  },
};

type TechnicalPanelProps = {
  route: RouteKey;
  compact?: boolean;
};

export function TechnicalPanel({ route, compact = false }: TechnicalPanelProps) {
  const content = panelContent[route];

  return (
    <section
      className={`relative overflow-hidden rounded-[28px] border border-cyan-400/15 bg-[linear-gradient(180deg,rgba(4,16,24,0.92),rgba(8,13,18,0.88))] ${
        compact ? "min-h-[280px]" : "min-h-[420px]"
      }`}
    >
      <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(115,211,255,0.11)_1px,transparent_1px),linear-gradient(90deg,rgba(115,211,255,0.11)_1px,transparent_1px)] [background-size:34px_34px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(115,211,255,0.18),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(239,187,84,0.12),transparent_24%)]" />

      <motion.div
        className="absolute left-6 top-6 h-20 w-20 rounded-full border border-cyan-300/20"
        animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-8 right-8 h-28 w-28 rounded-full border border-amber-300/15"
        animate={{ scale: [1, 1.1, 1], rotate: [0, 16, 0] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative flex h-full flex-col justify-between gap-8 p-6">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/72">
            {content.label}
          </p>
          <div className="grid grid-cols-2 gap-3">
            {content.nodes.map((node, index) => (
              <motion.div
                key={node}
                className="rounded-[18px] border border-cyan-200/12 bg-cyan-300/[0.05] px-4 py-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
              >
                <div className="mb-3 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-cyan-300" />
                  <span className="text-[11px] uppercase tracking-[0.22em] text-white/45">
                    Node {index + 1}
                  </span>
                </div>
                <p className="text-sm font-medium text-white">{node}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid gap-3">
          {content.metrics.map((metric, index) => (
            <div key={metric} className="rounded-[18px] border border-white/8 bg-white/[0.03] px-4 py-3">
              <div className="mb-2 flex items-center justify-between text-[11px] uppercase tracking-[0.22em] text-white/42">
                <span>Channel {index + 1}</span>
                <span>{92 - index * 7}%</span>
              </div>
              <div className="mb-2 h-1.5 overflow-hidden rounded-full bg-white/8">
                <motion.div
                  className="h-full rounded-full bg-[linear-gradient(90deg,#73d3ff,#efbb54)]"
                  animate={{ width: ["22%", `${92 - index * 7}%`, "22%"] }}
                  transition={{ duration: 6 + index, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
              <p className="text-sm text-white/72">{metric}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
