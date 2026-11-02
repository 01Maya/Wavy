import { BackToTop } from "@/components/BackToTop";
import { Comparison } from "@/components/Comparison";
import { CTA } from "@/components/CTA";
import { DataCards } from "@/components/DataCards";
import { Destinations } from "@/components/Destinations";
import { FAQ } from "@/components/FAQ";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Navbar } from "@/components/Navbar";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <main id="main" tabIndex={-1} className="outline-none">
        <Destinations />
        <Features />
        <HowItWorks />
        <DataCards />
        <Comparison />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
