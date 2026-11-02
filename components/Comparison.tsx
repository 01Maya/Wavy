"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { comparisonRows, type Cell } from "@/lib/data";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";

function Mark({ value, wavy }: { value: Cell; wavy?: boolean }) {
  if (typeof value === "string") return <span className={wavy ? "" : "text-mute"}>{value}</span>;
  return (
    <span
      role="img"
      aria-label={value ? "Yes" : "No"}
      className={cn(
        "inline-grid size-[26px] place-items-center rounded-full transition-transform duration-300 ease-out-expo group-hover/row:scale-[1.18]",
        value ? (wavy ? "bg-white text-brand" : "bg-[#dff6e8] text-[#14a44d]") : "bg-[#ffe6e4] text-[#e0483e]",
      )}
    >
      {value ? <Check aria-hidden className="size-3.5" strokeWidth={3} /> : <X aria-hidden className="size-3.5" strokeWidth={3} />}
    </span>
  );
}

export function Comparison() {
  const last = comparisonRows.length - 1;
  return (
    <Section className="pt-8">
      <SectionHeading tag="Compare" title="Roaming, a local SIM, or Wavy?" />
      <Reveal>
        <div
          role="region"
          tabIndex={0}
          aria-label="Comparison table: Wavy, local SIM and roaming"
          className="overflow-x-auto rounded-[28px] border border-line bg-card p-3.5"
        >
          <table className="w-full min-w-[620px] border-separate border-spacing-0 text-sm">
            <thead>
              <tr className="text-[13px] font-semibold text-mute">
                <th scope="col" className="w-[36%] px-6 py-[18px] text-left">Compare yourself</th>
                <th scope="col" className="rounded-t-[18px] bg-brand px-6 py-[18px] text-[15px] font-bold text-white">Wavy</th>
                <th scope="col" className="px-6 py-[18px]">Local SIM</th>
                <th scope="col" className="px-6 py-[18px]">Roaming</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {comparisonRows.map((r, i) => (
                <motion.tr
                  key={r.label}
                  className="group/row"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, ease: EASE, delay: i * 0.08 }}
                >
                  <td className="border-t border-line px-6 py-[17px] text-left font-semibold transition-colors group-hover/row:bg-pale group-hover/row:text-brand">{r.label}</td>
                  <td className={cn("border-t border-white/20 bg-brand px-6 py-[17px] font-bold text-white", i === last && "rounded-b-[18px]")}>
                    <Mark value={r.wavy} wavy />
                  </td>
                  <td className="border-t border-line px-6 py-[17px] transition-colors group-hover/row:bg-pale"><Mark value={r.local} /></td>
                  <td className="border-t border-line px-6 py-[17px] transition-colors group-hover/row:bg-pale"><Mark value={r.roaming} /></td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>
    </Section>
  );
}
