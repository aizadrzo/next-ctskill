import { PageHeader } from "@/components/marketing/page-header";
import { IconBox } from "@/components/marketing/icon-box";
import { ContactForm } from "@/components/forms";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight, Play } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import {
  communityInitiatives,
  blogPosts,
  coreValues,
  volunteeringOrgs,
} from "./data";
import { CoreValues } from "@/components/marketing/core-values";
import AutoSlideCarousel from "@/components/marketing/auto-slide-carousel";
import Link from "next/link";

export default function OurCommunityPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHeader
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Our Community", href: "/our-community" },
        ]}
        title="Our Community"
        className="bg-neutral-white-50"
      />

      {/* Community Introduction Section */}
      <section className="py-16 md:py-[100px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-black-100 mb-6">
                Working together.
                <br />{" "}
                <span className="text-primary-100">Growing Together.</span>
              </h2>
              <div className="space-y-4">
                <p className="text-base md:text-lg text-neutral-black-100 font-light">
                  At CT Skills, community means more than location — it means
                  shared success.
                </p>
                <p className="text-base md:text-lg text-neutral-black-100 font-light">
                  Whether it's supporting learners, partnering with employers,
                  or giving back through volunteering and charity work — we're
                  committed to creating a positive impact across the communities
                  we serve.
                </p>
                <p className="text-base md:text-lg text-neutral-black-100 font-light">
                  Our work goes beyond education. We believe in developing
                  people, building connections, and strengthening the places we
                  live and work in.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="w-full lg:w-[552px] h-[440px] rounded-lg overflow-hidden relative">
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
          </div>
        </div>
      </section>

      {/* Culture & Volunteering Section */}
      <section className="pt-20 pb-[120px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-sm font-semibold text-primary-60 uppercase tracking-wider mb-4">
              CULTURE & VOLUNTEERING
            </h2>
          </div>

          {/* Image Carousel */}
          <div className="relative">
            <AutoSlideCarousel />
          </div>
        </div>
      </section>

      {/* Making a difference together Section */}
      <section className="py-16 md:py-[120px] bg-primary-10 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-black-100 mb-4">
              Making a difference{" "}
              <span className="text-primary-100">together</span>
            </h2>
          </div>

          {/* Icon Boxes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {communityInitiatives.map((initiative) => {
              return (
                <IconBox
                  key={initiative.id}
                  iconAlt={initiative.title}
                  title={initiative.title}
                  description={initiative.description}
                  overlay={initiative.overlay}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Careers Hub & Guidance Section */}
      <section className="py-16 md:py-[100px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start">
            <div className="flex flex-col md:flex-row md:justify-between items-center gap-4 w-full mb-6">
              <h2 className="text-xl md:text-2xl font-semibold text-neutral-black-100">
                Careers Hub & Guidance
              </h2>
              <Button variant="default" size="lg" asChild>
                <Link href="/contact-us">
                  <span>Visit Careers Hub</span>
                  <div className="p-2 bg-neutral-white-100 rounded-md">
                    <ChevronRight className="h-4 w-4" color="#450932" />
                  </div>
                </Link>
              </Button>
            </div>
            <div className="text-base md:text-lg text-neutral-black-100 font-light mb-10">
              <p>
                Our Careers Hub provides expert support and information to help
                individuals take the next step with confidence. We offer:
              </p>
              <ul className="space-y-2 mb-8">
                <li>• Careers guidance and planning</li>
                <li>• CV writing and interview tips</li>
                <li>• Pathways into further learning or employment</li>
              </ul>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              {blogPosts.map((post) => (
                <Card
                  key={post.id}
                  className="overflow-hidden border-primary-100 pt-0"
                >
                  <CardHeader className="relative h-48">
                    <Image
                      src="/images/accountancy.png"
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      {post.tags.map((tag, index) => (
                        <Badge key={index}>{tag}</Badge>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-neutral-black-100 mb-3">
                      {post.title}
                    </h3>
                    <p className="text-neutral-black-50 mb-4">
                      {post.description}
                    </p>
                  </CardContent>
                  <CardFooter className="w-full">
                    <span className="text-sm text-neutral-black-50 mr-auto">
                      {post.date}
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-neutral-black-100 border-neutral-black-100 cursor-pointer py-1 pr-1"
                      asChild
                    >
                      <Link href="/">
                        <span>Read post</span>
                        <div className="p-2 bg-neutral-black-100 rounded-md">
                          <ChevronRight className="h-4 w-4" color="#fff" />
                        </div>
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="relative bg-primary-10 py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-6 sm:px-10 lg:px-[100px] z-10">
          {/* Main Container */}
          <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-[184px]">
            <div className="w-full lg:w-[400px] h-fit bg-neutral-white-100 border border-neutral-black-30 rounded-lg flex-shrink-0">
              <div className="p-8 space-y-8">
                <div className="space-y-4">
                  <h4 className="text-xl md:text-2xl font-semibold text-neutral-black-100">
                    <span className="text-primary-100">Our Core Values</span> in
                    Action
                  </h4>
                  <div className="space-y-4">
                    <p className="text-base text-neutral-black-100 font-light">
                      Everything we do is underpinned by our core values, which
                      shape how we serve, support, and lead:
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Separator className="bg-primary-100" />
      </div>

      {/* British Values Section */}
      <section className="py-16 md:py-[100px] bg-primary-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative flex justify-center items-center">
                <div className="w-full lg:w-[552px] h-[440px] rounded-lg overflow-hidden relative">
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
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-lg md:text-xl font-semibold text-neutral-black-100 mb-4">
                Promoting{" "}
                <span className="text-primary-100">British Values</span> &
                Citizenship
              </h2>
              <p className="text-base md:text-lg text-neutral-black-100 mb-6 font-light">
                As a training provider, we're committed to upholding and
                promoting British Values across all learning environments:
              </p>
              <ul className="text-base md:text-lg text-neutral-black-100 font-light list-disc pl-4 space-y-4">
                <li>Democracy – Encouraging learner voice and participation</li>
                <li>
                  The Rule of Law – Fostering respect for rules, systems, and
                  fair treatment
                </li>
                <li>
                  Individual Liberty – Supporting freedom of choice and personal
                  development
                </li>
                <li>
                  Mutual Respect and Tolerance – Creating inclusive spaces where
                  everyone feels safe, valued, and heard
                </li>
              </ul>
              <p className="text-base md:text-lg text-neutral-black-100 mt-6 font-light">
                These values help prepare learners for life in modern Britain,
                building responsible, respectful citizens.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Separation Line */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Separator className="bg-primary-100" />
      </div>

      {/* Volunteering Organizations Section */}
      <section className="relative overflow-hidden">
        <div className="py-20 bg-primary-10 z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-xl md:text-2xl font-semibold text-neutral-black-100 mb-4">
                Making a difference{" "}
                <span className="text-primary-100">together</span>
              </h2>
              <p className="text-base md:text-lg font-light text-neutral-black-100 max-w-5xl mx-auto">
                CT Skills supports personal and professional growth while
                actively giving back through action.
                <br />
                <br />
                We're proud to support causes and initiatives that make a
                difference. Our team, learners and the employers actively
                contribute to the wider community through various ways:
              </p>
            </div>

            <div className="flex flex-col items-center gap-6">
              {/* Top Row - 2 Cards */}
              <div className="flex flex-col md:flex-row gap-8 justify-center">
                {volunteeringOrgs.slice(0, 2).map((org) => (
                  <Card
                    key={org.id}
                    className="max-w-[300px] p-6 text-center bg-neutral-white-100 border border-neutral-black-30 rounded-lg"
                  >
                    <div className="h-24 mb-2 flex items-center justify-center">
                      <Image
                        src={org.logo}
                        alt={org.name}
                        width={242}
                        height={94}
                        className="object-contain"
                      />
                    </div>
                    <CardTitle className="text-lg font-semibold text-neutral-black-100 text-left">
                      {org.name}
                    </CardTitle>
                  </Card>
                ))}
              </div>

              {/* Bottom Row - 3 Cards */}
              <div className="flex flex-col md:flex-row gap-8 justify-center">
                {volunteeringOrgs.slice(2, 5).map((org) => (
                  <Card
                    key={org.id}
                    className="max-w-[300px] p-6 text-center bg-neutral-white-100 border border-neutral-black-30 rounded-lg"
                  >
                    <div className="h-24 mb-2 flex items-center justify-center">
                      <Image
                        src={org.logo}
                        alt={org.name}
                        width={242}
                        height={94}
                        className="object-contain"
                      />
                    </div>
                    <CardTitle className="text-lg font-semibold text-neutral-black-100 text-left">
                      {org.name}
                    </CardTitle>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="w-full md:w-1/3">
              <h2 className="text-xl md:text-2xl font-semibold text-neutral-black-100 mb-4 md:mb-8">
                Together, we're building <br />{" "}
                <span className="text-primary-100">something better</span>
              </h2>
              <p className="text-base md:text-lg text-neutral-black-100">
                At CT Skills, education is just the beginning. By connecting
                people, creating opportunities, and giving back, we're proud to
                help develop both careers and communities.
              </p>
              <p className="text-base md:text-lg text-neutral-black-100 mt-4">
                Looking to learn, grow, or contribute? Let's work together.
              </p>
            </div>
            <div className="w-full md:w-2/3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
