"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Flag } from "@/components/Flag";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { destinations, type Destination } from "@/lib/data";
import { EASE } from "@/lib/motion";

const TABS = [
  { value: "popular", label: "Popular" },
  { value: "regional", label: "Regional" },
  { value: "all", label: "All Destinations" },
] as const;

function DestinationCard({ d }: { d: Destination }) {
  return (
    <motion.a
      href="#get"
      aria-label={`${d.name}, eSIM plans from €2.25`}
      variants={{
        hidden: { opacity: 0, y: 14, scale: 0.96 },
        show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: EASE } },
      }}
      whileHover={{ y: -3, transition: { duration: 0.3, ease: EASE } }}
      className="group flex min-h-[190px] items-end justify-between rounded-[22px] border border-line bg-card p-6 transition-colors duration-300 hover:border-[#bcd3f7] hover:bg-pale/40"
    >
      <div>
        <Flag name={d.name} size={42} className="mb-3.5 group-hover:scale-110" />
        <b className="block">{d.name}</b>
        <small className="block text-[12.5px] leading-normal text-mute">{d.sub}</small>
        <small className="mt-2.5 block text-[12.5px] text-mute">Plans starts from</small>
        <em className="text-xl font-extrabold not-italic transition-colors group-hover:text-brand">€2.25</em>
      </div>
      <span aria-hidden className="grid size-[34px] place-items-center rounded-full bg-pale text-brand transition-all duration-300 group-hover:translate-x-1 group-hover:bg-brand group-hover:text-white">
        <ArrowRight className="size-4" />
      </span>
    </motion.a>
  );
}

export function Destinations() {
  return (
    <Section id="dest" className="pt-6">
      <SectionHeading tag="Popular Destinations" title="Where to Next?" sub="One country or a whole new continent. Start with where you’re going." />
      <Tabs defaultValue="popular">
        <Reveal>
          <TabsList aria-label="Destination groups">
            {TABS.map((t) => (
              <TabsTrigger key={t.value} value={t.value}>{t.label}</TabsTrigger>
            ))}
          </TabsList>
        </Reveal>
        {TABS.map((t) => (
          <TabsContent key={t.value} value={t.value}>
            <motion.div
              className="grid gap-5 md:grid-cols-3"
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.07 } } }}
            >
              {destinations[t.value].map((d) => (
                <DestinationCard key={d.name} d={d} />
              ))}
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>
    </Section>
  );
}
