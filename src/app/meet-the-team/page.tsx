"use client";

import Image from "next/image";
import { ProfileCard } from "@/components/marketing/profile-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ChevronRight, Search } from "lucide-react";
import { teamMembers } from "./data";
import * as React from "react";

const breadcrumbs = [{ label: "Home", href: "/" }, { label: "Meet the Team" }];

export default function MeetTheTeamPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="relative overflow-hidden">
        {/* Skewed Background Element */}
        <div className="absolute inset-0 w-full h-full transform skew-y-[-3deg] origin-top-left z-0 bg-primary-10"></div>

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
          <div className="flex flex-col justify-center gap-10 py-20 sm:py-24 lg:py-[120px] min-h-[300px] sm:min-h-[400px] lg:min-h-[490px] w-full lg:w-2/3">
            {/* Breadcrumbs */}
            {breadcrumbs.length > 0 && (
              <div className="space-y-4">
                <Breadcrumb>
                  <BreadcrumbList className="text-sm text-neutral-black-100">
                    {breadcrumbs.map((breadcrumb, index) => (
                      <React.Fragment key={index}>
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
                      </React.Fragment>
                    ))}
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
            )}

            {/* Title */}
            <div className="space-y-3 sm:space-y-6">
              <h1 className="text-2xl md:text-4xl font-semibold text-primary-100">
                Meet the Team
              </h1>
            </div>

            {/* Content */}
            <div className="space-y-3 sm:space-y-6">
              <span className="text-base sm:text-lg text-neutral-black-100">
                As a team with a wealth of experience in the education and
                recruitment sectors, we each bring valuable experience and a
                shared commitment to enhancing learning. Get to know the
                individuals dedicated to making a positive impact on our
                learners, employers, and community.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-8 px-6 sm:px-10 lg:px-[100px] bg-white">
        <div className="container mx-auto">
          <div className="bg-white border border-neutral-black-30 rounded-lg shadow-lg p-6 max-w-[1240px]">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
              {/* Search Input */}
              <div className="flex-1 space-y-2">
                <label className="text-xs font-semibold text-primary-100 uppercase tracking-wider">
                  Search for name or job title
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-neutral-black-50" />
                  <Input
                    placeholder="Try 'marketing manager'"
                    className="pl-10 h-12 bg-neutral-white-100 border-neutral-black-30 rounded-lg text-base"
                  />
                </div>
              </div>

              {/* Department Select */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-primary-100 uppercase tracking-wider">
                  Department
                </label>
                <Select>
                  <SelectTrigger className="w-[275px] h-12 bg-neutral-white-100 border-neutral-black-30 rounded-lg px-4">
                    <SelectValue placeholder="Select options" />
                  </SelectTrigger>
                  <SelectContent className="bg-neutral-white-100 border-neutral-black-30">
                    <SelectItem value="all">All Departments</SelectItem>
                    <SelectItem value="board">Board of Directors</SelectItem>
                    <SelectItem value="senior">Senior Team</SelectItem>
                    <SelectItem value="recruitment">
                      Recruitment Team
                    </SelectItem>
                    <SelectItem value="safeguarding">
                      Safeguarding & Prevention
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Search Button */}
              <div className="flex items-end">
                <Button className="h-12 bg-primary-100 text-neutral-white-100 px-6 rounded-lg">
                  <span>Search</span>
                  <div className="p-2 bg-neutral-white-100 rounded-md ml-2">
                    <ChevronRight className="h-4 w-4 text-primary-100" />
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-16 px-6 sm:px-10 lg:px-[100px]">
        <div className="container mx-auto">
          <div className="flex flex-col gap-8">
            <h2 className="text-xl lg:text-2xl font-semibold text-neutral-black-100">
              <span className="text-primary-100">Board</span> of Directors
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {teamMembers["Board of Directors"].map((member) => (
                <ProfileCard
                  key={member.id}
                  image={member.image}
                  imageAlt={`${member.firstName} ${member.lastName}`}
                  firstName={member.firstName}
                  lastName={member.lastName}
                  jobTitle={member.jobTitle}
                  email={member.email}
                  phone={member.phone}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Separator className="bg-primary-60 container mx-auto" />

      {/* Senior Team */}
      <section className="py-16 px-6 sm:px-10 lg:px-[100px]">
        <div className="container mx-auto">
          <div className="flex flex-col gap-8">
            <h2 className="text-xl lg:text-2xl font-semibold text-neutral-black-100">
              <span className="text-primary-100">Senior</span> Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {teamMembers["Senior Team"].map((member) => (
                <ProfileCard
                  key={member.id}
                  image={member.image}
                  imageAlt={`${member.firstName} ${member.lastName}`}
                  firstName={member.firstName}
                  lastName={member.lastName}
                  jobTitle={member.jobTitle}
                  email={member.email}
                  phone={member.phone}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Separator className="bg-primary-60 container mx-auto" />

      {/* Recruitment Team */}
      <section className="py-16 px-6 sm:px-10 lg:px-[100px]">
        <div className="container mx-auto">
          <div className="flex flex-col gap-8">
            <h2 className="text-xl lg:text-2xl font-semibold text-neutral-black-100">
              <span className="text-primary-100">Recruitment</span> Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {teamMembers["Recruitment Team"].map((member) => (
                <ProfileCard
                  key={member.id}
                  image={member.image}
                  imageAlt={`${member.firstName} ${member.lastName}`}
                  firstName={member.firstName}
                  lastName={member.lastName}
                  jobTitle={member.jobTitle}
                  email={member.email}
                  phone={member.phone}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Separator className="bg-primary-60 container mx-auto" />

      {/* Safeguarding & Prevention Team */}
      <section className="py-16 px-6 sm:px-10 lg:px-[100px]">
        <div className="container mx-auto">
          <div className="flex flex-col gap-8">
            <h2 className="text-xl lg:text-2xl font-semibold text-neutral-black-100">
              <span className="text-primary-100">
                Safeguarding & Prevention
              </span>{" "}
              Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {teamMembers["Safeguarding & Prevention Team"].map((member) => (
                <ProfileCard
                  key={member.id}
                  image={member.image}
                  imageAlt={`${member.firstName} ${member.lastName}`}
                  firstName={member.firstName}
                  lastName={member.lastName}
                  jobTitle={member.jobTitle}
                  email={member.email}
                  phone={member.phone}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
