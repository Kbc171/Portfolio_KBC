"use client";

import React, { useEffect, useRef, useState } from "react";

interface TextPressureProps {
  text: string;
  fontSize?: string;
  maxDistance?: number;
  className?: string;
  py?: string;
}

export function TextPressure({
  text,
  fontSize = "clamp(3rem, 10vw, 8rem)",
  maxDistance = 300,
  className = "",
  py = "py-8",
}: TextPressureProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const charsRef = useRef<(HTMLSpanElement | null)[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Inject Roboto Flex Variable Font
    if (!document.getElementById("roboto-flex-font")) {
      const link = document.createElement("link");
      link.id = "roboto-flex-font";
      link.rel = "stylesheet";
      link.href = "https://fonts.googleapis.com/css2?family=Roboto+Flex:wght@100..1000&display=swap";
      document.head.appendChild(link);
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);

    let rafId: number;

    const update = () => {
      charsRef.current.forEach((char) => {
        if (!char) return;

        const rect = char.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const dist = Math.sqrt(
          Math.pow(mouseRef.current.x - centerX, 2) +
          Math.pow(mouseRef.current.y - centerY, 2)
        );

        const proximity = 1 - Math.min(dist / maxDistance, 1);
        
        // Roboto Flex axes: wght (100-1000), wdth (25-150), slnt (-10-0)
        // We'll use wght and wdth for the "pressure" effect
        const wght = 100 + proximity * 900;
        const wdth = 60 + proximity * 90; // 60 to 150
        const slnt = proximity * -10; // 0 to -10

        char.style.fontVariationSettings = `'wght' ${wght}, 'wdth' ${wdth}, 'slnt' ${slnt}`;
        
        if (proximity > 0.1) {
          char.style.color = proximity > 0.5 ? "var(--primary)" : "var(--secondary)";
        } else {
          char.style.color = ""; // Inherit from parent (e.g., gradient)
        }
        
        char.style.transition = "color 0.4s ease, font-variation-settings 0.1s ease-out";
      });

      rafId = requestAnimationFrame(update);
    };

    rafId = requestAnimationFrame(update);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, [maxDistance]);

  return (
    <div
      ref={containerRef}
      className={`select-none cursor-default font-header tracking-tighter overflow-visible ${py} ${className}`}
      style={{ 
        fontSize,
        fontFamily: "'Roboto Flex', sans-serif",
        fontVariationSettings: "'wght' 100, 'wdth' 60, 'slnt' 0",
        lineHeight: "1.2",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap"
      }}
    >
      {text.split("").map((char, i) => (
        <span
          key={i}
          ref={(el) => { charsRef.current[i] = el; }}
          className="inline-block transition-colors duration-300"
          style={{ display: char === " " ? "inline" : "inline-block" }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  );
}
