import React from "react";
import { ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ConnectButtonProps {
  children: React.ReactNode;
  href: string;
  className?: string;
}

interface ConnectButtonIconProps {
  children: React.ReactNode;
}

interface ConnectButtonTitleProps {
  children: React.ReactNode;
}

function ConnectButtonIcon({ children }: ConnectButtonIconProps) {
  return (
    <div className="w-6 h-6 flex items-center justify-center">{children}</div>
  );
}

function ConnectButtonTitle({ children }: ConnectButtonTitleProps) {
  return (
    <span className="text-base text-neutral-black-100 font-medium">
      {children}
    </span>
  );
}

export function ConnectButton({
  children,
  href,
  className,
}: ConnectButtonProps) {
  return (
    <Link href={href} rel="noopener noreferrer" target="_blank">
      <Card
        className={cn(
          "border border-neutral-black-100 rounded-lg py-2 pl-4 pr-1",
          className
        )}
      >
        <CardContent className="p-0">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-4">{children}</div>
            </div>
            <div className="w-8 h-8 bg-neutral-black-100 rounded-md flex items-center justify-center">
              <ChevronRight className="w-4 h-4 text-neutral-white-100" />
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

ConnectButton.Icon = ConnectButtonIcon;
ConnectButton.Title = ConnectButtonTitle;
