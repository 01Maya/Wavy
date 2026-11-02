import Image from "next/image";
import { Magnetic } from "@/components/Magnetic";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <Section id="get" className="pb-0 pt-2.5">
      <Reveal>
        <div className="relative flex min-h-[620px] flex-col items-start justify-center overflow-hidden rounded-[40px] bg-brand px-6 pb-[300px] pt-12 text-white md:min-h-[400px] md:px-14 md:py-[76px]">
          <div aria-hidden className="absolute inset-x-0 bottom-0 h-[58%] md:inset-0 md:h-full">
            <Image src="/images/app-traveler.png" alt="" fill sizes="(min-width:1140px) 1140px, 100vw" className="object-cover object-[68%_100%] md:object-[100%_50%]" />
          </div>
          <div aria-hidden className="absolute inset-0 bg-[linear-gradient(180deg,#155ff0_0,#1d6bff_38%,rgba(29,107,255,0)_76%)] md:bg-[linear-gradient(95deg,#155ff0_0%,#1d6bff_36%,rgba(29,107,255,.6)_58%,rgba(29,107,255,0)_82%)]" />
          <div className="relative max-w-[470px]">
            <Badge className="bg-white/20 text-white">Ready when you are</Badge>
            <h2 className="mb-3 text-[clamp(32px,5vw,52px)] font-extrabold leading-[1.1] tracking-[-0.03em]">Less roaming. More wandering.</h2>
            <p className="mb-[22px] opacity-90">Get the app and connect in a tap.</p>
            <div className="flex gap-2.5">
              <Magnetic>
                <Button asChild><a href="#">Get the App</a></Button>
              </Magnetic>
              <Button asChild variant="light"><a href="#how">Learn more</a></Button>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
