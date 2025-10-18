import { ContactForm } from "@/components/forms";
import { CarouselLevelCard } from "@/components/marketing/carousel-level-card";
import { DetailsCard } from "@/components/marketing/details-card";
import { HeaderTag } from "@/components/marketing/header-tag";
import { PageHeader } from "@/components/marketing/page-header";
import { VacanciesCard } from "@/components/marketing/vacancies-card";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, ClipboardList, Play, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Apprenticeships", href: "/apprenticeships" },
  { label: "Accountancy", href: "/apprenticeships/accountancy" },
  { label: "Accounts/Finance Assistant" },
];

const offeringItems = [
  {
    image: "/images/accountancy.png",
    title: "Accountancy",
  },
  {
    image: "/images/business-admin.png",
    title: "Business Administration",
  },
  {
    image: "/images/childcare.png",
    title: "Childcare",
  },
  {
    image: "/images/customer-service.png",
    title: "Customer Service",
  },
  {
    image: "/images/education.png",
    title: "Education",
  },
  {
    image: "/images/housing.png",
    title: "Housing",
  },
  {
    image: "/images/human-resources.png",
    title: "Human Resources",
  },
  {
    image: "/images/management.png",
    title: "Management",
  },
  {
    image: "/images/marketing.png",
    title: "Marketing",
  },
  {
    image: "/images/payroll.png",
    title: "Payroll",
  },
];

const vacanciesItems = [
  {
    title: "Involvency Apprentice This Title Can Go Up To 2 Lines",
    location: "Hampshire",
    salaryRange: "90-100k",
    description:
      "A brief description of the job. Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in aliquam.",
    taggings: ["EDUCATION & TRAINING", "ACCOUNTING", "SAMPLE TAG"],
    jobRole: "Permanent",
  },
  {
    title: "Involvency Apprentice This Title Can Go Up To 2 Lines",
    location: "Hampshire",
    salaryRange: "90-100k",
    description:
      "A brief description of the job. Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in aliquam.",
    taggings: ["EDUCATION & TRAINING", "ACCOUNTING", "SAMPLE TAG"],
    jobRole: "Permanent",
  },
  {
    title: "Involvency Apprentice This Title Can Go Up To 2 Lines",
    location: "Hampshire",
    salaryRange: "90-100k",
    description:
      "A brief description of the job. Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in aliquam.",
    taggings: ["EDUCATION & TRAINING", "ACCOUNTING", "SAMPLE TAG"],
    jobRole: "Permanent",
  },
];

const staticCardItem = {
  name: "The apprenticeship covers",
  icon: <ClipboardList />,
  content: [
    "General business & basic accounting",
    "Accounting systems & processes",
    "Understanding the organisation",
    "Attention to detail",
    "Using systems and processes",
    "Communication skills",
    "Effective teamwork",
    "Ethical and sustainability standards",
  ],
  moreContent: [
    {
      name: "EPA (End Point Assessment)",
      contents: ["Knowledge Test", "Interview"],
    },
  ],
};

export default function Apprenticeship() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHeader
        title="Accounts/Finance Assistant Title Can Go Up To Two Lines"
        breadcrumbs={breadcrumbs}
        backgroundColor="bg-secondary-teal-10"
        titleColor="text-neutral-black-100"
        // headerImage="/images/apprenticeships2.png"
        // content="For over 20 years, we’ve helped people launch rewarding careers and supported organisations in building skilled teams through apprenticeships that blend training with real-world experience."
        // mainHeader
      />

      {/* Intro of accountancy */}
      <div className="container mx-auto px-6 sm:px-10 lg:px-[100px] relative z-10">
        <div className="py-20 sm:py-24 lg:py-[120px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center pb-10">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-3xl sm:text-xl font-semibold text-neutral-black-100">
                  Lorem <span className="text-primary-100">Ipsum</span>
                </h3>
                <p className="text-m text-neutral-black-100 leading-relaxed">
                  Kickstart your journey in accountancy or enhance your team's
                  skills with our comprehensive accountancy apprenticeships.
                  <br />
                  <br />
                  Our programmes develop future finance professionals who excel
                  in strategic planning, critical thinking, and effective
                  collaboration. Through our apprenticeships and courses,
                  individuals gain practical training and confidence, equipping
                  them for both current roles and future ambitions while
                  actively contributing to their organisation's growth.
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

          {/* Comprehensive Card Content */}
          <div className="flex flex-row gap-6">
            <div className="pt-10 flex flex-col gap-4">
              <Card className="border-neutral-black-30 px-8 py-6 w-[608] flex flex-row justify-between">
                <div className=" justify-between flex-col ">
                  <h6 className="text-lg font-semibold w-full">
                    End Point Assessment Organisation
                  </h6>
                  <p>The Association of Accounting Technicians</p>
                </div>
                <Image
                  src="/images/aat.png"
                  width={109}
                  height={65}
                  alt="AAT"
                />
              </Card>
              <Card className="border-neutral-black-30 px-8 py-6 justify-between flex-col w-[608]">
                <h6 className="text-lg font-semibold w-full">
                  Who is this for?
                </h6>
                <p>
                  This apprenticeship is suitable for anyone in an accounts or
                  finance function within their role.
                </p>
              </Card>
              <Card className="border-neutral-black-30 px-8 py-6 justify-between flex-col w-[608]">
                <h6 className="text-lg font-semibold w-full">
                  What will you learn?
                </h6>
                <p>
                  Apprentices will develop key skills and behaviours to support
                  progression. Apprentices will be introduced to bookkeeping,
                  principles of bookkeeping controls, and principles of costing.
                  <br />
                  <br />
                  Apprentices will also work towards Functional Skills Level 2
                  in Maths and English, if not already exempt.
                </p>
              </Card>
            </div>
            <DetailsCard
              className="w-full bg-primary-10"
              key={staticCardItem.name}
              title={staticCardItem.name}
              icon={staticCardItem.icon}
              descriptions={staticCardItem.content}
              moreContent={staticCardItem.moreContent}
              buttonProps={
                <Button variant="default" size="md" asChild className="w-full">
                  <Link
                    href="/contact-us"
                    className="flex flex-row justify-between"
                  >
                    <div className="flex flex-row justify-between w-full items-center">
                      <span>Call to action goes here</span>
                      <div className="p-2 bg-neutral-white-100 rounded-md">
                        <ChevronRight className="h-4 w-4" color="#450932" />
                      </div>
                    </div>
                  </Link>
                </Button>
              }
            />
          </div>
        </div>
      </div>

      {/* Top Triangle */}
      <div className="w-full h-[68px] bg-neutral-black-10 top-right-slated-shape"></div>

      {/* Carousel Section */}
      <div className=" w-full bg-neutral-black-10 py-16 flex justify-center">
        <div className="w-[841]">
          <h4 className="text-2xl font-semibold text-center">
            Career <span className="text-primary-100">opportunities</span>
          </h4>
          <p className="text-m text-center pt-2">
            The Accounts/Finance Assistant Apprenticeship may be a gateway to
            further career opportunities, such as accounts assistant or data
            input clerk.
          </p>
        </div>
      </div>
      <div className="w-full bg-neutral-black-10 py-16 flex flex-col items-center gap-6 overflow-hidden">
        {/* Top step indicator */}
        <div className="flex items-center justify-center">
          <HeaderTag
            text="Accounts/Finance Assistant"
            className="bg-transparent"
          />
          <div className="border-t border-dashed border-teal-400 w-8"></div>
          <HeaderTag text="Assistant Accountant" />
          <div className="border-t border-dashed border-teal-400 w-8"></div>
          <HeaderTag
            text="Professional Accounting Technician"
            className="bg-transparent"
          />
        </div>

        {/* Card container */}
        <div className="flex justify-center gap-8 mt-8">
          {/* Card 1 - Inactive */}
          <CarouselLevelCard
            level={2}
            title="Accounts/Finance Assistant"
            duration="15 months"
            buttonText="Find out more"
            className="bg-white"
          />

          {/* Card 2 - Active */}
          <CarouselLevelCard
            level={3}
            title="Assistant Accountant"
            duration="17 months"
            buttonText="Find out more"
          />

          {/* Card 1 - Inactive */}
          <CarouselLevelCard
            level={4}
            title="Professional Accounting Technician"
            duration="15 months"
            buttonText="Find out more"
            className="bg-white"
          />
        </div>
      </div>
      {/* Bottom Triangle */}
      <div className="w-full h-[68px] bg-neutral-black-10 bottom-right-slated-shape"></div>

      {/* Current Vacancies Section */}
      <section className="relative overflow-hidden  bg-white">
        <div className="container mx-auto px-6 sm:px-10 lg:px-[100px] relative z-10">
          <div className="py-20 sm:py-24 lg:py-[120px]">
            {/* Vacancies title */}
            <div className="flex justify-between">
              <h4 className="text-2xl font-semibold">Current Vacancies</h4>
              <Button variant="default" size="md" asChild>
                <Link href="/contact-us">
                  <span>See more jobs</span>
                  <div className="p-2 bg-neutral-white-100 rounded-md">
                    <ChevronRight className="h-4 w-4" color="#450932" />
                  </div>
                </Link>
              </Button>
            </div>
            {/* Vacancies card */}
            <div className="flex gap-4 pt-10">
              {vacanciesItems.map((vacanciesItem) => (
                <VacanciesCard
                  title={vacanciesItem.title}
                  taggings={vacanciesItem.taggings}
                  description={vacanciesItem.description}
                  location={vacanciesItem.location}
                  salaryRange={vacanciesItem.salaryRange}
                  jobRole={vacanciesItem.jobRole}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="w-full flex justify-center">
        <div className="w-[83vw] border border-primary-60"></div>
      </div>

      {/* End of Page Contact Form Section */}
      <section className="relative overflow-hidden ">
        <div className="container mx-auto px-6 sm:px-10 lg:px-[100px] relative z-10">
          <div className="py-20 sm:py-24 lg:py-[120px]">
            <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 lg:gap-16">
              {/* Left Side - Content */}
              <div className="space-y-8">
                <h2 className="text-xl sm:text-2xl font-semibold text-black">
                  Together, we're building{" "}
                  <span className="text-primary-100">something better</span>
                </h2>
                <p className="text-base text-neutral-black-100 leading-relaxed">
                  At CT Skills, education is just the beginning. By connecting
                  people, creating opportunities, and giving back, we’re proud
                  to help develop both careers and communities.
                  <br />
                  <br />
                  Looking to learn, grow, or contribute? Let’s work together.
                </p>
              </div>

              {/* Right Side - Contact Form */}

              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
