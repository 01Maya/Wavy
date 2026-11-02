"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AppChips } from "@/components/AppChips";
import { CountUp } from "@/components/CountUp";
import { ImageReveal } from "@/components/ImageReveal";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { EASE } from "@/lib/motion";

const CARD = "relative flex min-h-[390px] flex-col justify-between overflow-hidden rounded-[28px]";

export function DataCards() {
  return (
    <Section id="plans" className="pt-8">
      <div className="mb-7 flex items-end justify-between gap-4 max-md:flex-col max-md:items-start">
        <SectionHeading tag="Fast & Flexible" title="Data that goes where you go, fast" className="mx-0 mb-0 max-w-none text-left" />
        <a href="#dest" className="inline-block py-3 text-sm font-semibold text-brand transition-transform duration-200 hover:translate-x-[3px] hover:underline">
          View all destinations →
        </a>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        <Reveal whileHover={{ y: -3, transition: { duration: 0.3, ease: EASE } }}>
<div className={`${CARD} group border-0 bg-transparent p-0 text-[#0d1b2e]`}>
  <div className="absolute inset-0 overflow-hidden rounded-[28px]">
              <Image
                src="/images/app.png"
                alt=""
                fill
                sizes="(min-width:768px) 33vw, 100vw"
                className="object-cover object-[30%_62%] transition-[object-position] duration-[1400ms] ease-out-expo group-hover:object-[40%_72%]"
              />
            </div>
            <h3 className="relative z-10 mx-[22px] mt-[22px] text-[22px] font-extrabold leading-[1.1] tracking-[-0.02em]">No app restrictions</h3>
            <AppChips limit={4} className="relative z-10 m-3.5" />
          </div>
        </Reveal>

<Reveal delay={0.08} whileHover={{ y: -3, transition: { duration: 0.3, ease: EASE } }}>
  <div className={`${CARD} group bg-linear-to-br from-[#dcecff] via-[#c9e0ff] to-[#b8d5ff] p-[26px] text-[#0d1b2e]`}>
    {/* Subtle decorative glow */}
    <div
      aria-hidden
      className="pointer-events-none absolute -right-16 -top-20 size-64 rounded-full bg-white/30 blur-3xl"
    />

    <h3 className="relative z-10 text-[22px] font-extrabold leading-[1.1] tracking-[-0.02em] transition-transform duration-300 group-hover:translate-x-1">
              Clear, live data tracking
{/* Minimal signal illustration */}
<div className="flex flex-1 items-center justify-center py-10">
  <div className="flex h-16 items-end gap-2">
    {[18, 28, 40, 52, 64].map((height, i) => (
      <motion.span
        key={i}
        className="w-2.5 rounded-full bg-[#1d6bff]/75"
        initial={{ height: 0, opacity: 0 }}
        whileInView={{ height, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
      />
    ))}
  </div>
</div>
    </h3>

    <div className="relative z-10 rounded-[20px] bg-white p-[18px] text-[13px] font-medium shadow-sm shadow-blue-900/[0.03]">
      <div className="mb-1.5 flex justify-between">
        <b>Japan eSIM</b>
        <em className="font-bold not-italic text-[#14a44d]">
          <span aria-hidden>● </span>Active
        </em>
      </div>

      <CountUp
        to={1.43}
        suffix=" GB"
        className="block text-[46px] font-extrabold leading-[1.1] tracking-[-0.03em] transition-colors group-hover:text-brand"
      />

      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-pale">
        <motion.i
          className="block h-full rounded-full bg-brand"
          initial={{ width: 0 }}
          whileInView={{ width: "29%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: EASE, delay: 0.4 }}
        />
      </div>

      <small className="mt-2 block text-[12.5px] text-[#55637a]">
        3.57 GB left of 5 GB
      </small>
    </div>
  </div>
</Reveal>

        <ImageReveal src="/images/zero.png" alt="Traveler using the Wavy app" position="88% 40%" className="min-h-[390px]" sizes="(min-width:768px) 33vw, 100vw">
          <div className="absolute inset-0 flex flex-col justify-between bg-linear-to-b from-black/0 from-40% to-black/50 p-[26px] text-[#0d1b2e]">
            <h3 className="text-[22px] font-extrabold leading-[1.1] tracking-[-0.02em]">Zero-queue activation</h3>
            <p className="text-[13px] font-semibold">Install before you fly.</p>
          </div>
        </ImageReveal>
      </div>
    </Section>
  );
}
