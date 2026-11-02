import { Logo } from "@/components/Logo";
import { footerColumns } from "@/lib/data";

export function Footer() {
  return (
    <footer className="mt-[70px] bg-[#0d1b2e] pb-[30px] pt-14 text-sm text-[#c6d2e6]">
      <div className="mx-auto max-w-[1140px] px-5 md:px-6">
        <div className="grid grid-cols-2 gap-[30px] md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div className="max-md:col-span-2">
            <Logo className="mb-2.5 text-white" />
            <p>Travel eSIMs for people on the move.</p>
          </div>
          {footerColumns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <b className="mb-2.5 block text-white">{col.title}</b>
              {col.links.map((l) => (
                <a key={l.label} href={l.href} className="block py-[9px] opacity-80 transition-all duration-200 hover:translate-x-1 hover:text-white hover:opacity-100">
                  {l.label}
                </a>
              ))}
            </nav>
          ))}
        </div>
        <p className="mt-9 border-t border-[#243049] pt-5 text-xs opacity-70">© {new Date().getFullYear()} Wavy. All rights reserved.</p>
      </div>
    </footer>
  );
}
