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
 * The icon and title overlap with a negative gap, creating a compact visual.
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
        "flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-8 lg:gap-16 relative",
        className
      )}
    >
      <div className="z-0 absolute bottom-auto left-0 sm:bottom-0">{icon}</div>
      {/* Title */}
      <h6 className="text-lg font-semibold text-neutral-black-100 z-10 ml-6">
        {title}
      </h6>
      {/* Description */}
      <div className="flex-1">
        <p className="text-base text-neutral-black-100">{description}</p>
      </div>
    </div>
  );
}
