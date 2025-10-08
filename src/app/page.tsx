import { ServicesCard } from "@/components/marketing/services-card";
import { GraduationCap, Book, UserSearch } from "lucide-react";

const services = [
  {
    icon: <GraduationCap />,
    color: "teal",
    title: "Apprenticeships",
    description:
      "Work-based learning that drives real results — for individuals and employers alike, today and in the future.",
  },
  {
    icon: <Book />,
    color: "orange",
    title: "Online Courses",
    description:
      "Learn anytime, anywhere. Our wide range of accredited online learning tailored to support career growth and continuous development.",
  },
  {
    icon: <UserSearch />,
    color: "magenta",
    title: "Recruitment Services",
    description:
      "From sourcing top talent to connecting jobseekers with rewarding roles, we support both candidates and companies at every step.",
  },
] as const;

export default function Home() {
  return (
    <div className="min-h-dvh">
      <section className="container mx-auto">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 pt-10 ml-24"  >
          {services.map((service) => (
            <ServicesCard
              color={service.color}
              key={service.title} // 1. Added a unique key
              icon={service.icon} // 2. Fixed prop name from 'icons' to 'icon'
              title={service.title}
              description={service.description} // 3. Fixed to use 'service.description'
            />
          ))}
        </div>
      </section>
    </div>
  );
}
