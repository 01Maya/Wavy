"use client";

import { motion } from "framer-motion";
import { appChips } from "@/lib/data";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";

const COLORS = ["#e1eeff", "#ffe4dd", "#dff6e8", "#fff0cf"];

/** Pastel app pills that pop in one after another and fill blue on hover. */
export function AppChips({ items = appChips, className, limit }: { items?: string[]; className?: string; limit?: number }) {
  return (
    <motion.ul
      className={cn("flex flex-wrap gap-1.5", className)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{ show: { transition: { staggerChildren: 0.07, delayChildren: 0.35 } } }}
    >
      {items.slice(0, limit).map((label, i) => (
        <motion.li
          key={label}
          variants={{ hidden: { opacity: 0, scale: 0.85 }, show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: EASE } } }}
          whileHover={{ backgroundColor: "#1d6bff", color: "#ffffff", y: -2 }}
          style={{ backgroundColor: COLORS[i % COLORS.length] }}
          className="rounded-full px-2.5 py-1.5 text-xs font-semibold text-[#0d1b2e]"
        >
          {label}
        </motion.li>
      ))}
    </motion.ul>
  );
}
