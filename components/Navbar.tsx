"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { useScrollSpy } from "@/hooks/use-scroll-spy";
import { navLinks } from "@/lib/data";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => setCompact(y > 60));
  const active = useScrollSpy(navLinks.map((l) => l.id));

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-[calc(14px+env(safe-area-inset-top))] z-50 flex justify-center px-3.5">
      <motion.nav
        aria-label="Main"
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: EASE }}
        className={cn(
          "pointer-events-auto relative flex w-full items-center justify-between rounded-full border border-[#0d1b2e]/[.06] bg-white/[.97] py-2 pl-[18px] pr-2 text-[#0d1b2e] transition-[max-width] duration-500 ease-out-expo",
          compact ? "max-w-[720px]" : "max-w-[940px]",
        )}
      >
        <Logo />
        <ul className="hidden gap-6 text-[13px] font-semibold md:flex">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a
                href={l.href}
                data-active={active === l.id}
                className="relative block px-1 py-3 transition-colors hover:text-brand data-[active=true]:text-brand after:absolute after:inset-x-1 after:bottom-2 after:h-0.5 after:origin-left after:scale-x-0 after:bg-brand after:transition-transform after:duration-300 hover:after:scale-x-100 data-[active=true]:after:scale-x-100"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4 text-[13px] font-semibold">
          <a href="#faq" className="hidden px-1 py-3 transition-colors hover:text-brand md:block">Help</a>
          <Button asChild variant="dark">
            <a href="#get">Get the App</a>
          </Button>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="grid size-11 cursor-pointer place-items-center rounded-full bg-[#0d1b2e] text-white md:hidden"
          >
            {open ? <X aria-hidden className="size-5" /> : <Menu aria-hidden className="size-5" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.ul
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: EASE }}
              className="absolute inset-x-0 top-[calc(100%+8px)] flex flex-col gap-1.5 rounded-3xl bg-white p-3 text-[#0d1b2e] md:hidden"
            >
              {[...navLinks, { href: "#faq", id: "faq", label: "Help" }].map((l) => (
                <li key={l.id}>
                  <a href={l.href} onClick={() => setOpen(false)} className="block rounded-xl px-3.5 py-3 text-[15px] font-semibold hover:bg-pale">
                    {l.label}
                  </a>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}
