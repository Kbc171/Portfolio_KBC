"use client";

import { motion } from "framer-motion";
import { PageShell } from "@/components/layout/page-shell";
import { HoloCat } from "@/components/personality/holo-cat";
import { profile } from "@/content/site-content";

function RadarPing() {
  return (
    <div className="relative flex items-center justify-center w-48 h-48">
      {/* Ping rings */}
      {[1, 2, 3, 4].map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border"
          style={{
            width: `${i * 44}px`,
            height: `${i * 44}px`,
            borderColor: `rgba(57,255,20,${0.5 - i * 0.1})`,
            boxShadow: `0 0 ${i * 4}px rgba(57,255,20,${0.3 - i * 0.05})`,
          }}
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}
      {/* Scanning arm */}
      <motion.div
        className="absolute origin-center"
        style={{
          width: "50%",
          height: "1px",
          background: "linear-gradient(90deg, var(--green-neon), transparent)",
          boxShadow: "0 0 6px var(--green-neon)",
          left: "50%",
          top: "50%",
          transformOrigin: "0 50%",
        }}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />
      {/* Center dot */}
      <div
        className="absolute w-3 h-3 rounded-full animate-glow"
        style={{
          background: "var(--green-neon)",
          boxShadow: "var(--glow-green)",
        }}
      />
      {/* Online label */}
      <motion.p
        className="absolute -bottom-8 font-mono text-xs"
        style={{ color: "var(--green-neon)" }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        SIGNAL ACTIVE
      </motion.p>
    </div>
  );
}

export default function ContactPage() {
  return (
    <PageShell>
      <div className="space-y-16">

        {/* ── Header ── */}
        <section className="grid gap-8 lg:grid-cols-[1fr_auto] items-start">
          <div>
            <motion.p className="eyebrow mb-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              $ ping chandra --open-channel
            </motion.p>
            <motion.h1
              className="font-mono text-4xl font-bold sm:text-5xl mb-6"
              style={{ color: "var(--green-neon)", textShadow: "var(--glow-green)" }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Open<br />
              <span style={{ color: "var(--green-text)" }}>Channel</span>
            </motion.h1>
            <motion.p
              className="text-sm leading-relaxed max-w-md"
              style={{ color: "rgba(74,222,128,0.65)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {profile.availability}
            </motion.p>
          </div>
          {/* Holo cat goodbye variant */}
          <div className="hidden lg:block">
            <HoloCat variant="contact" />
          </div>
        </section>

        {/* ── Radar + Status ── */}
        <section className="grid gap-8 lg:grid-cols-[auto_1fr] items-center">
          <div className="flex justify-center">
            <RadarPing />
          </div>

          <div className="space-y-4 mt-8 lg:mt-0">
            <div className="panel panel-glow p-6">
              <p className="eyebrow mb-4">// availability.status</p>
              <div className="space-y-3">
                {[
                  { label: "Embedded Systems", active: true },
                  { label: "IoT Development", active: true },
                  { label: "FPGA / VLSI", active: true },
                  { label: "Hardware-Software Integration", active: true },
                  { label: "Mentoring / Teaching", active: true },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <motion.div
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{
                        background: item.active ? "var(--green-neon)" : "var(--green-dim)",
                        boxShadow: item.active ? "var(--glow-green-sm)" : "none",
                      }}
                      animate={item.active ? { opacity: [1, 0.3, 1] } : {}}
                      transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                    />
                    <span className="font-mono text-sm" style={{ color: "var(--green-text)" }}>
                      {item.label}
                    </span>
                    {item.active && (
                      <span className="ml-auto font-mono text-xs" style={{ color: "var(--green-neon)" }}>
                        OPEN
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Contact channels ── */}
        <section>
          <p className="eyebrow mb-6">// contact.channels[]</p>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                cmd: "$ mail chandra",
                label: "Email",
                value: profile.email,
                href: `mailto:${profile.email}`,
                color: "var(--green-neon)",
              },
              {
                cmd: "$ call chandra",
                label: "Phone",
                value: profile.phone,
                href: `tel:${profile.phone}`,
                color: "var(--cyan-neon)",
              },
              {
                cmd: "$ open linkedin",
                label: "LinkedIn",
                value: "k-b-chandrashekaran",
                href: profile.linkedin,
                color: "var(--amber-neon)",
              },
              {
                cmd: "$ open github",
                label: "GitHub",
                value: "github.com/KBC171",
                href: profile.github,
                color: "var(--green-primary)",
              },
            ].map((ch, i) => (
              <motion.a
                key={ch.label}
                href={ch.href}
                target={ch.href.startsWith("http") ? "_blank" : undefined}
                rel={ch.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="panel panel-glow p-5 block group transition-all duration-200"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4, borderColor: ch.color }}
              >
                <p className="font-mono text-xs mb-3" style={{ color: "rgba(57,255,20,0.4)" }}>
                  {ch.cmd}
                </p>
                <p className="font-mono text-xs mb-1" style={{ color: ch.color }}>
                  [{ch.label}]
                </p>
                <p className="font-mono text-sm font-medium" style={{ color: "var(--green-text)" }}>
                  {ch.value}
                </p>
                <div
                  className="mt-4 h-px transition-all duration-300"
                  style={{
                    background: `linear-gradient(90deg, ${ch.color}, transparent)`,
                    boxShadow: `0 0 6px ${ch.color}`,
                    opacity: 0.5,
                  }}
                />
              </motion.a>
            ))}
          </div>
        </section>

        {/* ── Resume download ── */}
        <section>
          <motion.a
            href="/KB_Chandrashekaran_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="panel panel-glow p-8 flex items-center justify-between gap-6 block group"
            whileHover={{ y: -4 }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <p className="font-mono text-xs mb-2" style={{ color: "rgba(57,255,20,0.4)" }}>
                $ cat KB_Chandrashekaran_Resume.pdf
              </p>
              <h3 className="font-mono text-xl font-bold" style={{ color: "var(--green-neon)", textShadow: "var(--glow-green-sm)" }}>
                Download Resume
              </h3>
              <p className="font-mono text-xs mt-1" style={{ color: "rgba(57,255,20,0.5)" }}>
                Full credentials, experience, and project details
              </p>
            </div>
            <motion.div
              className="font-mono text-3xl flex-shrink-0"
              style={{ color: "var(--green-neon)" }}
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ↓
            </motion.div>
          </motion.a>
        </section>

        {/* ── Transmission end ── */}
        <section className="text-center pb-8">
          <motion.div
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <div className="signal-rule mb-6" />
            <p className="font-mono text-xs" style={{ color: "rgba(57,255,20,0.4)" }}>
              // K B Chandrashekaran · Engineering Lab · {new Date().getFullYear()}
            </p>
            <p className="font-mono text-xs mt-1" style={{ color: "rgba(57,255,20,0.25)" }}>
              // END OF TRANSMISSION
            </p>
          </motion.div>
        </section>

      </div>
    </PageShell>
  );
}
