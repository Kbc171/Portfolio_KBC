"use client";

import { useEffect, useRef } from "react";

interface Point {
  x: number;
  y: number;
}

export function PCBFollower() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const pointsRef = useRef<Point[]>([]);
  const animRef = useRef<number>(0);

  const POINT_COUNT = 8;
  const STEP_SIZE = 25; // Size of the "Manhattan" steps

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = window.innerWidth;
    let h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;

    const startX = w / 2;
    const startY = h / 2;
    mouseRef.current = { x: startX, y: startY };
    pointsRef.current = Array.from({ length: POINT_COUNT }, () => ({ x: startX, y: startY }));

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, w, h);

      const points = pointsRef.current;

      // 1. Point 0 follows the mouse with "Manhattan" logic
      // It tries to align X first then Y, or vice versa
      const head = points[0];
      const dx = mouseRef.current.x - head.x;
      const dy = mouseRef.current.y - head.y;

      if (Math.abs(dx) > Math.abs(dy)) {
        head.x += dx * 0.2;
      } else {
        head.y += dy * 0.2;
      }

      // 2. Each subsequent point follows the one before it with orthogonal movement
      for (let i = 1; i < POINT_COUNT; i++) {
        const prev = points[i - 1];
        const curr = points[i];
        
        const pdx = prev.x - curr.x;
        const pdy = prev.y - curr.y;

        // Move only in one axis at a time to create the "PCB Trace" look
        if (Math.abs(pdx) > 10) {
          curr.x += pdx * 0.15;
        } else if (Math.abs(pdy) > 10) {
          curr.y += pdy * 0.15;
        }
      }

      // 3. Draw the PCB Trace
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      
      for (let i = 1; i < POINT_COUNT; i++) {
        ctx.lineTo(points[i].x, points[i].y);
      }

      // Glow effect for the trace
      ctx.strokeStyle = "rgba(16, 185, 129, 0.25)";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Draw "Vias" at the corners and nodes
      points.forEach((p, i) => {
        if (i % 3 === 0) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
          ctx.fillStyle = "#10B981";
          ctx.fill();
          
          // Outer ring for the via
          ctx.beginPath();
          ctx.arc(p.x, p.y, 5, 0, Math.PI * 2);
          ctx.strokeStyle = "rgba(16, 185, 129, 0.3)";
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });

      // 4. Draw occasional floating "Bits" (0s and 1s) along the trace
      if (Math.random() < 0.1) {
        const randomPoint = points[Math.floor(Math.random() * points.length)];
        ctx.font = "8px monospace";
        ctx.fillStyle = "rgba(16, 185, 129, 0.5)";
        ctx.fillText(Math.random() > 0.5 ? "1" : "0", randomPoint.x + 10, randomPoint.y - 10);
      }

      animRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 9999 }}
    />
  );
}
