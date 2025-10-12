import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";

import { cn } from "@/lib/utils";

// CVA for the profile card container to handle different variants
const profileCardVariants = cva(
  "relative flex flex-col items-center gap-6 p-7 bg-neutral-white-100 rounded-lg transition-all duration-200",
  {
    variants: {
      variant: {
        default: "border border-neutral-black-30",
        highlighted:
          "border-2 border-primary-100 shadow-[0px_0px_8px_0px_rgba(0,0,0,0.1)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

// Props interface for the profile card component
export interface ProfileCardProps
  extends VariantProps<typeof profileCardVariants> {
  image: string;
  imageAlt: string;
  firstName: string;
  lastName: string;
  jobTitle: string;
  email: string;
  phone: string;
  showCornerDecoration?: boolean;
  className?: string;
}

/**
 * A flexible profile card component for team members.
 * Matches the Figma design with customizable variants and contact information.
 */
export function ProfileCard({
  image,
  imageAlt,
  firstName,
  lastName,
  jobTitle,
  email,
  phone,
  variant = "default",
  showCornerDecoration = false,
  className,
}: ProfileCardProps) {
  return (
    <div className={cn(profileCardVariants({ variant }), className)}>
      {/* Profile Image */}
      <div className="relative w-[235px] h-[235px] rounded-lg overflow-hidden">
        <Image src={image} alt={imageAlt} fill className="object-cover" />

        {/* LinkedIn Icon Overlay */}
        <div className="absolute bottom-4 right-4 w-8 h-8 flex items-center justify-center">
          <Image
            src="/images/linkedin-icon.svg"
            alt="LinkedIn"
            width={32}
            height={32}
            className="object-contain"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col items-center gap-4 w-full">
        {/* Name and Title */}
        <div className="flex flex-col items-center gap-1">
          <h5 className="text-xl font-semibold text-neutral-black-100 text-center">
            {firstName}
            <br />
            {lastName}
          </h5>
          <p className="text-base text-neutral-grey-100 text-center">
            {jobTitle}
          </p>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col items-center gap-2 w-full">
          {/* Email */}
          <div className="flex items-center gap-4">
            <Mail className="w-5 h-6 text-primary-60" />
            <span className="text-base text-neutral-grey-100">{email}</span>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4">
            <Phone className="w-5 h-6 text-primary-60" />
            <span className="text-base text-neutral-grey-100">{phone}</span>
          </div>
        </div>
      </div>

      {/* Corner Decoration (Optional) */}
      {showCornerDecoration && (
        <div className="absolute bottom-0 right-0 w-[102px] h-[112px]">
          <Image
            src="/images/corner-decoration.svg"
            alt="Corner Decoration"
            fill
            className="object-cover"
          />
        </div>
      )}
    </div>
  );
}
