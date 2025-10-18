import { ContactForm } from "@/components/forms";
import {
  CarouselLevelCard,
  DetailsCard,
  HeaderTag,
  ImageTitleCard,
  PageHeader,
  Testimonial,
  TestimonialContent,
  VacanciesCard,
} from "@/components/marketing";
import { Button } from "@/components/ui/button";
import { ChevronRight, ClipboardList, Play, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Apprenticeships" },
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
    key: 1,
    title: "Involvency Apprentice This Title Can Go Up To 2 Lines",
    location: "Hampshire",
    salaryRange: "90-100k",
    description:
      "A brief description of the job. Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in aliquam.",
    taggings: ["EDUCATION & TRAINING", "ACCOUNTING", "SAMPLE TAG"],
    jobRole: "Permanent",
  },
  {
    key: 2,
    title: "Involvency Apprentice This Title Can Go Up To 2 Lines",
    location: "Hampshire",
    salaryRange: "90-100k",
    description:
      "A brief description of the job. Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in aliquam.",
    taggings: ["EDUCATION & TRAINING", "ACCOUNTING", "SAMPLE TAG"],
    jobRole: "Permanent",
  },
  {
    key: 3,
    title: "Involvency Apprentice This Title Can Go Up To 2 Lines",
    location: "Hampshire",
    salaryRange: "90-100k",
    description:
      "A brief description of the job. Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in aliquam.",
    taggings: ["EDUCATION & TRAINING", "ACCOUNTING", "SAMPLE TAG"],
    jobRole: "Permanent",
  },
];

const staticCardItems = [
  {
    name: "Employers",
    icon: <ClipboardList />,
    content: [
      "Find and attract diverse talent locally and nationally.",
      "Upskill and reskill your existing workforce effectively.",
      "Tailor learning programs to meet specific business needs.",
      "Support employee progression and enhance retention.",
      "Develop adaptable team members ready for change.",
      "Integrate apprenticeships into your broader talent strategy.",
      "Understand the apprenticeship levy and funding options.",
      "Alleviate L&D budget pressures using the levy.",
      "Diversify your team for fresh perspectives and ideas.",
      "Improve productivity, service quality, and reduce recruitment costs.",
    ],
  },
  {
    name: "Learners",
    icon: <Search />,
    content: [
      "Start or advance your career with an apprenticeship.",
      "Earn while you learn, avoiding student debt.",
      "Access local and national job opportunities.",
      "Upskill in your chosen profession.",
      "Gain an industry-recognised qualification.",
      "Choose from a wide range of apprenticeship programmes.",
      "Programmes available for all experience levels.",
      "Benefit from peer and mentor support.",
      "Receive career guidance and pastoral care.",
      "Enjoy personal 1-2-1 training without extra homework.",
    ],
  },
];

export default function Apprenticeship() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHeader
        title="Apprenticeships"
        breadcrumbs={breadcrumbs}
        backgroundColor="bg-secondary-teal-10"
        titleColor="text-neutral-black-100"
        headerImage="/images/apprenticeships2.png"
        content="For over 20 years, we’ve helped people launch rewarding careers and supported organisations in building skilled teams through apprenticeships that blend training with real-world experience."
        mainHeader
      />

      {/* Intro of apprenticeships */}
      <div className="container mx-auto px-6 sm:px-10 lg:px-[100px] relative z-10">
        <div className="py-20 sm:py-24 lg:py-[120px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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

            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h5 className="text-xl sm:text-xl font-semibold text-neutral-black-100">
                  A bit of title{" "}
                  <span className="text-primary-100">can go here</span>
                </h5>
                <p className="text-base text-neutral-black-100 leading-relaxed">
                  Our apprenticeships incorporate the most advanced learning
                  techniques, placing the learner's experience at the forefront
                  of what we do. We recognise that each business is distinct,
                  which is why our programmes can be customised to align with
                  the specific needs of different sectors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Static Card Secton */}
      <div className="container mx-auto px-6 sm:px-10 lg:px-[100px] relative z-10 flex justify-between pb-16">
        {staticCardItems.map((staticCardItem) => (
          <DetailsCard
            key={staticCardItem.name}
            title={staticCardItem.name}
            icon={staticCardItem.icon}
            descriptions={staticCardItem.content}
          />
        ))}
      </div>

      {/* Top Triangle */}
      <div className="w-full h-[68px] bg-neutral-black-10 top-right-slated-shape"></div>
      {/* Carousel Section */}
      <div className=" w-full bg-neutral-black-10 py-16">
        <h4 className="text-2xl font-semibold text-center">
          What does a{" "}
          <span className="text-primary-100">typical learner journey</span> look
          like?
        </h4>
      </div>
      {/* Top step indicator */}
      <div className="flex items-center justify-center bg-neutral-black-10">
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
      <div className="flex justify-center gap-8 pt-8 bg-neutral-black-10">
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

      {/* Separator */}
      <div className="w-full flex justify-center bg-neutral-black-10 py-16">
        <div className="w-2/3 border border-primary-60"></div>
      </div>

      {/* Offerings */}
      <div className=" w-full bg-neutral-black-10 py-16">
        <h4 className="text-2xl font-semibold text-center">
          We offer <span className="text-primary-100">apprenticeships</span>{" "}
          in...
        </h4>
        <div className="flex justify-center">
          <div className="grid grid-cols-4 py-10 gap-4 w-fit">
            {offeringItems.map((offeringItem) => (
              <ImageTitleCard
                key={offeringItem.title}
                title={offeringItem.title}
                image={offeringItem.image}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Bottom Triangle */}
      <div className="w-full h-[68px] bg-neutral-black-10 bottom-right-slated-shape"></div>

      {/* Testimonials Section*/}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-6 sm:px-10 lg:px-[100px] relative z-10">
          <div className="pb-20 sm:pb-24 lg:pb-[120px]">
            <div className=" w-full py-16">
              <p className="font-bold text-primary-60 text-sm text-center">
                TESTIMONIALS
              </p>
              <h6 className="text-lg font-semibold text-center text-primary-100">
                Listen to what people have to say about their experience with
                us!
              </h6>
            </div>

            {/* Testimonials Carousel*/}
            <div className="flex w-full justify-center gap-4">
              <Testimonial>
                <Image
                  alt="Test Image"
                  width={463}
                  height={330}
                  src="/images/testimonial.png"
                />
                <TestimonialContent
                  title="Employer Feedback"
                  subtitle="A certain company/sector can go here"
                  description="A bit of description can go here. Secured a full time role within 3 weeks of completing her apprenticeship in May 2025."
                />
              </Testimonial>
            </div>
          </div>
        </div>
      </section>

      {/* Current Vacancies Section */}
      <section className="relative overflow-hidden  bg-neutral-black-10">
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
                  key={vacanciesItem.key}
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
