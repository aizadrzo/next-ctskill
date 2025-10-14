import { cn } from "@/lib/utils";

export interface TestimonialContentProps {
  className?: string;
  title?: string;
  subtitle?: string;
  description?: string;
}

function Testimonial({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="testimonial"
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 max-w-[463px]",
        className
      )}
      {...props}
    />
  );
}

function TestimonialContent({
  className,
  title,
  subtitle,
  description,
}: TestimonialContentProps) {
  return (
    <div
      data-slot="testimonial-content"
      className={cn("flex flex-col gap-1", className)}
    >
      <h6 className="text-primary-100 font-semibold">{title}</h6>
      <p className="text-neutral-grey-100">{subtitle}</p>
      <p>{description}</p>
    </div>
  );
}

export { Testimonial, TestimonialContent };
