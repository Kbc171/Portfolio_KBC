"use client";

import React, { useEffect, useRef } from "react";

interface OscilloscopeProps {
  type?: "sine" | "square" | "sawtooth" | "digital";
  amplitude?: number;
  frequency?: number;
  color?: string;
  className?: string;
  isHovered?: boolean;
}

export function OscilloscopeWave({
  type = "sine",
  amplitude = 20,
  frequency = 0.05,
  color = "#10B981",
  className = "",
  isHovered = false,
}: OscilloscopeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestRef = useRef<number>(0);
  const offsetRef = useRef<number>(0);
  const [isVisible, setIsVisible] = React.useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, { threshold: 0.1 });
    
    if (canvasRef.current) observer.observe(canvasRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !isVisible) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight || 150;
      }
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      const centerY = h / 2;

      ctx.clearRect(0, 0, w, h);

      // Draw Oscilloscope Grid
      ctx.strokeStyle = "rgba(16, 185, 129, 0.05)";
      ctx.lineWidth = 1;
      const gridSize = 30;
      for (let x = 0; x < w; x += gridSize) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
      }
      for (let y = 0; y < h; y += gridSize) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
      }

      // Draw Wave
      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.lineWidth = isHovered ? 3 : 2;
      ctx.shadowBlur = isHovered ? 15 : 5;
      ctx.shadowColor = color;

      const currentFreq = isHovered ? frequency * 2 : frequency;
      const currentAmp = isHovered ? amplitude * 1.5 : amplitude;

      for (let x = 0; x < w; x++) {
        let y = 0;
        const t = (x + offsetRef.current) * currentFreq;

        if (type === "sine") {
          y = Math.sin(t) * currentAmp;
        } else if (type === "square") {
          y = Math.sin(t) >= 0 ? currentAmp : -currentAmp;
        } else if (type === "sawtooth") {
          y = (t % (Math.PI * 2) / Math.PI - 1) * currentAmp;
        } else if (type === "digital") {
          // Randomized logic pulses
          y = Math.sin(t) > 0.8 ? currentAmp : Math.sin(t) < -0.8 ? -currentAmp : 0;
        }

        if (x === 0) ctx.moveTo(x, centerY + y);
        else ctx.lineTo(x, centerY + y);
      }
      ctx.stroke();

      offsetRef.current += isHovered ? 5 : 2;
      requestRef.current = requestAnimationFrame(draw);
    };

    if (isVisible) {
      draw();
    }

    return () => {
      cancelAnimationFrame(requestRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [type, amplitude, frequency, color, isHovered, isVisible]);

  return (
    <canvas 
      ref={canvasRef} 
      className={`w-full h-full rounded-xl bg-black/20 ${className}`}
    />
  );
}
