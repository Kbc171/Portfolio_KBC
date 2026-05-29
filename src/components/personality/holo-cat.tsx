"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface HoloCatProps {
  variant?: "home" | "about" | "contact";
  className?: string;
  scrollContainerRef?: React.RefObject<HTMLElement | null>;
}

export function HoloCat({ variant = "home", className = "", scrollContainerRef }: HoloCatProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Scroll-driven transforms
  const rawY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const rawRotate = useTransform(scrollYProgress, [0, 1], [-6, 6]);
  const rawScale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.85, 1, 1, 0.9]);
  const rawOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);

  const y = useSpring(rawY, { damping: 20, stiffness: 80 });
  const rotate = useSpring(rawRotate, { damping: 25, stiffness: 60 });
  const scale = useSpring(rawScale, { damping: 20, stiffness: 80 });

  const catColors = {
    home: { primary: "#39ff14", secondary: "#06b6d4", glow: "rgba(57,255,20,0.5)" },
    about: { primary: "#06b6d4", secondary: "#39ff14", glow: "rgba(6,182,212,0.5)" },
    contact: { primary: "#a78bfa", secondary: "#39ff14", glow: "rgba(167,139,250,0.5)" },
  };

  const colors = catColors[variant];

  return (
    <motion.div
      ref={ref}
      className={`relative select-none ${className}`}
      style={{ y, rotate, scale, opacity: rawOpacity, position: "relative" }}
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        <svg
          width="180"
          height="220"
          viewBox="0 0 180 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ filter: `drop-shadow(0 0 18px ${colors.glow}) drop-shadow(0 0 6px ${colors.glow})` }}
          className="animate-holo"
          aria-label="Holographic cat"
        >
          {/* Defs: circuit pattern + gradients */}
          <defs>
            <linearGradient id={`catBodyGrad-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={colors.primary} stopOpacity="0.3" />
              <stop offset="100%" stopColor={colors.secondary} stopOpacity="0.15" />
            </linearGradient>
            <linearGradient id={`catEdgeGrad-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={colors.primary} stopOpacity="0.9" />
              <stop offset="100%" stopColor={colors.secondary} stopOpacity="0.7" />
            </linearGradient>
            <filter id={`catGlow-${variant}`}>
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* ── Ears ── */}
          {/* Left ear */}
          <polygon
            points="28,72 50,28 72,72"
            fill={`url(#catBodyGrad-${variant})`}
            stroke={colors.primary}
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          {/* Left ear inner triangle */}
          <polygon
            points="37,66 50,38 63,66"
            fill="none"
            stroke={colors.secondary}
            strokeWidth="0.8"
            strokeOpacity="0.7"
            strokeLinejoin="round"
          />
          {/* Right ear */}
          <polygon
            points="108,72 130,28 152,72"
            fill={`url(#catBodyGrad-${variant})`}
            stroke={colors.primary}
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          {/* Right ear inner */}
          <polygon
            points="117,66 130,38 143,66"
            fill="none"
            stroke={colors.secondary}
            strokeWidth="0.8"
            strokeOpacity="0.7"
            strokeLinejoin="round"
          />

          {/* ── Head ── */}
          <path
            d="M22 90 Q22 68 42 62 L68 58 L90 56 L112 58 L138 62 Q158 68 158 90 L158 128 Q158 158 130 165 L90 170 L50 165 Q22 158 22 128 Z"
            fill={`url(#catBodyGrad-${variant})`}
            stroke={colors.primary}
            strokeWidth="1.5"
          />

          {/* ── Circuit board traces inside head ── */}
          {/* Horizontal lines */}
          <line x1="45" y1="95" x2="135" y2="95" stroke={colors.primary} strokeWidth="0.5" strokeOpacity="0.3" />
          <line x1="38" y1="110" x2="142" y2="110" stroke={colors.primary} strokeWidth="0.5" strokeOpacity="0.3" />
          <line x1="42" y1="125" x2="138" y2="125" stroke={colors.primary} strokeWidth="0.5" strokeOpacity="0.3" />
          <line x1="50" y1="140" x2="130" y2="140" stroke={colors.primary} strokeWidth="0.5" strokeOpacity="0.25" />
          {/* Vertical lines */}
          <line x1="60" y1="88" x2="60" y2="158" stroke={colors.primary} strokeWidth="0.5" strokeOpacity="0.25" />
          <line x1="90" y1="84" x2="90" y2="160" stroke={colors.primary} strokeWidth="0.5" strokeOpacity="0.25" />
          <line x1="120" y1="88" x2="120" y2="158" stroke={colors.primary} strokeWidth="0.5" strokeOpacity="0.25" />
          {/* Junction pads */}
          {[[60,95],[90,95],[120,95],[60,110],[90,110],[120,110],[60,125],[90,125],[120,125]].map(([cx,cy],i) => (
            <circle key={i} cx={cx} cy={cy} r="2" fill={colors.primary} fillOpacity="0.4" />
          ))}

          {/* ── Eyes ── */}
          {/* Left eye outer */}
          <ellipse cx="68" cy="108" rx="14" ry="16" fill="rgba(3,8,5,0.9)" stroke={colors.primary} strokeWidth="1.5" />
          {/* Left eye iris */}
          <ellipse cx="68" cy="108" rx="9" ry="12" fill={colors.primary} fillOpacity="0.15" stroke={colors.secondary} strokeWidth="1" />
          {/* Left eye pupil — vertical slit */}
          <ellipse cx="68" cy="108" rx="3" ry="9" fill={colors.primary} fillOpacity="0.9" />
          {/* Left eye scan line */}
          <motion.line
            x1="54" y1="108" x2="82" y2="108"
            stroke={colors.secondary}
            strokeWidth="0.8"
            strokeOpacity="0.8"
            animate={{ y1: [100, 116, 100], y2: [100, 116, 100] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Left eye shine */}
          <circle cx="63" cy="103" r="2" fill="white" fillOpacity="0.6" />

          {/* Right eye outer */}
          <ellipse cx="112" cy="108" rx="14" ry="16" fill="rgba(3,8,5,0.9)" stroke={colors.primary} strokeWidth="1.5" />
          {/* Right eye iris */}
          <ellipse cx="112" cy="108" rx="9" ry="12" fill={colors.primary} fillOpacity="0.15" stroke={colors.secondary} strokeWidth="1" />
          {/* Right eye pupil */}
          <ellipse cx="112" cy="108" rx="3" ry="9" fill={colors.primary} fillOpacity="0.9" />
          {/* Right eye scan line */}
          <motion.line
            x1="98" y1="108" x2="126" y2="108"
            stroke={colors.secondary}
            strokeWidth="0.8"
            strokeOpacity="0.8"
            animate={{ y1: [100, 116, 100], y2: [100, 116, 100] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
          />
          {/* Right eye shine */}
          <circle cx="107" cy="103" r="2" fill="white" fillOpacity="0.6" />

          {/* Blinking animation overlay */}
          <motion.ellipse
            cx="68" cy="108" rx="14" ry="16"
            fill="rgba(3,8,5,0.95)"
            animate={{ ry: [0, 0, 0, 0, 16, 0] }}
            transition={{ duration: 5, repeat: Infinity, times: [0, 0.7, 0.8, 0.85, 0.88, 0.92] }}
          />
          <motion.ellipse
            cx="112" cy="108" rx="14" ry="16"
            fill="rgba(3,8,5,0.95)"
            animate={{ ry: [0, 0, 0, 0, 16, 0] }}
            transition={{ duration: 5, repeat: Infinity, times: [0, 0.7, 0.8, 0.85, 0.88, 0.92], delay: 0.1 }}
          />

          {/* ── Nose ── */}
          <polygon points="90,132 85,138 95,138" fill={colors.secondary} fillOpacity="0.8" />
          <line x1="90" y1="138" x2="90" y2="146" stroke={colors.primary} strokeWidth="1" strokeOpacity="0.6" />
          <line x1="90" y1="146" x2="80" y2="150" stroke={colors.primary} strokeWidth="1" strokeOpacity="0.6" />
          <line x1="90" y1="146" x2="100" y2="150" stroke={colors.primary} strokeWidth="1" strokeOpacity="0.6" />

          {/* ── Whiskers ── */}
          {/* Left whiskers */}
          <motion.line x1="60" y1="136" x2="18" y2="130" stroke={colors.primary} strokeWidth="0.8" strokeOpacity="0.7"
            animate={{ strokeOpacity: [0.7, 1, 0.7] }} transition={{ duration: 3, repeat: Infinity }} />
          <motion.line x1="60" y1="140" x2="18" y2="142" stroke={colors.primary} strokeWidth="0.8" strokeOpacity="0.6"
            animate={{ strokeOpacity: [0.6, 0.9, 0.6] }} transition={{ duration: 3.5, repeat: Infinity, delay: 0.2 }} />
          <motion.line x1="60" y1="144" x2="20" y2="152" stroke={colors.primary} strokeWidth="0.8" strokeOpacity="0.5"
            animate={{ strokeOpacity: [0.5, 0.8, 0.5] }} transition={{ duration: 3.2, repeat: Infinity, delay: 0.4 }} />
          {/* Right whiskers */}
          <motion.line x1="120" y1="136" x2="162" y2="130" stroke={colors.primary} strokeWidth="0.8" strokeOpacity="0.7"
            animate={{ strokeOpacity: [0.7, 1, 0.7] }} transition={{ duration: 3, repeat: Infinity, delay: 0.1 }} />
          <motion.line x1="120" y1="140" x2="162" y2="142" stroke={colors.primary} strokeWidth="0.8" strokeOpacity="0.6"
            animate={{ strokeOpacity: [0.6, 0.9, 0.6] }} transition={{ duration: 3.5, repeat: Infinity, delay: 0.3 }} />
          <motion.line x1="120" y1="144" x2="160" y2="152" stroke={colors.primary} strokeWidth="0.8" strokeOpacity="0.5"
            animate={{ strokeOpacity: [0.5, 0.8, 0.5] }} transition={{ duration: 3.2, repeat: Infinity, delay: 0.5 }} />

          {/* ── Body ── */}
          <path
            d="M50 162 Q35 175 38 195 Q42 210 90 214 Q138 210 142 195 Q145 175 130 162 Q110 168 90 170 Q70 168 50 162 Z"
            fill={`url(#catBodyGrad-${variant})`}
            stroke={colors.primary}
            strokeWidth="1.2"
          />
          {/* Body circuit traces */}
          <line x1="65" y1="178" x2="115" y2="178" stroke={colors.primary} strokeWidth="0.5" strokeOpacity="0.25" />
          <line x1="60" y1="190" x2="120" y2="190" stroke={colors.primary} strokeWidth="0.5" strokeOpacity="0.2" />

          {/* ── Tail ── */}
          <motion.path
            d="M 130 210 Q 160 205 168 190 Q 175 175 165 165 Q 158 158 152 168"
            fill="none"
            stroke={colors.primary}
            strokeWidth="2"
            strokeLinecap="round"
            animate={{
              d: [
                "M 130 210 Q 160 205 168 190 Q 175 175 165 165 Q 158 158 152 168",
                "M 130 210 Q 158 210 168 198 Q 178 185 170 172 Q 163 162 155 170",
                "M 130 210 Q 155 208 163 196 Q 170 182 162 170 Q 156 161 150 170",
                "M 130 210 Q 160 205 168 190 Q 175 175 165 165 Q 158 158 152 168",
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* ── Holographic scan line across whole cat ── */}
          <motion.rect
            x="22" y="0" width="136" height="3"
            fill={colors.primary}
            fillOpacity="0.15"
            animate={{ y: [60, 215, 60] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
          />

          {/* ── Ear antenna tips ── */}
          <circle cx="50" cy="28" r="3" fill={colors.primary} className="animate-blink" />
          <circle cx="50" cy="28" r="6" fill="none" stroke={colors.primary} strokeWidth="0.8" strokeOpacity="0.4" className="animate-glow" />
          <circle cx="130" cy="28" r="3" fill={colors.secondary} className="animate-blink" style={{ animationDelay: "0.7s" }} />
          <circle cx="130" cy="28" r="6" fill="none" stroke={colors.secondary} strokeWidth="0.8" strokeOpacity="0.4" />
        </svg>

        {/* Holographic rings */}
        <motion.div
          className="absolute -bottom-4 left-1/2 -translate-x-1/2"
          animate={{ scaleX: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="120" height="24" viewBox="0 0 120 24" fill="none">
            <ellipse cx="60" cy="12" rx="56" ry="10" stroke={colors.primary} strokeWidth="1" strokeOpacity="0.5" />
            <ellipse cx="60" cy="12" rx="40" ry="7" stroke={colors.secondary} strokeWidth="0.5" strokeOpacity="0.3" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Variant label */}
      {variant === "home" && (
        <motion.div
          className="mt-6 text-center"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          <span className="eyebrow text-xs" style={{ color: colors.primary }}>
            // HOLO-CAT ONLINE
          </span>
        </motion.div>
      )}
    </motion.div>
  );
}
