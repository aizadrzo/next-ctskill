"use client";

import Image from "next/image";
import { PageHeader } from "@/components/marketing/page-header";
import { ContactForm } from "@/components/forms/contact-form";
import { Phone, Mail, MapPin } from "lucide-react";

const breadcrumbs = [{ label: "Home", href: "/" }, { label: "Contact Us" }];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <PageHeader title="Contact Us" breadcrumbs={breadcrumbs} />

      {/* Contact Form with Sidebar */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-6 sm:px-10 lg:px-[100px]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Reach Out to Us */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-primary-100">
                  REACH OUT TO US
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Phone className="w-5 h-6 text-primary-100" />
                    <span className="text-base text-neutral-black-100">
                      0115 959 9544
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="w-5 h-6 text-primary-100" />
                    <span className="text-base text-neutral-black-100">
                      info@ctskills.co.uk
                    </span>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-6 text-primary-100 mt-1" />
                    <span className="text-base text-neutral-black-100">
                      The Quadrant, Nuart Road
                      <br />
                      Beeston, Nottingham, NG9 2NH
                    </span>
                  </div>
                </div>
              </div>

              {/* Connect with Us */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-primary-100">
                  CONNECT WITH US
                </h3>
                <div className="flex gap-2">
                  <div className="w-8 h-8 bg-neutral-black-10 rounded flex items-center justify-center">
                    <span className="text-xs text-neutral-black-50">FB</span>
                  </div>
                  <div className="w-8 h-8 bg-neutral-black-10 rounded flex items-center justify-center">
                    <span className="text-xs text-neutral-black-50">LI</span>
                  </div>
                  <div className="w-8 h-8 bg-neutral-black-10 rounded flex items-center justify-center">
                    <span className="text-xs text-neutral-black-50">IG</span>
                  </div>
                  <div className="w-8 h-8 bg-neutral-black-10 rounded flex items-center justify-center">
                    <span className="text-xs text-neutral-black-50">YT</span>
                  </div>
                  <div className="w-8 h-8 bg-neutral-black-10 rounded flex items-center justify-center">
                    <span className="text-xs text-neutral-black-50">TT</span>
                  </div>
                </div>
              </div>

              {/* Visit Us */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-primary-100">
                  VISIT US
                </h3>
                <div className="w-full h-[307px] bg-neutral-black-10 rounded-lg overflow-hidden relative">
                  <Image
                    src="/images/map-placeholder.png"
                    alt="Map"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-4 left-4 bg-white rounded-lg p-3 shadow-lg">
                    <div className="text-sm font-medium text-neutral-black-100">
                      CT Skills
                    </div>
                    <div className="text-xs text-primary-100">
                      View larger map
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm
                onSubmit={(data) => {
                  console.log("Form submitted:", data);
                  // Handle form submission here
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
