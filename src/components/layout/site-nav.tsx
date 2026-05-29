"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "History", href: "#history" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
];

export function Navbar() {
  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="pill-nav flex items-center justify-between w-full max-w-7xl px-6 py-3">
        <div className="flex items-center">
          <Link href="/" className="text-lg md:text-xl font-black tracking-tighter text-main">
            K B CHANDRA<span className="text-primary">.</span>
          </Link>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div>
          <Link
            href="#contact"
            className="bg-primary hover:bg-secondary text-background font-bold text-sm px-6 py-2 rounded-full transition-all"
          >
            CONTACT
          </Link>
        </div>
      </nav>
    </div>
  );
}
