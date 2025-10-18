import * as React from "react";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

// Props interface for the profile card component
export interface ProfileCardProps {
  image: string;
  imageAlt: string;
  firstName: string;
  lastName: string;
  jobTitle: string;
  email: string;
  phone: string;
  link?: string;
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
  link,
  className,
}: ProfileCardProps) {
  const CardComponent = (
    <Card
      className={cn(
        "relative flex flex-col items-center gap-6 p-7 bg-neutral-white-100 rounded-lg transition-all duration-200 border-neutral-black-30 hover:border-primary-100 hover:shadow-[0px_0px_8px_0px_rgba(0,0,0,0.1)] group cursor-pointer",
        className
      )}
    >
      <div className="absolute bottom-0 right-0 w-28 h-28 opacity-0 group-hover:opacity-100 transform translate-x-8 translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 ease-out z-0">
        <Image
          src="/decorations/corner-purple.svg"
          alt="Corner Decoration"
          fill
          className="object-cover rounded-br-lg"
        />
      </div>
      {/* Profile Image */}
      <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
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
      <CardContent className="flex flex-col items-start gap-4 w-full px-0">
        {/* Name and Title */}
        <div className="flex flex-col gap-1">
          <CardTitle className="text-xl font-semibold text-neutral-black-100">
            {firstName}
            <br />
            {lastName}
          </CardTitle>
          <p className="text-base text-neutral-black-50 group-hover:text-neutral-black-100">
            {jobTitle}
          </p>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col items-start gap-2 w-full">
          {/* Email */}
          <div className="flex items-center gap-4">
            <Mail className="w-5 h-6 text-primary-60" />
            <span className="text-base text-neutral-black-50 group-hover:text-neutral-black-100 underline underline-offset-2">
              {email}
            </span>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4">
            <Phone className="w-5 h-6 text-primary-60" />
            <span className="text-base text-neutral-black-50 group-hover:text-neutral-black-100 underline underline-offset-2">
              {phone}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  if (link) {
    return <Link href={link}>{CardComponent}</Link>;
  }

  return CardComponent;
}
