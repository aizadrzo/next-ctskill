import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import {
  PrideIcon,
  RespectIcon,
  AccountabilityIcon,
  IntegrityIcon,
  ServiceExcellenceIcon,
  HeartIcon,
  IncreaseIcon,
  MedicalBoxIcon,
  NewsletterIcon,
  OnlineLearningIcon,
  StarOnShieldIcon,
} from "../../../public/core-values-icons";
import { cn } from "@/lib/utils";

const OverlayIcon = {
  Pride: PrideIcon,
  Respect: RespectIcon,
  Accountability: AccountabilityIcon,
  Integrity: IntegrityIcon,
  ServiceExcellence: ServiceExcellenceIcon,
  Heart: HeartIcon,
  Increase: IncreaseIcon,
  MedicalBox: MedicalBoxIcon,
  Newsletter: NewsletterIcon,
  OnlineLearning: OnlineLearningIcon,
  StarOnShield: StarOnShieldIcon,
} as const;

export type IconBoxProps = {
  image?: string;
  iconAlt: string;
  title: string;
  description: string;
  className?: string;
  overlay?: keyof typeof OverlayIcon;
};

export function IconBox({
  image,
  iconAlt,
  title,
  description,
  className = "",
  overlay,
}: IconBoxProps) {
  return (
    <Card
      className={cn(
        "border border-neutral-black-30 bg-neutral-white-100 rounded-lg",
        className
      )}
    >
      <CardContent className="flex flex-col items-center justify-center gap-4 py-6 px-0 h-full">
        {/* Image */}
        {image && (
          <div className="w-12 h-12 flex items-center justify-center">
            <Image
              src={image}
              alt={iconAlt}
              width={48}
              height={48}
              className="object-contain"
            />
          </div>
        )}
        <div className="relative">
          {overlay && (
            <div className="absolute bottom-0 left-[-28px] z-10">
              {React.createElement(
                OverlayIcon[overlay as keyof typeof OverlayIcon],
                {
                  className: "w-12 h-12 text-primary-60 opacity-50",
                }
              )}
            </div>
          )}
          {/* Title */}
          <CardTitle className="text-lg font-semibold text-neutral-black-100 leading-tight tracking-tight text-center relative z-20">
            {title}
          </CardTitle>
        </div>
        {/* Description */}
        <CardDescription className="px-6 w-full">
          <p className="text-base text-neutral-black-100 text-center leading-relaxed">
            {description}
          </p>
        </CardDescription>
      </CardContent>
    </Card>
  );
}
