import * as React from "react";
import { cn } from "@/lib/utils";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Image from "next/image";
export interface PageHeaderProps {
  headerImage?: string;
  mainHeader?: boolean;
  title: string;
  titleColor?: string;
  content?: string;
  breadcrumbs?: Array<{
    label: string;
    href?: string;
  }>;
  backgroundColor?: string;
  className?: string;
}

/**
 * A reusable page header component with breadcrumbs and title.
 */
export function PageHeader({
  headerImage,
  mainHeader,
  title,
  titleColor,
  breadcrumbs = [],
  content,
  backgroundColor,
  className,
}: PageHeaderProps) {
  return (
    <section className={cn("relative overflow-hidden", className)}>
      {/* Skewed Background Element */}
      <div
        className={cn(
          "absolute inset-0 w-full h-full transform skew-y-[-6deg] origin-top-left z-0",
          !!backgroundColor ? backgroundColor : "bg-primary-10"
        )}
      ></div>

      {!mainHeader && (
        <div className="absolute w-[676px] h-[670px] hidden lg:block bottom-10 right-10 z-0">
          <Image
            src="/images/group-1.png"
            alt="Background Pattern"
            fill
            className="object-contain z-0 rotate-[-24deg]"
          />
        </div>
      )}

      {/* Main Content */}
      <div
        className={cn(
          "container mx-auto px-6 sm:px-10 lg:px-[100px] relative z-10"
        )}
      >
        <div
          className={cn(
            "flex flex-col justify-center gap-10 py-20 sm:py-24 lg:py-[120px] min-h-[300px] sm:min-h-[400px] lg:min-h-[490px]",
            mainHeader && "h-[760px] w-1/2"
          )}
        >
          {/* Breadcrumbs */}
          {breadcrumbs.length > 0 && (
            <div className="space-y-4">
              <Breadcrumb>
                <BreadcrumbList className="text-sm text-neutral-black-100">
                  {breadcrumbs.map((breadcrumb, index) => (
                    <React.Fragment key={index}>
                      <BreadcrumbItem>
                        {breadcrumb.href ? (
                          <BreadcrumbLink
                            href={breadcrumb.href}
                            className="hover:text-primary-100 transition-colors"
                          >
                            {breadcrumb.label}
                          </BreadcrumbLink>
                        ) : (
                          <BreadcrumbPage className="text-neutral-black-100">
                            {breadcrumb.label}
                          </BreadcrumbPage>
                        )}
                      </BreadcrumbItem>
                      {index < breadcrumbs.length - 1 && (
                        <BreadcrumbSeparator className="text-neutral-black-100" />
                      )}
                    </React.Fragment>
                  ))}
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          )}

          {/* Title */}
          <div className="space-y-3 sm:space-y-6">
            <h1
              className={cn(
                "text-3xl md:text-4xl font-semibold",
                !!titleColor ? titleColor : "text-primary-100"
              )}
            >
              {title}
            </h1>
          </div>

          {/* Content */}
          {!!content && (
            <div className="space-y-3 sm:space-y-6">
              <span className="text-m text-neutral-black-100">{content}</span>
            </div>
          )}
        </div>
      </div>
      {!!headerImage && (
        <div className="absolute inset-0 w-full h-full transform skew-y-[-6deg] origin-top-left z-0 bg-primary-30">
          <Image
            src={headerImage}
            alt="Header Image"
            fill
            className="w-[807px]"
          />
        </div>
      )}
    </section>
  );
}
