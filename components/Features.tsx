"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Flag } from "@/components/Flag";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { marqueeFlags } from "@/lib/data";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";

const ROUTE = "M20 190C120 150 200 130 330 60";
const PLANE =
  "M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z";

const FAMILY_IMAGES = [
  "/images/wd1.png",
  "/images/wd2.png",
  "/images/wd3.png",
  "/images/wd4.png",
];

function BentoCard({
  className,
  delay = 0,
  children,
}: {
  className?: string;
  delay?: number;
  children: React.ReactNode;
}) {
  return (
    <Reveal
      delay={delay}
      whileHover={{ y: -3, transition: { duration: 0.3, ease: EASE } }}
      className={cn(
        "relative min-h-[230px] overflow-hidden rounded-2xl border border-line bg-linear-to-b from-card from-40% to-pale p-5 transition-colors duration-300 hover:border-[#bcd3f7] sm:min-h-[250px] sm:rounded-3xl sm:p-6 lg:p-7",
        className
      )}
    >
      {children}
    </Reveal>
  );
}

const H3 = ({ children }: { children: React.ReactNode }) => (
  <h3 className="mb-1.5 text-[17px] font-bold leading-tight tracking-[-0.02em] sm:text-[19px]">
    {children}
  </h3>
);

const P = ({ children }: { children: React.ReactNode }) => (
  <p className="max-w-[280px] text-[12px] leading-relaxed text-mute sm:text-[13px]">
    {children}
  </p>
);

function RouteMap() {
  const reduce = useReducedMotion();

  return (
    <BentoCard
      delay={0.08}
      className="min-h-[230px] border-line bg-linear-to-br from-[#cfe4ff] to-[#eef6ff] p-0 sm:min-h-[250px]"
    >
      <svg
        viewBox="0 0 360 250"
        preserveAspectRatio="xMidYMid slice"
        role="img"
        aria-label="A plane flying along a route to your destination"
        className="absolute inset-0 size-full"
      >
        <path
          d={ROUTE}
          stroke="#fff"
          strokeWidth="3"
          strokeDasharray="6 7"
          fill="none"
          className="animate-dash"
        />

        <circle cx="20" cy="190" r="6" fill="#1d6bff" />
        <circle cx="330" cy="60" r="6" fill="#1d6bff" />

        <g>
          <g transform="rotate(90) scale(1.5) translate(-12 -12)">
            <path d={PLANE} fill="#1d6bff" stroke="#fff" strokeWidth=".8" />
          </g>

          {!reduce && (
            <animateMotion
              path={ROUTE}
              dur="5.5s"
              repeatCount="indefinite"
              rotate="auto"
              calcMode="spline"
              keyTimes="0;1"
              keyPoints="0;1"
              keySplines=".45 0 .25 1"
            />
          )}
        </g>
      </svg>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#2ecc71] px-3 py-2 text-[11px] font-bold text-white sm:bottom-[22px] sm:px-3.5 sm:text-xs">
        <span aria-hidden>● </span>Connected on arrival
      </div>
    </BentoCard>
  );
}

const BARS = [30, 44, 36, 60, 52, 78, 96];

export function Features() {
  return (
    <Section id="why" className="pt-8">
      <SectionHeading
        tag="Why Wavy is better"
        title="Everything a travel SIM should have done all along."
        sub="Built for people who’d rather explore than manage plans."
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        {/* Auto Activation */}
        <BentoCard>
          <span className="mb-2.5 inline-flex items-center gap-1.5 rounded-full bg-[#e4f8ec] px-2.5 py-1 text-[11px] font-bold text-[#14a44d]">
            <span aria-hidden>●</span> Auto-activation
          </span>

          <H3>Online before Baggage Claim</H3>
          <P>
            Land, switch on, and you’re connected before your bags arrive.
          </P>

          <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-pale">
            <motion.i
              className="block h-full rounded-full bg-brand"
              initial={{ width: 0 }}
              whileInView={{ width: "86%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: EASE, delay: 0.25 }}
            />
          </div>
        </BentoCard>

        {/* Route Map */}
        <RouteMap />

        {/* Live Usage */}
        <BentoCard delay={0.16}>
          <H3>See every usage live</H3>

          <div
            className="mt-3.5 flex h-[110px] items-end gap-1.5 sm:h-[120px] sm:gap-[7px]"
            role="img"
            aria-label="Bar chart of data usage rising through the week"
          >
            {BARS.map((h, i) => (
              <motion.i
                key={i}
                className={cn(
                  "block flex-1 origin-bottom rounded-md transition-colors hover:bg-[#4d94ff]",
                  i === BARS.length - 1
                    ? "bg-brand hover:bg-[#0f56e0]"
                    : "bg-[#9cc8ff]"
                )}
                initial={{ height: "6%" }}
                whileInView={{ height: `${h}%` }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.2,
                  ease: EASE,
                  delay: i * 0.06,
                }}
              />
            ))}
          </div>
        </BentoCard>

        {/* Share Data with Family */}
        <BentoCard>
          <H3>Share Data with Family</H3>
          <P>Top up once, share with everyone you travel with.</P>

          <div
            className="relative mx-auto mt-2.5 h-[120px] w-full max-w-[260px] sm:h-[130px]"
            aria-hidden
          >
            {/* Family connection triangle */}
            <svg
              viewBox="0 0 200 130"
              className="absolute inset-0 size-full"
            >
              <path
                d="M100 14L22 112H178z"
                strokeDasharray="4 4"
                className="fill-pale stroke-[#b9d3ff]"
              />
            </svg>

            {/* Family member avatars */}
            {[
              { cls: "left-[44%] top-0", i: 0 },
              { cls: "left-[20%] top-[60px]", i: 1 },
              { cls: "left-[44%] top-[70px]", i: 2 },
              { cls: "left-[68%] top-[60px]", i: 3 },
            ].map((a, n) => (
              <motion.span
                key={n}
                className={cn(
                  "absolute size-[38px] overflow-hidden rounded-full border-[3px] border-white bg-white shadow-sm sm:size-[40px]",
                  a.cls
                )}
                initial={{ opacity: 0, scale: 0.4 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.18 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  ease: EASE,
                  delay: n * 0.15,
                }}
              >
                <Image
                  src={FAMILY_IMAGES[a.i]}
                  alt=""
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </motion.span>
            ))}
          </div>
        </BentoCard>

        {/* Strongest Signal */}
        <BentoCard delay={0.08}>
          <H3>Always the Strongest Signal Connected</H3>
          <P>Wavy picks the best local network for you.</P>

          <div className="mt-3.5 rounded-2xl bg-white p-3.5 text-xs text-[#0d1b2e]">
            <div className="flex justify-between gap-2 font-bold">
              <span>Signal</span>
              <span className="text-[#14a44d]">Excellent</span>
            </div>

            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#eaf2ff]">
              <motion.i
                className="block h-full rounded-full bg-brand"
                initial={{ width: 0 }}
                whileInView={{ width: "86%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, ease: EASE, delay: 0.3 }}
              />
            </div>
          </div>

          <div
            className="-mx-5 mt-3.5 overflow-hidden sm:-mx-6 lg:-mx-7"
            aria-hidden
          >
            <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
              {[...marqueeFlags, ...marqueeFlags].map((n, i) => (
                <span key={i} className="pr-3">
                  <Flag name={n} size={30} className="hover:scale-[1.22]" />
                </span>
              ))}
            </div>
          </div>
        </BentoCard>

        {/* No More Roaming Bills */}
        <BentoCard delay={0.16}>
          <H3>No More Roaming Bills</H3>
          <P>Prepaid, clear prices. No surprises at home.</P>

          <div className="mt-3 text-center" aria-hidden>
            <svg
              width="96"
              height="70"
              viewBox="0 0 84 64"
              className="mx-auto"
            >
              <rect
                x="4"
                y="10"
                width="60"
                height="44"
                rx="8"
                fill="#fff"
                stroke="#cfe0fa"
                strokeWidth="2"
              />

              <path
                d="M8 16l26 20 26-20"
                fill="none"
                stroke="#1d6bff"
                strokeWidth="3"
                strokeLinecap="round"
              />

              <motion.g
                style={{
                  transformBox: "fill-box",
                  transformOrigin: "center",
                }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 14,
                  delay: 0.5,
                }}
              >
                <circle cx="64" cy="16" r="13" fill="#22c55e" />
                <path
                  d="M58 16l5 5 8-9"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.g>
            </svg>

            <motion.div
              className="mx-auto mt-1.5 grid size-9 place-items-center rounded-full bg-brand font-extrabold text-white"
              initial={{ opacity: 0, scale: 0.4 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.9 }}
            >
              ↑
            </motion.div>
          </div>
        </BentoCard>
      </div>
    </Section>
  );
}