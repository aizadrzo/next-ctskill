import {
  PrideIcon,
  RespectIcon,
  AccountabilityIcon,
  IntegrityIcon,
  ServiceExcellenceIcon,
} from "../../../public/core-values-icons";

import {
  CheckmarkIcon,
  HandshakeIcon,
  FlagIcon,
} from "../../../public/about-icons";

import {
  GraduationCap,
  Briefcase,
  TrendingUp,
  Search,
  MessageCircle,
  Users,
  Building,
} from "lucide-react";

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

export const teamMembers = [
  {
    image: "/images/team/nicola-aram.jpg",
    imageAlt: "Nicola Aram1",
    firstName: "Nicola",
    lastName: "Aram",
    jobTitle: "Marketing Manager",
    email: "info@ctskills.co.uk",
    phone: "012345678",
  },
  {
    image: "/images/team/nicola-aram.jpg",
    imageAlt: "Nicola Aram2",
    firstName: "Nicola",
    lastName: "Aram",
    jobTitle: "Marketing Manager",
    email: "info@ctskills.co.uk",
    phone: "012345678",
  },
  {
    image: "/images/team/nicola-aram.jpg",
    imageAlt: "Nicola Aram3",
    firstName: "Nicola",
    lastName: "Aram",
    jobTitle: "Marketing Manager",
    email: "info@ctskills.co.uk",
    phone: "012345678",
  },
  {
    image: "/images/team/nicola-aram.jpg",
    imageAlt: "Nicola Aram4",
    firstName: "Nicola",
    lastName: "Aram",
    jobTitle: "Marketing Manager",
    email: "info@ctskills.co.uk",
    phone: "012345678",
  },
  {
    image: "/images/team/nicola-aram.jpg",
    imageAlt: "Nicola Aram5",
    firstName: "Nicola",
    lastName: "Aram",
    jobTitle: "Marketing Manager",
    email: "info@ctskills.co.uk",
    phone: "012345678",
  },
  {
    image: "/images/team/nicola-aram.jpg",
    imageAlt: "Nicola Aram6",
    firstName: "Nicola",
    lastName: "Aram",
    jobTitle: "Marketing Manager",
    email: "info@ctskills.co.uk",
    phone: "012345678",
  },
  {
    image: "/images/team/nicola-aram.jpg",
    imageAlt: "Nicola Aram7",
    firstName: "Nicola",
    lastName: "Aram",
    jobTitle: "Marketing Manager",
    email: "info@ctskills.co.uk",
    phone: "012345678",
  },
  {
    image: "/images/team/nicola-aram.jpg",
    imageAlt: "Nicola Aram8",
    firstName: "Nicola",
    lastName: "Aram",
    jobTitle: "Marketing Manager",
    email: "info@ctskills.co.uk",
    phone: "012345678",
  },
] as const;

export const whyChooseUsItems = [
  {
    icon: <FlagIcon className="w-10 h-10 text-neutral-white-100" />,
    title: "Proven Success",
    description:
      "With over 20 years of experience, we have a proven track record of success in developing careers and companies.",
  },
  {
    icon: <CheckmarkIcon className="w-10 h-10 text-neutral-white-100" />,
    title: "Expert Team",
    description:
      "Our experienced team is passionate about delivering training and recruitment with impact.",
  },
  {
    icon: <HandshakeIcon className="w-10 h-10 text-neutral-white-100" />,
    title: "Engaging Learning Environment",
    description:
      "We create engaging learning environments that help individuals reach their full potential.",
  },
] as const;

export const careerHubItems = [
  {
    title: "Starting Your Apprenticeship Journey",
    icon: <GraduationCap className="w-8 h-8" />,
    iconColor: "teal" as const,
  },
  {
    title: "Career Toolkit",
    icon: <Briefcase className="w-8 h-8" />,
    iconColor: "orange" as const,
  },
  {
    title: "Career Progression Routes",
    icon: <TrendingUp className="w-8 h-8" />,
    iconColor: "magenta" as const,
  },
  {
    title: "Job Searching",
    icon: <Search className="w-8 h-8" />,
    iconColor: "orange" as const,
  },
  {
    title: "Careers Advice",
    icon: <MessageCircle className="w-8 h-8" />,
    iconColor: "magenta" as const,
  },
  {
    title: "Resource for Parents and Carers",
    icon: <Users className="w-8 h-8" />,
    iconColor: "teal" as const,
  },
  {
    title: "Employer Resources",
    icon: <Building className="w-8 h-8" />,
    iconColor: "magenta" as const,
  },
] as const;
