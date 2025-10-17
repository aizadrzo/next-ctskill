import { GraduationCap, Book, UserSearch, Briefcase, Play } from "lucide-react";
import {
  PrideIcon,
  RespectIcon,
  AccountabilityIcon,
  IntegrityIcon,
  ServiceExcellenceIcon,
} from "../../public/core-values-icons";

// Services data for the intro section
export const introServices = [
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
export const coreValues = [
  {
    icon: (
      <PrideIcon className="absolute bottom-0 left-0 w-15 h-15 sm:w-12 sm:h-12 text-primary-60 opacity-50 z-0" />
    ),
    title: "Pride",
    description: "A commitment to quality and achieving meaningful results",
  },
  {
    icon: (
      <RespectIcon className="absolute bottom-0 left-0 w-15 h-15 sm:w-12 sm:h-12 text-primary-60 opacity-50 z-0" />
    ),
    title: "Respect",
    description: "Listening, valuing, and supporting every individual",
  },
  {
    icon: (
      <AccountabilityIcon className="absolute bottom-0 left-0 w-15 h-15 sm:w-12 sm:h-12 text-primary-60 opacity-50 z-0" />
    ),
    title: "Accountability",
    description: "Taking ownership and delivering on promises",
  },
  {
    icon: (
      <IntegrityIcon className="absolute bottom-0 left-0 w-15 h-15 sm:w-12 sm:h-12 text-primary-60 opacity-50 z-0" />
    ),
    title: "Integrity",
    description: "Acting with honesty, transparency, and purpose",
  },
  {
    icon: (
      <ServiceExcellenceIcon className="absolute bottom-0 left-0 w-15 h-15 sm:w-12 sm:h-12 text-primary-60 opacity-50 z-0" />
    ),
    title: "Service Excellence",
    description: "Striving to exceed expectations at every opportunity",
  },
] as const;

export const featuresServices = [
  {
    icon: <GraduationCap className="w-8 h-8" />,
    title: "Apprenticeships",
    iconColor: "teal",
  },
  {
    icon: <Book className="w-8 h-8" />,
    title: "Online Courses",
    iconColor: "orange",
  },
  {
    icon: <UserSearch className="w-8 h-8" />,
    title: "Recruitment",
    iconColor: "magenta",
  },
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: "Jobs",
    iconColor: "magenta",
  },
] as const;
