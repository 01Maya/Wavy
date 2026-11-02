import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const US_STRIPES = Array.from({ length: 7 }, (_, i) => (
  <rect key={i} y={(i * 2 * 40) / 13} width="60" height={40 / 13} fill="#b22234" />
));
const US_STARS = Array.from({ length: 20 }, (_, n) => {
  const r = Math.floor(n / 5);
  const c = n % 5;
  return <circle key={n} cx={3.5 + c * 5.2 + (r % 2) * 2.6} cy={3.5 + r * 4.7} r=".9" fill="#fff" />;
});

const FLAGS: Record<string, ReactNode> = {
  Italy: (<><rect width="20" height="40" fill="#009246" /><rect x="20" width="20" height="40" fill="#fff" /><rect x="40" width="20" height="40" fill="#ce2b37" /></>),
  France: (<><rect width="20" height="40" fill="#0055a4" /><rect x="20" width="20" height="40" fill="#fff" /><rect x="40" width="20" height="40" fill="#ef4135" /></>),
  Turkey: (<><rect width="60" height="40" fill="#e30a17" /><circle cx="26" cy="20" r="11" fill="#fff" /><circle cx="29.5" cy="20" r="8.8" fill="#e30a17" /><polygon fill="#fff" points="41,15 42.2,18.5 45.8,18.6 43,20.8 44,24.2 41,22.2 38,24.2 39,20.8 36.2,18.6 39.8,18.5" /></>),
  Japan: (<><rect width="60" height="40" fill="#fff" /><circle cx="30" cy="20" r="11" fill="#bc002d" /></>),
  Spain: (<><rect width="60" height="40" fill="#aa151b" /><rect y="10" width="60" height="20" fill="#f1bf00" /></>),
  Thailand: (<><rect width="60" height="40" fill="#a51931" /><rect y="6.7" width="60" height="26.6" fill="#f4f5f8" /><rect y="13.3" width="60" height="13.4" fill="#2d2a4a" /></>),
  "Saudi Arabia": (<><rect width="60" height="40" fill="#006c35" /><rect x="16" y="12" width="28" height="3" rx="1.5" fill="#fff" /><rect x="20" y="17" width="20" height="2.5" rx="1.2" fill="#fff" opacity=".85" /><rect x="17" y="26" width="26" height="2.5" rx="1.2" fill="#fff" /></>),
  Sudan: (<><rect width="60" height="13.4" fill="#d21034" /><rect y="13.3" width="60" height="13.4" fill="#fff" /><rect y="26.6" width="60" height="13.4" fill="#000" /><polygon points="0,0 26,20 0,40" fill="#007229" /></>),
  UAE: (<><rect width="60" height="13.4" fill="#00732f" /><rect y="13.3" width="60" height="13.4" fill="#fff" /><rect y="26.6" width="60" height="13.4" fill="#000" /><rect width="20" height="40" fill="#f00" /></>),
  "United Kingdom": (<><rect width="60" height="40" fill="#012169" /><path d="M0 0L60 40M60 0L0 40" stroke="#fff" strokeWidth="8" /><path d="M0 0L60 40M60 0L0 40" stroke="#c8102e" strokeWidth="3" /><path d="M30 0V40M0 20H60" stroke="#fff" strokeWidth="12" /><path d="M30 0V40M0 20H60" stroke="#c8102e" strokeWidth="7" /></>),
  India: (<><rect width="60" height="13.4" fill="#f93" /><rect y="13.3" width="60" height="13.4" fill="#fff" /><rect y="26.6" width="60" height="13.4" fill="#138808" /><circle cx="30" cy="20" r="5" fill="none" stroke="#000080" strokeWidth="1.2" /><circle cx="30" cy="20" r="1" fill="#000080" /></>),
  "United States": (<><rect width="60" height="40" fill="#fff" />{US_STRIPES}<rect width="27" height="21.5" fill="#3c3b6e" />{US_STARS}</>),
  Globe: (<><rect width="60" height="40" fill="#dcecff" /><g fill="none" stroke="#1d6bff" strokeWidth="1.6"><circle cx="30" cy="20" r="14" /><ellipse cx="30" cy="20" rx="6" ry="14" /><path d="M16 20H44M18 13H42M18 27H42" /></g></>),
};

/** Circular SVG flag. Unknown names (regions) fall back to a globe. Decorative: the label sits next to it. */
export function Flag({ name, size = 40, className }: { name: string; size?: number; className?: string }) {
  return (
    <span
      aria-hidden
      className={cn("inline-block shrink-0 overflow-hidden rounded-full border-2 border-card align-middle transition-transform duration-300 ease-out-expo", className)}
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 60 40" preserveAspectRatio="xMidYMid slice" className="block size-full">
        {FLAGS[name] ?? FLAGS.Globe}
      </svg>
    </span>
  );
}
