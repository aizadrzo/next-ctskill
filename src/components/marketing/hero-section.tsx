import * as React from "react";
import Image from "next/image";
import { GraduationCap, Book, UserSearch } from "lucide-react";
import { MiniServiceCard } from "@/components/marketing/mini-services-card";

/**
 * Features the main heading, description, and mini service cards.
 */
export function HeroSection() {
  return (
    <section className="relative bg-primary-10 px-5 sm:px-10 lg:px-[100px] py-[144px] h-[820px] flex flex-col justify-center gap-20">
      <div className="container mx-auto">
        {/* Hero Image Swapper - Background Image */}
        {/* Group 1 Background */}
        <div className="absolute w-[676px] h-[670px] hidden lg:block top-0 right-0 z-0">
          <Image
            src="/images/group-1.png"
            alt="Background Pattern"
            fill
            className="object-contain"
          />
        </div>
        <div className="absolute bottom-0 right-[100px] w-[779px] h-[807px] hidden lg:block">
          <Image
            src="/images/main-hero.png"
            alt="Hero Background"
            fill
            className="object-contain"
          />
        </div>

        {/* Main Content Container */}
        <div className="flex flex-col gap-6 w-full lg:w-[50%] h-full">
          {/* Heading Section */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col w-full">
              <h3 className="text-h3 font-semibold text-neutral-black-100">
                Developing
              </h3>
              <h2 className="text-h2 font-semibold text-primary-100 border-b-2 border-primary-20">
                Careers and Companies
              </h2>
            </div>
          </div>

          {/* Description */}
          <p className="text-b3 text-neutral-black-100">
            Through training and recruitment services, we help <br />
            <span className="font-bold">
              individuals reach their potential
            </span>{" "}
            — <span className="font-bold">and help businesses grow</span>.
          </p>
        </div>

        {/* Service Cards Section */}
        <div className="flex flex-col gap-6">
          <p className="text-b4 text-neutral-black-100">I'm looking for...</p>

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
    </section>
  );
}
