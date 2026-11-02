"use client";

import { useCountUp } from "@/hooks/use-count-up";

type Props = { to: number; suffix?: string; className?: string };

/** Animated number that counts up once when visible. Screen readers get the final value. */
export function CountUp({ to, suffix = "", className }: Props) {
  const { ref, value } = useCountUp(to);
  const text = value.toFixed(2).replace(/(\.\d*?)0+$/, "$1").replace(/\.$/, "");
  return (
    <span ref={ref} className={className}>
      <span aria-hidden>{text}{suffix}</span>
      <span className="sr-only">{to}{suffix}</span>
    </span>
  );
}
