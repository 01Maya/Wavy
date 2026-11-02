
"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/Magnetic";
import { EASE } from "@/lib/motion";

const LINES = [["Less", "Roaming."], ["More", "Roaming", "Around."]];

export function Hero() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <header
      ref={ref}
      className="relative isolate min-h-[760px] overflow-hidden bg-transparent pt-[135px] text-white sm:min-h-[800px] sm:pt-[150px] md:min-h-[900px] md:pt-[145px]"
    >
      {/* Mobile background */}
      <motion.div
        aria-hidden
        style={{ y: bgY }}
        initial={{ scale: 1.04 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: EASE }}
        className="absolute inset-0 z-0 md:hidden"
      >
        <Image
          src="/images/hero m.png"
          alt=""

          fill
          priority
          sizes="(max-width: 640px) 100vw, 50vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* Desktop background - full hero image */}
      <motion.div
        aria-hidden
        style={{ y: bgY }}
        initial={{ scale: 1.04 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: EASE }}
        className="absolute inset-0 z-0 hidden md:block"
      >
        <Image
          src="/images/image.png"
          alt=""
          fill
          priority
          sizes="50vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* Hero content */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 mx-auto flex w-full max-w-[850px] flex-col items-center px-4 text-center sm:px-6 md:px-8"
      >
        <motion.h1
          className="mb-4 w-full text-[clamp(27px,7.2vw,60px)] font-extrabold leading-[1.05] tracking-[-0.045em] sm:text-[clamp(38px,5.5vw,60px)] md:mb-5 md:text-[clamp(52px,4.6vw,64px)]"
          initial="hidden"
          animate="show"
          variants={{
            show: {
              transition: {
                staggerChildren: 0.11,
                delayChildren: 0.2,
              },
            },
          }}
        >
          {LINES.map((line, index) => (
            <span key={index} className="block">
              {line.map((word) => (
                <motion.span
                  key={word}
                  className="mr-[0.22em] inline-block last:mr-0"
                  variants={{
                    hidden: { opacity: 0, y: 35, rotate: 3 },
                    show: {
                      opacity: 1,
                      y: 0,
                      rotate: 0,
                      transition: { duration: 0.9, ease: EASE },
                    },
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.9 }}
          className="mx-auto mb-5 max-w-[400px] px-2 text-[13px] leading-relaxed sm:text-[15px] md:mb-[22px]"
        >
          Your next adventure, already connected. Find eSIM data for the places you can’t wait to explore.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 1.1 }}
          className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3"
        >
          <Magnetic>
            <Button
              asChild
              variant="dark"
              className="h-12 rounded-full px-6 text-sm sm:px-7 sm:text-base"
            >
              <a href="#get">Get the App</a>
            </Button>
          </Magnetic>

          <Button
            asChild
            variant="light"
            className="h-12 rounded-full px-6 text-sm sm:px-7 sm:text-base"
          >
            <a href="#how">Learn more</a>
          </Button>
        </motion.div>
      </motion.div>

      {/* Bottom wave */}
      <svg
        aria-hidden
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        className="absolute -bottom-px left-0 z-20 h-12 w-full fill-bg sm:h-16 md:h-[90px]"
      >
        <path d="M0 50C240 90 480 0 720 30s480 60 720 20V90H0z" />
      </svg>
    </header>
  );
}
