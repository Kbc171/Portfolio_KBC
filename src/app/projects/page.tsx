"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageShell } from "@/components/layout/page-shell";
import { ESP32Module, GenericIC } from "@/components/hardware/floating-hardware";
import { projects } from "@/content/site-content";

const categoryIcons: Record<string, string> = {
  "VLSI + MATLAB": "🔬",
  "IoT": "📡",
  "FPGA + DSP": "⚡",
  "Embedded + Health Monitoring": "💓",
};

const categoryColors: Record<string, string> = {
  "VLSI + MATLAB": "var(--cyan-neon)",
  "IoT": "var(--green-neon)",
  "FPGA + DSP": "var(--amber-neon)",
  "Embedded + Health Monitoring": "rgba(239,68,68,0.8)",
};

export default function ProjectsPage() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <PageShell>
      <div className="space-y-16">

        {/* ── Header ── */}
        <section className="relative">
          <motion.p className="eyebrow mb-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            $ ls projects/ --sort=impact
          </motion.p>
          <motion.h1
            className="font-mono text-4xl font-bold sm:text-5xl mb-6"
            style={{ color: "var(--green-neon)", textShadow: "var(--glow-green)" }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Engineering<br />
            <span style={{ color: "var(--green-text)" }}>Systems</span>
          </motion.h1>
          <motion.p
            className="text-sm leading-relaxed max-w-xl"
            style={{ color: "rgba(74,222,128,0.6)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Each project is an engineering module — a system with defined inputs, processing logic, and measurable outputs.
          </motion.p>

          {/* Floating hardware — decorative */}
          <div className="absolute top-0 right-0 hidden lg:flex gap-6 opacity-60">
            <ESP32Module size={80} delay={0.5} />
            <GenericIC size={60} delay={1} label="SN74HC" />
          </div>
        </section>

        {/* ── Project Modules ── */}
        <section className="space-y-6">
          {projects.map((project, i) => {
            const isActive = active === i;
            const color = categoryColors[project.category] || "var(--green-neon)";

            return (
              <motion.div
                key={project.name}
                className="panel panel-glow overflow-hidden cursor-none"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setActive(isActive ? null : i)}
                whileHover={{ borderColor: color }}
                layout
              >
                {/* Module header */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div className="flex-1">
                      {/* Category */}
                      <div className="flex items-center gap-3 mb-3">
                        <span className="tag" style={{ borderColor: color, color }}>
                          [{project.category}]
                        </span>
                        <motion.div
                          className="w-2 h-2 rounded-full"
                          style={{ background: color, boxShadow: `0 0 6px ${color}` }}
                          animate={{ opacity: [1, 0.3, 1] }}
                          transition={{ duration: 1.5 + i * 0.3, repeat: Infinity }}
                        />
                      </div>

                      {/* Title */}
                      <h2 className="font-mono text-xl font-bold mb-2" style={{ color }}>
                        {project.name}
                      </h2>

                      {/* Summary */}
                      <p className="text-sm leading-relaxed" style={{ color: "rgba(74,222,128,0.65)" }}>
                        {project.summary}
                      </p>
                    </div>

                    {/* Metrics */}
                    <div className="flex flex-col gap-2 min-w-[160px]">
                      {project.metrics.map((m) => (
                        <div key={m} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: color }} />
                          <span className="font-mono text-xs" style={{ color }}>
                            {m}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Expand toggle */}
                    <motion.div
                      className="font-mono text-xl"
                      style={{ color }}
                      animate={{ rotate: isActive ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {isActive ? "▲" : "▼"}
                    </motion.div>
                  </div>
                </div>

                {/* Expandable details */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                    >
                      <div
                        className="px-6 pb-6 pt-2 border-t"
                        style={{ borderColor: "var(--border-dim)" }}
                      >
                        {/* Terminal-style header */}
                        <div className="terminal-window mb-4">
                          <div className="terminal-titlebar">
                            <span className="terminal-dot red" />
                            <span className="terminal-dot amber" />
                            <span className="terminal-dot green" />
                            <span className="font-mono text-xs ml-3" style={{ color: "rgba(57,255,20,0.5)" }}>
                              {project.name.toLowerCase().replace(/\s+/g, "-")}.sys
                            </span>
                          </div>
                          <div className="terminal-content">
                            <p className="mb-2">
                              <span className="terminal-prompt">lab@eng:~$</span>{" "}
                              <span className="terminal-cmd">module --describe</span>
                            </p>
                            {project.details.map((d, di) => (
                              <motion.p
                                key={di}
                                className="terminal-output text-xs flex gap-2"
                                initial={{ opacity: 0, x: -6 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: di * 0.1 }}
                              >
                                <span>{"  >>"}</span>
                                <span>{d}</span>
                              </motion.p>
                            ))}
                          </div>
                        </div>

                        {/* Animated metrics bars */}
                        <div className="grid gap-3 sm:grid-cols-2">
                          {project.metrics.map((m, mi) => (
                            <div key={m}>
                              <div className="flex justify-between mb-1">
                                <span className="font-mono text-xs" style={{ color }}>{m}</span>
                              </div>
                              <div className="progress-bar">
                                <motion.div
                                  className="progress-fill"
                                  initial={{ width: "0%" }}
                                  animate={{ width: `${85 - mi * 10}%` }}
                                  transition={{ duration: 0.8, delay: mi * 0.15 }}
                                  style={{ background: `linear-gradient(90deg, var(--green-dim), ${color})` }}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Bottom signal bar */}
                <motion.div
                  className="h-0.5"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
                    boxShadow: `0 0 8px ${color}`,
                  }}
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                />
              </motion.div>
            );
          })}
        </section>

        {/* ── System note ── */}
        <section className="panel panel-glow p-6">
          <p className="font-mono text-xs" style={{ color: "rgba(57,255,20,0.4)" }}>
            // All projects built on real hardware, verified through simulation, and documented with measured outcomes
          </p>
          <p className="font-mono text-xs mt-1" style={{ color: "rgba(57,255,20,0.3)" }}>
            // More projects and contributions visible at github.com/KBC171
          </p>
        </section>

      </div>
    </PageShell>
  );
}
