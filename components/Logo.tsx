import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <a href="#" className={cn("group flex items-center gap-2 text-lg font-extrabold", className)} aria-label="Wavy home">
      <span
        aria-hidden
        className="relative size-[26px] rounded-full bg-linear-to-br from-[#6bb6ff] to-brand transition-transform duration-700 ease-out-expo group-hover:rotate-180 after:absolute after:inset-[7px] after:rounded-full after:bg-white"
      />
      Wavy
    </a>
  );
}
