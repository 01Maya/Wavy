"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CountUp } from "@/components/CountUp";
import { ImageReveal } from "@/components/ImageReveal";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { photoReview, reviews } from "@/lib/data";

const CARD =
  "flex min-h-0 flex-col gap-3 rounded-2xl border border-line bg-card p-5 transition-colors duration-300 hover:border-[#bcd3f7] sm:min-h-[300px] sm:gap-4 sm:rounded-3xl sm:p-7";

const REVIEW_IMAGES = ["/images/p1.png", "/images/p2.png"];

function Stars() {
  return (
    <motion.div
      role="img"
      aria-label="5 out of 5 stars"
      className="flex gap-1 text-[20px] text-[#ffb800]"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{
        show: {
          transition: {
            staggerChildren: 0.12,
            delayChildren: 0.4,
          },
        },
      }}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <motion.span
          key={i}
          aria-hidden
          variants={{
            hidden: { opacity: 0, scale: 0, rotate: -90 },
            show: {
              opacity: 1,
              scale: 1,
              rotate: 0,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 14,
              },
            },
          }}
        >
          ★
        </motion.span>
      ))}
    </motion.div>
  );
}

export function Testimonials() {
  return (
    <Section className="pt-8 sm:pt-12">
      <SectionHeading
        tag="Loved by travelers"
        title="Five stars, wherever they land"
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-[.9fr_1.1fr_1.1fr_1.1fr]">

        {/* Rating Card */}
        <Reveal
          className={`${CARD} min-h-[190px] flex-row items-center justify-between gap-3 sm:min-h-[300px] sm:flex-col sm:items-start sm:gap-2.5`}
        >
          <motion.div
            className="order-2 ml-auto shrink-0 sm:order-1"
            whileHover={{ scale: 1.15, rotate: 10, y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 12 }}
          >
            <Image
              src="/images/starr.png"
              alt="Cute yellow smiling star"
              width={120}
              height={120}
              className="size-20 object-contain sm:size-24"
              priority
            />
          </motion.div>

          <div className="order-1 sm:order-2">
            <CountUp
              to={4.8}
              className="block text-[48px] font-extrabold leading-none tracking-tight text-[#0d1b2e] sm:text-5xl"
            />

            <p className="mt-2 text-sm text-mute sm:mt-3 sm:text-sm">
              Five stars
            </p>

            <div className="mt-4 sm:mt-5">
              <Stars />
            </div>
          </div>
        </Reveal>

        {/* Daniel R. Photo Card */}
        <ImageReveal
          src="/images/customer.jpg"
          alt={`${photoReview.name}, a Wavy customer in a blue cap`}
          position="50% 22%"
          radius={26}
          className="min-h-[300px] sm:min-h-[300px]"
          sizes="(min-width: 1024px) 25vw, 100vw"
        >
          <div className="absolute inset-x-3 bottom-3 rounded-2xl bg-white/[.93] p-3 text-[12px] leading-relaxed text-[#0d1b2e] sm:p-3.5 sm:text-[13px]">
            <b className="mb-0.5 block">{photoReview.name}</b>
            “{photoReview.quote}”
          </div>
        </ImageReveal>

        {/* Customer Review Cards */}
        {reviews.map((r, i) => (
          <Reveal
            key={r.name}
            delay={0.08 * (i + 1)}
            className={CARD}
          >
            <Stars />

            <p className="text-[15px] font-medium leading-relaxed sm:text-[17px] sm:leading-normal">
              “{r.quote}”
            </p>

            <div className="mt-1 flex items-center gap-2.5 text-sm font-bold sm:mt-auto sm:pt-2">
              <span className="relative size-10 shrink-0 overflow-hidden rounded-full">
                <Image
                  src={REVIEW_IMAGES[i % REVIEW_IMAGES.length]}
                  alt={`${r.name} profile`}
                  fill
                  sizes="40px"
                  className="rounded-full object-cover"
                />
              </span>

              <span className="min-w-0">
                {r.name}
                <small className="block text-[12px] font-medium text-mute sm:text-[12.5px]">
                  {r.place}
                </small>
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}