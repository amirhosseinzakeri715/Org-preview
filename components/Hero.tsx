"use client";

import "swiper/css";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "./Card";

const slides = [
  {
    src: "/images/slider/img1.jpg",
    alt: "A modern and responsive website design for a client.",
  },
  {
    src: "/images/slider/img2.jpg",
    alt: "A developer writing clean code for a web application.",
  },
  {
    src: "/images/slider/img3.jpg",
    alt: "A team collaborating on a new web project.",
  },
  {
    src: "/images/slider/img4.jpg",
    alt: "A secure and reliable backend infrastructure.",
  },
  {
    src: "/images/slider/img5.jpg",
    alt: "A user interacting with a new mobile application.",
  },
];

export default function Hero() {
  return (
    <section aria-label="Hero image slider" className="relative w-full h-[400px] sm:h-[450px] md:h-[600px] lg:h-[700px] xl:h-[800px] 2xl:h-screen overflow-hidden">
      <Swiper
        loop={true}
        slidesPerView={1}
        modules={[Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className="brightness-75 h-full shadow-lg sm:shadow-xl md:shadow-2xl absolute inset-0"
        speed={800}
        touchRatio={1.5}
        threshold={10}
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <Image
              fill
              alt={slide.alt}
              src={slide.src}
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              quality={85}
              priority={idx === 0}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
        <Card />
      </div>
    </section>
  );
}
