"use client";

import { motion } from "framer-motion";
import { PageShell } from "@/components/layout/page-shell";
import { GenericIC, PCBFragment } from "@/components/hardware/floating-hardware";
import { experience } from "@/content/site-content";

export default function ExperiencePage() {
  return (
    <PageShell>
      <div className="space-y-16">

        {/* ── Header ── */}
        <section className="relative">
          <motion.p className="eyebrow mb-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            $ jobs -l --verbose
          </motion.p>
          <motion.h1
            className="font-mono text-4xl font-bold sm:text-5xl mb-6"
            style={{ color: "var(--green-neon)", textShadow: "var(--glow-green)" }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Experience<br />
            <span style={{ color: "var(--green-text)" }}>& Roles</span>
          </motion.h1>
          <div className="absolute top-0 right-0 hidden lg:block opacity-50">
            <PCBFragment size={110} delay={1} />
          </div>
        </section>

        {/* ── Signal rail timeline ── */}
        <section>
          <div className="relative">
            {/* Vertical rail */}
            <div
              className="absolute left-5 top-0 bottom-0 w-px"
              style={{
                background: "linear-gradient(180deg, var(--green-neon), var(--green-dim), transparent)",
                boxShadow: "0 0 6px rgba(57,255,20,0.4)",
              }}
            />

            <div className="space-y-10 pl-16">
              {experience.map((exp, i) => {
                const isCurrent = exp.period.includes("Present");
                return (
                  <motion.div
                    key={exp.title}
                    className="relative"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12 }}
                  >
                    {/* Node on rail */}
                    <div className="absolute -left-11 top-6 flex flex-col items-center">
                      <motion.div
                        className="w-4 h-4 rounded-full border-2 z-10"
                        style={{
                          background: isCurrent ? "var(--green-neon)" : "var(--bg-void)",
                          borderColor: isCurrent ? "var(--green-neon)" : "var(--green-dim)",
                          boxShadow: isCurrent ? "var(--glow-green)" : "none",
                        }}
                        animate={isCurrent ? {
                          boxShadow: [
                            "0 0 4px rgba(57,255,20,0.6), 0 0 12px rgba(57,255,20,0.3)",
                            "0 0 8px rgba(57,255,20,1), 0 0 24px rgba(57,255,20,0.6)",
                            "0 0 4px rgba(57,255,20,0.6), 0 0 12px rgba(57,255,20,0.3)",
                          ]
                        } : {}}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </div>

                    {/* Card */}
                    <div className="panel panel-glow p-6">
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                        <div>
                          {isCurrent && (
                            <div className="status-live text-xs mb-2">CURRENT</div>
                          )}
                          <h2 className="font-mono text-lg font-bold" style={{ color: isCurrent ? "var(--green-neon)" : "var(--green-text)" }}>
                            {exp.title}
                          </h2>
                          <p className="font-mono text-sm mt-0.5" style={{ color: "var(--green-dim)" }}>
                            @ {exp.organization}
                          </p>
                        </div>
                        <div className="text-right">
                          <span className="tag">{exp.period}</span>
                          <p className="font-mono text-xs mt-1" style={{ color: "rgba(57,255,20,0.4)" }}>
                            {exp.location}
                          </p>
                        </div>
                      </div>

                      <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(74,222,128,0.65)" }}>
                        {exp.summary}
                      </p>

                      {/* Achievements as terminal output */}
                      <div className="terminal-window mb-4">
                        <div className="terminal-titlebar">
                          <span className="terminal-dot red" />
                          <span className="terminal-dot amber" />
                          <span className="terminal-dot green" />
                          <span className="font-mono text-xs ml-3" style={{ color: "rgba(57,255,20,0.5)" }}>achievements.log</span>
                        </div>
                        <div className="terminal-content space-y-1">
                          {exp.achievements.map((a, ai) => (
                            <motion.p
                              key={ai}
                              className="terminal-output text-xs flex gap-2"
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: ai * 0.1 }}
                            >
                              <span className="flex-shrink-0">[{String(ai + 1).padStart(2, "0")}]</span>
                              <span>{a}</span>
                            </motion.p>
                          ))}
                        </div>
                      </div>

                      {/* Tools */}
                      <div>
                        <p className="font-mono text-xs mb-2" style={{ color: "rgba(57,255,20,0.4)" }}>
                          $ tools --list
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {exp.tools.map((tool) => (
                            <span key={tool} className="tag">{tool}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Floating hardware ── */}
        <div className="hidden xl:flex justify-end opacity-40">
          <GenericIC size={80} delay={2} label="ATmega" />
        </div>

      </div>
    </PageShell>
  );
}
