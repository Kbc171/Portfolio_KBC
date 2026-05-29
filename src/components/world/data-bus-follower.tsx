"use client";

import { useEffect, useRef } from "react";

interface Point {
  x: number;
  y: number;
}

export function DataBusFollower() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const pointsRef = useRef<Point[]>([]);
  const animRef = useRef<number>(0);

  const POINT_COUNT = 20;
  const BUS_WIDTH = 4; // Number of parallel lines
  const LINE_SPACING = 6;

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

      // 1. Follow logic (smooth lerp)
      points[0].x += (mouseRef.current.x - points[0].x) * 0.25;
      points[0].y += (mouseRef.current.y - points[0].y) * 0.25;

      for (let i = 1; i < POINT_COUNT; i++) {
        points[i].x += (points[i - 1].x - points[i].x) * 0.35;
        points[i].y += (points[i - 1].y - points[i].y) * 0.35;
      }

      // 2. Draw the "Data Bus"
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      for (let line = 0; line < BUS_WIDTH; line++) {
        const offset = (line - (BUS_WIDTH - 1) / 2) * LINE_SPACING;
        
        ctx.beginPath();
        ctx.moveTo(points[0].x + offset, points[0].y + offset);

        for (let i = 1; i < POINT_COUNT - 1; i++) {
          const xc = (points[i].x + points[i + 1].x) / 2 + offset;
          const yc = (points[i].y + points[i + 1].y) / 2 + offset;
          ctx.quadraticCurveTo(points[i].x + offset, points[i].y + offset, xc, yc);
        }

        // Pulse logic (simulating data bits)
        const time = Date.now() * 0.005;
        const alpha = 0.1 + Math.sin(time + line) * 0.05;
        
        ctx.strokeStyle = `rgba(16, 185, 129, ${alpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        // High-intensity data "packets"
        ctx.beginPath();
        const packetIdx = Math.floor((time * 2 + line * 5) % (POINT_COUNT - 2));
        const p1 = points[packetIdx];
        const p2 = points[packetIdx + 1];
        
        ctx.moveTo(p1.x + offset, p1.y + offset);
        ctx.lineTo(p2.x + offset, p2.y + offset);
        
        ctx.strokeStyle = `rgba(16, 185, 129, 0.8)`;
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Glow for packet
        ctx.shadowBlur = 8;
        ctx.shadowColor = "#10B981";
        ctx.stroke();
        ctx.shadowBlur = 0;
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
