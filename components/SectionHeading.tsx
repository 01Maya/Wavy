"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/Reveal";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";

type Props = { tag?: string; title: string; sub?: string; className?: string };

/** Tag + word-by-word animated heading + optional subtitle. */
export function SectionHeading({ tag, title, sub, className }: Props) {
  return (
    <div className={cn("mx-auto mb-10 max-w-[600px] text-center", className)}>
      {tag && (
        <Reveal y={10}>
          <Badge>{tag}</Badge>
        </Reveal>
      )}
      <motion.h2
        className="mb-3 text-[clamp(28px,3.6vw,40px)] font-extrabold leading-[1.1] tracking-[-0.03em]"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={{ show: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } } }}
      >
        {title.split(" ").map((word, i) => (
          <Fragment key={i}>
            <motion.span
              className="inline-block"
              variants={{ hidden: { opacity: 0, y: 26 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } } }}
            >
              {word}
            </motion.span>{" "}
          </Fragment>
        ))}
      </motion.h2>
      {sub && (
        <Reveal delay={0.2}>
          <p className="mx-auto max-w-[460px] text-[15px] leading-relaxed text-mute">{sub}</p>
        </Reveal>
      )}
    </div>
  );
}
