"use client";

const cultureAndVolunteering = [
  {
    id: 1,
    image: "photogallery-1.png",
  },
  {
    id: 2,
    image: "photogallery-2.png",
  },
  {
    id: 3,
    image: "photogallery-3.png",
  },
  {
    id: 4,
    image: "photogallery-4.png",
  },
  {
    id: 5,
    image: "photogallery-5.png",
  },
] as const;

import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import Image from "next/image";
import { cn } from "@/lib/utils";

type PropType = {
  options?: EmblaOptionsType;
  className?: string;
};

const AutoSlideCarousel: React.FC<PropType> = (props) => {
  const { options, className } = props;
  const carouselOptions = {
    ...options,
    loop: true,
    align: "start" as const,
    slidesToScroll: 1,
  };
  const [emblaRef, emblaApi] = useEmblaCarousel(carouselOptions, [
    AutoScroll({
      playOnInit: true,
      speed: 1,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
    }),
  ]);

  return (
    <div className={cn("embla", className)}>
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {cultureAndVolunteering.map((slide) => (
            <div
              className="embla__slide flex-[0_0_100%] sm:flex-[0_0_33.333%] lg:flex-[0_0_20%] min-w-0 pl-4"
              key={slide.id}
            >
              <div className="relative h-64 w-full">
                <Image
                  src={`/photo-gallery/${slide.image}`}
                  alt={`Gallery image ${slide.id}`}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { AutoSlideCarousel };
