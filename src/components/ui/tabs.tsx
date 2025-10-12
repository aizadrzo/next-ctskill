"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/lib/utils";

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  );
}

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "bg-neutral-white-100 border-2 border-neutral-black-30 rounded-lg p-1 flex justify-between items-center gap-1 sm:gap-32",
        className
      )}
      {...props}
    />
  );
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "flex-1 h-10 px-3 sm:px-6 py-2 rounded-lg text-base sm:text-(length:--font-size-b3) leading-none font-normal text-primary-100 bg-transparent border-0 transition-all duration-200 focus-visible:outline-none focus-visible:ring-0 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-primary-100 data-[state=active]:text-neutral-white-100 data-[state=active]:font-normal whitespace-nowrap",
        className
      )}
      {...props}
    />
  );
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
