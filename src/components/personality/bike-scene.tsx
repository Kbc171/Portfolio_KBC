"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface BikeSceneProps {
  variant?: "home" | "about";
  className?: string;
}

export function BikeScene({ variant = "about", className = "" }: BikeSceneProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Scroll-driven: bike drifts horizontally (home) or parallax (about)
  const rawX = useTransform(
    scrollYProgress,
    [0, 1],
    variant === "home" ? [-80, 40] : [-40, 80]
  );
  const rawY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const rawRotate = useTransform(scrollYProgress, [0, 0.5, 1], [-2, 0, 2]);
  const rawOpacity = useTransform(
    scrollYProgress,
    [0, 0.12, 0.85, 1],
    [0, 1, 1, 0.2]
  );
  const rawScale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, 0.95]);

  const x = useSpring(rawX, { damping: 20, stiffness: 60 });
  const y = useSpring(rawY, { damping: 18, stiffness: 55 });
  const rotate = useSpring(rawRotate, { damping: 25, stiffness: 50 });

  // Wheel rotation: faster when scrolling
  const wheelRotate = useTransform(scrollYProgress, [0, 1], [0, 720]);

  return (
    <motion.div
      ref={ref}
      className={`relative select-none ${className}`}
      style={{ x, y, rotate, opacity: rawOpacity, scale: rawScale, position: "relative" }}
    >
      <svg
        width="520"
        height="280"
        viewBox="0 0 520 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          filter:
            "drop-shadow(0 0 20px rgba(59,130,246,0.5)) drop-shadow(0 0 6px rgba(59,130,246,0.4))",
        }}
        aria-label="Royal Enfield Hunter 350 — Rebel Blue"
      >
        <defs>
          <linearGradient id="bikeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient id="wheelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#1e40af" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="neonLine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
            <stop offset="50%" stopColor="#60a5fa" stopOpacity="1" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </linearGradient>
          <filter id="bikeBlur">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ── Ground line ── */}
        <line x1="60" y1="240" x2="460" y2="240" stroke="url(#neonLine)" strokeWidth="1" strokeOpacity="0.4" />

        {/* ── Rear Wheel ── */}
        <motion.g style={{ x: 130, y: 195, rotate: wheelRotate }}>
          <circle cx="0" cy="0" r="45" stroke="#3b82f6" strokeWidth="2" fill="none" />
          <circle cx="0" cy="0" r="38" stroke="#1d4ed8" strokeWidth="1" strokeOpacity="0.5" fill="url(#wheelGrad)" />
          {/* Spokes */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
            <line
              key={i}
              x1="0" y1="0"
              x2={Math.cos((angle * Math.PI) / 180) * 38}
              y2={Math.sin((angle * Math.PI) / 180) * 38}
              stroke="#60a5fa"
              strokeWidth="0.8"
              strokeOpacity="0.6"
            />
          ))}
          {/* Hub */}
          <circle cx="0" cy="0" r="7" fill="#1e40af" stroke="#60a5fa" strokeWidth="1.5" />
          <circle cx="0" cy="0" r="3" fill="#60a5fa" />
        </motion.g>

        {/* ── Front Wheel ── */}
        <motion.g style={{ x: 385, y: 195, rotate: wheelRotate }}>
          <circle cx="0" cy="0" r="45" stroke="#3b82f6" strokeWidth="2" fill="none" />
          <circle cx="0" cy="0" r="38" stroke="#1d4ed8" strokeWidth="1" strokeOpacity="0.5" fill="url(#wheelGrad)" />
          {/* Spokes */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
            <line
              key={i}
              x1="0" y1="0"
              x2={Math.cos((angle * Math.PI) / 180) * 38}
              y2={Math.sin((angle * Math.PI) / 180) * 38}
              stroke="#60a5fa"
              strokeWidth="0.8"
              strokeOpacity="0.6"
            />
          ))}
          {/* Hub */}
          <circle cx="0" cy="0" r="7" fill="#1e40af" stroke="#60a5fa" strokeWidth="1.5" />
          <circle cx="0" cy="0" r="3" fill="#60a5fa" />
        </motion.g>

        {/* ── Frame ── */}
        {/* Main backbone (downtube + top tube) */}
        <path
          d="M 175 195 L 200 130 L 260 115 L 340 118 L 385 150 L 385 195"
          stroke="url(#bikeGrad)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Seat stays */}
        <path
          d="M 175 195 L 220 130"
          stroke="#3b82f6"
          strokeWidth="2"
          strokeOpacity="0.8"
        />
        <path
          d="M 175 195 L 260 115"
          stroke="#3b82f6"
          strokeWidth="2"
          strokeOpacity="0.7"
        />
        {/* Chain stays */}
        <path
          d="M 130 195 L 200 130"
          stroke="#60a5fa"
          strokeWidth="1.5"
          strokeOpacity="0.6"
        />

        {/* ── Engine block ── */}
        <rect x="195" y="155" width="80" height="60" rx="6"
          fill="rgba(30,64,175,0.4)" stroke="#3b82f6" strokeWidth="1.5" />
        {/* Engine fins */}
        {[162, 170, 178, 186, 194, 202].map((y, i) => (
          <line key={i} x1="197" y1={y} x2="273" y2={y}
            stroke="#60a5fa" strokeWidth="0.6" strokeOpacity="0.5" />
        ))}

        {/* ── Tank ── */}
        <path
          d="M 210 115 Q 230 105 280 108 Q 320 110 340 118 L 330 148 Q 290 150 250 148 L 210 145 Z"
          fill="rgba(59,130,246,0.25)"
          stroke="#3b82f6"
          strokeWidth="1.5"
        />
        {/* Tank highlight */}
        <path
          d="M 225 118 Q 255 112 295 114 Q 315 116 325 122"
          fill="none"
          stroke="#93c5fd"
          strokeWidth="1"
          strokeOpacity="0.5"
        />
        {/* RE logo area */}
        <ellipse cx="272" cy="130" rx="20" ry="8" fill="none" stroke="#60a5fa" strokeWidth="0.8" strokeOpacity="0.6" />
        <text x="272" y="133" textAnchor="middle" fill="#93c5fd" fontSize="6" fontFamily="monospace" fillOpacity="0.8">RE</text>

        {/* ── Seat ── */}
        <path
          d="M 200 130 Q 215 118 270 116 L 270 128 Q 215 130 200 145 Z"
          fill="rgba(30,58,138,0.6)"
          stroke="#60a5fa"
          strokeWidth="1"
        />

        {/* ── Headlight ── */}
        <motion.ellipse
          cx="390" cy="148" rx="18" ry="14"
          fill="rgba(96,165,250,0.15)"
          stroke="#93c5fd"
          strokeWidth="1.5"
          animate={{ fill: ["rgba(96,165,250,0.1)", "rgba(96,165,250,0.3)", "rgba(96,165,250,0.1)"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Headlight beam */}
        <motion.path
          d="M 408 148 Q 440 148 460 135 M 408 148 Q 440 148 460 161"
          stroke="#93c5fd"
          strokeWidth="0.8"
          strokeOpacity="0.5"
          fill="none"
          animate={{ strokeOpacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* ── Tail light ── */}
        <motion.ellipse
          cx="158" cy="160" rx="10" ry="6"
          fill="rgba(239,68,68,0.2)"
          stroke="#ef4444"
          strokeWidth="1"
          animate={{ fill: ["rgba(239,68,68,0.1)", "rgba(239,68,68,0.5)", "rgba(239,68,68,0.1)"] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />

        {/* ── Fork (front suspension) ── */}
        <line x1="355" y1="148" x2="385" y2="195" stroke="#60a5fa" strokeWidth="2" strokeOpacity="0.8" />
        <line x1="370" y1="145" x2="385" y2="195" stroke="#3b82f6" strokeWidth="1.5" strokeOpacity="0.7" />
        {/* Handlebar */}
        <path d="M 345 138 Q 360 130 375 138" stroke="#93c5fd" strokeWidth="2" fill="none" strokeLinecap="round" />
        <circle cx="345" cy="138" r="4" fill="#3b82f6" stroke="#60a5fa" strokeWidth="1" />
        <circle cx="375" cy="138" r="4" fill="#3b82f6" stroke="#60a5fa" strokeWidth="1" />

        {/* ── Exhaust pipe ── */}
        <path
          d="M 215 215 Q 250 220 300 218 Q 340 216 360 218 Q 380 220 385 215"
          stroke="#94a3b8"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeOpacity="0.5"
        />
        <path
          d="M 215 215 Q 250 222 300 220 Q 340 218 360 220 Q 380 222 385 215"
          stroke="#475569"
          strokeWidth="1"
          fill="none"
          strokeOpacity="0.4"
        />
        {/* Exhaust heat shimmer particles */}
        <motion.g animate={{ opacity: [0, 1, 0], y: [-5, -20] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <circle cx="208" cy="210" r="2" fill="#94a3b8" fillOpacity="0.4" />
          <circle cx="204" cy="205" r="1.5" fill="#94a3b8" fillOpacity="0.3" />
          <circle cx="212" cy="208" r="1" fill="#94a3b8" fillOpacity="0.2" />
        </motion.g>

        {/* ── Rider silhouette (subtle) ── */}
        {/* Torso */}
        <path
          d="M 285 115 Q 290 90 300 85 Q 310 82 315 90 Q 318 100 310 115"
          fill="rgba(30,64,175,0.3)"
          stroke="#3b82f6"
          strokeWidth="1"
          strokeOpacity="0.5"
        />
        {/* Helmet */}
        <path
          d="M 296 88 Q 300 74 310 74 Q 322 74 326 82 Q 328 90 320 92 Q 310 94 298 92 Z"
          fill="rgba(30,64,175,0.5)"
          stroke="#60a5fa"
          strokeWidth="1"
        />
        {/* Visor */}
        <path
          d="M 298 84 Q 308 80 322 84"
          fill="none"
          stroke="#93c5fd"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {/* Arms */}
        <path d="M 300 100 Q 320 108 345 138" stroke="#3b82f6" strokeWidth="1.5" fill="none" strokeOpacity="0.7" />
        {/* Legs */}
        <path d="M 295 115 Q 275 155 260 170 Q 250 180 245 195" stroke="#3b82f6" strokeWidth="1.5" fill="none" strokeOpacity="0.6" />

        {/* ── Motion blur streaks ── */}
        <motion.g
          animate={{ opacity: [0, 0.4, 0], x: [-20, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        >
          <line x1="20" y1="185" x2="80" y2="185" stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.5" />
          <line x1="10" y1="195" x2="70" y2="195" stroke="#1d4ed8" strokeWidth="0.8" strokeOpacity="0.4" />
          <line x1="25" y1="205" x2="85" y2="205" stroke="#3b82f6" strokeWidth="0.6" strokeOpacity="0.3" />
          <line x1="15" y1="175" x2="60" y2="175" stroke="#60a5fa" strokeWidth="0.5" strokeOpacity="0.3" />
        </motion.g>
      </svg>

      {/* Caption */}
      <motion.div
        className="mt-3 text-center"
        animate={{ opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <p className="font-mono text-xs" style={{ color: "#60a5fa", textShadow: "0 0 8px rgba(59,130,246,0.6)" }}>
          {`// Royal Enfield Hunter 350 · Rebel Blue`}
        </p>
        <p className="font-mono text-xs mt-1" style={{ color: "rgba(96,165,250,0.5)" }}>
          {`// Silchar → Bum La Pass Expedition`}
        </p>
      </motion.div>
    </motion.div>
  );
}
