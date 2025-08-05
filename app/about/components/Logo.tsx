import React from "react";
import Image from "next/image";
import logoPng from "../../../public/images/logo-transparent-png.png";
import logoPng2 from '../../../public/images/logo-transparent-png2.png';

const logos = [
  {
    src: logoPng,
    alt: "Sky Netics Logo - Primary",
  },
  {
    src: logoPng2,
    alt: "Sky Netics Logo - Secondary",
  },
];

const Logo = () => {
  return (
    <div className="grid md:grid-cols-2 max-w-4xl mx-auto my-16 gap-8 p-4 py-16">
      {logos.map((logo) => (
        <Image
          key={logo.alt}
          src={logo.src}
          alt={logo.alt}
          width={900}
          height={900}
          className="h-auto object-contain"
        />
      ))}
    </div>
  );
};

export default Logo;
