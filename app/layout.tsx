import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Providers } from "@/components/Providers";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta", display: "swap" });

export const metadata: Metadata = {
  title: "Wavy – Travel eSIM",
  description: "Wavy travel eSIMs: land connected in 150+ destinations, with clear prices and no roaming bills.",
  openGraph: {
    title: "Wavy – Travel eSIM",
    description: "Less roaming. More roaming around.",
    images: ["/images/hero.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#1d6bff",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="font-sans antialiased">
        <a
          href="#main"
          className="fixed -top-16 left-3 z-[200] rounded-xl bg-[#0d1b2e] px-4 py-2.5 font-semibold text-white transition-[top] focus:top-3"
        >
          Skip to content
        </a>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
