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
    <footer className="bg-primary-100 text-neutral-white-100 rounded-2xl m-5">
      <div className="container mx-auto px-20 py-12">
        {/* Logo and Slogan */}
        <div className="flex items-center pb-6 border-b-primary-60 border-b-1">
          <Link href="/" className="flex-1">
            <Image
              src="/images/logo.svg"
              alt="CT Skills Logo"
              width={120}
              height={50}
              className="h-auto"
            />
          </Link>
          <h1 className="text-2xl font-semibold text-right w-[20%]">
            Developing Careers and Companies.
          </h1>
        </div>
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 pt-10">
          {/* Links Section */}
          <div className="md:col-span-3 lg:col-span-3">
            <nav className="flex flex-col space-y-4">
              {footerLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="hover:underline"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Section */}
          <div className="md:col-span-3 lg:col-span-3">
            <div className="flex flex-col space-y-4">
              <Button
                className="bg-neutral-white-100 text-primary-120 hover:bg-neutral-white-100 hover:text-primary-120 w-fit"
                asChild
              >
                <Link href="/contact-us">
                  Contact Us
                  <div className="p-2 bg-primary-100 rounded-md">
                    <ChevronRight className="h-4 w-4 " color="#fff" />
                  </div>
                </Link>
              </Button>
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <item.icon className="mt-1 size-5 shrink-0" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter and Socials */}
          <div className="md:col-span-4 lg:col-span-6">
            <div className="flex flex-col space-y-6 items-end">
              <div>
                <h3 className="font-semibold">Subscribe to our newsletter</h3>
                <form className="mt-2 flex items-center">
                  <Input
                    type="email"
                    placeholder="Enter your email here"
                    className="flex-grow rounded-r-none border-0 bg-neutral-white-100 text-neutral-black-100 placeholder:text-neutral-grey-100 focus-visible:ring-0"
                  />
                  <Button
                    type="submit"
                    variant="default"
                    size="icon"
                    className="h-10 rounded-l-none"
                  >
                    <ChevronRight className="size-5" />
                  </Button>
                </form>
              </div>
              <div>
                <h3 className="font-semibold text-right">Let's connect</h3>
                <div className="mt-2 flex space-x-2">
                  {socialLinks.map((link, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      size="icon"
                      className="bg-neutral-white-100 text-primary-120 hover:bg-neutral-white-100/80"
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
      <div className="bg-neutral-black-100 py-[21.5px] rounded-b-2xl">
        <div className="container mx-auto w-full flex flex-col items-center justify-between sm:flex-row px-20">
          <div className="flex flex-col items-center gap-4 text-sm sm:flex-row">
            <span>2025 &copy; CT Skills</span>
            <Link
              href="/privacy-policy"
              className="hover:underline text-[13px]"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-conditions"
              className="hover:underline text-[13px]"
            >
              Terms & Conditions
            </Link>
            <Link href="/cookie-policy" className="hover:underline text-[13px]">
              Cookie Policy
            </Link>
          </div>
          <div className="flex items-center">
            <span className="mr-2.5 text-[13px]">Site by </span>
            <Image
              src="/images/sourceflow.svg"
              alt="CT Skills Logo"
              width={137}
              height={15}
              className="h-auto"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
