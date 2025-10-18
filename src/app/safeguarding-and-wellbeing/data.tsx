import { IconBoxProps } from "@/components/marketing/icon-box";
import {
  Shield,
  Heart,
  Globe,
  Flag,
  Users,
  AlertTriangle,
} from "lucide-react";

type SafeguardingTopic = {
    id: number;
    overlay: IconBoxProps['overlay'];
    title: IconBoxProps['title'];
    description: IconBoxProps['description'];
}

export const safeguardingTopics: SafeguardingTopic[] = [
    {
      id: 1,
      overlay: "Pride",
      title: "British Values",
      description:
        "Lorem ipsum dolor sit amet consectetur. Lectus ut rutrum morbi in. Turpis scelerisque dictum porta id magnis nunc. Massa morbi.",
    },
    {
      id: 2,
      overlay: "Respect",
      title: "Equality, Diversity and Inclusion",
      description:
        "Lorem ipsum dolor sit amet consectetur. Lectus ut rutrum morbi in. Turpis scelerisque dictum porta id magnis nunc. Massa morbi.",
    },
    {
      id: 3,
      overlay: "Heart",
      title: "Mental Health and Wellbeing",
      description:
        "Lorem ipsum dolor sit amet consectetur. Lectus ut rutrum morbi in. Turpis scelerisque dictum porta id magnis nunc. Massa morbi.",
    },
    {
      id: 4,
      overlay: "Integrity",
      title: "Online Safety",
      description:
        "Lorem ipsum dolor sit amet consectetur. Lectus ut rutrum morbi in. Turpis scelerisque dictum porta id magnis nunc. Massa morbi.",
    },
    {
      id: 5,
      overlay: "MedicalBox",
      title: "Safeguarding and Prevent",
      description:
        "Lorem ipsum dolor sit amet consectetur. Lectus ut rutrum morbi in. Turpis scelerisque dictum porta id magnis nunc. Massa morbi.",
    },
    {
      id: 6,
      overlay: "StarOnShield",
      title: "Zero Tolerance",
      description:
        "Lorem ipsum dolor sit amet consectetur. Lectus ut rutrum morbi in. Turpis scelerisque dictum porta id magnis nunc. Massa morbi.",
    },
  ];
  
  // Mock data for safeguarding champions
  export const safeguardingChampions = [
    {
      id: 1,
      firstName: "Nicola",
      lastName: "Aram",
      jobTitle: "Marketing Manager",
      email: "info@ctskills.co.uk",
      phone: "012345678",
      image: "/images/members.png",
    },
    {
      id: 2,
      firstName: "Sarah",
      lastName: "Johnson",
      jobTitle: "Safeguarding Lead",
      email: "info@ctskills.co.uk",
      phone: "012345679",
      image: "/images/members.png",
    },
    {
      id: 3,
      firstName: "Michael",
      lastName: "Brown",
      jobTitle: "Wellbeing Coordinator",
      email: "info@ctskills.co.uk",
      phone: "012345680",
      image: "/images/members.png",
    },
    {
      id: 4,
      firstName: "Emma",
      lastName: "Davis",
      jobTitle: "Prevent Officer",
      email: "info@ctskills.co.uk",
      phone: "012345681",
      image: "/images/members.png",
    },
  ];

export const safeguardingHelpItems = [
  {
    title: "Safeguarding Concerns",
    icon: <Shield className="w-8 h-8" />,
    iconColor: "teal" as const,
  },
  {
    title: "Mental Health Support",
    icon: <Heart className="w-8 h-8" />,
    iconColor: "orange" as const,
  },
  {
    title: "Online Safety",
    icon: <Globe className="w-8 h-8" />,
    iconColor: "magenta" as const,
  },
  {
    title: "British Values",
    icon: <Flag className="w-8 h-8" />,
    iconColor: "teal" as const,
  },
  {
    title: "Equality & Diversity",
    icon: <Users className="w-8 h-8" />,
    iconColor: "orange" as const,
  },
  {
    title: "Prevent Strategy",
    icon: <AlertTriangle className="w-8 h-8" />,
    iconColor: "magenta" as const,
  },
] as const;