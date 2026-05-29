"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CursorTrail() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const trailRefs = useRef<Array<{ x: number; y: number }>>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef<number>(0);

  const springConfig = { damping: 28, stiffness: 400, mass: 0.5 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  useEffect(() => {
    if (window.matchMedia("(max-width: 768px)").matches) return;

    const TRAIL_LEN = 16;
    const trail: Array<{ x: number; y: number; alpha: number }> = Array.from(
      { length: TRAIL_LEN },
      () => ({ x: -100, y: -100, alpha: 0 })
    );

    let mouseX = -100;
    let mouseY = -100;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    let idx = 0;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update trail
      trail[idx] = { x: mouseX, y: mouseY, alpha: 1 };
      idx = (idx + 1) % TRAIL_LEN;

      // Draw trail dots
      for (let i = 0; i < TRAIL_LEN; i++) {
        const t = trail[(idx - i - 1 + TRAIL_LEN) % TRAIL_LEN];
        const alpha = (1 - i / TRAIL_LEN) * 0.6;
        const size = (1 - i / TRAIL_LEN) * 3;

        if (t.x > 0) {
          ctx.beginPath();
          ctx.arc(t.x, t.y, size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(57, 255, 20, ${alpha})`;
          ctx.shadowBlur = 6;
          ctx.shadowColor = "rgba(57, 255, 20, 0.8)";
          ctx.fill();
        }
      }

      animFrameRef.current = requestAnimationFrame(draw);
    };

    window.addEventListener("mousemove", onMove);
    draw();

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animFrameRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* Trail canvas */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0"
        style={{ zIndex: 99, mixBlendMode: "screen" }}
        aria-hidden="true"
      />

      {/* Crosshair reticle */}
      <motion.div
        className="pointer-events-none fixed"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          zIndex: 100,
        }}
        aria-hidden="true"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          {/* Outer ring */}
          <circle
            cx="12"
            cy="12"
            r="9"
            stroke="rgba(57,255,20,0.6)"
            strokeWidth="0.8"
          />
          {/* Cross hairs */}
          <line x1="12" y1="2" x2="12" y2="7" stroke="rgba(57,255,20,0.9)" strokeWidth="1" />
          <line x1="12" y1="17" x2="12" y2="22" stroke="rgba(57,255,20,0.9)" strokeWidth="1" />
          <line x1="2" y1="12" x2="7" y2="12" stroke="rgba(57,255,20,0.9)" strokeWidth="1" />
          <line x1="17" y1="12" x2="22" y2="12" stroke="rgba(57,255,20,0.9)" strokeWidth="1" />
          {/* Center dot */}
          <circle cx="12" cy="12" r="1.5" fill="rgba(57,255,20,1)" />
        </svg>
      </motion.div>
    </>
  );
}
