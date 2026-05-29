"use client";

import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";

type FadeUpProps = PropsWithChildren<{
  delay?: number;
  className?: string;
}>;

export function FadeUp({ children, delay = 0, className }: FadeUpProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, delay, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

