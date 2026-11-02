"use client";

import { motion } from "framer-motion";
import { AppChips } from "@/components/AppChips";
import { ImageReveal } from "@/components/ImageReveal";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";

function Steps({ items }: { items: string[] }) {
  return (
    <motion.ol
      className="my-[22px] grid gap-3.5"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{ show: { transition: { staggerChildren: 0.15 } } }}
    >
      {items.map((text, i) => (
        <motion.li
          key={text}
          variants={{ hidden: { opacity: 0, x: -14 }, show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE } } }}
          className="group flex items-center gap-3 text-sm font-semibold transition-colors hover:text-brand"
        >
          <span className="grid size-7 place-items-center rounded-[9px] bg-brand text-[13px] text-white transition-transform duration-300 group-hover:scale-[1.14]">{i + 1}</span>
          {text}
        </motion.li>
      ))}
    </motion.ol>
  );
}

function InfoCard({ tag, title, text, steps, className }: { tag: string; title: string; text: string; steps?: string[]; className?: string }) {
  return (
    <Reveal className={cn("h-full", className)}>
      <Card className="flex h-full flex-col justify-center rounded-[28px] p-10 max-md:p-7">
        <Badge className="self-start">{tag}</Badge>
        <h2 className="mb-3 text-[clamp(28px,3.6vw,40px)] font-extrabold leading-[1.1] tracking-[-0.03em]">{title}</h2>
        <p className="text-[15px] leading-relaxed text-mute">{text}</p>
        {steps && <Steps items={steps} />}
        {steps && (
          <div>
            <Button asChild><a href="#get">Get the App</a></Button>
          </div>
        )}
      </Card>
    </Reveal>
  );
}

export function HowItWorks() {
  return (
    <Section id="how" className="pt-8">
      <div className="grid gap-5 md:grid-cols-2">
        <InfoCard
          tag="Simple Steps"
          title="How Wavy works"
          text="Pick a destination, choose a plan, install in a tap. Your plan starts when you land."
          steps={["Find your destination and plan", "Install your eSIM in one tap", "Land and get connected"]}
        />
        <ImageReveal src="/images/landscape.jpg" alt="Green hills around a calm blue lake" position="50% 60%" className="min-h-[340px]">
          <div className="absolute inset-0 grid place-items-center p-7">
            <motion.div whileHover={{ y: -5 }} className="max-w-[250px] rounded-3xl bg-white p-6 text-[#0d1b2e]">
              <b className="mb-3 block text-2xl font-bold leading-[1.05] tracking-[-0.02em]">No app restrictions</b>
              <AppChips />
              <p className="mt-3 text-xs text-[#55637a]">Use every app just like at home.</p>
            </motion.div>
          </div>
        </ImageReveal>
        <ImageReveal
          src="/images/app-traveler.png"
          alt="Traveler browsing eSIM plans in the Wavy app on a mountain viewpoint"
          position="72% 50%"
          className="min-h-[420px]"
        />
        <InfoCard
          tag="Stay in control"
          title="Always in the loop"
          text="Top up, share and track data from one place. Support is there any hour, any time zone."
          steps={["Top up in one tap", "Share data with family", "Get help 24/7 in the app"]}
        />
      </div>
    </Section>
  );
}
