import { DetailsCard } from "@/components/marketing/details-card";
import { PageHeader } from "@/components/marketing/page-header";
import { ClipboardList, Play, Search } from "lucide-react";
import Image from "next/image";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Apprenticeships" },
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

      <div className="w-full flex justify-center bg-neutral-black-10 py-16">
        <div className="w-2/3 border border-primary-60"></div>
      </div>

      {/* Offerings */}
      <div className=" w-full bg-neutral-black-10 py-16">
        <h4 className="text-2xl font-semibold text-center">
          We offer <span className="text-primary-100">apprenticeships</span>{" "}
          in...
        </h4>
      </div>
      {/* Top Triangle */}
      <div className="w-full h-[68px] bg-neutral-black-10 bottom-right-slated-shape"></div>
    </div>
  );
}
