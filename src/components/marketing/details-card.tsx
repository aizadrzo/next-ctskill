import { Check, ChevronRight, ClipboardList } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";

export interface DetailsCardProps {
  title: string;
  descriptions: string[];
  icon: React.ReactNode;
}

export function DetailsCard({ title, icon, descriptions }: DetailsCardProps) {
  return (
    <Card className="relative mt-8 py-6 rounded-lg bg-neutral-white-100 border border-neutral-black-30 shadow-none w-[600px] gap-0 min-h-[489px]">
      {/* Card content */}
      <CardHeader>
        <CardTitle className="text-lg text-left">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        {descriptions.map((description, index) => (
          <div key={index} className="flex gap-4">
            <Check className="w-6 h-6 text-secondary-teal-100" />
            <CardDescription className="text-base">
              {description}
            </CardDescription>
          </div>
        ))}
      </CardContent>
      <CardFooter className="absolute bottom-6 w-full">
        <Button className="bg-secondary-teal-100 w-full flex justify-normal text-black hover:bg-secondary-teal-100">
          <div className="flex justify-between w-full">
            <div className="flex gap-2 items-center">
              {icon}
              <p className="text-base">Call to action goes here</p>
            </div>
            <ChevronRight />
          </div>
        </Button>
      </CardFooter>
    </Card>
  );
}
