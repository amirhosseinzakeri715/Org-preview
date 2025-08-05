import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import p1 from "../../../public/images/slider/about/heritage/1880s_Bartlett_Store__1___1_.jpg";
import p2 from "../../../public/images/slider/about/heritage/Jon_Moeller.webp";

interface InfoSectionProps {
  imageSrc: StaticImageData;
  altText: string;
  title: string;
  description: string;
  linkHref: string;
  linkText: string;
  imageFirst: boolean;
  bgColor?: string;
}

const sections: InfoSectionProps[] = [
  {
    imageSrc: p1,
    altText: "Heritage",
    title: "Heritage",
    description: "For more than 185 years, we've challenged the norm...",
    linkHref: "/heritage",
    linkText: "Learn more",
    imageFirst: true,
  },
  {
    imageSrc: p2,
    altText: "Leader",
    title: "Leadership",
    description: "Our leadership approach is distinctly sky netics...",
    linkHref: "/leadership",
    linkText: "See more",
    imageFirst: false,
    bgColor: "bg-blue-50",
  },
];

const InfoSection: React.FC<InfoSectionProps> = ({
  imageSrc,
  altText,
  title,
  description,
  linkHref,
  linkText,
  imageFirst,
  bgColor,
}) => (
  <div
    className={`flex flex-wrap justify-center items-center gap-10 px-4 py-10 ${
      imageFirst ? "" : "md:flex-row-reverse"
    } ${bgColor || ""}`}
  >
    <Image
      src={imageSrc}
      alt={altText}
      className="md:w-64 md:h-64 rounded-full object-cover"
    />
    <div className="max-w-md text-center md:text-left">
      <h3 className="text-xl font-bold text-blue-700">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
      <Link
        href={linkHref}
        className="mt-10 inline-block border border-blue-600 text-blue-600 px-4 py-2 hover:bg-blue-500 hover:text-white rounded-full transition-all duration-300"
      >
        {linkText}
      </Link>
    </div>
  </div>
);

const HeritageLeadership = () => {
  return (
    <section className="py-10">
      {sections.map((section) => (
        <InfoSection key={section.title} {...section} />
      ))}
    </section>
  );
};

export default HeritageLeadership;
