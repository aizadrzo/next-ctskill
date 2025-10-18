import { PageHeader, Testimonial } from "@/components/marketing";
import { ContactForm } from "@/components/forms/contact-form";
import Image from "next/image";
import { Check, ChevronRight, Download, Link, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Testimonials from "./components/testimonails";

export default function OfstedReportPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <PageHeader
        title="Ofsted Report"
        backgroundColor="bg-primary-10"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Ofsted Report" }]}
      />

      {/* Text/Image Content Section */}
      <section className="py-16 md:py-[100px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-black-100 mb-6">
                Lorem <span className="text-primary-100">Ipsum</span>
              </h2>
              <div className="space-y-4">
                <p className="text-base md:text-lg text-neutral-black-100 font-light">
                  We are proud to share that our OFSTED inspection has
                  recognised us with an overall effectiveness rating of "Good."
                </p>
                <p className="text-base md:text-lg text-neutral-black-100 font-light">
                  This achievement underscores our commitment to providing
                  exceptional education and support for learners of all ages.
                </p>
                <p className="text-base md:text-lg text-neutral-black-100 font-light">
                  With outstanding performance highlighted in key areas such as
                  the quality of education, behaviour and attitudes, and
                  leadership, we strive to empower every individual through
                  tailored education programmes, adult learning opportunities,
                  and apprenticeships. Get in touch with us today to discover
                  how we can help you achieve your educational goals!
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-[676px] h-[670px] hidden z-0 lg:block">
                <Image
                  src="/images/group-1.png"
                  alt="Background Pattern"
                  fill
                  className="object-contain z-0"
                />
              </div>
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

      {/* Ofsted Inspection Notes Section */}
      <section className="py-16 sm:pb-20 sm:pt-[120px] px-4 sm:px-6 lg:px-24 bg-primary-10 relative">
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col md:flex-row gap-8 sm:gap-16 items-start justify-between">
            {/* Left Content */}
            <div className="space-y-6 sm:space-y-10">
              <div>
                <h3 className="text-2xl sm:text-3xl font-semibold text-neutral-black-100 mb-4 sm:mb-6">
                  Key <span className="text-primary-100">inspection notes</span>
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
                  CT Skills was last inspected in July 2023 and was graded as a
                  'Good School', the full report can be downloaded below.
                </p>
                <Button variant="default" size="lg">
                  <span>Ofsted Report 2023</span>
                  <div className="p-2 bg-neutral-white-100 rounded-md">
                    <ChevronRight className="h-4 w-4" color="#450932" />
                  </div>
                </Button>
              </div>

              <div className="text-xs sm:text-sm text-neutral-black-100 space-y-2">
                <p>
                  <span className="font-bold italic">Inspection dates:</span> 11
                  to 14 July 2023
                </p>
                <div>
                  <p className="font-bold mb-2 italic">Inspection team:</p>
                  <ul className="space-y-1 list-disc list-inside">
                    <li>Saul Pope – Lead Inspector His Majesty's Inspector</li>
                    <li>Karen Green – Ofsted Inspector</li>
                    <li>Abdul Miah – Ofsted Inspector</li>
                    <li>Matthew Newbould – Ofsted Inspector</li>
                    <li>Janet Cannon – Ofsted Inspector</li>
                    <li>Janet Smith – Ofsted Inspector</li>
                    <li>Vicki Locke – His Majesty's Inspector</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Content - Ratings */}
            <div className="space-y-4 sm:space-y-6">
              {/* Ratings Card */}
              <Card className="bg-white border border-gray-200 shadow-sm py-0">
                <CardContent className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <Check className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 text-primary-60" />
                    <span className="text-base sm:text-lg">
                      Overall effectiveness: Good
                    </span>
                  </div>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <Check className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 text-primary-60" />
                    <span className="text-base sm:text-lg">
                      The quality of education: Good
                    </span>
                  </div>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <Check className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 text-primary-60" />
                    <span className="text-base sm:text-lg">
                      Behaviour and attitudes: Good
                    </span>
                  </div>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <Check className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 text-primary-60" />
                    <span className="text-base sm:text-lg">
                      Personal development: Good
                    </span>
                  </div>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <Check className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 text-primary-60" />
                    <span className="text-base sm:text-lg">
                      Leadership and Management: Good
                    </span>
                  </div>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <Check className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 text-primary-60" />
                    <span className="text-base sm:text-lg">
                      Education programmes for young people: Good
                    </span>
                  </div>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <Check className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 text-primary-60" />
                    <span className="text-base sm:text-lg">
                      Adult learning programmes: Good
                    </span>
                  </div>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <Check className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 text-primary-60" />
                    <span className="text-base sm:text-lg">
                      Apprenticeships: Good
                    </span>
                  </div>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <Check className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 text-primary-60" />
                    <span className="text-base sm:text-lg">
                      Overall effectiveness at previous inspection: Good
                    </span>
                  </div>
                </CardContent>
              </Card>

              {/* Provider Information */}
              <Card className="bg-white border border-gray-200 shadow-sm">
                <CardHeader>
                  <CardTitle>Information about this provider</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="space-y-3 sm:space-y-4 text-base leading-relaxed">
                    <p>
                      CT Skills Limited is an independent training provider
                      based in Beeston, Nottinghamshire. It offers part-time
                      courses for adults, apprenticeships, and full-time courses
                      for young people. Adult learners and apprentices are based
                      throughout England. Young people live and study in the
                      East Midlands.
                    </p>
                    <p>
                      Since the last inspection, CT Skills has significantly
                      changed its adult provision. It now offers mostly remote
                      adult learning courses. Almost all adult learners study
                      via an online learning platform.
                    </p>
                    <p>
                      At the time of the inspection, there were 912 adult
                      learners, 561 apprentices and 79 young learners. Adults
                      mostly studied level 2 courses in childcare or health,
                      information and communication technology. Most apprentices
                      were aged over 18.
                    </p>
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Separation Line */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 bg-primary-10">
        <Separator className="bg-primary-60" />
      </div>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-16 bg-primary-10">
        <div className="container mx-auto">
          <div className="relative">
            <Testimonials />
          </div>
        </div>
      </section>

      {/* Triangle Separation */}
      <div className="w-full h-full">
        <Image
          src="/decorations/separation-triangle.svg"
          alt="Triangle Separation"
          width={1440}
          height={92}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Contact Form Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-24 bg-neutral-white-100">
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 items-start">
            {/* Left Content */}
            <div className="space-y-6 sm:space-y-8 w-full sm:w-1/3">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-neutral-black-100 mb-4 sm:mb-6">
                  Together, we're building{" "}
                  <span className="text-primary-100">something better</span>
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  At CT Skills, education is just the beginning. By connecting
                  people, creating opportunities, and giving back, we're proud
                  to help develop both careers and communities.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mt-3 sm:mt-4">
                  Looking to learn, grow, or contribute? Let's work together.
                </p>
              </div>
            </div>

            {/* Right Content - Contact Form */}
            <div className="w-full sm:w-2/3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
