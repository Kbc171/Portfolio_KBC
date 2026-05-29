"use client";

import { motion } from "framer-motion";

/* ─────────────────────────────────────────────────────────
   Floating Hardware Components
   All boards rendered as detailed SVG line art in terminal green
   ───────────────────────────────────────────────────────── */

interface HwProps {
  className?: string;
  size?: number;
  delay?: number;
}

// ── FPGA: Artix-7 style board ──────────────────────────────
export function FPGABoard({ className = "", size = 160, delay = 0 }: HwProps) {
  return (
    <motion.div
      className={`hw-card ${className}`}
      animate={{ y: [0, -14, 0], rotate: [0, 1.5, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay }}
      whileHover={{ scale: 1.08, rotate: 5, filter: "drop-shadow(0 0 24px rgba(57,255,20,0.9))" }}
    >
      <svg width={size} height={Math.round(size * 0.72)} viewBox="0 0 160 115" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* PCB substrate */}
        <rect x="2" y="2" width="156" height="111" rx="3" fill="rgba(5,20,5,0.9)" stroke="#22c55e" strokeWidth="1.5" />
        {/* Board edge routing */}
        <rect x="6" y="6" width="148" height="103" rx="2" fill="none" stroke="rgba(57,255,20,0.2)" strokeWidth="0.5" />

        {/* FPGA chip (large square) */}
        <rect x="40" y="20" width="80" height="75" rx="2" fill="rgba(10,30,10,0.95)" stroke="#39ff14" strokeWidth="1.5" />
        {/* Chip label */}
        <text x="80" y="55" textAnchor="middle" fill="#39ff14" fontSize="8" fontFamily="monospace" fontWeight="bold">XILINX</text>
        <text x="80" y="65" textAnchor="middle" fill="#22c55e" fontSize="6" fontFamily="monospace">ARTIX-7</text>
        <text x="80" y="74" textAnchor="middle" fill="rgba(57,255,20,0.5)" fontSize="5" fontFamily="monospace">XC7A35T</text>
        {/* Chip pin dots - top */}
        {[46,54,62,70,78,86,94,102,110].map((x, i) => (
          <circle key={`t${i}`} cx={x} cy="20" r="1.5" fill="#16a34a" />
        ))}
        {/* Chip pin dots - bottom */}
        {[46,54,62,70,78,86,94,102,110].map((x, i) => (
          <circle key={`b${i}`} cx={x} cy="95" r="1.5" fill="#16a34a" />
        ))}
        {/* Chip pin dots - left */}
        {[28,36,44,52,60,68,76,84].map((y, i) => (
          <circle key={`l${i}`} cx="40" cy={y} r="1.5" fill="#16a34a" />
        ))}
        {/* Chip pin dots - right */}
        {[28,36,44,52,60,68,76,84].map((y, i) => (
          <circle key={`r${i}`} cx="120" cy={y} r="1.5" fill="#16a34a" />
        ))}

        {/* PCB traces */}
        <line x1="6" y1="35" x2="40" y2="35" stroke="#22c55e" strokeWidth="0.8" strokeOpacity="0.6" />
        <line x1="120" y1="45" x2="154" y2="45" stroke="#22c55e" strokeWidth="0.8" strokeOpacity="0.6" />
        <line x1="6" y1="70" x2="40" y2="70" stroke="#16a34a" strokeWidth="0.6" strokeOpacity="0.5" />
        <line x1="120" y1="70" x2="154" y2="70" stroke="#16a34a" strokeWidth="0.6" strokeOpacity="0.5" />

        {/* Status LEDs */}
        <motion.circle cx="15" cy="15" r="3" fill="#39ff14"
          animate={{ opacity: [1, 0.2, 1] }} transition={{ duration: 1.2, repeat: Infinity }} />
        <circle cx="15" cy="25" r="3" fill="#22c55e" fillOpacity="0.3" />

        {/* USB connector */}
        <rect x="6" y="50" width="10" height="14" rx="1" fill="rgba(10,30,10,0.9)" stroke="#22c55e" strokeWidth="1" />

        {/* Corner mounting holes */}
        <circle cx="12" cy="12" r="3" fill="none" stroke="rgba(57,255,20,0.4)" strokeWidth="1" />
        <circle cx="148" cy="12" r="3" fill="none" stroke="rgba(57,255,20,0.4)" strokeWidth="1" />
        <circle cx="12" cy="103" r="3" fill="none" stroke="rgba(57,255,20,0.4)" strokeWidth="1" />
        <circle cx="148" cy="103" r="3" fill="none" stroke="rgba(57,255,20,0.4)" strokeWidth="1" />
      </svg>
    </motion.div>
  );
}

// ── Arduino Uno ─────────────────────────────────────────────
export function ArduinoUno({ className = "", size = 130, delay = 0 }: HwProps) {
  return (
    <motion.div
      className={`hw-card ${className}`}
      animate={{ y: [0, -10, 0], rotate: [0, -2, 0] }}
      transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay }}
      whileHover={{ scale: 1.08, rotate: -5 }}
    >
      <svg width={size} height={Math.round(size * 1.1)} viewBox="0 0 130 142" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Board */}
        <path d="M 8 10 L 122 10 L 122 132 L 8 132 Q 2 132 2 126 L 2 16 Q 2 10 8 10 Z"
          fill="rgba(5,20,5,0.9)" stroke="#22c55e" strokeWidth="1.5" />
        {/* USB-B port */}
        <rect x="2" y="28" width="12" height="20" rx="1" fill="rgba(15,35,15,0.9)" stroke="#39ff14" strokeWidth="1" />

        {/* ATmega chip */}
        <rect x="42" y="45" width="46" height="52" rx="2" fill="rgba(8,25,8,0.95)" stroke="#22c55e" strokeWidth="1.2" />
        <text x="65" y="68" textAnchor="middle" fill="#39ff14" fontSize="6" fontFamily="monospace">ATmega</text>
        <text x="65" y="78" textAnchor="middle" fill="#22c55e" fontSize="6" fontFamily="monospace">328P</text>
        {/* Chip pins */}
        {[50,57,64,71,78,85].map((y,i) => (
          <g key={i}>
            <line x1="36" y1={y} x2="42" y2={y} stroke="#16a34a" strokeWidth="0.8" />
            <line x1="88" y1={y} x2="94" y2={y} stroke="#16a34a" strokeWidth="0.8" />
          </g>
        ))}

        {/* Crystal oscillator */}
        <rect x="95" y="55" width="16" height="8" rx="2" fill="rgba(5,20,5,0.9)" stroke="#16a34a" strokeWidth="0.8" />

        {/* Power LED */}
        <motion.circle cx="108" cy="20" r="3" fill="#39ff14"
          animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.5, repeat: Infinity }} />
        {/* L LED (pin 13) */}
        <motion.circle cx="96" cy="20" r="3" fill="#f59e0b"
          animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 0.8, repeat: Infinity }} />

        {/* Digital pin header (top) */}
        {[18,26,34,42,50,58,66,74,82,90,98,106,114].map((x,i) => (
          <rect key={i} x={x-3} y="10" width="6" height="6" rx="0.5" fill="rgba(10,30,10,0.9)" stroke="#16a34a" strokeWidth="0.7" />
        ))}

        {/* Analog pin header (bottom) */}
        {[22,34,46,58,70,82].map((x,i) => (
          <rect key={i} x={x-3} y="128" width="6" height="6" rx="0.5" fill="rgba(10,30,10,0.9)" stroke="#16a34a" strokeWidth="0.7" />
        ))}

        {/* Power pins */}
        {[94,106,118].map((x,i) => (
          <rect key={i} x={x-3} y="128" width="6" height="6" rx="0.5" fill="rgba(10,30,10,0.9)" stroke="#22c55e" strokeWidth="0.7" />
        ))}

        {/* Reset button */}
        <rect x="104" y="35" width="12" height="12" rx="2" fill="rgba(5,20,5,0.9)" stroke="#22c55e" strokeWidth="1" />
        <circle cx="110" cy="41" r="3" fill="#dc2626" fillOpacity="0.8" />

        {/* ARDUINO label */}
        <text x="50" y="130" fill="rgba(57,255,20,0.4)" fontSize="7" fontFamily="monospace">ARDUINO UNO</text>

        {/* Corner holes */}
        <circle cx="14" cy="20" r="3" fill="none" stroke="rgba(57,255,20,0.4)" strokeWidth="1" />
        <circle cx="116" cy="120" r="3" fill="none" stroke="rgba(57,255,20,0.4)" strokeWidth="1" />
      </svg>
    </motion.div>
  );
}

// ── ESP32 Module ────────────────────────────────────────────
export function ESP32Module({ className = "", size = 90, delay = 0 }: HwProps) {
  return (
    <motion.div
      className={`hw-card ${className}`}
      animate={{ y: [0, -8, 4, 0], rotate: [0, 3, -1, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay }}
      whileHover={{ scale: 1.1, rotate: 8 }}
    >
      <svg width={size} height={Math.round(size * 1.7)} viewBox="0 0 90 155" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Module body */}
        <rect x="2" y="2" width="86" height="151" rx="3" fill="rgba(5,20,5,0.9)" stroke="#22c55e" strokeWidth="1.5" />
        <rect x="6" y="6" width="78" height="143" rx="2" fill="none" stroke="rgba(57,255,20,0.12)" strokeWidth="0.5" />

        {/* WiFi/BT antenna module at top */}
        <rect x="15" y="6" width="60" height="35" rx="2" fill="rgba(15,35,15,0.8)" stroke="#16a34a" strokeWidth="1" />
        <text x="45" y="20" textAnchor="middle" fill="#39ff14" fontSize="7" fontFamily="monospace" fontWeight="bold">ESP32</text>
        <text x="45" y="30" textAnchor="middle" fill="#22c55e" fontSize="5" fontFamily="monospace">WROOM-32</text>
        {/* Antenna */}
        <rect x="35" y="6" width="20" height="3" fill="#22c55e" fillOpacity="0.4" />

        {/* Main chip */}
        <rect x="25" y="50" width="40" height="40" rx="1" fill="rgba(8,25,8,0.95)" stroke="#22c55e" strokeWidth="1" />
        <text x="45" y="68" textAnchor="middle" fill="#39ff14" fontSize="5.5" fontFamily="monospace">ESP32</text>
        <text x="45" y="78" textAnchor="middle" fill="rgba(57,255,20,0.6)" fontSize="4.5" fontFamily="monospace">D0WDQ6</text>
        {/* Chip pins */}
        {[54,60,66,72,78,84].map((y,i) => (
          <g key={i}>
            <circle cx="25" cy={y} r="1" fill="#16a34a" />
            <circle cx="65" cy={y} r="1" fill="#16a34a" />
          </g>
        ))}

        {/* Status LED */}
        <motion.circle cx="75" cy="110" r="2.5" fill="#06b6d4"
          animate={{ opacity: [1, 0.2, 1] }} transition={{ duration: 1, repeat: Infinity }} />

        {/* Pin rows (left) */}
        {[100,108,116,124,132,140].map((y,i) => (
          <rect key={i} x="2" y={y-3} width="6" height="6" rx="0.5" fill="rgba(5,20,5,0.9)" stroke="#16a34a" strokeWidth="0.7" />
        ))}
        {/* Pin rows (right) */}
        {[100,108,116,124,132,140].map((y,i) => (
          <rect key={i} x="82" y={y-3} width="6" height="6" rx="0.5" fill="rgba(5,20,5,0.9)" stroke="#16a34a" strokeWidth="0.7" />
        ))}

        {/* Boot button */}
        <rect x="10" y="108" width="12" height="8" rx="1" fill="rgba(5,20,5,0.9)" stroke="#22c55e" strokeWidth="0.8" />
        <circle cx="16" cy="112" r="2.5" fill="#1d4ed8" fillOpacity="0.8" />

        {/* Reset button */}
        <rect x="68" y="108" width="12" height="8" rx="1" fill="rgba(5,20,5,0.9)" stroke="#22c55e" strokeWidth="0.8" />
        <circle cx="74" cy="112" r="2.5" fill="#dc2626" fillOpacity="0.8" />

        {/* USB-C port */}
        <rect x="32" y="147" width="26" height="6" rx="2" fill="rgba(10,30,10,0.9)" stroke="#39ff14" strokeWidth="1" />
      </svg>
    </motion.div>
  );
}

// ── STM32 Blue Pill ─────────────────────────────────────────
export function BluePill({ className = "", size = 80, delay = 0 }: HwProps) {
  return (
    <motion.div
      className={`hw-card ${className}`}
      animate={{ y: [0, -12, 0], rotate: [2, -2, 2] }}
      transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay }}
      whileHover={{ scale: 1.12, rotate: -10 }}
    >
      <svg width={size} height={Math.round(size * 0.45)} viewBox="0 0 160 72" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Board (pill shape) */}
        <rect x="2" y="2" width="156" height="68" rx="6" fill="rgba(5,20,5,0.9)" stroke="#22c55e" strokeWidth="1.5" />

        {/* STM32 chip */}
        <rect x="55" y="14" width="50" height="44" rx="1" fill="rgba(8,25,8,0.95)" stroke="#39ff14" strokeWidth="1" />
        <text x="80" y="34" textAnchor="middle" fill="#39ff14" fontSize="6" fontFamily="monospace" fontWeight="bold">STM32F1</text>
        <text x="80" y="43" textAnchor="middle" fill="#22c55e" fontSize="5" fontFamily="monospace">03C8T6</text>
        {/* Pin dots around chip */}
        {[18,25,32,39,46].map((y,i) => (
          <g key={i}>
            <circle cx="55" cy={y} r="1.5" fill="#16a34a" />
            <circle cx="105" cy={y} r="1.5" fill="#16a34a" />
          </g>
        ))}
        {[65,76].map((x,i) => (
          <g key={i}>
            <circle cx={x} cy="14" r="1.5" fill="#16a34a" />
            <circle cx={x} cy="58" r="1.5" fill="#16a34a" />
          </g>
        ))}

        {/* Crystal */}
        <rect x="115" y="25" width="20" height="10" rx="2" fill="rgba(5,20,5,0.9)" stroke="#16a34a" strokeWidth="0.8" />

        {/* Pin rows (left) */}
        {[10,18,26,34,42,50,58].map((y,i) => (
          <circle key={i} cx="8" cy={y+6} r="2" fill="none" stroke="#16a34a" strokeWidth="0.8" />
        ))}
        {/* Pin rows (right) */}
        {[10,18,26,34,42,50,58].map((y,i) => (
          <circle key={i} cx="152" cy={y+6} r="2" fill="none" stroke="#16a34a" strokeWidth="0.8" />
        ))}

        {/* LEDs */}
        <motion.circle cx="25" cy="18" r="3" fill="#39ff14"
          animate={{ opacity: [1, 0.2, 1] }} transition={{ duration: 1.8, repeat: Infinity }} />
        <motion.circle cx="35" cy="18" r="3" fill="#f59e0b"
          animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 0.6, repeat: Infinity }} />

        {/* Boot pins */}
        <rect x="26" y="30" width="8" height="18" rx="1" fill="rgba(5,20,5,0.9)" stroke="#22c55e" strokeWidth="0.8" />
        <text x="30" y="41" textAnchor="middle" fill="rgba(57,255,20,0.5)" fontSize="4" fontFamily="monospace">B0</text>

        {/* USB-C connector */}
        <rect x="140" y="28" width="16" height="16" rx="2" fill="rgba(5,20,5,0.9)" stroke="#39ff14" strokeWidth="1" />

        {/* Label */}
        <text x="80" y="68" textAnchor="middle" fill="rgba(57,255,20,0.35)" fontSize="5" fontFamily="monospace">BLUE PILL STM32</text>
      </svg>
    </motion.div>
  );
}

// ── Generic IC (DIP Package) ────────────────────────────────
export function GenericIC({ className = "", size = 70, delay = 0, label = "74HC595" }: HwProps & { label?: string }) {
  const pins = 8;
  const pinSpacing = 8;
  const chipH = pins * pinSpacing + 4;

  return (
    <motion.div
      className={`hw-card ${className}`}
      animate={{ y: [0, -6, 6, 0], rotate: [0, 4, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay }}
      whileHover={{ scale: 1.15 }}
    >
      <svg width={size} height={Math.round(size * 1.2)} viewBox="0 0 60 80" fill="none">
        {/* DIP body */}
        <rect x="10" y="8" width="40" height={chipH} rx="2" fill="rgba(8,25,8,0.95)" stroke="#22c55e" strokeWidth="1.2" />
        {/* Notch */}
        <path d="M 26 8 Q 30 4 34 8" fill="none" stroke="#22c55e" strokeWidth="1" />
        {/* Label */}
        <text x="30" y="32" textAnchor="middle" fill="#39ff14" fontSize="5" fontFamily="monospace" fontWeight="bold">{label}</text>

        {/* Left pins */}
        {Array.from({length: pins/2}, (_,i) => (
          <g key={i}>
            <line x1="2" y1={14 + i*pinSpacing} x2="10" y2={14 + i*pinSpacing} stroke="#16a34a" strokeWidth="1.2" />
            <text x="8" y={16 + i*pinSpacing} textAnchor="end" fill="rgba(57,255,20,0.4)" fontSize="3.5" fontFamily="monospace">{i+1}</text>
          </g>
        ))}
        {/* Right pins */}
        {Array.from({length: pins/2}, (_,i) => (
          <g key={i}>
            <line x1="50" y1={14 + (pins/2-1-i)*pinSpacing} x2="58" y2={14 + (pins/2-1-i)*pinSpacing} stroke="#16a34a" strokeWidth="1.2" />
            <text x="52" y={16 + (pins/2-1-i)*pinSpacing} fill="rgba(57,255,20,0.4)" fontSize="3.5" fontFamily="monospace">{pins-i}</text>
          </g>
        ))}
      </svg>
    </motion.div>
  );
}

// ── PCB Fragment ────────────────────────────────────────────
export function PCBFragment({ className = "", size = 100, delay = 0 }: HwProps) {
  return (
    <motion.div
      className={`hw-card ${className}`}
      animate={{ y: [0, -8, 0], rotate: [0, 3, -1, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay }}
      whileHover={{ scale: 1.06, rotate: 4 }}
    >
      <svg width={size} height={Math.round(size * 0.75)} viewBox="0 0 120 90" fill="none">
        <rect x="1" y="1" width="118" height="88" rx="3" fill="rgba(5,20,5,0.85)" stroke="#22c55e" strokeWidth="1.2" />
        {/* PCB trace grid */}
        {[15,30,45,60,75,90,105].map((x,i) => (
          <line key={i} x1={x} y1="1" x2={x} y2="89" stroke="#22c55e" strokeWidth="0.4" strokeOpacity="0.25" />
        ))}
        {[15,30,45,60,75].map((y,i) => (
          <line key={i} x1="1" y1={y} x2="119" y2={y} stroke="#22c55e" strokeWidth="0.4" strokeOpacity="0.25" />
        ))}
        {/* Trace paths */}
        <path d="M 10 15 L 40 15 L 40 45 L 80 45 L 80 75 L 110 75" stroke="#39ff14" strokeWidth="1.2" fill="none" strokeOpacity="0.8" />
        <path d="M 10 30 L 60 30 L 60 60 L 110 60" stroke="#22c55e" strokeWidth="0.8" fill="none" strokeOpacity="0.6" />
        <path d="M 30 75 L 30 45 L 90 45" stroke="#16a34a" strokeWidth="0.8" fill="none" strokeOpacity="0.5" />
        {/* Junction pads */}
        {[[40,15],[40,45],[80,45],[80,75],[60,30],[60,60],[30,45],[30,75],[90,45]].map(([x,y],i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="4" fill="rgba(5,20,5,0.9)" stroke="#39ff14" strokeWidth="1" />
            <circle cx={x} cy={y} r="1.5" fill="#39ff14" />
          </g>
        ))}
        {/* SMD components */}
        <rect x="50" y="22" width="14" height="6" rx="1" fill="rgba(10,30,10,0.9)" stroke="#16a34a" strokeWidth="0.8" />
        <rect x="70" y="55" width="10" height="8" rx="1" fill="rgba(10,30,10,0.9)" stroke="#16a34a" strokeWidth="0.8" />
        {/* Corner holes */}
        <circle cx="8" cy="8" r="3" fill="none" stroke="rgba(57,255,20,0.4)" strokeWidth="0.8" />
        <circle cx="112" cy="8" r="3" fill="none" stroke="rgba(57,255,20,0.4)" strokeWidth="0.8" />
        <circle cx="8" cy="82" r="3" fill="none" stroke="rgba(57,255,20,0.4)" strokeWidth="0.8" />
        <circle cx="112" cy="82" r="3" fill="none" stroke="rgba(57,255,20,0.4)" strokeWidth="0.8" />
      </svg>
    </motion.div>
  );
}
