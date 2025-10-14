import { ChevronRight, Clock, MapPin, Wallet } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";

export interface VacanciesCardProps {
  title?: string;
  taggings?: string[];
  description?: string;
  location?: string;
  salaryRange?: string;
  jobRole?: string;
}

export function VacanciesCard({
  title,
  taggings,
  description,
  location,
  salaryRange,
  jobRole,
}: VacanciesCardProps) {
  return (
    <Card className="bg-neutral-white-100 border-secondary-magenta-100">
      <CardContent>
        <div className="flex flex-wrap gap-2 pb-4">
          {taggings?.map((tagging) => (
            <div
              key={tagging}
              className="bg-primary-100 py-0.5 px-2 rounded-xs"
            >
              <p className="text-neutral-white-100 font-bold">{tagging}</p>
            </div>
          ))}
        </div>
        <h6 className="font-semibold text-lg max-w-[330px]">{title}</h6>
        <div className="py-4 flex flex-col gap-2">
          <div className="text-neutral-grey-100 flex gap-2">
            <MapPin />
            <p>{location}</p>
          </div>
          <div className="text-neutral-grey-100 flex gap-2">
            <Wallet />
            <p>${salaryRange}</p>
          </div>
          <div className="text-neutral-grey-100 flex gap-2">
            <Clock />
            <p>{jobRole}</p>
          </div>
        </div>
        <p className="text-neutral-grey-100">{description}</p>
        <div className="flex justify-between items-center pt-4">
          <p className="text-neutral-grey-100">7 days ago</p>
          <Button variant="outline" size="md" asChild>
            <Link href="/find-jobs">
              <span>Apply Now</span>
              <div className="p-2 bg-primary-100 rounded-md">
                <ChevronRight className="h-4 w-4" color="#fff" />
              </div>
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
