import * as React from "react";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

export interface ContentBoxLinkProps {
  title: string;
  icon: React.ReactNode;
  iconColor?: "teal" | "orange" | "magenta";
  href?: string;
  onClick?: () => void;
  className?: string;
}

const iconColorClasses = {
  teal: "bg-secondary-teal-100 text-white",
  orange: "bg-secondary-orange-100 text-white",
  magenta: "bg-secondary-magenta-100 text-white",
};

const hoverColorClasses = {
  teal: "hover:border-secondary-teal-100 hover:shadow-lg hover:shadow-secondary-teal-100/15",
  orange:
    "hover:border-secondary-orange-100 hover:shadow-lg hover:shadow-secondary-orange-100/15",
  magenta:
    "hover:border-secondary-magenta-100 hover:shadow-lg hover:shadow-secondary-magenta-100/15",
};

const titleHoverColorClasses = {
  teal: "group-hover:text-secondary-teal-100",
  orange: "group-hover:text-secondary-orange-100",
  magenta: "group-hover:text-secondary-magenta-100",
};

const chevronHoverColorClasses = {
  teal: "group-hover:text-secondary-teal-100",
  orange: "group-hover:text-secondary-orange-100",
  magenta: "group-hover:text-secondary-magenta-100",
};

/**
 * A content box link component with icon, title, and chevron arrow.
 * Based on the Figma ContentBoxLink/Teal design.
 */
export function ContentBoxLink({
  title,
  icon,
  iconColor = "teal",
  href,
  onClick,
  className,
}: ContentBoxLinkProps) {
  const Component = href ? "a" : "button";

  return (
    <Component
      href={href}
      onClick={onClick}
      className={cn(
        "group flex items-center gap-4 p-6 w-full",
        "bg-white border border-neutral-black-30 rounded-lg",
        hoverColorClasses[iconColor],
        "transition-all duration-200 ease-in-out",
        "cursor-pointer",
        className
      )}
    >
      {/* Icon Container */}
      <div
        className={cn(
          "w-[78px] h-[78px] rounded-full flex items-center justify-center",
          "flex-shrink-0",
          iconColorClasses[iconColor]
        )}
      >
        {icon}
      </div>

      {/* Content */}
      <div className="flex items-center justify-between flex-1 min-w-0">
        <h3 className="text-lg text-neutral-black-100 font-semibold group-hover:text-primary-100 transition-colors">
          {title}
        </h3>

        {/* Chevron Arrow */}
        <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 ml-4">
          <ChevronRight className="w-4 h-4 text-neutral-black-100" />
        </div>
      </div>
    </Component>
  );
}
