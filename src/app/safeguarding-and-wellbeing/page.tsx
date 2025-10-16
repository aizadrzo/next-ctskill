"use client";

import React from "react";
import Image from "next/image";
import { ChevronRight, Mail, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { PageHeader } from "@/components/marketing/page-header";
import { ProfileCard } from "@/components/marketing/profile-card";
import { ContactForm } from "@/components/forms/contact-form";
import { ConnectButton } from "@/components/marketing/connect-button";
import { IconBox } from "@/components/marketing/icon-box";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import { safeguardingTopics } from "./data";
import { safeguardingChampions } from "./data";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Safeguarding and Wellbeing" },
];

export default function SafeguardingAndWellbeing() {
  const handleFormSubmit = (data: any) => {
    console.log("Form submitted:", data);
  };

  return (
    <div className="min-h-screen bg-neutral-white-100">
      {/* Hero Section */}
      <PageHeader
        breadcrumbs={breadcrumbs}
        title="Safeguarding and Wellbeing"
      />

      {/* TextImageRow Section */}
      <section className="py-24 bg-neutral-white-100">
        <div className="container mx-auto px-6 lg:px-24">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            {/* Content */}
            <div className="flex-1 space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-semibold text-neutral-black-100">
                  Lorem <span className="text-primary-100">Ipsum</span>
                </h3>
                <p className="text-lg text-neutral-black-100">
                  Creating a safe and supportive learning environment is at the
                  heart of what we do.
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-lg text-neutral-black-100">
                  We're committed to supporting all learners, employers, parents
                  and guardians with safeguarding and wellbeing, while helping
                  to raise awareness around key topics such as British Values
                  and Equality, Diversity and Inclusion, Mental Health and
                  Wellbeing, Online Safety, Safeguarding and Prevent, and Zero
                  Tolerance. Our aim is to create a safe, inclusive, and
                  supportive learning environment for everyone.
                </p>
              </div>
            </div>

            {/* Video */}
            <div className="relative w-full lg:w-[552px] h-[440px] rounded-lg overflow-hidden">
              <Image
                src="/images/video-placeholder.jpg"
                alt="Safeguarding Video"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <Button
                  size="lg"
                  className="w-20 h-20 rounded-full bg-primary-100 hover:bg-primary-120"
                >
                  <Play className="w-8 h-8 text-neutral-white-100 ml-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TitleWithDescriptionAndIconBoxes Section */}
      <section className="py-30 bg-primary-10">
        <div className="container mx-auto px-6 lg:px-24">
          <div className="space-y-12">
            {/* Header */}
            <div className="text-left sm:text-center space-y-4">
              <h4 className="text-xl md:text-2xl font-semibold text-neutral-black-100">
                How we can <span className="text-primary-100">help</span>
              </h4>
              <p className="text-base text-neutral-black-100 max-w-4xl mx-auto">
                Our Safeguarding and Wellbeing team can offer advice, guidance
                and support around:
              </p>
            </div>

            {/* Icon Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {safeguardingTopics.map((topic) => (
                <IconBox
                  key={topic.id}
                  overlay={topic.overlay}
                  iconAlt={topic.title}
                  title={topic.title}
                  description={topic.description}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Separation Line */}
      <div className="container mx-auto px-6 lg:px-24">
        <Separator className="bg-primary-60" />
      </div>

      {/* MeetTheTeam Section */}
      <section className="py-25 bg-primary-10">
        <div className="container mx-auto px-6 lg:px-24">
          <div className="space-y-10">
            {/* Header */}
            <div className="text-center space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
                <h4 className="text-xl md:text-2xl font-semibold text-neutral-black-100 text-left sm:text-center">
                  Meet the{" "}
                  <span className="text-primary-100">
                    Safeguarding and Wellbeing Champions
                  </span>
                </h4>
                <Button
                  className="bg-primary-100 text-neutral-white-100 px-4 pr-1"
                  asChild
                >
                  <Link href="/meet-the-team">
                    <span>Meet everyone</span>
                    <div className="p-2 bg-neutral-white-100 rounded-md">
                      <ChevronRight className="h-4 w-4" color="#450932" />
                    </div>
                  </Link>
                </Button>
              </div>
              <p className="text-lg text-neutral-black-100 text-left">
                Our dedicated Safeguarding and Wellbeing Champions are here to
                provide support whenever you need it.
              </p>
            </div>

            {/* Profile Cards Carousel */}
            <div className="relative">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {safeguardingChampions.map((champion) => (
                    <CarouselItem
                      key={champion.id}
                      className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/4"
                    >
                      <ProfileCard
                        firstName={champion.firstName}
                        lastName={champion.lastName}
                        jobTitle={champion.jobTitle}
                        email={champion.email}
                        phone={champion.phone}
                        image={champion.image}
                        imageAlt={`${champion.firstName} ${champion.lastName}`}
                        link={`/meet-the-team/${champion.id}`}
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden sm:flex -left-12" />
                <CarouselNext className="hidden sm:flex -right-12" />
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      {/* EndOfPageContactForm Section */}
      <section className="py-16 sm:py-20 lg:py-25 bg-neutral-white-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-24">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="w-full lg:w-1/3">
              <div className="space-y-4 lg:space-y-6">
                <h4 className="text-xl sm:text-2xl font-semibold text-neutral-black-100">
                  Getting in <span className="text-primary-100">touch</span>
                </h4>
                <div className="space-y-3 lg:space-y-4">
                  <p className="text-base sm:text-lg text-neutral-black-100">
                    If you, or someone you know, is experiencing any of these
                    issues or would simply like more information, please don't
                    hesitate to contact us.
                  </p>
                  <p className="text-base sm:text-lg text-neutral-black-100">
                    Your information will always be handled with care and kept
                    confidential.
                  </p>
                </div>

                {/* Contact Button */}
                <div className="w-full max-w-sm">
                  <ConnectButton href="#">
                    <ConnectButton.Icon>
                      <Mail className="w-6 h-6 text-neutral-black-100" />
                    </ConnectButton.Icon>
                    <ConnectButton.Title>
                      safeguarding@ctskills.co.uk
                    </ConnectButton.Title>
                  </ConnectButton>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="w-full lg:w-2/3">
              <ContactForm
                onSubmit={handleFormSubmit}
                className="border border-neutral-black-30 rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
