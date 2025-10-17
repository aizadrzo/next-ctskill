import {
  PrideIcon,
  RespectIcon,
  AccountabilityIcon,
  IntegrityIcon,
  ServiceExcellenceIcon,
} from "../../../public/core-values-icons";

export const communityInitiatives = [
  {
    id: 1,
    title: "Volunteering & Social Impact",
    description:
      "We actively encourage learners and staff to take part in volunteering opportunities, building skills while giving back.",
    overlay: "Pride" as const,
  },
  {
    id: 2,
    title: "Supporting Our Chosen Charity",
    description:
      "We're proud to support the Trussell Trust via Work for Good, helping to combat food poverty.",
    overlay: "Heart" as const,
  },
  {
    id: 3,
    title: "Community Newsletters",
    description:
      "Sharing stories, celebrating success, and staying connected with learners and partners.",
    overlay: "Newsletter" as const,
  },
  {
    id: 4,
    title: "Celebrating Achievement",
    description:
      "Honouring course completions, apprenticeship milestones and success stories.",
    overlay: "Respect" as const,
  },
  {
    id: 5,
    title: "Internal Awards",
    description:
      "Recognising learners and staff who live our values and go above and beyond.",
    overlay: "ServiceExcellence" as const,
  },
];

export const blogPosts = [
  {
    id: 1,
    title: "Blog title can go here and it can go up to two lines",
    description:
      "Lorem ipsum dolor sit amet consectetur. Non pellentesque et justo mattis aliquet gravida. Auctor aliquet eget a tristique.",
    date: "7 days ago",
    tags: ["EDUCATION & TRAINING", "ACCOUNTING", "SAMPLE TAG"],
  },
  {
    id: 2,
    title: "Blog title can go here and it can go up to two lines",
    description:
      "Lorem ipsum dolor sit amet consectetur. Non pellentesque et justo mattis aliquet gravida. Auctor aliquet eget a tristique.",
    date: "7 days ago",
    tags: ["EDUCATION & TRAINING", "ACCOUNTING", "SAMPLE TAG"],
  },
  {
    id: 3,
    title: "Blog title can go here and it can go up to two lines",
    description:
      "Lorem ipsum dolor sit amet consectetur. Non pellentesque et justo mattis aliquet gravida. Auctor aliquet eget a tristique.",
    date: "7 days ago",
    tags: ["EDUCATION & TRAINING", "ACCOUNTING", "SAMPLE TAG"],
  },
];

export const volunteeringOrgs = [
  {
    id: 1,
    name: "National Association for Voluntary and Community Action",
    logo: "/volunteer-logo/navca.png",
  },
  {
    id: 2,
    name: "National Council for Voluntary Organisations (NCVO)",
    logo: "/volunteer-logo/nvco.png",
  },
  {
    id: 3,
    name: "NHS Volunteering",
    logo: "/volunteer-logo/nhs.png",
  },
  {
    id: 4,
    name: "Reach Volunteering",
    logo: "/volunteer-logo/reach-volunteering.png",
  },
  {
    id: 5,
    name: "Volunteering Matters",
    logo: "/volunteer-logo/volunteering-matters.png",
  },
];

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
