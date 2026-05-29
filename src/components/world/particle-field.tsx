"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  size: number;
  pulsePhase: number;
  connected: boolean;
}

export function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const PARTICLE_COUNT = window.innerWidth < 768 ? 40 : 90;
    const CONNECTION_DIST = 160;
    const MOUSE_REPEL = 120;

    let particles: Particle[] = [];
    let w = 0, h = 0;

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMouseMove);

    // Init particles
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.5 + 0.1,
        size: Math.random() * 1.5 + 0.5,
        pulsePhase: Math.random() * Math.PI * 2,
        connected: false,
      });
    }

    let t = 0;
    const draw = () => {
      t += 0.01;
      ctx.clearRect(0, 0, w, h);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // Update + draw particles
      for (const p of particles) {
        // Mouse repulsion
        const dx = p.x - mx;
        const dy = p.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MOUSE_REPEL) {
          const force = (MOUSE_REPEL - dist) / MOUSE_REPEL * 0.015;
          p.vx += dx * force;
          p.vy += dy * force;
        }

        // Damping
        p.vx *= 0.99;
        p.vy *= 0.99;
        p.vx = Math.max(-0.8, Math.min(0.8, p.vx));
        p.vy = Math.max(-0.8, Math.min(0.8, p.vy));

        p.x += p.vx;
        p.y += p.vy;

        // Wrap around edges
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        // Pulse alpha
        const pulsedAlpha = p.alpha + Math.sin(t + p.pulsePhase) * 0.12;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(57, 255, 20, ${Math.max(0.05, pulsedAlpha)})`;
        ctx.shadowBlur = 4;
        ctx.shadowColor = "rgba(57, 255, 20, 0.6)";
        ctx.fill();
      }

      // Draw connections
      ctx.shadowBlur = 0;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < CONNECTION_DIST) {
            const alpha = (1 - d / CONNECTION_DIST) * 0.12;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(57, 255, 20, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Occasional signal pulse along a random connection
      if (Math.random() < 0.003 && particles.length > 2) {
        const ia = Math.floor(Math.random() * particles.length);
        const ib = Math.floor(Math.random() * particles.length);
        const a = particles[ia];
        const b = particles[ib];
        const gradient = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
        gradient.addColorStop(0, "rgba(57, 255, 20, 0)");
        gradient.addColorStop(0.5, "rgba(57, 255, 20, 0.6)");
        gradient.addColorStop(1, "rgba(57, 255, 20, 0)");
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      animRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0"
      style={{ zIndex: 0, mixBlendMode: "screen", opacity: 0.65 }}
      aria-hidden="true"
    />
  );
}
