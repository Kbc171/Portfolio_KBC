"use client";

import { useEffect, useRef } from "react";

interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

export function DotFollower() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const pointsRef = useRef<Point[]>([]);
  const animRef = useRef<number>(0);

  // Physics Constants for a "Liquid/Elastic Snake"
  const POINT_COUNT = 25;
  const SPRING_FORCE = 0.4;
  const FRICTION = 0.75;
  const MOUSE_STRENGTH = 0.5;

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
    
    // Initialize points with velocity
    pointsRef.current = Array.from({ length: POINT_COUNT }, () => ({
      x: startX,
      y: startY,
      vx: 0,
      vy: 0,
    }));

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

      // Update Points (Spring Chain Physics)
      for (let i = 0; i < POINT_COUNT; i++) {
        const p = points[i];
        
        // Target is the mouse for the first point, else the previous point
        const targetX = i === 0 ? mouseRef.current.x : points[i - 1].x;
        const targetY = i === 0 ? mouseRef.current.y : points[i - 1].y;

        // Spring Force
        const ax = (targetX - p.x) * (i === 0 ? MOUSE_STRENGTH : SPRING_FORCE);
        const ay = (targetY - p.y) * (i === 0 ? MOUSE_STRENGTH : SPRING_FORCE);

        p.vx += ax;
        p.vy += ay;

        // Friction
        p.vx *= FRICTION;
        p.vy *= FRICTION;

        p.x += p.vx;
        p.y += p.vy;
      }

      // Draw the "Elastic Snake"
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      // 1. Draw glowing background trail
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      for (let i = 1; i < POINT_COUNT - 1; i++) {
        const xc = (points[i].x + points[i + 1].x) / 2;
        const yc = (points[i].y + points[i + 1].y) / 2;
        ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
      }
      ctx.strokeStyle = "rgba(16, 185, 129, 0.15)";
      ctx.lineWidth = 15;
      ctx.shadowBlur = 25;
      ctx.shadowColor = "#10B981";
      ctx.stroke();

      // 2. Draw the core snake body with tapering segments
      for (let i = 0; i < POINT_COUNT - 1; i++) {
        const size = Math.max(1, 10 * (1 - i / POINT_COUNT));
        const alpha = 1 - i / POINT_COUNT;

        ctx.beginPath();
        ctx.moveTo(points[i].x, points[i].y);
        ctx.lineTo(points[i + 1].x, points[i + 1].y);
        
        // Gradient color from primary to secondary
        ctx.strokeStyle = i % 2 === 0 ? `rgba(16, 185, 129, ${alpha})` : `rgba(52, 211, 153, ${alpha})`;
        ctx.lineWidth = size;
        ctx.stroke();

        // Dots at joints
        if (i % 2 === 0) {
          ctx.beginPath();
          ctx.arc(points[i].x, points[i].y, size / 1.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(16, 185, 129, ${alpha})`;
          ctx.fill();
        }
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
      style={{ zIndex: 9999, opacity: 0.9 }}
    />
  );
}
