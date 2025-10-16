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
import { cn } from "@/lib/utils";

export interface MoreContentProps {
  name: string;
  contents: string[];
}

export interface DetailsCardProps {
  title: string;
  descriptions: string[];
  buttonProps?: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  moreContent?: MoreContentProps[];
}

export function DetailsCard({
  title,
  icon,
  buttonProps,
  descriptions,
  className,
  moreContent,
}: DetailsCardProps) {
  return (
    <Card
      className={cn(
        "relative mt-8 py-6 rounded-lg bg-neutral-white-100 border border-neutral-black-30 shadow-none w-[600px] gap-0 min-h-[489px]",
        className
      )}
    >
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
      {moreContent &&
        moreContent.map((content) => {
          return (
            <div className="pt-4">
              <CardHeader>
                <CardTitle className="text-lg text-left">
                  {content.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                {content.contents.map((content, index) => (
                  <div key={index} className="flex gap-4">
                    <Check className="w-6 h-6 text-secondary-teal-100" />
                    <CardDescription className="text-base">
                      {content}
                    </CardDescription>
                  </div>
                ))}
              </CardContent>
            </div>
          );
        })}
      <CardFooter className="absolute bottom-6 w-full">
        {buttonProps ? (
          buttonProps
        ) : (
          <Button className="bg-secondary-teal-100 w-full flex justify-normal text-black hover:bg-secondary-teal-100">
            <div className="flex justify-between w-full">
              <div className="flex gap-2 items-center">
                {icon}
                <p className="text-base">Call to action goes here</p>
              </div>
              <ChevronRight />
            </div>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
