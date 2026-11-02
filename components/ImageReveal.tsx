"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";

type Props = {
  src: string;
  alt: string;
  position?: string;
  radius?: number;
  sizes?: string;
  className?: string;
  children?: React.ReactNode;
};

/** Photo card that opens from a slightly smaller frame and zooms gently on hover. */
export function ImageReveal({ src, alt, position = "50% 50%", radius = 28, sizes = "(min-width:768px) 50vw, 100vw", className, children }: Props) {
  return (
    <motion.div
      className={cn("group relative overflow-hidden", className)}
      style={{ borderRadius: radius }}
      initial={{ clipPath: `inset(6% round ${radius}px)`, opacity: 0 }}
      whileInView={{ clipPath: `inset(0% round ${radius}px)`, opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1.1, ease: EASE }}
    >
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.12 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.6, ease: EASE }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          style={{ objectPosition: position }}
          className="object-cover transition-transform duration-[1200ms] ease-out-expo group-hover:scale-105"
        />
      </motion.div>
      {children}
    </motion.div>
  );
}
