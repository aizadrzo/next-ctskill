import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

// CVA for the icon container to handle different color variants
const iconContainerVariants = cva(
  "flex h-16 w-16 items-center justify-center rounded-full text-neutral-white-100",
  {
    variants: {
      color: {
        teal: "bg-secondary-teal-100",
        orange: "bg-secondary-orange-100",
        magenta: "bg-secondary-magenta-100",
      },
    },
    defaultVariants: {
      color: "teal",
    },
  }
);

// Update the props interface to include the CVA variants
export interface ServiceCardProps
  extends VariantProps<typeof iconContainerVariants> {
  icon: React.ReactNode;
  title: string;
  description: string;
}

/**
 * A reusable card component for displaying services, featuring an icon
 * that sits on the top border of the card.
 */
export function ServicesCard({
  icon,
  title,
  description,
  color,
}: ServiceCardProps) {
  return (
    <Card className="relative mt-8 py-6 rounded-2xl bg-neutral-white-100 border border-neutral-black-30 shadow-none w-full md:max-w-[355px]">
      {/* Icon container, positioned absolutely relative to the card */}
      <div className="absolute left-6 top-0 -translate-y-1/2">
        <div className={cn(iconContainerVariants({ color }))}>
          {/* The icon passed via props will be rendered here */}
          {icon}
        </div>
      </div>

      {/* Card content */}
      <CardHeader>
        <CardTitle className="text-lg text-right">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  );
}
