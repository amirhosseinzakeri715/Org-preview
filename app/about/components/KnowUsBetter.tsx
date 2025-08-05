import React from "react";
import Image from "next/image";
import Link from "next/link";
import img1 from '../../../public/images/slider/about/heritage/Option .webp';
import img2 from '../../../public/images/slider/about/heritage/equality.webp';
import img3 from '../../../public/images/slider/about/heritage/impact.webp';

const KnowUsBetter = () => {
  const items = [
    { img: img1, title: 'Gender Equality', href: '/about' },
    { img: img2, title: 'Ingredients We Select', href: '/about' },
    { img: img3, title: 'Community Impact', href: '/about' },
  ];

  return (
    <section className="py-10 my-10 text-center">
      <h2 className="text-2xl font-bold mb-6">Get to know us a bit better</h2>
      <div className="flex gap-8 justify-center flex-wrap">
        {items.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="w-52 h-52 rounded-full overflow-hidden relative group"
          >
            <Image
              src={item.img}
              alt={item.title}
              width={100}
              height={100}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full">
              <span className="text-white text-lg font-bold px-2">{item.title}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default KnowUsBetter;
