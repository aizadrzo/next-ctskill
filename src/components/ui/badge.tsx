import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-sm border-0 font-normal whitespace-nowrap",
  {
    variants: {
      variant: {
        primary: "bg-primary-100 text-neutral-white-100",
        white: "bg-neutral-white-100 text-primary-100",
      },
      size: {
        sm: "px-2 py-0.5 text-b5",
        md: "px-2 py-0 text-b4 h-7",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "sm",
    },
  }
);

function Badge({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
