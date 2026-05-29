"use client";

import { motion } from "framer-motion";
import { PageShell } from "@/components/layout/page-shell";
import { BluePill } from "@/components/hardware/floating-hardware";
import { education } from "@/content/site-content";

export default function EducationPage() {
  return (
    <PageShell>
      <div className="space-y-16">

        {/* ── Header ── */}
        <section className="relative">
          <motion.p className="eyebrow mb-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            $ cat education.log
          </motion.p>
          <motion.h1
            className="font-mono text-4xl font-bold sm:text-5xl mb-6"
            style={{ color: "var(--green-neon)", textShadow: "var(--glow-green)" }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Academic<br />
            <span style={{ color: "var(--green-text)" }}>Foundation</span>
          </motion.h1>
          <div className="absolute top-0 right-0 hidden lg:block opacity-50">
            <BluePill size={100} delay={0.5} />
          </div>
        </section>

        {/* ── Degree ── */}
        <section>
          <motion.div
            className="panel panel-glow p-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="eyebrow mb-4">// primary_degree</p>
            <div className="flex items-start gap-6 flex-wrap">
              <div
                className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center border-2"
                style={{ borderColor: "var(--green-neon)", boxShadow: "var(--glow-green)", background: "rgba(57,255,20,0.08)" }}
              >
                <span className="font-mono text-lg font-bold" style={{ color: "var(--green-neon)" }}>
                  ECE
                </span>
              </div>
              <div className="flex-1">
                <h2 className="font-mono text-xl font-bold mb-1" style={{ color: "var(--green-neon)" }}>
                  {education.degree}
                </h2>
                <p className="font-mono text-sm mb-1" style={{ color: "var(--green-dim)" }}>
                  {education.institution}
                </p>
                <p className="font-mono text-xs" style={{ color: "rgba(57,255,20,0.4)" }}>
                  Expected: {education.expected}
                </p>
              </div>
              <div className="status-live text-xs">
                ACTIVE
              </div>
            </div>

            {/* Progress bar for degree */}
            <div className="mt-6">
              <div className="flex justify-between mb-2">
                <span className="font-mono text-xs" style={{ color: "rgba(57,255,20,0.5)" }}>Degree Progress</span>
                <span className="font-mono text-xs" style={{ color: "var(--green-neon)" }}>95%</span>
              </div>
              <div className="progress-bar">
                <motion.div
                  className="progress-fill"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "95%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
              </div>
            </div>
          </motion.div>
        </section>

        {/* ── Certifications as system log ── */}
        <section>
          <motion.p className="eyebrow mb-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            $ cat certifications.log | grep [CERT]
          </motion.p>

          <div className="terminal-window">
            <div className="terminal-titlebar">
              <span className="terminal-dot red" />
              <span className="terminal-dot amber" />
              <span className="terminal-dot green" />
              <span className="font-mono text-xs ml-3" style={{ color: "rgba(57,255,20,0.5)" }}>certifications.log</span>
            </div>
            <div className="terminal-content space-y-2">
              {education.certifications.map((cert, i) => (
                <motion.div
                  key={cert}
                  className="flex gap-3 text-sm"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <span className="terminal-prompt flex-shrink-0">[CERT]</span>
                  <span className="terminal-cmd">{cert}</span>
                  <motion.span
                    className="ml-auto font-mono text-xs"
                    style={{ color: "var(--green-neon)" }}
                    animate={{ opacity: [1, 0.4, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  >
                    ✓ VERIFIED
                  </motion.span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Training programs ── */}
        <section>
          <motion.p className="eyebrow mb-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            $ cat training.log | grep [TRAIN]
          </motion.p>

          <div className="space-y-3">
            {education.training.map((t, i) => (
              <motion.div
                key={t}
                className="panel panel-glow p-4 flex items-center gap-4"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <motion.div
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: "var(--amber-neon)", boxShadow: "0 0 6px var(--amber-neon)" }}
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                />
                <span className="font-mono text-xs" style={{ color: "rgba(57,255,20,0.4)" }}>[TRAIN]</span>
                <span className="font-mono text-sm flex-1" style={{ color: "var(--green-text)" }}>{t}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Pre-university ── */}
        <section className="panel panel-glow p-6">
          <p className="eyebrow mb-3">// pre_university</p>
          <div className="flex gap-4 items-center flex-wrap">
            <div className="w-10 h-10 rounded border flex items-center justify-center"
              style={{ borderColor: "var(--border-green)", background: "var(--bg-glass)" }}>
              <span className="font-mono text-xs" style={{ color: "var(--green-neon)" }}>PU</span>
            </div>
            <div>
              <p className="font-mono text-sm font-medium" style={{ color: "var(--green-text)" }}>
                {education.preUniversity}
              </p>
              <p className="font-mono text-xs" style={{ color: "rgba(57,255,20,0.4)" }}>
                Pre-University Education
              </p>
            </div>
          </div>
        </section>

        {/* ── Bum La Pass callout ── */}
        <section className="panel panel-glow p-8 border" style={{ borderColor: "var(--rebel-blue-neon)", boxShadow: "0 0 20px var(--rebel-blue-glow)" }}>
          <p className="font-mono text-xs mb-4" style={{ color: "rgba(59,130,246,0.6)" }}>// notable_achievement</p>
          <h3 className="font-mono text-xl font-bold mb-3" style={{ color: "var(--rebel-blue-neon)", textShadow: "0 0 12px var(--rebel-blue-glow)" }}>
            Silchar → Bum La Pass Expedition
          </h3>
          <p className="text-sm leading-relaxed" style={{ color: "rgba(74,222,128,0.65)" }}>
            {education.accomplishment}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {["Leadership", "Route Planning", "Safety Protocols", "High Altitude", "6-Member Team"].map(t => (
              <span key={t} className="tag" style={{ borderColor: "rgba(59,130,246,0.3)", color: "var(--rebel-blue-neon)" }}>{t}</span>
            ))}
          </div>
        </section>

      </div>
    </PageShell>
  );
}
