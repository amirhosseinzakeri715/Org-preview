import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaPlay } from 'react-icons/fa';
import p1 from '../../../public/images/slider/about/slider/Andrade.jpg';
import p2 from '../../../public/images/slider/about/slider/Morante.jpg';
import p3 from '../../../public/images/slider/about/slider/Riva.jpg';
import p4 from '../../../public/images/slider/about/slider/Taylor.jpg';
import p5 from '../../../public/images/slider/about/slider/secondVideo.jpg';
import p6 from '../../../public/images/slider/about/slider/thirdVideo.jpg';

const videos = [
  {
    href: 'https://www.youtube-nocookie.com/embed/VeK6bZ6C9J4?autoplay=1',
    img: p1,
    alt: 'Archie Riva'
  },
  {
    href: 'https://www.youtube-nocookie.com/embed/WWzjYZ_B3yg?autoplay=1',
    img: p2,
    alt: 'Dr. Ashley Taylor'
  },
  {
    href: 'https://www.youtube-nocookie.com/embed/JzUPRtilyaU?autoplay=1',
    img: p3,
    alt: 'Louie Morante'
  },
  {
    href: 'https://www.youtube-nocookie.com/embed/qCHGXE3SUzk?autoplay=1',
    img: p4,
    alt: 'Erika Andrade'
  },
  {
    href: 'https://www.youtube-nocookie.com/embed/3iyLuaIunDc?autoplay=1',
    img: p5,
    alt: 'Elizabeth Saucedo'
  },
  {
    href: 'https://www.youtube-nocookie.com/embed/G0CNBFWPs80?autoplay=1',
    img: p6,
    alt: 'CJ Pendergast'
  },
  {
    href: 'https://www.youtube-nocookie.com/embed/HaIPysvGBxM?autoplay=1',
    img: p2,
    alt: 'Robin Thadathil'
  },
];

interface ArrowProps {
  onClick?: () => void;
}

const CustomPrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <button
    onClick={onClick}
    aria-label="Previous slide"
    className="absolute z-10 left-0 md:-left-6 top-1/2 transform -translate-y-1/2 bg-white p-2 md:p-4 rounded-full shadow-xl hover:bg-[#003da5] group transition"
  >
    <svg className="w-4 h-4 md:w-8 md:h-8 text-[#003da5] group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
    </svg>
  </button>
);

const CustomNextArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <button
    onClick={onClick}
    aria-label="Next slide"
    className="absolute z-10 right-0 md:-right-6 top-1/2 transform -translate-y-1/2 bg-white p-2 md:p-4 rounded-full shadow-xl hover:bg-[#003da5] group transition"
  >
    <svg className="w-4 h-4 md:w-8 md:h-8 text-[#003da5] group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
    </svg>
  </button>
);

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  lazyLoad: 'ondemand' as const,
  prevArrow: <CustomPrevArrow />,
  nextArrow: <CustomNextArrow />,
};

const EmployeeStoriesSlider = () => {
  return (
    <section className="bg-[#f2f7ff] py-20">
      <div className="md:max-w-4xl lg:max-w-5xl mx-auto px-4 relative">
        <h2 className="text-md text-center md:text-left md:text-2xl font-semibold text-[#003da5] mb-10">
          Hear from a few employees who have shared their story on why they work at P&G.
        </h2>
        <Slider {...sliderSettings}>
          {videos.map((video, index) => (
            <div key={index} className="px-6 py-6">
              <Link
                href={video.href}
                aria-label={video.alt}
                className="block aspect-video relative overflow-clip brightness-90 opacity-90 group-hover:brightness-100 group-hover:opacity-100 hover:overflow-hidden rounded-3xl hover:rounded-3xl transition-all transform duration-500 hover:scale-102"
              >
                <Image src={video.img} alt={video.alt} fill className="object-cover" />
                <div className="absolute inset-0 bg-[#003DA5]/30 flex items-center justify-center opacity-80 hover:opacity-20 transition">
                  <FaPlay className="w-24 h-24 mx-auto text-white" />
                </div>
              </Link>
            </div>
          ))}
        </Slider>
        <div className="text-center mt-12">
          <p className="text-[#003da5] font-semibold text-md md:text-2xl mb-2">Like what you&apos;re hearing?</p>
          <p className="text-gray-700/80 text-sm max-w-xl mx-auto mb-4">
            If you share our values, you should join the P&G team. We&apos;re always looking for forward-thinkers.
          </p>
          <Link
            href="https://www.pgcareers.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#003da5] text-white px-6 py-3 rounded-md font-medium hover:bg-[#002f7a] transition"
          >
            Careers
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EmployeeStoriesSlider;
