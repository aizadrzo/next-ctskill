"use client";

import * as React from "react";
import Link from "next/link";
// Assuming you have a standard Icon component for the arrow
import { ChevronRight } from "lucide-react";
import Image from "next/image";

// Assuming you have these components set up via shadcn/ui
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

/**
 * Renders the complete marketing header component.
 * This is a Client Component due to the use of NavigationMenu and interactive Buttons.
 * It is styled to match the provided image and custom color palette.
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
    <header className="sticky top-0 z-50 w-full bg-background/95 bg-white">
      <div className="container flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8 mx-auto">
        {/* 1. Logo/Brand Area */}
        <Link href="/" className="flex items-center">
          {/* TODO: Replace this entire div with your actual logo component or Image component.
            Using a placeholder size for layout based on the image.
          */}
          <Image
            // CORRECT path: Must omit 'public' and start from the root '/'
            src="/images/logo.svg"
            height={100}
            width={100}
            alt="CT Skills Logo"
            // Adjust the size to better fit the visual scale of the image
            className="h-14 w-auto"
          />
        </Link>

        {/* 2. Navigation Menu & Center Content */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="space-x-8">
            {navItems.map((item) => (
              <NavigationMenuLink asChild key={item.name}>
                <Link
                  href={item.href}
                  className="text-b4 text-neutral-black-100 font-medium hover:text-primary-100 transition-colors duration-200"
                >
                  {item.name}
                </Link>
              </NavigationMenuLink>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* 3. Call-to-Action Buttons */}
        <div className="flex items-center space-x-4">
          {/* Find Jobs Button (Outlined in Primary 100, White Fill) */}
          <Button
            asChild
            // Custom variant for the outlined button with sharp border
            variant="outline"
          >
            <Link href="/find-jobs">
              <span>Find jobs</span>
              <div className="p-2 bg-primary-100 rounded-md">
                <ChevronRight className="h-4 w-4 " color="#fff" />
              </div>
            </Link>
          </Button>

          {/* Let's Talk! Button (Solid Primary 100) */}
          <Button asChild>
            <Link
              href="/lets-talk"
              className="flex items-center justify-center"
            >
              <span>Let's Talk!</span>
              <div className="p-2 bg-neutral-white-100 rounded-md">
                <ChevronRight className="h-4 w-4 " color="#450932" />
              </div>
            </Link>
          </Button>

          {/* TODO: Add Mobile Menu Toggle (Button for small screens) */}
        </div>
      </div>
    </header>
  );
}
