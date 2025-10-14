"use client";
import Image from "next/image";
import { PageHeader } from "@/components/marketing/page-header";
import { ContentBoxLink } from "@/components/marketing/content-box-link";
import {
  GraduationCap,
  Briefcase,
  TrendingUp,
  Search,
  MessageCircle,
  Users,
  Building,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactForm } from "@/components/forms/contact-form";

const careerHubItems = [
  {
    title: "Starting Your Apprenticeship Journey",
    icon: <GraduationCap className="w-8 h-8" />,
    iconColor: "teal" as const,
  },
  {
    title: "Career Toolkit",
    icon: <Briefcase className="w-8 h-8" />,
    iconColor: "orange" as const,
  },
  {
    title: "Career Progression Routes",
    icon: <TrendingUp className="w-8 h-8" />,
    iconColor: "magenta" as const,
  },
  {
    title: "Job Searching",
    icon: <Search className="w-8 h-8" />,
    iconColor: "orange" as const,
  },
  {
    title: "Careers Advice",
    icon: <MessageCircle className="w-8 h-8" />,
    iconColor: "magenta" as const,
  },
  {
    title: "Resource for Parents and Carers",
    icon: <Users className="w-8 h-8" />,
    iconColor: "teal" as const,
  },
  {
    title: "Employer Resources",
    icon: <Building className="w-8 h-8" />,
    iconColor: "magenta" as const,
  },
] as const;

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Careers Hub" },
];

export default function CareersHubPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <PageHeader title="Careers Hub" breadcrumbs={breadcrumbs} />

      {/* TextImageRow Section */}
      <section className="relative overflow-hidden">
        {/* Skewed Background Element */}
        <div className="absolute inset-0 w-full h-full transform skew-y-[6deg] origin-top-right z-0"></div>

        <div className="container mx-auto px-6 sm:px-10 lg:px-[100px] relative z-10">
          <div className="py-20 sm:py-24 lg:py-[120px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Content */}
              <div className="space-y-6">
                <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-black-100">
                  Find Your Path,{" "}
                  <span className="text-primary-100">Shape Your Future</span>
                </h2>
                <p className="text-base text-neutral-black-100 leading-relaxed">
                  Welcome to CT Careers Hub – the place to kick-start your
                  journey and make your career goals happen. Whether you're just
                  getting started or figuring out what’s next, the CT Skills
                  Information, Advice and Guidance portal is here to help. From
                  exploring your options to planning your next steps, we’ve got
                  the tools, tips and support to help you unlock your potential
                  and take control of your future – your way.
                </p>
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
                    <div className="w-[74px] h-[74px] bg-neutral-white-100 rounded-full flex items-center justify-center shadow-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What can we help you with Section */}
      <section className="relative overflow-hidden">
        {/* Skewed Background Element */}
        <div className="absolute inset-0 w-full h-full bg-neutral-black-10 transform skew-y-[3deg] origin-top-left z-0"></div>
        <div className="absolute bottom-0 right-0 z-1">
          <Image
            src="/decorations/dots.svg"
            alt="Dots"
            width={498}
            height={316}
          />
        </div>
        <div className="py-16 sm:py-20 lg:py-24 relative z-10">
          <div className="container mx-auto px-6 sm:px-10 lg:px-[100px] pt-6 lg:pt-24">
            {/* Main Container */}
            <div className="flex flex-col">
              <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-black-100 pb-8">
                What can we help you with?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {careerHubItems.map((item) => (
                  <ContentBoxLink
                    key={item.title}
                    title={item.title}
                    icon={item.icon}
                    iconColor={item.iconColor}
                    href="#"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MeetCareerAdvisor Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 z-1">
          <Image
            src="/decorations/confetti-2.svg"
            alt="Confetti"
            width={598}
            height={613}
          />
        </div>
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Card className="bg-primary-20 border-none rounded-lg py-8 px-4 h-full relative">
              <div className="absolute top-0 left-0 z-0 inline-block w-0 h-0 border-solid rounded-tl-lg border-t-[400px] border-r-[400px] border-l-0 border-b-0 border-l-transparent border-r-transparent border-t-primary-60 border-b-transparent"></div>
              <CardHeader className="z-10">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  <div className="w-full lg:w-[60%] h-[308px] rounded-lg overflow-hidden flex-shrink-0 bg-primary-100">
                    <Image
                      src="/images/career-advisor.png"
                      alt="Career Advisor"
                      width={328}
                      height={308}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-2xl lg:text-3xl text-neutral-black-100 flex-1 text-left">
                    Meet Your Careers Advisor
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="mt-auto">
                <p className="text-lg text-neutral-black-100">
                  Whether you're unsure where to start or ready to take the next
                  step, our Careers Advisor, Emma, is here to help. With expert
                  guidance, personalised support, and a deep understanding of
                  current opportunities, she'll provide the advice you need to
                  move forward with confidence.
                </p>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <ContactForm
              onSubmit={(data) => {
                console.log("Form submitted:", data);
                // Handle form submission here
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
