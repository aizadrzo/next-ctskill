"use client";

import * as React from "react";
import Image from "next/image";
import { PageHeader } from "@/components/marketing/page-header";
import { CoreValues } from "@/components/marketing/core-values";
import { ProfileCard } from "@/components/marketing/profile-card";
import {
  PrideIcon,
  RespectIcon,
  AccountabilityIcon,
  IntegrityIcon,
  ServiceExcellenceIcon,
} from "../../../public/core-values-icons";
import { ChevronDownIcon, ChevronRight, Play } from "lucide-react";
import Link from "next/link";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import { Separator } from "@/components/ui/separator";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import {
  CheckmarkIcon,
  HandshakeIcon,
  FlagIcon,
} from "../../../public/about-icons";
import { ContactForm } from "@/components/forms";

const breadcrumbs = [{ label: "Home", href: "/" }, { label: "About" }];

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

const teamMembers = [
  {
    image: "/images/team/nicola-aram.jpg",
    imageAlt: "Nicola Aram1",
    firstName: "Nicola",
    lastName: "Aram",
    jobTitle: "Marketing Manager",
    email: "info@ctskills.co.uk",
    phone: "012345678",
  },
  {
    image: "/images/team/nicola-aram.jpg",
    imageAlt: "Nicola Aram2",
    firstName: "Nicola",
    lastName: "Aram",
    jobTitle: "Marketing Manager",
    email: "info@ctskills.co.uk",
    phone: "012345678",
  },
  {
    image: "/images/team/nicola-aram.jpg",
    imageAlt: "Nicola Aram3",
    firstName: "Nicola",
    lastName: "Aram",
    jobTitle: "Marketing Manager",
    email: "info@ctskills.co.uk",
    phone: "012345678",
  },
  {
    image: "/images/team/nicola-aram.jpg",
    imageAlt: "Nicola Aram4",
    firstName: "Nicola",
    lastName: "Aram",
    jobTitle: "Marketing Manager",
    email: "info@ctskills.co.uk",
    phone: "012345678",
  },
  {
    image: "/images/team/nicola-aram.jpg",
    imageAlt: "Nicola Aram5",
    firstName: "Nicola",
    lastName: "Aram",
    jobTitle: "Marketing Manager",
    email: "info@ctskills.co.uk",
    phone: "012345678",
  },
  {
    image: "/images/team/nicola-aram.jpg",
    imageAlt: "Nicola Aram6",
    firstName: "Nicola",
    lastName: "Aram",
    jobTitle: "Marketing Manager",
    email: "info@ctskills.co.uk",
    phone: "012345678",
  },
  {
    image: "/images/team/nicola-aram.jpg",
    imageAlt: "Nicola Aram7",
    firstName: "Nicola",
    lastName: "Aram",
    jobTitle: "Marketing Manager",
    email: "info@ctskills.co.uk",
    phone: "012345678",
  },
  {
    image: "/images/team/nicola-aram.jpg",
    imageAlt: "Nicola Aram8",
    firstName: "Nicola",
    lastName: "Aram",
    jobTitle: "Marketing Manager",
    email: "info@ctskills.co.uk",
    phone: "012345678",
  },
] as const;

const whyChooseUsItems = [
  {
    icon: <FlagIcon className="w-10 h-10 text-neutral-white-100" />,
    title: "Proven Success",
    description:
      "With over 20 years of experience, we have a proven track record of success in developing careers and companies.",
  },
  {
    icon: <CheckmarkIcon className="w-10 h-10 text-neutral-white-100" />,
    title: "Expert Team",
    description:
      "Our experienced team is passionate about delivering training and recruitment with impact.",
  },
  {
    icon: <HandshakeIcon className="w-10 h-10 text-neutral-white-100" />,
    title: "Engaging Learning Environment",
    description:
      "We create engaging learning environments that help individuals reach their full potential.",
  },
] as const;

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHeader title="About Us" breadcrumbs={breadcrumbs} />

      {/* TextImageRow Section */}
      <section className="relative overflow-hidden">
        {/* Skewed Background Element */}
        <div className="absolute inset-0 w-full h-full transform skew-y-[6deg] origin-top-right z-0"></div>

        <div className="container mx-auto px-6 sm:px-10 lg:px-[100px] relative z-10">
          <div className="py-20 sm:py-24 lg:py-[120px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Content */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-black-100">
                    Welcome to{" "}
                    <span className="text-primary-100">CT Skills</span>
                  </h2>
                  <p className="text-base text-neutral-black-100 leading-relaxed">
                    Your trusted partner in{" "}
                    <b>empowering individuals and businesses</b> through{" "}
                    <b>education and training</b>.
                    <br />
                    <br />
                    With over 20 years of experience, we are dedicated to
                    helping our learners and partners{" "}
                    <b>realise their full potential.</b>
                  </p>
                </div>

                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-neutral-black-100">
                    Our <span className="text-primary-100">Mission</span>
                  </h3>
                  <p className="text-base text-neutral-black-100 leading-relaxed">
                    Our mission is straightforward: to be the provider of choice
                    for career development and apprenticeship training.
                    <br />
                    <br />
                    We offer a diverse range of apprenticeships, online courses,
                    and career programmes to ensure everyone has access to
                    quality education.
                  </p>
                </div>
              </div>

              {/* Video */}
              <div className="relative">
                <div className="aspect-[4/3] relative rounded-lg overflow-hidden bg-gradient-to-b from-transparent to-black">
                  <Image
                    src="/images/video-placeholder.png"
                    alt="CT Skills Video"
                    fill
                    className="object-cover"
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[74px] h-[74px] bg-neutral-white-100 rounded-full flex items-center justify-center shadow-lg">
                      <Play className="w-8 h-8 text-primary-100" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-6 sm:px-10 lg:px-[100px] relative z-10">
          <div className="py-20 sm:py-24 lg:py-[120px]">
            <div className="bg-primary-100 rounded-lg p-8 lg:py-10 lg:px-[64px]">
              <div className="text-center space-y-12">
                <h2 className="text-xl sm:text-2xl font-semibold text-neutral-white-100">
                  Why choose us?
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-3 align-middle justify-between gap-8 md:gap-16">
                  {whyChooseUsItems.map((item, index) => (
                    <Collapsible key={index} className="w-full">
                      <CollapsibleTrigger className="flex flex-col items-start justify-between w-full cursor-pointer group">
                        <div className="pb-4 sm:pb-6">{item.icon}</div>
                        <h3 className="sm:text-lg font-semibold text-neutral-white-100 pb-4">
                          {item.title}
                        </h3>
                        <Separator className="w-full bg-neutral-100" />
                        <CollapsibleContent>
                          <p className="text-base text-neutral-white-100 text-left pt-4">
                            {item.description}
                          </p>
                        </CollapsibleContent>
                        <ChevronDownIcon className="ml-auto w-6 h-6 text-neutral-white-100 mt-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                      </CollapsibleTrigger>
                    </Collapsible>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="relative overflow-hidden">
        {/* Skewed Background Element */}
        <div className="absolute inset-0 w-full h-full bg-primary-10 transform skew-y-[3deg] origin-top-left z-0"></div>

        <div className="py-16 sm:py-20 lg:py-24 relative z-10">
          <div className="container mx-auto px-6 sm:px-10 lg:px-[100px] pt-6 lg:pt-24">
            {/* Main Container */}
            <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-[184px]">
              <div className="w-full lg:w-[400px] h-fit bg-neutral-white-100 border border-neutral-black-30 rounded-lg flex-shrink-0">
                <div className="p-8 space-y-8">
                  <div className="space-y-4">
                    <h4 className="text-lg sm:text-xl font-semibold text-neutral-black-100">
                      Our <span className="text-primary-100">Values</span>
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
        </div>
      </section>

      {/* Separation Line */}
      <div className="container mx-auto px-6 sm:px-10 lg:px-[100px] bg-primary-10">
        <Separator className="w-full bg-primary-60" />
      </div>

      {/* Awards Carousel Section */}
      <section className="relative overflow-hidden">
        {/* Skewed Background Element */}
        <div className="absolute inset-0 w-full h-full bg-primary-10 transform skew-y-[3deg] origin-top-right z-0"></div>
        <div className="container mx-auto px-6 sm:px-10 lg:px-[100px] relative z-10">
          <div className="py-20 sm:py-24 lg:py-[120px]">
            <div className="text-center space-y-12">
              <h2 className="text-sm font-normal text-primary-60 uppercase tracking-wider">
                ACCREDITATIONS & AWARDS
              </h2>

              {/* Awards Logos */}
              <div className="flex items-center justify-center gap-12 lg:gap-24 pb-16">
                <div className="w-40 h-10 bg-neutral-black-30 rounded flex items-center justify-center">
                  <span className="text-sm text-neutral-black-50">
                    Award Logo 1
                  </span>
                </div>
                <div className="w-40 h-10 bg-neutral-black-30 rounded flex items-center justify-center">
                  <span className="text-sm text-neutral-black-50">
                    Award Logo 2
                  </span>
                </div>
                <div className="w-40 h-10 bg-neutral-black-30 rounded flex items-center justify-center">
                  <span className="text-sm text-neutral-black-50">
                    Award Logo 3
                  </span>
                </div>
                <div className="w-40 h-10 bg-neutral-black-30 rounded flex items-center justify-center">
                  <span className="text-sm text-neutral-black-50">
                    Award Logo 4
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet The Team Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-6 sm:px-10 lg:px-[100px]">
          <div className="py-20 sm:py-24 lg:py-[120px]">
            <div className="space-y-12">
              {/* Section Header */}
              <div className="text-center space-y-6">
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-xl sm:text-2xl font-semibold text-neutral-black-100 text-left">
                    Meet the <span className="text-primary-100">Team</span>
                  </h2>
                  <Button variant="default" size="md" asChild>
                    <Link href="/team">
                      <span>Meet everyone</span>
                      <div className="p-2 bg-neutral-white-100 rounded-md">
                        <ChevronRight className="h-4 w-4" color="#450932" />
                      </div>
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Team Carousel */}
              <Carousel
                opts={{
                  align: "start",
                }}
                className="w-full"
              >
                <CarouselContent>
                  {teamMembers.map((member) => (
                    <CarouselItem
                      key={member.imageAlt}
                      className="md:basis-1/3 lg:basis-1/4"
                    >
                      <ProfileCard
                        image={member.image}
                        imageAlt={member.imageAlt}
                        firstName={member.firstName}
                        lastName={member.lastName}
                        jobTitle={member.jobTitle}
                        email={member.email}
                        phone={member.phone}
                        variant="default"
                        showCornerDecoration={true}
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      {/* End of Page Contact Form Section */}
      <section className="relative overflow-hidden bg-neutral-black-10">
        <div className="container mx-auto px-6 sm:px-10 lg:px-[100px] relative z-10">
          <div className="py-20 sm:py-24 lg:py-[120px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Left Side - Content */}
              <div className="space-y-8">
                <h2 className="text-xl sm:text-2xl font-semibold text-black">
                  Join us on the{" "}
                  <span className="text-primary-100">journey</span>
                </h2>
                <p className="text-base text-neutral-black-100 leading-relaxed">
                  Whether you're looking to upskill or develop your team, CT
                  Skills is here to support you. Explore our programmes today
                  and take your first step towards success!
                  <br />
                  <br />
                  For more information, please reach out to us or browse our
                  course offerings.
                  <br />
                  <br />
                  We look forward to helping you succeed!
                </p>
              </div>

              {/* Right Side - Contact Form */}

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
