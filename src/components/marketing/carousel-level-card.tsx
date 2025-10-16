import Link from "next/link";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CarouselLevelCardProps {
  level: number;
  title: string;
  duration: string;
  buttonText: string;
  className?: string;
}

export function CarouselLevelCard({
  level,
  title,
  duration,
  buttonText,
  className,
}: CarouselLevelCardProps) {
  return (
    <Card
      className={cn(
        "pt-8 pl-10 w-[562] bg-white border-secondary-teal-100",
        className
      )}
    >
      <div className="flex items-center gap-10 mb-3">
        <div className="bg-teal-500 text-sm rounded-full w-[64] h-[64] flex items-center justify-center flex-col">
          <p className="text-white font-bold text-sm">LEVEL</p>{" "}
          <p className="text-white font-semibold text-lg leading-4">{level}</p>
        </div>
        <div>
          <p className="text-m font-semibold">{title}</p>
          <p className="opacity-90">Duration: {duration}</p>
        </div>
      </div>
      <div className="pl-[90] pt-4">
        <Button variant="outline" size="md" asChild>
          <Link href="/find-jobs">
            <span>{buttonText}</span>
            <div className="p-2 bg-primary-100 rounded-md">
              <ChevronRight className="h-4 w-4" color="#fff" />
            </div>
          </Link>
        </Button>
      </div>
    </Card>
  );
}
