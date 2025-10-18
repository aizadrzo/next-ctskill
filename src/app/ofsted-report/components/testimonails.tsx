"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";

export const testimonials = [
  {
    id: 1,
    testimonial:
      "Tutors work particularly well with employers to ensure that they teach topics that match closely to apprentices' development at work.",
  },
  {
    id: 2,
    testimonial:
      "Learners and apprentices develop the knowledge, skills and behaviours they need to make progress in their careers.",
  },
  {
    id: 3,
    testimonial:
      "Adult learners, the majority of whom have not studied for many years, value the positive impact of tutor feedback on their confidence levels.",
  },
  {
    id: 4,
    testimonial:
      "Tutors are subject specialists with highly relevant industry experience. They plan the courses they teach well.",
  },
  {
    id: 5,
    testimonial:
      "Learners and apprentices demonstrate vastly increased levels of knowledge and skills as a result of their studies.",
  },
  {
    id: 6,
    testimonial:
      "Learners and apprentices demonstrate vastly increased levels of knowledge and skills as a result of their studies.",
  },
];

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  // Calculate slides to show based on screen size
  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth >= 1024) {
        setSlidesToShow(3); // Desktop: 3 slides
      } else if (window.innerWidth >= 640) {
        setSlidesToShow(2); // Tablet: 2 slides
      } else {
        setSlidesToShow(1); // Mobile: 1 slide
      }
    };

    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  const totalSlides = Math.ceil(testimonials.length / slidesToShow);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="text-center mb-14">
        <h3 className="text-xs sm:text-sm font-semibold text-primary-60 uppercase tracking-wider mb-4">
          FEEDBACK QUOTES
        </h3>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        {/* Testimonials */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out gap-6"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0">
                <div className="flex gap-6">
                  {testimonials
                    .slice(
                      slideIndex * slidesToShow,
                      (slideIndex + 1) * slidesToShow
                    )
                    .map((testimonial) => (
                      <Card
                        key={testimonial.id}
                        className="bg-white border border-primary-100 shadow-sm flex flex-col"
                      >
                        <CardHeader>
                          <svg
                            width="33"
                            height="21"
                            viewBox="0 0 33 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11.8395 20.1598H-0.000468642L8.63953 -0.000157356H16.3995L11.8395 20.1598ZM27.9995 20.1598H16.1595L24.7995 -0.000157356H32.5595L27.9995 20.1598Z"
                              fill="#64184C"
                            />
                          </svg>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-lg text-black leading-relaxed">
                            {testimonial.testimonial}
                          </CardDescription>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-8">
          {/* Left Arrow */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="w-12 h-12 border-none shadow-none hover:bg-gray-100 cursor-pointer"
            disabled={currentSlide === 0}
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          {/* Dots */}
          <div className="flex gap-4">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full bg-primary-100 transition-colors ${
                  index === currentSlide ? "opacity-100" : "opacity-50"
                }`}
              />
            ))}
          </div>

          {/* Right Arrow */}
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="w-12 h-12 border-none shadow-none hover:bg-gray-100 cursor-pointer"
            disabled={currentSlide === totalSlides - 1}
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </div>
  );
}
