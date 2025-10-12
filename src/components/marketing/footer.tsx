"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
  ChevronRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Youtube, href: "#" },
  ];

  const footerLinks = [
    { name: "About", href: "/about" },
    { name: "Apprenticeships", href: "/apprenticeships" },
    { name: "Online Courses", href: "/online-courses" },
    { name: "Jobs", href: "/jobs" },
    { name: "Insights", href: "/insights" },
  ];

  const contactInfo = [
    { icon: Phone, text: "0115 959 9544" },
    { icon: Mail, text: "info@ctskills.co.uk" },
    {
      icon: MapPin,
      text: "The Quadrant, Nuart Road, Beeston, Nottingham, NG9 2NH",
    },
  ];

  return (
    <footer className="w-full">
      {/* Main Footer Section */}
      <div className="bg-primary-100 text-neutral-white-100 rounded-t-2xl">
        <div className="container mx-auto px-5 sm:px-10 lg:px-20 py-12">
          {/* Logo and Slogan */}
          <div className="flex flex-col lg:flex-row items-center lg:items-center lg:justify-between gap-6 pb-6 border-b border-primary-60">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/logo.svg"
                alt="CT Skills Logo"
                width={144}
                height={101}
                className="h-auto"
              />
            </Link>
            <h1 className="text-xl font-semibold text-right lg:text-right">
              Developing Careers
              <br />
              and Companies.
            </h1>
          </div>

          {/* Main Footer Content */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-6 pt-10">
            {/* Navigation Links */}
            <div className="w-full lg:w-[318px]">
              <nav className="flex flex-col gap-4">
                {footerLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-base text-neutral-white-100 font-normal hover:text-primary-100 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact Section */}
            <div className="flex-1 flex flex-col justify-between gap-6">
              <div className="flex flex-col gap-4">
                <Button
                  asChild
                  className="bg-neutral-white-100 w-fit"
                  variant="outline"
                >
                  <Link href="/find-jobs">
                    <span className="text-primary-120">Contact Us</span>
                    <div className="p-2 bg-primary-100 rounded-md">
                      <ChevronRight className="h-4 w-4 " color="#fff" />
                    </div>
                  </Link>
                </Button>

                <div className="flex flex-col gap-2">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <item.icon className="mt-1 size-5 shrink-0 text-neutral-white-100" />
                      <span className="text-base text-neutral-white-100">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Newsletter and Socials */}
            <div className="w-full lg:w-[349px] flex flex-col items-start lg:items-end gap-8">
              {/* Newsletter */}
              <div className="w-full">
                <h3 className="text-lg font-semibold text-neutral-white-100 mb-4">
                  Subscribe to our newsletter
                </h3>
                <form className="flex items-center w-full">
                  <Input
                    type="email"
                    placeholder="Enter your email here"
                    className="flex-1 rounded-r-none border-0 bg-neutral-white-100 text-neutral-black-100 placeholder:text-neutral-grey-100 focus-visible:ring-0 h-10"
                  />
                  <Button
                    type="submit"
                    size="icon"
                    className="h-10 w-10 rounded-l-none"
                  >
                    <ChevronRight className="size-5" />
                  </Button>
                </form>
              </div>

              {/* Social Media */}
              <div className="w-full">
                <h3 className="text-lg font-semibold text-neutral-white-100 mb-4 text-left lg:text-right">
                  Let's connect
                </h3>
                <div className="flex gap-2 lg:justify-end">
                  {socialLinks.map((link, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      size="icon"
                      className="w-8 h-8 bg-neutral-white-100 text-primary-100 hover:bg-neutral-white-100/80 rounded-sm"
                      asChild
                    >
                      <Link href={link.href}>
                        <link.icon className="size-5" />
                      </Link>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-neutral-black-100 text-neutral-white-100">
        <div className="container mx-auto px-5 sm:px-10 lg:px-20 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5">
              <span className="text-xs text-neutral-white-100">
                2025 © CT Skills
              </span>
              <Link
                href="/privacy-policy"
                className="text-xs text-neutral-white-100 hover:underline"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-and-conditions"
                className="text-xs text-neutral-white-100 hover:underline"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/cookie-policy"
                className="text-xs text-neutral-white-100 hover:underline"
              >
                Cookie Policy
              </Link>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="text-xs text-neutral-white-100">Site by</span>
              <Image
                src="/images/sourceflow.svg"
                alt="Sourceflow Logo"
                width={137}
                height={15}
                className="h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
