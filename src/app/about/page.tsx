"use client";

import { motion } from "framer-motion";
import { PageShell } from "@/components/layout/page-shell";
import { HoloCat } from "@/components/personality/holo-cat";
import { BikeScene } from "@/components/personality/bike-scene";
import { profile, aboutDetails, education } from "@/content/site-content";

export default function AboutPage() {
  return (
    <PageShell>
      <div className="space-y-16">

        {/* ══ HEADER ═══════════════════════════════════════════════ */}
        <section className="grid gap-8 lg:grid-cols-[1fr_auto] items-start">
          <div>
            <motion.p
              className="eyebrow mb-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              $ cat about.md
            </motion.p>
            <motion.h1
              className="font-mono text-4xl font-bold sm:text-5xl"
              style={{ color: "var(--green-neon)", textShadow: "var(--glow-green)" }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Identity.<br />
              <span style={{ color: "var(--green-text)" }}>Background.</span>
            </motion.h1>
            <motion.div
              className="site-rule mt-6 max-w-sm"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            />
            <motion.p
              className="mt-6 text-sm leading-relaxed max-w-lg"
              style={{ color: "rgba(74,222,128,0.65)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {aboutDetails.notes[0]}
            </motion.p>
          </div>
          {/* Holo cat on about page with scroll animation */}
          <div className="hidden lg:block">
            <HoloCat variant="about" className="opacity-90" />
          </div>
        </section>

        {/* ══ LOCATION DATA ════════════════════════════════════════ */}
        <section className="panel panel-glow p-8">
          <p className="eyebrow mb-6">// geo.coordinates</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { label: "ORIGIN", value: aboutDetails.hometown, sub: "Tamil Nadu, India" },
              { label: "BASE", value: aboutDetails.currentBase, sub: "Current location" },
              { label: "TIMEZONE", value: "IST UTC+5:30", sub: "Asia/Kolkata" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                className="relative"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <p className="font-mono text-xs mb-1 tracking-widest" style={{ color: "rgba(57,255,20,0.4)" }}>
                  [{item.label}]
                </p>
                <p className="font-mono text-xl font-medium" style={{ color: "var(--green-neon)", textShadow: "var(--glow-green-sm)" }}>
                  {item.value}
                </p>
                <p className="font-mono text-xs mt-0.5" style={{ color: "rgba(74,222,128,0.4)" }}>
                  {item.sub}
                </p>
                <motion.div
                  className="absolute -bottom-3 left-0 h-px w-full"
                  style={{ background: "var(--border-green)" }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* ══ LANGUAGE STACK ═══════════════════════════════════════ */}
        <section className="panel panel-glow p-8">
          <p className="eyebrow mb-6">// #define LANGUAGES</p>
          <div className="grid gap-3 sm:grid-cols-2">
            {aboutDetails.languages.map((lang, i) => (
              <motion.div
                key={lang}
                className="flex items-center gap-3 py-2 border-b"
                style={{ borderColor: "var(--border-dim)" }}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
              >
                <span className="font-mono text-xs" style={{ color: "var(--green-dim)" }}>
                  [{String(i + 1).padStart(2, "0")}]
                </span>
                <motion.div
                  className="h-1.5 rounded-full flex-1"
                  style={{ background: "var(--border-dim)" }}
                >
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: "linear-gradient(90deg, var(--green-dim), var(--green-neon))" }}
                    initial={{ width: "0%" }}
                    whileInView={{ width: i < 2 ? "95%" : i < 4 ? "85%" : "70%" }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 + 0.2, duration: 0.8 }}
                  />
                </motion.div>
                <span className="font-mono text-sm font-medium w-24" style={{ color: "var(--green-text)" }}>
                  {lang}
                </span>
              </motion.div>
            ))}
          </div>
          <p className="font-mono text-xs mt-4" style={{ color: "rgba(57,255,20,0.3)" }}>
            // Multilingual: rooted in a diverse linguistic environment
          </p>
        </section>

        {/* ══ ENGINEERING PHILOSOPHY ═══════════════════════════════ */}
        <section>
          <p className="eyebrow mb-6">// core.values[]</p>
          <div className="grid gap-4 sm:grid-cols-2">
            {aboutDetails.values.map((value, i) => (
              <motion.div
                key={value}
                className="panel panel-glow p-5"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -3 }}
              >
                <div className="flex items-start gap-3">
                  <motion.div
                    className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
                    style={{ background: "var(--green-neon)", boxShadow: "var(--glow-green-sm)" }}
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                  />
                  <div>
                    <p className="font-mono text-sm font-medium" style={{ color: "var(--green-neon)" }}>
                      {value}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ══ NOTES ════════════════════════════════════════════════ */}
        <section className="panel panel-glow p-8">
          <p className="eyebrow mb-6">// extended_notes.txt</p>
          <div className="space-y-6">
            {aboutDetails.notes.map((note, i) => (
              <motion.div
                key={i}
                className="flex gap-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
              >
                <span className="font-mono text-xs mt-1 flex-shrink-0" style={{ color: "var(--green-dim)" }}>
                  {`>>`}
                </span>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(74,222,128,0.7)" }}>
                  {note}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ══ ROYAL ENFIELD SCENE (About page - the story) ════════ */}
        <section className="panel panel-glow p-8 overflow-hidden">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div>
              <p className="eyebrow mb-3">// expedition.log</p>
              <h2 className="font-mono text-2xl font-bold mb-4" style={{ color: "var(--green-neon)", textShadow: "var(--glow-green-sm)" }}>
                Silchar → Bum La Pass
              </h2>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(74,222,128,0.65)" }}>
                {education.accomplishment}
              </p>
              <div className="terminal-window p-0">
                <div className="terminal-titlebar">
                  <span className="terminal-dot red" />
                  <span className="terminal-dot amber" />
                  <span className="terminal-dot green" />
                  <span className="font-mono text-xs ml-3" style={{ color: "rgba(57,255,20,0.5)" }}>mission.log</span>
                </div>
                <div className="terminal-content space-y-1 text-xs">
                  <p><span className="terminal-prompt">chandra@road:~$</span> <span className="terminal-cmd">crew --count 6</span></p>
                  <p className="terminal-output">// 6-member expedition team</p>
                  <p><span className="terminal-prompt">chandra@road:~$</span> <span className="terminal-cmd">route --from Silchar --to "Bum La Pass"</span></p>
                  <p className="terminal-output">// High altitude terrain mapped</p>
                  <p><span className="terminal-prompt">chandra@road:~$</span> <span className="terminal-cmd">status --vehicle "Hunter 350"</span></p>
                  <p className="terminal-output">// Royal Enfield Hunter 350 · Rebel Blue · Online</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <BikeScene variant="about" />
            </div>
          </div>
        </section>

      </div>
    </PageShell>
  );
}
