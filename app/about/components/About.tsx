import Image from "next/image";
import Link from "next/link";
import React from "react";

interface InfoBlockProps {
  imageSrc: string;
  altText: string;
  description: string;
  linkHref: string;
  linkText: string;
}

const infoBlocks = [
  {
    imageSrc: "//images.ctfassets.net/oggad6svuzkv/5knYdiyBeWdLKYPkoRKUbC/cf1a07be9e700970cb499bc6d9bc66d1/Brands_Blue_-_animated.svg",
    altText: "Superior Quality Products",
    description: "We make superior quality products",
    linkHref: "/brands/",
    linkText: "See our brands",
  },
  {
    imageSrc: "//images.ctfassets.net/oggad6svuzkv/6OZlma6iwl3YCtEZJDYgNf/fe4b93cdade459f6cf8c392e246916eb/Making_a_difference_Red_-_animated.svg",
    altText: "Making a Difference",
    description: "And use every ounce of our power",
    linkHref: "/community-impact/",
    linkText: "See our impact",
  },
];

const InfoBlock: React.FC<InfoBlockProps> = ({ imageSrc, altText, description, linkHref, linkText }) => (
  <div className="space-y-4 flex flex-col items-center text-center">
    <Image src={imageSrc} alt={altText} width={150} height={150} />
    <p className="text-gray-700 font-bold">{description}</p>
    <Link
      href={linkHref}
      className="mt-5 border border-blue-600 text-blue-600 px-4 py-2 hover:bg-blue-500 hover:text-white rounded-full transition-all duration-300"
    >
      {linkText}
    </Link>
  </div>
);

const About = () => {
  return (
    <section className="py-10 px-4 mt-10 space-y-10 w-5/6 md:w-3/5 mx-auto bg-gray-50 z-10 rounded-lg shadow-lg">
      <div className="space-y-4">
        <p className="text-gray-700 leading-relaxed text-sm text-center">
          As P&G grows, we stay grounded in our{" "}
          <Link href="#" className="text-blue-600 underline">
            purpose, values, and principles
          </Link>{" "}
          and a deep-rooted understanding between each other and our company
          that being our best and doing our best—for the people who buy our
          products, for one another, and for the world around us—will lead to
          mutual success.
        </p>
      </div>

      <div>
        <h2 className="text-blue-700/80 font-bold text-md md:text-xl leading-tight text-center">
          We believe in finding small but meaningful ways to improve for
          generations to come.
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {infoBlocks.map((block) => (
          <InfoBlock key={block.altText} {...block} />
        ))}
      </div>
    </section>
  );
};

export default About;
