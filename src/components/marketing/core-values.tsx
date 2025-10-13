import * as React from "react";
import { cn } from "@/lib/utils";

export interface CoreValuesProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

/**
 * A core values component that displays an icon, title, and description.
 * Uses a clean horizontal layout with proper spacing and alignment.
 * Uses globals.css color variables for consistent theming.
 */
export function CoreValues({
  icon,
  title,
  description,
  className,
}: CoreValuesProps) {
  return (
    <div
      className={cn(
        "flex flex-col md:flex-row md:items-end gap-4 md:gap-8 lg:gap-16",
        className
      )}
    >
      {/* Icon and Title Container */}
      <div className="flex items-end gap-[-20px] w-full md:w-[207px] flex-shrink-0 relative">
        {icon}
        {/* Title */}
        <h6 className="text-lg font-semibold text-neutral-black-100 ml-5 z-10 whitespace-nowrap">
          {title}
        </h6>
      </div>
      {/* Description */}
      <div className="md:w-full">
        <p className="text-base text-neutral-black-100">{description}</p>
      </div>
    </div>
  );
}
