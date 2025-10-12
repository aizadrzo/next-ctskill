import * as React from "react";
import Image from "next/image";
import { GraduationCap, Book, UserSearch } from "lucide-react";
import { MiniServiceCard } from "@/components/marketing/mini-services-card";

/**
 * Features the main heading, description, and mini service cards.
 */
export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Skewed Background Element */}
      <div className="absolute inset-0 w-full h-full bg-primary-10 transform skew-y-[-6deg] origin-top-left z-0"></div>
      {/* Group 1 Background */}
      <div className="absolute w-[676px] h-[670px] hidden lg:block top-0 right-0 z-0">
        <Image
          src="/images/group-1.png"
          alt="Background Pattern"
          fill
          className="object-contain"
        />
      </div>
      <div className="absolute bottom-0 right-[100px] w-[779px] h-[807px] hidden lg:block z-0">
        <Image
          src="/images/main-hero.png"
          alt="Hero Background"
          fill
          className="object-contain"
        />
      </div>

      <div className="container mx-auto px-6 sm:px-10 lg:px-[100px] relative z-10">
        <div className="flex flex-col justify-center gap-20 py-[144px] h-[820px]">
          {/* Main Content Container */}
          <div className="flex flex-col gap-6 w-full lg:max-w-[58%] h-full">
            {/* Heading Section */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col w-full">
                <h3 className="text-xl md:text-3xl font-semibold text-neutral-black-100">
                  Developing
                </h3>
                <h2 className="text-3xl md:text-4xl font-semibold text-primary-100 border-b-2 border-primary-20">
                  Careers and Companies
                </h2>
              </div>
            </div>

            {/* Description */}
            <p className="text-base md:text-(length:--font-size-b3) text-neutral-black-100">
              Through training and recruitment services, we help <br />
              <span className="font-bold">
                individuals reach their potential
              </span>{" "}
              — <span className="font-bold">and help businesses grow</span>.
            </p>
          </div>

          {/* Service Cards Section */}
          <div className="flex flex-col gap-6">
            <p className="text-base text-neutral-black-100">
              I'm looking for...
            </p>

            {/* Service Cards */}
            <div className="flex flex-col sm:flex-row gap-4">
              <MiniServiceCard
                icon={<GraduationCap className="w-8 h-8" />}
                title="Apprenticeships"
                iconColor="teal"
                titleColor="black"
                className="w-full sm:w-[300px]"
              />
              <MiniServiceCard
                icon={<Book className="w-8 h-8" />}
                title="Online Courses"
                iconColor="orange"
                titleColor="black"
                className="w-full sm:w-[300px]"
              />
              <MiniServiceCard
                icon={<UserSearch className="w-8 h-8" />}
                title="Recruitment"
                iconColor="magenta"
                titleColor="black"
                className="w-full sm:w-[300px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
