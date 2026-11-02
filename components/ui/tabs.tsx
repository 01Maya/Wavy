"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";

const Tabs = TabsPrimitive.Root;

function TabsList({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.List>) {
  return <TabsPrimitive.List className={cn("mb-6 flex flex-wrap gap-2", className)} {...props} />;
}

function TabsTrigger({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      className={cn(
        "min-h-11 cursor-pointer rounded-full border border-line bg-card px-[18px] text-[13px] font-semibold text-mute transition-colors duration-200 hover:border-[#bcd3f7] hover:text-ink data-[state=active]:border-ink data-[state=active]:bg-ink data-[state=active]:text-bg",
        className,
      )}
      {...props}
    />
  );
}

function TabsContent({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return <TabsPrimitive.Content className={cn("outline-offset-4", className)} {...props} />;
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
