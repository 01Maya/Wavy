import * as React from "react";
import { cn } from "@/lib/utils";

function Badge({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "mb-3.5 inline-flex items-center rounded-full bg-pale px-3 py-1 text-xs font-bold uppercase tracking-[.05em] text-[#1553d6] dark:text-[#8fb8ff]",
        className,
      )}
      {...props}
    />
  );
}

export { Badge };
