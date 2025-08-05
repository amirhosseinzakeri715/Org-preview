import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import logo from '../../../public/images/logo-png.png';
import logo2 from '../../../public/images/logoPng.png';

const cards = [
  { img: logo, date: '6/5/2025', title: 'Fueling Growth and Value Creation through Productivity' },
  { img: logo2, date: '4/25/2025', title: 'P&G Announces Results for Q3 2025' },
  { img: logo, date: '4/5/2025', title: 'Key to Winning Sustainability Strategy' },
  { img: logo2, date: '3/21/2025', title: '3 Tips for Building an Innovative Culture' },
];

interface EffortCardProps {
  img: StaticImageData;
  date: string;
  title: string;
}

const EffortCard: React.FC<EffortCardProps> = ({ img, date, title }) => (
  <div className="w-64 h-72 bg-white rounded-lg shadow group p-4 flex flex-col items-center">
    <div className="w-48 h-24 mx-auto my-6 relative">
      <Image
        src={img}
        alt={title}
        layout="fill"
        objectFit="contain"
        className="group-hover:scale-140 transition-all duration-300"
      />
    </div>
    <div className="text-center mt-auto">
      <p className="text-xs text-gray-500">{date}</p>
      <p className="text-sm font-medium mx-2">{title}</p>
    </div>
  </div>
);

const LatestEfforts = () => {
  return (
    <section className="py-10 my-6 px-4 text-center">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-10">Learn about our latest efforts</h2>
      <div className="flex gap-4 justify-center flex-wrap">
        {cards.map((card) => (
          <EffortCard key={card.title} {...card} />
        ))}
      </div>
      <Link href="/news" className="mt-10 inline-block border border-blue-600 text-blue-600 px-4 py-2 hover:bg-blue-500 hover:text-white rounded-full transition-all duration-300">
        View All
      </Link>
    </section>
  );
};

export default LatestEfforts;
