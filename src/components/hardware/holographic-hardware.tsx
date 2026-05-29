"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  FPGABoard, 
  ArduinoUno, 
  ESP32Module, 
  BluePill, 
  PCBFragment, 
  GenericIC 
} from "./floating-hardware";

interface HologramContainerProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

function HologramContainer({ children, className = "", delay = 0 }: HologramContainerProps) {
  const [nodeId, setNodeId] = React.useState<string | null>(null);

  React.useEffect(() => {
    setNodeId(Math.floor(Math.random() * 999).toString(16).toUpperCase());
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay }}
      className={`relative group cursor-pointer ${className}`}
    >
      {/* Glow Background */}
      <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      {/* Scanning Light Effect */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none z-10">
        <motion.div 
          className="w-full h-1 bg-primary/40 blur-sm absolute"
          animate={{ top: ["0%", "100%", "0%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Main Content (SVG Board) */}
      <div className="relative z-0 p-4 glass-card rounded-2xl border-primary/20 hover:border-primary/60 transition-all duration-500 transform group-hover:rotate-y-12">
        {children}
      </div>

      {/* Floating Metadata Label */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-[9px] font-mono text-primary font-bold tracking-widest uppercase py-1 px-2 rounded-md bg-background/80 border border-primary/40">
          SYSTEM_NODE_0x{nodeId || "..."}
        </span>
      </div>
    </motion.div>
  );
}

export function HolographicHardwareCluster() {
  return (
    <div className="relative w-full py-20 overflow-hidden flex flex-wrap justify-center gap-16 md:gap-24 px-6">
      <HologramContainer delay={0.2}>
        <FPGABoard size={180} />
      </HologramContainer>
      
      <HologramContainer delay={0.4} className="mt-12">
        <ArduinoUno size={140} />
      </HologramContainer>
      
      <HologramContainer delay={0.6}>
        <ESP32Module size={100} />
      </HologramContainer>
      
      <HologramContainer delay={0.8} className="mt-8 md:mt-20">
        <BluePill size={150} />
      </HologramContainer>

      <HologramContainer delay={1.0}>
        <GenericIC size={90} label="CHANDRA-v1" />
      </HologramContainer>

      <HologramContainer delay={1.2} className="md:mt-10">
        <PCBFragment size={160} />
      </HologramContainer>
    </div>
  );
}
