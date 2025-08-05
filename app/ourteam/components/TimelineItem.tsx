"use client";

import React, { useRef, useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";

interface TimelineItemProps {
  year: string;
  description: string;
  image: StaticImageData;
  imagePosition: "left" | "right";
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  year,
  description,
  image,
  imagePosition,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "-50px 0px -50px 0px",
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const isImageLeft = imagePosition === "left";

  const yearElement = (
    <h1
      className={`text-5xl font-extrabold md:text-8xl transition-all duration-400 ease-[cubic-bezier(0.68,-0.6,0.32,1.6)] ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
      }`}
    >
      {year.split("").map((char, index) =>
        char === "0" ? (
          <span key={index} className="text-gray-300">
            {char}
          </span>
        ) : (
          char
        )
      )}
    </h1>
  );

  const descriptionElement = (
    <p
      className={`text-sm my-10 text-start max-w-5/6 md:text-lg text-gray-700/90 leading-tight transition-all duration-500 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0 delay-[300ms]"
          : "opacity-0 translate-y-5 delay-0"
      }`}
    >
      {description}
    </p>
  );

  const imageElement = (
    <div
      className={`overflow-clip group shadow-2xl rounded-xl transition-all duration-600 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
        isVisible
          ? "opacity-100 translate-x-0 delay-[400ms]"
          : `opacity-0 ${
              isImageLeft ? "-translate-x-10" : "translate-x-10"
            } delay-0`
      }`}
    >
      <Image
        src={image}
        alt={`Timeline image for year ${year}`}
        sizes="(max-width: 768px) 100vw, 50vw"
        className="hover:scale-105 transition-all duration-500 w-full h-auto"
        priority
      />
    </div>
  );

  return (
    <div
      ref={containerRef}
      className={`w-full md:${
        isImageLeft ? "translate-x-4" : "-translate-x-4"
      }`}
    >
      <div className="grid md:grid-cols-2 gap-10 my-10 py-12">
        {isImageLeft ? (
          <>
            {imageElement}
            <div
              className={`space-y-5 pl-5 ${
                isImageLeft
                  ? "border-r-2 border-gray-700/20"
                  : "border-l-2 border-gray-700/20"
              }`}
            >
              {yearElement}
              {descriptionElement}
            </div>
          </>
        ) : (
          <>
            <div
              className={`space-y-5 pl-5 ${
                isImageLeft
                  ? "border-r-2 border-gray-700/20"
                  : "border-l-2 border-gray-700/20"
              }`}
            >
              {yearElement}
              {descriptionElement}
            </div>
            {imageElement}
          </>
        )}
      </div>
    </div>
  );
};

export default TimelineItem; 