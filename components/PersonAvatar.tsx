import { cn } from "@/lib/utils";

const PRESETS = [
  { skin: "#c68642", hair: "#1a1210", bg: "#cfe3ff" },
  { skin: "#8d5524", hair: "#2b1a12", bg: "#ffe3c8" },
  { skin: "#f1c27d", hair: "#5a3a22", bg: "#d9f5e0" },
  { skin: "#e0ac69", hair: "#111111", bg: "#ffd9d9" },
];

/** Small illustrated avatar used for family sharing and reviewers. */
export function PersonAvatar({ index = 0, className }: { index?: number; className?: string }) {
  const a = PRESETS[index % PRESETS.length];
  return (
    <svg viewBox="0 0 40 40" aria-hidden className={cn("block size-full", className)}>
      <rect width="40" height="40" fill={a.bg} />
      <path d="M5 40c1-11 8-15 15-15s14 4 15 15z" fill="#fff" />
      <rect x="17" y="19" width="6" height="7" rx="3" fill={a.skin} />
      <circle cx="20" cy="15" r="7" fill={a.skin} />
      <path d="M12.5 14a7.5 7.5 0 0 1 15 0c-3-3-12-3-15 0z" fill={a.hair} />
    </svg>
  );
}
