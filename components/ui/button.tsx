import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex min-h-11 items-center justify-center gap-2 whitespace-nowrap rounded-full px-[22px] text-sm font-semibold transition-[transform,background-color,color] duration-200 ease-out-expo hover:-translate-y-px active:scale-[.98] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        dark: "bg-[#0d1b2e] text-white hover:bg-[#1c3250]",
        light: "bg-white text-[#0d1b2e] hover:bg-pale",
        brand: "bg-brand text-white hover:bg-[#1456d6]",
      },
    },
    defaultVariants: { variant: "dark" },
  },
);

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean };

function Button({ className, variant, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant }), className)} {...props} />;
}

export { Button, buttonVariants };
