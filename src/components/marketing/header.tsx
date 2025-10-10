"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

/**
 * Renders the complete marketing header component.
 * This is a Client Component due to the use of interactive Buttons.
 * It is styled to match the Figma design exactly.
 */
export default function Header() {
  // Navigation items to be rendered in the center
  const navItems = [
    { name: "About", href: "/about" },
    { name: "Apprenticeships", href: "/apprenticeships" },
    { name: "Online Courses", href: "/online-courses" },
    { name: "Recruitment", href: "/recruitment" },
    { name: "Insights", href: "/insights" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-neutral-white-100">
      <div className="container mx-auto flex h-[110px] items-center justify-between px-6 sm:px-10 lg:px-[100px]">
        {/* 1. Logo/Brand Area */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.svg"
            height={78}
            width={113}
            alt="CT Skills Logo"
            className="h-[78px] w-[113px]"
          />
        </Link>

        {/* 2. Navigation Menu & Center Content */}
        <nav className="hidden lg:flex items-center gap-9 pl-10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-b4 text-neutral-black-100 font-normal hover:text-primary-100 transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* 3. Call-to-Action Buttons */}
        <div className="flex items-center gap-3">
          {/* Find Jobs Button (Outline) */}
          <Button variant="outline" size="md" asChild>
            <Link href="/find-jobs">
              <span>Find Jobs</span>
              <div className="p-2 bg-primary-100 rounded-md">
                <ChevronRight className="h-4 w-4" color="#fff" />
              </div>
            </Link>
          </Button>

          {/* Let's Talk Button (Solid Primary) */}
          <Button variant="default" size="md" asChild>
            <Link href="/lets-talk">
              <span>Let's Talk</span>
              <div className="p-2 bg-neutral-white-100 rounded-md">
                <ChevronRight className="h-4 w-4" color="#450932" />
              </div>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
