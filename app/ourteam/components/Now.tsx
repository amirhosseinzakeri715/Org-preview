'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import p from "../../../public/images/2024.png";

const Now = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3, rootMargin: '-50px 0px -50px 0px' }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full space-y-10 px-10 my-15 ">
      <h1 className="text-left text-4xl md:text-8xl font-bold">N<span className='text-gray-300'>O</span>W</h1>

      <div
        className={`w-full max-w-3xl mx-auto space-y-6 transform transition-all duration-900 ease-[cubic-bezier(0.4,0,0.2,1)] 
        ${isVisible ? 'scale-100 opacity-100' : 'scale-85 opacity-0'}`}
      >
        <div
          className={`w-full mx-auto max-w-md overflow-hidden rounded-xl  transform transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] 
          ${isVisible ? 'rotate-0 opacity-100' : '-rotate-3 opacity-0'}`}
        >
          <Image
            src={p}
            alt="2024"
            className="w-full  h-auto object-cover"
            priority
          />
        </div>

        <p
          className={`text-center text-sm my-20 md:text-lg text-gray-700/80 max-w-xl mx-auto transition-all duration-1000 ease-in 
          ${isVisible ? 'opacity-100 translate-y-0 delay-300' : 'opacity-0 translate-y-20 delay-0'}`}
        >
                    We’re no longer just building a team — we’re shaping a culture. 2024 is a turning point filled with purpose, innovation, and people who believe in something bigger than themselves.

        </p>
      </div>
    </div>
  );
};

export default Now;
