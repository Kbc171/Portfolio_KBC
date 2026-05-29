"use client";

import React from "react";
import { Navbar } from "@/components/layout/site-nav";

interface PageShellProps {
  children: React.ReactNode;
}

export function PageShell({ children }: PageShellProps) {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main className="relative z-10">
        {children}
      </main>
    </div>
  );
}
