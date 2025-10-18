import Image from "next/image";
import { ConnectButton } from "@/components/marketing/connect-button";
import { ContactForm } from "@/components/forms/contact-form";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Phone, Mail, Linkedin } from "lucide-react";

// Mock data for team member
const teamMember = {
  id: 1,
  firstName: "Nicola",
  lastName: "Aram",
  jobTitle: "Marketing Manager",
  email: "info@ctskills.co.uk",
  phone: "1234 5678 9012",
  image: "/images/members.png",
  department: ["Senior Team"],
  bio: {
    whoAreYou:
      "Tellus. Pellentesque sed phasellus odio enim imperdiet sapien nisi scelerisque fermentum. Scelerisque elit elementum elementum et nunc laoreet tellus. Malesuada duis ultrices senectus euismod.\n\nGravida sed bibendum aenean diam eleifend adipiscing at. Dui tellus arcu nunc bibendum risus lacinia non. Erat fusce mattis diam sed viverra sed sed pharetra. Nunc lacus justo eleifend in tellus. Ac in sem.",
    whatYouDo:
      "Tellus. Pellentesque sed phasellus odio enim imperdiet sapien nisi scelerisque fermentum. Scelerisque elit elementum elementum et nunc laoreet tellus. Malesuada duis ultrices senectus euismod.\n\nGravida sed bibendum aenean diam eleifend adipiscing at. Dui tellus arcu nunc bibendum risus lacinia non. Erat fusce mattis diam sed viverra sed sed pharetra. Nunc lacus justo eleifend in tellus. Ac in sem.",
    background:
      "Tellus. Pellentesque sed phasellus odio enim imperdiet sapien nisi scelerisque fermentum. Scelerisque elit elementum elementum et nunc laoreet tellus. Malesuada duis ultrices senectus euismod.\n\nGravida sed bibendum aenean diam eleifend adipiscing at. Dui tellus arcu nunc bibendum risus lacinia non. Erat fusce mattis diam sed viverra sed sed pharetra. Nunc lacus justo eleifend in tellus. Ac in sem.",
    careerAdvice:
      "Tellus. Pellentesque sed phasellus odio enim imperdiet sapien nisi scelerisque fermentum. Scelerisque elit elementum elementum et nunc laoreet tellus. Malesuada duis ultrices senectus euismod.\n\nGravida sed bibendum aenean diam eleifend adipiscing at. Dui tellus arcu nunc bibendum risus lacinia non. Erat fusce mattis diam sed viverra sed sed pharetra. Nunc lacus justo eleifend in tellus. Ac in sem.",
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Meet the Team", href: "/meet-the-team" },
  { label: "Nicola Aram" },
];

export default function TeamMemberProfile() {
  return (
    <div className="min-h-screen bg-neutral-white-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Skewed Background Element */}
        <div className="absolute inset-0 w-full h-full transform skew-y-[-6deg] origin-top-left z-0 bg-primary-10"></div>

        {/* Background Pattern */}
        <div className="absolute w-[676px] h-[670px] hidden lg:block bottom-10 right-10 z-0">
          <Image
            src="/decorations/confetti-2.svg"
            alt="Background Pattern"
            fill
            className="object-contain z-0 rotate-[-24deg]"
          />
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-6 sm:px-10 lg:px-[100px] relative z-10">
          <div className="flex flex-col justify-center py-20 sm:py-24 lg:pt-[120px] min-h-[300px] sm:min-h-[400px] lg:min-h-[490px] w-full">
            <div className="mb-5 md:mb-10">
              {/* Breadcrumbs */}
              {breadcrumbs.length > 0 && (
                <div className="space-y-4">
                  <Breadcrumb>
                    <BreadcrumbList className="text-sm text-neutral-black-100">
                      {breadcrumbs.map((breadcrumb, index) => (
                        <>
                          <BreadcrumbItem>
                            {breadcrumb.href ? (
                              <BreadcrumbLink
                                href={breadcrumb.href}
                                className="hover:text-primary-100 transition-colors"
                              >
                                {breadcrumb.label}
                              </BreadcrumbLink>
                            ) : (
                              <BreadcrumbPage className="text-neutral-black-100">
                                {breadcrumb.label}
                              </BreadcrumbPage>
                            )}
                          </BreadcrumbItem>
                          {index < breadcrumbs.length - 1 && (
                            <BreadcrumbSeparator className="text-neutral-black-100" />
                          )}
                        </>
                      ))}
                    </BreadcrumbList>
                  </Breadcrumb>
                </div>
              )}
            </div>
            <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-start md:items-center">
              {/* Image */}
              <div className="w-[235px] h-[235px] rounded-lg overflow-hidden">
                <Image
                  src="/images/members.png"
                  alt={`${teamMember.firstName} ${teamMember.lastName}`}
                  width={235}
                  height={235}
                  className="object-cover"
                />
              </div>
              {/* Content */}
              <div className="flex-1">
                {/* Department */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {teamMember.department.map((department) => (
                    <Badge key={department}>
                      <span className="text-sm uppercase">{department}</span>
                    </Badge>
                  ))}
                </div>
                {/* Title */}
                <h1 className="text-2xl md:text-4xl font-semibold text-primary-100 mb-3">
                  {teamMember.firstName} {teamMember.lastName}
                </h1>

                {/* Content */}
                <span className="text-base sm:text-lg text-neutral-black-100">
                  {teamMember.jobTitle}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-24">
          <div className="flex flex-col lg:flex-row gap-20">
            {/* Contact Buttons */}
            <div className="w-full lg:w-[316px] flex flex-col gap-4">
              <ConnectButton href="#">
                <ConnectButton.Icon>
                  <Linkedin className="w-6 h-6 text-neutral-black-100" />
                </ConnectButton.Icon>
                <ConnectButton.Title>
                  {teamMember.firstName} {teamMember.lastName}
                </ConnectButton.Title>
              </ConnectButton>

              <ConnectButton href={`mailto:${teamMember.email}`}>
                <ConnectButton.Icon>
                  <Mail className="w-6 h-6 text-neutral-black-100" />
                </ConnectButton.Icon>
                <ConnectButton.Title>{teamMember.email}</ConnectButton.Title>
              </ConnectButton>

              <ConnectButton href={`tel:${teamMember.phone}`}>
                <ConnectButton.Icon>
                  <Phone className="w-6 h-6 text-neutral-black-100" />
                </ConnectButton.Icon>
                <ConnectButton.Title>{teamMember.phone}</ConnectButton.Title>
              </ConnectButton>
            </div>

            {/* Content Sections */}
            <div className="flex-1 space-y-16">
              {/* Who are you? */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-secondary-magenta-100">
                  Who are you?
                </h3>
                <p className="text-base text-neutral-black-50 leading-relaxed whitespace-pre-line">
                  {teamMember.bio.whoAreYou}
                </p>
              </div>

              {/* What you do in the business? */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-secondary-magenta-100">
                  What you do in the business?
                </h3>
                <p className="text-base text-neutral-black-50 leading-relaxed whitespace-pre-line">
                  {teamMember.bio.whatYouDo}
                </p>
              </div>

              {/* What's your background? */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-secondary-magenta-100">
                  What's your background?
                </h3>
                <p className="text-base text-neutral-black-50 leading-relaxed whitespace-pre-line">
                  {teamMember.bio.background}
                </p>
              </div>

              {/* Career advice */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-secondary-magenta-100">
                  What's the best piece of careers advice you've given or
                  received?
                </h3>
                <p className="text-base text-neutral-black-50 leading-relaxed whitespace-pre-line">
                  {teamMember.bio.careerAdvice}
                </p>
              </div>

              {/* Contact Form */}
              <ContactForm className="border border-neutral-black-30 rounded-lg" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
