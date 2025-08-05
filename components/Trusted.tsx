"use client";

import Image from "next/image";
import React from "react";

import logo1 from "../public/images/logo-transparent-png.png";
import logo2 from "../public/images/logo-transparent-png2.png";

const companies = [
  { alt: "Acme Corp", src: logo1 },
  { alt: "SkyTech Solutions", src: logo2 },
  { alt: "InnovateX", src: logo1 },
  { alt: "NextGen Web", src: logo2 },
];

const TrustedByCompanies: React.FC = () => {
  return (
    <section className="bg-white py-16 lg:py-24 w-full overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-6">
        <header className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold  tracking-tight">
            TRUSTED BY <span className="block mt-2">BEST COMPANIES</span>
          </h2>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-5 items-center justify-center max-w-5xl mx-auto">
          {companies.map(({ alt, src }) => (
            <figure
              key={alt}
              className="relative aspect-[4/3] w-full max-w-[300px] mx-auto"
            >
              <Image
                src={src}
                alt={alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 50vw, 25vw"
                loading="lazy"
              />
              <figcaption className="sr-only">{alt}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedByCompanies;
