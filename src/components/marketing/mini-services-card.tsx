import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

// CVA for the icon container to handle different color variants
const iconContainerVariants = cva(
  "flex h-[78px] w-[78px] items-center justify-center rounded-full",
  {
    variants: {
      iconColor: {
        teal: "bg-secondary-teal-100 text-neutral-white-100",
        orange: "bg-secondary-orange-100 text-neutral-white-100",
        magenta: "bg-secondary-magenta-100 text-neutral-white-100",
        white: "bg-neutral-white-100 text-neutral-black-100",
        black: "bg-neutral-black-100 text-neutral-white-100",
      },
    },
    defaultVariants: {
      iconColor: "teal",
    },
  }
);

// CVA for the card container to handle different states and colors
const cardVariants = cva(
  "relative flex flex-col gap-2.5 p-4 bg-neutral-white-100 border border-neutral-black-30 rounded-lg shadow-none transition-all duration-200",
  {
    variants: {
      cardState: {
        default: "hover:shadow-[0px_0px_16px_0px_rgba(0,0,0,0.15)]",
        hover: "shadow-[0px_0px_16px_0px_rgba(0,0,0,0.15)]",
        teal: "border-secondary-teal-100 shadow-[0px_0px_16px_0px_rgba(0,171,167,0.15)]",
        orange:
          "border-secondary-orange-100 shadow-[0px_0px_16px_0px_rgba(248,183,37,0.15)]",
        magenta:
          "border-secondary-magenta-100 shadow-[0px_0px_16px_0px_rgba(164,32,153,0.15)]",
      },
    },
    defaultVariants: {
      cardState: "default",
    },
  }
);

// CVA for text colors
const textVariants = cva("", {
  variants: {
    textColor: {
      black: "text-neutral-black-100",
      white: "text-neutral-white-100",
      primary: "text-primary-100",
      teal: "text-secondary-teal-100",
      orange: "text-secondary-orange-100",
      magenta: "text-secondary-magenta-100",
    },
  },
  defaultVariants: {
    textColor: "black",
  },
});

// Props interface with all customization options
export interface MiniServiceCardProps {
  icon: React.ReactNode;
  title: string;
  iconColor?: "teal" | "orange" | "magenta" | "white" | "black";
  cardState?: "default" | "hover" | "teal" | "orange" | "magenta";
  titleColor?: "black" | "white" | "primary" | "teal" | "orange" | "magenta";
  className?: string;
}

/**
 * A flexible mini service card component that allows full customization of colors.
 * Matches the Figma design with customizable icon background, text colors, and card states.
 */
export function MiniServiceCard({
  icon,
  title,
  iconColor = "teal",
  cardState = "default",
  titleColor = "black",
  className,
}: MiniServiceCardProps) {
  return (
    <div className={cn(cardVariants({ cardState }), className)}>
      {/* Main content container */}
      <div className="flex flex-col gap-2.5">
        {/* Icon and title container */}
        <div className="flex items-center gap-4 h-9">
          {/* Icon container */}
          <div className={cn(iconContainerVariants({ iconColor }))}>{icon}</div>
          {/* Title */}
          <h6
            className={cn(
              "text-lg font-semibold",
              textVariants({ textColor: titleColor })
            )}
          >
            {title}
          </h6>
        </div>
      </div>
    </div>
  );
}
