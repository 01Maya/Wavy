import { cn } from "@/lib/utils";

type SectionProps = React.ComponentProps<"section"> & { containerClassName?: string };

export function Section({ className, containerClassName, children, ...props }: SectionProps) {
  return (
    <section className={cn("py-[72px] max-md:py-14", className)} {...props}>
      <div className={cn("mx-auto max-w-[1140px] px-5 md:px-6", containerClassName)}>{children}</div>
    </section>
  );
}
