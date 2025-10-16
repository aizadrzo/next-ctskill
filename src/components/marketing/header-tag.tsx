import { cn } from "@/lib/utils";
import { Card } from "../ui/card";

export interface HeaderTagProps {
  text: string;
  className?: string;
}

export function HeaderTag({ text, className }: HeaderTagProps) {
  return (
    <Card
      className={cn(
        "bg-teal-500 text-black px-4 py-2 rounded-md shadow-md border-secondary-teal-100",
        className
      )}
    >
      {text}
    </Card>
  );
}
