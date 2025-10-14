"use client";

import Image from "next/image";
import { HeroSection } from "@/components/marketing/hero-section";
import { ServicesCard } from "@/components/marketing/services-card";
import { MiniServiceCard } from "@/components/marketing/mini-services-card";
import { CoreValues } from "@/components/marketing/core-values";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { GraduationCap, Book, UserSearch, Briefcase, Play } from "lucide-react";
import {
  PrideIcon,
  RespectIcon,
  AccountabilityIcon,
  IntegrityIcon,
  ServiceExcellenceIcon,
} from "../../public/core-values-icons";
import { ContactForm, UploadCV, UploadVacancy } from "@/components/forms";

// Services data for the intro section
const introServices = [
  {
    icon: <GraduationCap className="w-8 h-8" />,
    color: "teal" as const,
    title: "Apprenticeships",
    description:
      "Work-based learning that drives real results — for individuals and employers alike, today and in the future.",
  },
  {
    icon: <Book className="w-8 h-8" />,
    color: "orange" as const,
    title: "Online Courses",
    description:
      "Learn anytime, anywhere. Our wide range of accredited online learning tailored to support career growth and continuous development.",
  },
  {
    icon: <UserSearch className="w-8 h-8" />,
    color: "magenta" as const,
    title: "Recruitment Services",
    description:
      "From sourcing top talent to connecting jobseekers with rewarding roles, we support both candidates and companies at every step.",
  },
] as const;

// Core values data
const coreValues = [
  {
    icon: (
      <PrideIcon className="absolute bottom-0 left-0 w-15 h-15 sm:w-12 sm:h-12 text-primary-60 opacity-50 z-0" />
    ),
    title: "Pride",
    description: "A commitment to quality and achieving meaningful results",
  },
  {
    icon: (
      <RespectIcon className="absolute bottom-0 left-0 w-15 h-15 sm:w-12 sm:h-12 text-primary-60 opacity-50 z-0" />
    ),
    title: "Respect",
    description: "Listening, valuing, and supporting every individual",
  },
  {
    icon: (
      <AccountabilityIcon className="absolute bottom-0 left-0 w-15 h-15 sm:w-12 sm:h-12 text-primary-60 opacity-50 z-0" />
    ),
    title: "Accountability",
    description: "Taking ownership and delivering on promises",
  },
  {
    icon: (
      <IntegrityIcon className="absolute bottom-0 left-0 w-15 h-15 sm:w-12 sm:h-12 text-primary-60 opacity-50 z-0" />
    ),
    title: "Integrity",
    description: "Acting with honesty, transparency, and purpose",
  },
  {
    icon: (
      <ServiceExcellenceIcon className="absolute bottom-0 left-0 w-15 h-15 sm:w-12 sm:h-12 text-primary-60 opacity-50 z-0" />
    ),
    title: "Service Excellence",
    description: "Striving to exceed expectations at every opportunity",
  },
] as const;

const featuresServices = [
  {
    icon: <GraduationCap className="w-8 h-8" />,
    title: "Apprenticeships",
    iconColor: "teal",
  },
  {
    icon: <Book className="w-8 h-8" />,
    title: "Online Courses",
    iconColor: "orange",
  },
  {
    icon: <UserSearch className="w-8 h-8" />,
    title: "Recruitment",
    iconColor: "magenta",
  },
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: "Jobs",
    iconColor: "magenta",
  },
] as const;

export default function Home() {
  return (
    <div className="min-h-dvh">
      {/* Hero Section */}
      <HeroSection />
      {/* Homepage Intro Section */}
      <section className="relative bg-neutral-white-100 py-16 sm:py-20 lg:py-[80px]">
        {/* Group 1 Background */}
        <div className="absolute top-[-43px] right-[100px] w-[676px] h-[670px] hidden z-0 lg:block">
          <Image
            src="/images/group-1.png"
            alt="Background Pattern"
            fill
            className="object-contain z-0"
          />
        </div>

        <div className="container mx-auto px-6 sm:px-10 lg:px-[100px]">
          {/* Main Content Container */}
          <div className="flex flex-col lg:flex-row justify-between items-end gap-12 sm:gap-16 lg:gap-20 mb-16 sm:mb-20 lg:mb-24 relative z-10">
            {/* Left Content - Text */}
            <div className="w-full lg:w-[608px] space-y-6 lg:space-y-[26px]">
              <h3 className="text-2xl sm:text-3xl font-semibold text-neutral-black-100">
                Empowering <span className="text-primary-100">People</span>.
                <br />
                Supporting <span className="text-primary-100">Progress</span>.
              </h3>
              <p className="text-(length:--font-size-b3) text-neutral-black-100">
                We deliver high-quality, flexible solutions designed to meet the
                demands of today's fast-changing world of work:
              </p>
            </div>

            {/* Right Content - Video */}
            <div className="w-full lg:w-[552px] h-[330px] rounded-lg overflow-hidden relative">
              <Image
                src="/images/video-placeholder.png"
                alt="Video Placeholder"
                fill
                className="object-cover"
              />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[74px] h-[74px] bg-neutral-white-100 rounded-full flex items-center justify-center shadow-lg">
                  <Play className="w-8 h-8 text-primary-100 ml-1" />
                </div>
              </div>
            </div>
          </div>

          {/* Services Cards - Positioned at Bottom Right */}
          <div className="flex flex-col gap-5 lg:flex-row lg:gap-10 lg:justify-end relative z-10">
            {introServices.map((service) => (
              <ServicesCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                color={service.color}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why CT Skills and Core Values Section */}
      <section className="relative bg-primary-10 py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-6 sm:px-10 lg:px-[100px] z-10">
          {/* Main Container */}
          <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-[184px]">
            {/* Left Side - Why CT Skills Card */}
            <div className="w-full lg:w-[400px] h-fit bg-neutral-white-100 border border-neutral-black-30 rounded-lg flex-shrink-0">
              <div className="p-8 space-y-8">
                <div className="space-y-4">
                  <h4 className="text-2xl font-semibold text-neutral-black-100">
                    Why <span className="text-primary-100">CT Skills</span>?
                  </h4>
                  <div className="space-y-4">
                    <p className="text-base text-neutral-black-100">
                      Because we put people and progress first - we're your
                      dedicated partner in growth.
                    </p>
                    <p className="text-base text-neutral-black-100">
                      Our experienced team is passionate about delivering
                      training and recruitment with impact — built around our
                      core values.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Core Values List */}
            <div className="flex-1 space-y-12 sm:space-y-6">
              {coreValues.map((value) => (
                <CoreValues
                  className="sm:h-12"
                  key={value.title}
                  icon={value.icon}
                  title={value.title}
                  description={value.description}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Separation Line */}
      <div className="container mx-auto px-6 sm:px-10 lg:px-[100px]">
        <div className="w-full h-px bg-primary-60"></div>
      </div>

      {/* Awards Carousel Section */}
      <section className="bg-primary-10 pt-16 sm:pt-20 lg:pt-[100px]">
        <div className="container mx-auto px-6 sm:px-10">
          <div className="flex flex-col items-center gap-10 sm:gap-12">
            <h6 className="text-sm font-normal text-primary-60 uppercase tracking-wider">
              ACCREDITATIONS & AWARDS
            </h6>

            {/* Awards Carousel Placeholder */}
            <div className="w-full h-10 bg-neutral-black-10 rounded flex items-center justify-center">
              <p className="text-base text-neutral-black-50">Awards Carousel</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-primary-10 py-16 sm:py-20 lg:pt-[100px] lg:pb-[80px]">
        <div className="container mx-auto px-6 sm:px-10 lg:px-[100px]">
          <div className="flex flex-col items-center gap-12 sm:gap-14">
            {/* Header */}
            <div className="flex flex-col items-center gap-4">
              <h6 className="text-sm font-normal text-primary-60 uppercase tracking-wider">
                TESTIMONIALS
              </h6>
              <h6 className="text-lg font-semibold text-primary-100 text-center">
                Listen to what people have to say about their experience with
                us!
              </h6>
            </div>

            {/* Testimonials Carousel Placeholder */}
            <div className="w-full max-w-[545px] h-[545px] bg-neutral-white-100 border border-primary-100 rounded-lg flex items-center justify-center">
              <div className="text-center space-y-4">
                <p className="text-base text-neutral-black-100">
                  Testimonials Carousel
                </p>
                <p className="text-sm text-neutral-black-50">
                  Samantha Lin - Customer Service
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Can We Help You Today Section */}
      <section className="relative bg-neutral-white-100 py-16 sm:py-20 lg:pt-[144px] lg:pb-[40px]">
        <div className="container mx-auto px-6 sm:px-10 lg:px-[100px]">
          {/* Main Content Container */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 sm:gap-10 lg:gap-12">
            {/* Left Content - Text */}
            <div className="w-full lg:w-[502px] space-y-4 sm:space-y-6">
              <h4 className="text-xl sm:text-2xl font-semibold text-neutral-black-100">
                How can we <span className="text-primary-100">help you</span>{" "}
                today?
              </h4>
              <div className="space-y-4 sm:space-y-6">
                <p className="text-base text-neutral-black-100">
                  Learning doesn't stop with school — and neither does
                  opportunity. At CT Skills, we make development possible at
                  every age and every stage.
                </p>
                <p className="text-base text-neutral-black-100">
                  Whether you're preparing for your first job, changing
                  direction, upskilling your team or hiring new talent — we're
                  here to support you.
                </p>
              </div>
            </div>

            {/* Right Content - Mini Service Cards */}
            <div className="w-full lg:w-[633px] lg:h-[169px]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:h-full">
                {/* Top Row */}
                {featuresServices.map((service) => (
                  <MiniServiceCard
                    key={service.title}
                    icon={service.icon}
                    title={service.title}
                    iconColor={service.iconColor}
                    titleColor="black"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Triple CTA Form Section */}
      <section className="relative py-16 sm:py-20 lg:pt-[80px] lg:pb-[100px]">
        <div className="container mx-auto px-6 sm:px-10 lg:px-[100px]">
          <div className="flex flex-col items-center justify-center gap-10 sm:gap-12 relative z-10">
            {/* CTA Tabs */}
            <Tabs defaultValue="get-in-touch" className="w-full max-w-[773px]">
              <TabsList className="w-full flex-col sm:flex-row gap-1 sm:gap-0">
                <TabsTrigger
                  value="get-in-touch"
                  className="w-full sm:flex-1 text-center"
                >
                  Get in touch
                </TabsTrigger>
                <TabsTrigger
                  value="upload-cv"
                  className="w-full sm:flex-1 text-center"
                >
                  Upload your CV
                </TabsTrigger>
                <TabsTrigger
                  value="submit-vacancy"
                  className="w-full sm:flex-1 text-center"
                >
                  Submit a vacancy
                </TabsTrigger>
              </TabsList>

              <TabsContent value="get-in-touch" className="mt-8">
                {/* Get in touch form content */}
                <ContactForm
                  onSubmit={(data) => {
                    console.log("Form submitted:", data);
                    // Handle form submission here
                  }}
                />
              </TabsContent>

              <TabsContent value="upload-cv" className="mt-8">
                {/* Upload CV form content */}
                <UploadCV
                  onSubmit={(data) => {
                    console.log("CV uploaded:", data);
                    // Handle CV submission
                  }}
                />
              </TabsContent>

              <TabsContent value="submit-vacancy" className="mt-8">
                {/* Submit vacancy form content */}
                <UploadVacancy
                  onSubmit={(data) => {
                    console.log("Vacancy uploaded:", data);
                    // Handle vacancy submission
                  }}
                />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </div>
  );
}
