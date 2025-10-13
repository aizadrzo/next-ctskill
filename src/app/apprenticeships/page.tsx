"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Check, Search, ClipboardList, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion } from "framer-motion";

const employerBenefits = [
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
];

const learnerBenefits = [
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
];

const journeySteps = [
  {
    title: "Induction",
    duration: "Est. duration: x - y weeks",
    description:
      "Within four weeks of enrolment, you will meet your Assessor, who will assist you in understanding the apprenticeship requirements and develop a personalised Training Plan.\n\nYou will also gain access to the Smart Assessor e-portfolio system, where you can upload your work and track your progress throughout your apprenticeship.",
  },
  {
    title: "Apprenticeship Learning",
    duration: "Est. duration: x - y weeks",
    description:
      "Your Assessor will schedule one-to-one or group sessions at least every four weeks. Each week, you'll complete six hours of Off-the-Job Training and log your activities in Smart Assessor.\n\nYou'll prepare for your End Point Assessment through mock assessments and activities to generate assessment evidence, aiming for Distinction grades. Every ten to twelve weeks, you'll review your progress with your Assessor and employer, updating your training plan as needed.",
  },
  {
    title: "Maths and English",
    duration: "Est. duration: x - y weeks",
    description:
      "If you haven't already obtained your Maths and English qualifications, you will complete your Functional Skills qualifications.\n\nMaths and English are incorporated into all apprenticeships, developing essential skills that will support you in both your professional and personal life.",
  },
  {
    title: "Masterclasses",
    duration: "Est. duration: x - y weeks",
    description:
      "You will have access to our exclusive masterclasses, which will not only enhance your skills and knowledge but also connect you with fellow students pursuing the same qualification.",
  },
  {
    title: "The Wider Information Skills Hub",
    duration: "Est. duration: x - y weeks",
    description:
      "The Wider Information Skills Hub (WISH) will play a crucial role in your apprenticeship journey.\n\nYou will receive information on topics like mental health and wellbeing, safeguarding, Fundamental British Values, and Prevent, all designed to support you in both your personal and professional life.",
  },
  {
    title: "Gateway",
    duration: "Est. duration: x - y weeks",
    description:
      "A Gateway meeting will be held once you finish your learning. You, your employer, and your Assessor will determine if you are ready for the End Point Assessment (EPA).\n\nIn the meeting, you'll discuss your readiness and confirm you have completed all essential components of the programme before proceeding to the final assessment.",
  },
  {
    title: "End Point Assessment",
    duration: "Est. duration: x - y weeks",
    description:
      "The final assessment of your learning will be conducted by an Independent End Point Assessor (IEPA). To complete your apprenticeship, you must pass all components of the End Point Assessment (EPA).\n\nThis assessment may consist of several elements, such as a multiple-choice test, portfolio, project, interview, professional discussion, and observation.",
  },
  {
    title: "Destination Distinction",
    duration: "Est. duration: x - y weeks",
    description:
      "Destination Distinction is dedicated to helping you realise your potential and attain the highest possible grades. We will support you every step of the way!",
  },
];

const apprenticeshipCategories = [
  { title: "Accountancy", image: "/images/apprenticeships/categories/accountancy.png" },
  {
    title: "Business Administration",
    image: "/images/apprenticeships/categories/business-admin.png",
  },
  { title: "Childcare", image: "/images/apprenticeships/categories/childcare.png" },
  { title: "Customer Service", image: "/images/apprenticeships/categories/customer-service.png" },
  { title: "Education", image: "/images/apprenticeships/categories/education.png" },
  { title: "Housing", image: "/images/apprenticeships/categories/housing.png" },
  { title: "Human Resources", image: "/images/apprenticeships/categories/human-resources.png" },
  { title: "Management", image: "/images/apprenticeships/categories/management.png" },
  { title: "Marketing", image: "/images/apprenticeships/categories/marketing.png" },
  { title: "Payroll", image: "/images/apprenticeships/categories/payroll.png" },
];

// Job Card Component with hover animation
function JobCard({ index }: { index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  return (
    <motion.div
      className="bg-neutral-white-100 border border-secondary-magenta-100 rounded-lg p-8 space-y-8 relative overflow-hidden"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ 
        y: -4,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        borderColor: "rgba(164, 32, 153, 0.7)"
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Corner Decoration - Animated */}
      <motion.div
        className="absolute -bottom-8 -right-4 w-40 h-40 pointer-events-none"
        initial={{ opacity: 0, x: 20, y: 20 }}
        animate={isHovered ? 
          { opacity: 1, x: 0, y: 0 } : 
          { opacity: 0, x: 20, y: 20 }
        }
        transition={{ 
          duration: 0.4, 
          ease: [0.4, 0, 0.2, 1]
        }}
      >
        <Image
          src="/images/apprenticeships/decorations/corner-purple-pink.png"
          alt=""
          fill
          className="object-cover rotate-180"
        />
      </motion.div>

      <div className="space-y-6 relative z-10">
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          <span className="px-2 py-1 bg-primary-100 text-neutral-white-100 text-xs font-medium rounded">
            EDUCATION & TRAINING
          </span>
          <span className="px-2 py-1 bg-primary-100 text-neutral-white-100 text-xs font-medium rounded">
            ACCOUNTING
          </span>
        </div>

        {/* Job Title */}
        <h6 className="text-lg font-semibold text-neutral-black-100 line-clamp-2">
          Insolvency Apprentice This Title Can Go Up To 2 Lines
        </h6>

        {/* Job Info */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-neutral-black-50">
            <span>📍</span>
            <span className="text-base">Hampshire</span>
          </div>
          <div className="flex items-center gap-2 text-neutral-black-50">
            <span>💰</span>
            <span className="text-base">£90-100k</span>
          </div>
          <div className="flex items-center gap-2 text-neutral-black-50">
            <span>⏰</span>
            <span className="text-base">Permanent</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-base text-neutral-black-50 line-clamp-2">
          A brief description of the job. Odio mi amet commodo
          convallis nunc. Tincidunt mauris eu egestas eget in aliquam.
        </p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between gap-4 relative z-10">
        <span className="text-sm text-neutral-black-50">
          7 days ago
        </span>
          <Link href="/jobs/1">
            <motion.button
              className="flex items-center gap-3 px-4 py-2 border rounded-lg text-base font-medium transition-colors cursor-pointer"
              onHoverStart={() => setIsButtonHovered(true)}
              onHoverEnd={() => setIsButtonHovered(false)}
              animate={{
                backgroundColor: isHovered ? '#64184C' : '#FFFFFF',
                borderColor: isHovered ? '#64184C' : '#000000',
                color: isHovered ? '#FFFFFF' : '#000000',
              }}
              transition={{ duration: 0.3 }}
            >
            <span>Apply Now</span>
            <motion.div 
              className="relative w-8 h-8 flex items-center justify-center rounded overflow-hidden"
              animate={{
                backgroundColor: isHovered ? '#FFFFFF' : '#000000',
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute flex items-center"
                animate={{
                  x: isButtonHovered ? 0 : -16,
                  opacity: isButtonHovered ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <ChevronRight 
                  className="h-3 w-3" 
                  color={isHovered ? '#000000' : '#FFFFFF'} 
                />
                <ChevronRight 
                  className="h-3 w-3 -ml-1" 
                  color={isHovered ? '#000000' : '#FFFFFF'} 
                />
              </motion.div>
              <motion.div
                className="absolute"
                animate={{
                  x: isButtonHovered ? 16 : 0,
                  opacity: isButtonHovered ? 0 : 1,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <ChevronRight 
                  className="h-3 w-3" 
                  color={isHovered ? '#000000' : '#FFFFFF'} 
                />
              </motion.div>
            </motion.div>
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
}

// Category Card Component with hover animation
function CategoryCard({ category, index }: { category: { title: string; image: string }; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="bg-neutral-white-100 border border-neutral-grey-100 rounded-lg overflow-hidden pb-4 cursor-pointer relative"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ 
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
        borderColor: "rgba(0, 172, 160, 0.7)"
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {/* Corner Decoration - Animated */}
      <motion.div
        className="absolute -top-4 -left-4 w-32 h-32 pointer-events-none z-20"
        initial={{ opacity: 0, x: -20, y: -20 }}
        animate={isHovered ? 
          { opacity: 1, x: 0, y: 0 } : 
          { opacity: 0, x: -20, y: -20 }
        }
        transition={{ 
          duration: 0.4, 
          ease: [0.4, 0, 0.2, 1]
        }}
      >
        <Image
          src="/images/apprenticeships/decorations/corner purple on pink (1).png"
          alt=""
          fill
          className="object-cover"
        />
      </motion.div>

      <div className="aspect-[296/240] bg-neutral-black-10 relative overflow-hidden">
        <motion.div
          className="absolute inset-0"
          animate={{
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={category.image}
            alt={category.title}
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
      <div className="px-6 pt-4 text-center relative z-10">
        <motion.p
          className="text-base font-medium"
          animate={{
            color: isHovered ? '#00ACA0' : '#000000',
          }}
          transition={{ duration: 0.3 }}
        >
          {category.title}
        </motion.p>
      </div>
    </motion.div>
  );
}

export default function ApprenticeshipsPage() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-[#E5F7F6] overflow-hidden">
        {/* Confetti Decorations */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Confetti scattered around */}
          <div className="absolute top-[32px] right-[905px] w-3 h-3">
            <Image src="/images/confetti.svg" alt="" width={12} height={12} />
          </div>
          <div className="absolute top-[52px] right-[741px] w-3 h-3">
            <Image src="/images/confetti.svg" alt="" width={12} height={12} />
          </div>
          <div className="absolute top-[136px] right-[951px] w-3 h-3">
            <Image src="/images/confetti.svg" alt="" width={12} height={12} />
          </div>
          <div className="absolute top-[178px] right-[686px] w-3 h-3">
            <Image src="/images/confetti.svg" alt="" width={12} height={12} />
          </div>
          <div className="absolute top-[198px] right-[1000px] w-3 h-3">
            <Image src="/images/confetti.svg" alt="" width={12} height={12} />
          </div>
          <div className="absolute top-[244px] right-[635px] w-3 h-3">
            <Image src="/images/confetti.svg" alt="" width={12} height={12} />
          </div>
          <div className="absolute top-[315px] right-[589px] w-3 h-3">
            <Image src="/images/confetti.svg" alt="" width={12} height={12} />
          </div>
          <div className="absolute top-[32px] right-[782px] w-3 h-3">
            <Image src="/images/confetti.svg" alt="" width={12} height={12} />
          </div>
        </div>

        {/* Main Content Container */}
        <div className="container mx-auto px-6 sm:px-10 lg:px-[100px] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 lg:py-20">
            {/* Left Side - Content */}
            <div className="space-y-8">
              {/* Breadcrumbs */}
              <nav className="flex items-center gap-2 text-sm">
                <Link href="/" className="text-neutral-black-100 hover:text-primary-100 transition-colors">
                  Home
                </Link>
                <ChevronRight className="w-4 h-4 text-neutral-black-100" />
                <span className="text-neutral-black-100">Apprenticeships</span>
              </nav>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-neutral-black-100">
                Apprenticeships
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg text-neutral-black-100 leading-relaxed max-w-[600px]">
                For over 20 years, we've helped people launch rewarding careers and supported organisations in building skilled teams through apprenticeships that blend training with real-world experience.
              </p>
            </div>

            {/* Right Side - Human Image */}
            <div className="relative hidden lg:block">
              <div className="relative w-full h-[400px] lg:h-[450px]">
                <Image
                  src="/images/apprenticeships/ct skills apprentice hero 1.png"
                  alt="Apprentice with phone and folder"
                  fill
                  className="object-contain object-right"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Triangle Edge */}
        <div className="w-full h-[116px]">
          <Image
            src="/images/apprenticeships/triangle-edge.svg"
            alt=""
            width={1440}
            height={116}
            className="w-full h-full"
          />
        </div>
      </div>

      {/* TextImageRow Section */}
      <section className="relative py-20 lg:py-[100px] bg-neutral-white-100">
        <div className="container mx-auto px-6 sm:px-10 lg:px-[100px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left - Video */}
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 z-10" />
                <Image
                  src="/images/apprenticeships/video-placeholder.png"
                  alt="Apprenticeships Video"
                  fill
                  className="object-cover"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="w-[74px] h-[74px] bg-neutral-white-100 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer">
                    <Play className="w-8 h-8 text-primary-100 ml-1" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="space-y-8 order-1 lg:order-2">
              <h5 className="text-xl sm:text-2xl font-semibold text-neutral-black-100">
                A bit of title can go here
              </h5>
              <p className="text-base sm:text-lg text-neutral-black-100 leading-relaxed">
                Our apprenticeships incorporate the most advanced learning
                techniques, placing the learner's experience at the forefront of
                what we do. We recognise that each business is distinct, which is
                why our programmes can be customised to align with the specific
                needs of different sectors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DualCTADescriptionBoxes Section */}
      <section className="relative py-16 lg:pb-16 bg-neutral-white-100">
        <div className="container mx-auto px-6 sm:px-10 lg:px-[100px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Employers Box */}
            <div className="bg-neutral-white-100 border border-neutral-black-30 rounded-lg p-6 sm:p-8 space-y-6 backdrop-blur-md shadow-sm hover:shadow-xl hover:border-secondary-teal-100/50 transition-all duration-300">
              <h6 className="text-lg sm:text-xl font-semibold text-neutral-black-100">
                Employers
              </h6>
              <div className="space-y-4">
                {employerBenefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 group/item hover:translate-x-1 transition-transform duration-200"
                  >
                    <Check className="w-6 h-6 text-secondary-teal-100 flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                    <p className="text-base text-neutral-black-100">{benefit}</p>
                  </div>
                ))}
              </div>
              <button className="w-full flex items-center justify-between gap-2 bg-secondary-teal-100 text-neutral-white-100 px-6 py-3 rounded-lg hover:bg-secondary-teal-100/90 hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-center gap-3">
                  <ClipboardList className="w-5 h-5" />
                  <span className="font-medium">Call to action goes here</span>
                </div>
                <div className="p-2 bg-neutral-white-100/20 rounded group-hover:bg-neutral-white-100/30 transition-colors">
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            </div>

            {/* Learners Box */}
            <div className="bg-neutral-white-100 border border-neutral-black-30 rounded-lg p-6 sm:p-8 space-y-6 backdrop-blur-md shadow-sm hover:shadow-xl hover:border-secondary-teal-100/50 transition-all duration-300">
              <h6 className="text-lg sm:text-xl font-semibold text-neutral-black-100">
                Learners
              </h6>
              <div className="space-y-4">
                {learnerBenefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 group/item hover:translate-x-1 transition-transform duration-200"
                  >
                    <Check className="w-6 h-6 text-secondary-teal-100 flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                    <p className="text-base text-neutral-black-100">{benefit}</p>
                  </div>
                ))}
              </div>
              <button className="w-full flex items-center justify-between gap-2 bg-secondary-teal-100 text-neutral-white-100 px-6 py-3 rounded-lg hover:bg-secondary-teal-100/90 hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-center gap-3">
                  <Search className="w-5 h-5" />
                  <span className="font-medium">Call to action goes here</span>
                </div>
                <div className="p-2 bg-neutral-white-100/20 rounded group-hover:bg-neutral-white-100/30 transition-colors">
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Separation Triangle */}
      <div className="w-full h-[68px]">
        <Image
          src="/images/apprenticeships/separation-triangle.svg"
          alt=""
          width={1440}
          height={68}
          className="w-full h-full"
        />
      </div>

      {/* Learner Journey Section */}
      <section className="relative py-20 lg:py-[100px] bg-primary-10 overflow-hidden">
        {/* Background Decorative Pattern */}
        <div className="absolute left-[-256px] top-[219px] w-[497px] h-[315px] opacity-30 pointer-events-none">
          <Image
            src="/images/apprenticeships/learner-journey-bg.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>
        <div className="container mx-auto px-6 sm:px-10 lg:px-[290px]">
          <div className="space-y-16">
            {/* Header */}
            <div className="text-center">
              <h4 className="text-2xl sm:text-3xl font-semibold text-neutral-black-100">
                What does a typical learner journey look like?
              </h4>
            </div>

            {/* Journey Steps */}
            <div className="space-y-10">
              {/* Steps Navigation */}
              <div className="flex items-center gap-4 overflow-x-auto pb-4">
                {journeySteps.map((step, index) => (
                  <React.Fragment key={index}>
                    <button
                      onClick={() => setActiveStep(index)}
                      className={`px-6 py-3 rounded-lg font-medium text-base whitespace-nowrap transition-all ${
                        activeStep === index
                          ? "bg-secondary-teal-100 text-neutral-white-100 shadow-lg shadow-secondary-teal-100/30"
                          : "border border-secondary-teal-100 text-neutral-black-100 hover:bg-secondary-teal-100/10"
                      }`}
                    >
                      {step.title}
                    </button>
                    {index < journeySteps.length - 1 && (
                      <div className="w-20 h-0.5 border-t-2 border-dashed border-secondary-teal-100 flex-shrink-0" />
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* Step Content */}
              <div className="bg-neutral-white-100 border border-secondary-teal-100 rounded-lg p-6 sm:p-8 space-y-4 min-h-[300px] animate-in fade-in duration-500">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-secondary-teal-100 rounded-full flex items-center justify-center animate-in zoom-in duration-300">
                      <span className="text-2xl font-bold text-neutral-white-100">
                        {activeStep + 1}
                      </span>
                    </div>
                    <p className="text-base text-neutral-black-100">
                      {journeySteps[activeStep].duration}
                    </p>
                  </div>
                </div>
                <p className="text-base sm:text-lg text-neutral-black-100 leading-relaxed whitespace-pre-line">
                  {journeySteps[activeStep].description}
                </p>
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center justify-center gap-4">
                <button
                  onClick={() =>
                    setActiveStep((prev) =>
                      prev > 0 ? prev - 1 : journeySteps.length - 1
                    )
                  }
                  className="p-3 border-2 border-neutral-black-100 rounded hover:bg-neutral-black-10 transition-colors"
                  aria-label="Previous step"
                >
                  <ChevronRight className="w-6 h-6 rotate-180" />
                </button>
                <button
                  onClick={() =>
                    setActiveStep((prev) =>
                      prev < journeySteps.length - 1 ? prev + 1 : 0
                    )
                  }
                  className="p-3 border-2 border-neutral-black-100 rounded hover:bg-neutral-black-10 transition-colors"
                  aria-label="Next step"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Separation Line */}
      <div className="w-full bg-primary-10">
        <div className="container mx-auto px-6 sm:px-10 lg:px-[100px]">
          <Image
            src="/images/apprenticeships/separation-line.svg"
            alt=""
            width={1440}
            height={1}
            className="w-full"
          />
        </div>
      </div>

      {/* Apprenticeships Grid Section */}
      <section className="relative py-20 lg:py-[100px] bg-primary-10">
        <div className="container mx-auto px-6 sm:px-10 lg:px-[100px]">
          <div className="space-y-10">
            <h4 className="text-2xl sm:text-3xl font-semibold text-neutral-black-100 text-center">
              We offer apprenticeships in...
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-[18px]">
              {apprenticeshipCategories.map((category, index) => (
                <CategoryCard key={index} category={category} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Separation Triangle */}
      <div className="w-full h-[68px]">
        <Image
          src="/images/apprenticeships/separation-triangle-2.svg"
          alt=""
          width={1440}
          height={68}
          className="w-full h-full"
        />
      </div>

      {/* Testimonials Section */}
      <section className="relative py-20 lg:py-[100px] bg-neutral-white-100">
        <div className="container mx-auto px-6 sm:px-10 lg:px-[100px]">
          <div className="flex flex-col items-center gap-14">
            {/* Header */}
            <div className="flex flex-col items-center gap-4">
              <h6 className="text-sm font-normal text-primary-60 uppercase tracking-wider">
                TESTIMONIALS
              </h6>
              <h6 className="text-lg sm:text-xl font-semibold text-primary-100 text-center">
                Listen to what people have to say about their experience with us!
              </h6>
            </div>

            {/* Testimonial Card */}
            <div className="w-full max-w-[545px] space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="bg-neutral-white-100 border border-primary-100 rounded-lg p-8 space-y-6 hover:shadow-xl transition-shadow duration-300">
                <div className="text-6xl font-bold text-primary-100">"</div>
                <p className="text-base sm:text-lg text-neutral-black-100 leading-relaxed">
                  Thank you for the outstanding delivery for our Apprentice's
                  course. The results is a happy and energetic staff member who is
                  bringing new knowledge and up to date skills into their role and
                  delivering long term benefits to our company.
                </p>
              </div>
              <div className="space-y-2">
                <h6 className="text-lg font-semibold text-primary-100">
                  Employer Feedback
                </h6>
                <p className="text-base text-neutral-black-50">
                  A certain company/sector can go here
                </p>
                <p className="text-base text-neutral-black-100">
                  A bit of description can go here. Secured a full time role
                  within 3 weeks of completing her apprenticeship in May 2025.
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Vacancies Section */}
      <section className="relative py-20 lg:py-[100px] bg-neutral-black-10">
        <div className="container mx-auto px-6 sm:px-10 lg:px-[100px]">
          <div className="space-y-10">
            {/* Header */}
            <div className="flex items-center justify-center gap-4">
              <h4 className="text-2xl sm:text-3xl font-semibold text-neutral-black-100">
                Current Vacancies
              </h4>
              <Button variant="default" size="md" asChild>
                <Link href="/jobs">
                  <span>See more jobs</span>
                  <div className="p-2 bg-neutral-white-100 rounded-md">
                    <ChevronRight className="h-4 w-4" color="#450932" />
                  </div>
                </Link>
              </Button>
            </div>

            {/* Job Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[1, 2, 3].map((job, index) => (
                <JobCard key={job} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* End of Page Contact Form Section */}
      <section className="relative py-20 lg:py-[100px] bg-neutral-white-100">
        <div className="container mx-auto px-6 sm:px-10 lg:px-[100px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Side - Content */}
            <div className="space-y-8">
              <h2 className="text-2xl sm:text-3xl font-semibold text-primary-100">
                Together, we're building something better
              </h2>
              <p className="text-base sm:text-lg text-neutral-black-100 leading-relaxed">
                At CT Skills, education is just the beginning. By connecting
                people, creating opportunities, and giving back, we're proud to
                help develop both careers and communities.
                <br />
                <br />
                Looking to learn, grow, or contribute? Let's work together.
              </p>
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-neutral-white-100 border border-secondary-teal-100 rounded-lg p-8">
              <div className="space-y-6">
                <div className="border-b border-primary-120 pb-4">
                  <h3 className="text-xl font-semibold text-neutral-black-100">
                    Get in touch with us
                  </h3>
                </div>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-neutral-black-50">
                        FIRST NAME*
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-neutral-black-30 rounded bg-neutral-white-100 focus:ring-2 focus:ring-secondary-teal-100 focus:border-transparent outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-neutral-black-50">
                        LAST NAME*
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-neutral-black-30 rounded bg-neutral-white-100 focus:ring-2 focus:ring-secondary-teal-100 focus:border-transparent outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-neutral-black-50">
                        EMAIL*
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-2 border border-neutral-black-30 rounded bg-neutral-white-100 focus:ring-2 focus:ring-secondary-teal-100 focus:border-transparent outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-neutral-black-50">
                        TELEPHONE NUMBER*
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-2 border border-neutral-black-30 rounded bg-neutral-white-100 focus:ring-2 focus:ring-secondary-teal-100 focus:border-transparent outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-neutral-black-50">
                        COMPANY
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-neutral-black-30 rounded bg-neutral-white-100 focus:ring-2 focus:ring-secondary-teal-100 focus:border-transparent outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-neutral-black-50">
                        HOW CAN WE HELP?
                      </label>
                      <select className="w-full px-4 py-2 border border-neutral-black-30 rounded bg-neutral-white-100 focus:ring-2 focus:ring-secondary-teal-100 focus:border-transparent outline-none transition-all">
                        <option>Select an option</option>
                        <option>Apprenticeships</option>
                        <option>Online Courses</option>
                        <option>Recruitment</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-neutral-black-50">
                      MESSAGE*
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-2 border border-neutral-black-30 rounded bg-neutral-white-100 focus:ring-2 focus:ring-secondary-teal-100 focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-start gap-2">
                      <input
                        type="checkbox"
                        id="privacy"
                        className="mt-1 accent-secondary-teal-100"
                      />
                      <label
                        htmlFor="privacy"
                        className="text-sm text-neutral-black-100"
                      >
                        By submitting I agree to the privacy policy.*
                      </label>
                    </div>
                    <Button variant="default" size="md" type="submit">
                      <span>Submit</span>
                      <div className="p-2 bg-neutral-white-100 rounded-md">
                        <ChevronRight className="h-4 w-4" color="#450932" />
                      </div>
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

