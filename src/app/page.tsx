import Image from "next/image";
import { HeroSection } from "@/components/marketing/hero-section";
import { ServicesCard } from "@/components/marketing/services-card";
import { MiniServiceCard } from "@/components/marketing/mini-services-card";
import { CoreValues } from "@/components/marketing/core-values";
import {
  GraduationCap,
  Book,
  UserSearch,
  Briefcase,
  Award,
  Users,
  Target,
  Heart,
  Star,
  Play,
} from "lucide-react";

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
      <Award className="w-10 h-10 sm:w-12 sm:h-12 text-neutral-black-100" />
    ),
    title: "Pride",
    description: "A commitment to quality and achieving meaningful results",
  },
  {
    icon: (
      <Users className="w-10 h-10 sm:w-12 sm:h-12 text-neutral-black-100" />
    ),
    title: "Respect",
    description: "Listening, valuing, and supporting every individual",
  },
  {
    icon: (
      <Target className="w-10 h-10 sm:w-12 sm:h-12 text-neutral-black-100" />
    ),
    title: "Accountability",
    description: "Taking ownership and delivering on promises",
  },
  {
    icon: (
      <Heart className="w-10 h-10 sm:w-12 sm:h-12 text-neutral-black-100" />
    ),
    title: "Integrity",
    description: "Acting with honesty, transparency, and purpose",
  },
  {
    icon: <Star className="w-10 h-10 sm:w-12 sm:h-12 text-neutral-black-100" />,
    title: "Service Excellence",
    description: "Striving to exceed expectations at every opportunity",
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
              <h3 className="text-h3 sm:text-h2 font-semibold text-neutral-black-100">
                Empowering <span className="text-primary-100">People</span>.
                <br />
                Supporting <span className="text-primary-100">Progress</span>.
              </h3>
              <p className="text-b3 text-neutral-black-100">
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
        {/* Textured Semi Circle Background - Hidden on mobile for better performance */}
        <div className="absolute top-[-29px] left-[33px] opacity-30 hidden lg:block">
          <svg
            width="19"
            height="315"
            viewBox="0 0 19 315"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.3">
              <circle cx="9.18" cy="9.18" r="9.18" fill="#D9D9D9" />
              <path
                d="M17.64 15.65C13.5082 15.65 9.54515 13.9987 6.63466 11.0882C3.72416 8.17773 2.07287 4.21472 2.07287 0.0828857H0C0 4.76474 1.86142 9.25498 5.17942 12.573C8.49742 15.891 12.9877 17.7524 17.6695 17.7524V15.65H17.64Z"
                fill="#E0D1DB"
              />
              <circle cx="9.18" cy="51.56" r="9.18" fill="#D9D9D9" />
              <circle cx="9.18" cy="93.93" r="9.18" fill="#D9D9D9" />
              <circle cx="9.18" cy="136.3" r="9.18" fill="#D9D9D9" />
              <circle cx="9.18" cy="178.67" r="9.18" fill="#D9D9D9" />
              <circle cx="9.18" cy="221.04" r="9.18" fill="#D9D9D9" />
              <circle cx="9.18" cy="263.41" r="9.18" fill="#D9D9D9" />
              <circle cx="9.18" cy="305.79" r="9.18" fill="#D9D9D9" />
            </g>
          </svg>
        </div>

        <div className="container mx-auto px-6 sm:px-10 lg:px-[100px]">
          {/* Main Container */}
          <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-[184px]">
            {/* Left Side - Why CT Skills Card */}
            <div className="w-full lg:w-[400px] bg-neutral-white-100 border border-neutral-black-30 rounded-lg space-y-8 flex-shrink-0">
              <div className="px-6 py-6 sm:px-8 sm:py-6 lg:px-8 lg:py-6 space-y-4">
                <h4 className="text-h4 font-semibold text-primary-100">
                  Why CT Skills?
                </h4>
                <p className="text-b4 text-neutral-black-100">
                  Because we put people and progress first - we're your
                  dedicated partner in growth.
                </p>
                <p className="text-b4 text-neutral-black-100">
                  Our experienced team is passionate about delivering training
                  and recruitment with impact — built around our core values.
                </p>
              </div>
            </div>

            {/* Right Side - Core Values List */}
            <div className="flex-1 space-y-6">
              {coreValues.map((value) => (
                <CoreValues
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
            <h6 className="text-b5 font-normal text-primary-60 uppercase tracking-wider">
              ACCREDITATIONS & AWARDS
            </h6>

            {/* Awards Carousel Placeholder */}
            <div className="w-full h-10 bg-neutral-black-10 rounded flex items-center justify-center">
              <p className="text-b4 text-neutral-black-50">Awards Carousel</p>
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
              <h6 className="text-b5 font-normal text-primary-60 uppercase tracking-wider">
                TESTIMONIALS
              </h6>
              <h6 className="text-h6 font-semibold text-primary-100 text-center">
                Listen to what people have to say about their experience with
                us!
              </h6>
            </div>

            {/* Testimonials Carousel Placeholder */}
            <div className="w-full max-w-[545px] h-[545px] bg-neutral-white-100 border border-primary-100 rounded-lg flex items-center justify-center">
              <div className="text-center space-y-4">
                <p className="text-b4 text-neutral-black-100">
                  Testimonials Carousel
                </p>
                <p className="text-b5 text-neutral-black-50">
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
              <h4 className="text-h5 sm:text-h4 font-semibold text-neutral-black-100">
                How can we <span className="text-primary-100">help you</span>{" "}
                today?
              </h4>
              <div className="space-y-4 sm:space-y-6">
                <p className="text-b4 text-neutral-black-100">
                  Learning doesn't stop with school — and neither does
                  opportunity. At CT Skills, we make development possible at
                  every age and every stage.
                </p>
                <p className="text-b4 text-neutral-black-100">
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
                <div className="flex flex-col gap-4 sm:gap-5">
                  <MiniServiceCard
                    icon={<GraduationCap className="w-8 h-8" />}
                    title="Apprenticeships"
                    iconColor="teal"
                    cardState="default"
                    titleColor="black"
                  />
                  <MiniServiceCard
                    icon={<UserSearch className="w-8 h-8" />}
                    title="Recruitment"
                    iconColor="magenta"
                    cardState="default"
                    titleColor="black"
                  />
                </div>

                {/* Bottom Row */}
                <div className="flex flex-col gap-4 sm:gap-5">
                  <MiniServiceCard
                    icon={<Book className="w-8 h-8" />}
                    title="Online Courses"
                    iconColor="orange"
                    cardState="default"
                    titleColor="black"
                  />
                  <MiniServiceCard
                    icon={<Briefcase className="w-8 h-8" />}
                    title="Jobs"
                    iconColor="magenta"
                    cardState="default"
                    titleColor="black"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Triple CTA Form Section */}
      <section className="relative bg-primary-10 py-16 sm:py-20 lg:pt-[80px] lg:pb-[100px]">
        {/* Decorative Background - Hidden on mobile */}
        <div className="absolute bottom-[273px] left-[1px] opacity-30 hidden lg:block pointer-events-none">
          <svg
            width="676"
            height="671"
            viewBox="0 0 676 671"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.3">
              <circle
                cx="39.41"
                cy="39.41"
                r="39.41"
                fill="#E0D1DB"
                opacity="0.3"
              />
            </g>
          </svg>
        </div>

        <div className="container mx-auto px-6 sm:px-10 lg:px-[100px]">
          <div className="flex flex-col items-center justify-center gap-10 sm:gap-12 relative z-10">
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-1 p-1 bg-neutral-white-100 border-2 border-neutral-black-30 rounded-lg">
              <button className="px-6 py-2 bg-primary-100 text-neutral-white-100 text-b3 font-medium rounded-lg hover:bg-primary-120 transition-colors">
                Get in touch
              </button>
              <button className="px-6 py-2 text-primary-100 text-b3 font-medium rounded-lg hover:bg-neutral-black-10 transition-colors">
                Upload your CV
              </button>
              <button className="px-6 py-2 text-primary-100 text-b3 font-medium rounded-lg hover:bg-neutral-black-10 transition-colors">
                Submit a vacancy
              </button>
            </div>

            {/* Forms Container */}
            <div className="flex flex-col gap-12 sm:gap-16 lg:gap-20">
              {/* Forms Placeholder */}
              <div className="w-full max-w-[1000px] bg-neutral-white-100 border border-neutral-black-30 rounded-lg p-8 sm:p-10">
                <div className="text-center space-y-6">
                  <h5 className="text-h5 font-semibold text-neutral-black-100">
                    Get in touch with us
                  </h5>
                  <p className="text-b4 text-neutral-black-100">
                    Use this form to send us a message, and we'll get back to
                    you shortly.
                  </p>
                  <div className="h-96 bg-neutral-black-10 rounded flex items-center justify-center">
                    <p className="text-b4 text-neutral-black-50">
                      Contact Form
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
