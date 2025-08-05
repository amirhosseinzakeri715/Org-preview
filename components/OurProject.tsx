"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";
import imgAllInOneDefault from "../public/images/marquee-1.png";
import imgAllInOneHover from "../public/images/marquee-2.png";
import imgHabitomicDefault from "../public/images/marquee-3.png";
import imgHabitomicHover from "../public/images/slider/img1.jpg";
import imgDanaplusDefault from "../public/images/slider/img2.jpg";
import imgDanaplusHover from "../public/images/slider/img3.jpg";
import imgEasyFleetDefault from "../public/images/slider/img4.jpg";
import imgEasyFleetHover from "../public/images/slider/img5.jpg";
import imgTasteIranDefault from "../public/images/P_G.jpg";
import imgTasteIranHover from "../public/images/logo.png";
import imgPetroidmDefault from "../public/images/logoPng.png";
import imgPetroidmHover from "../public/images/logo-png.png";

type Project = {
  href: string;
  title: string;
  subtitle: string;
  description: React.ReactNode;
  defaultImage: StaticImageData;
  hoverImage: StaticImageData;
  imageAlt: string;
};

const projectsLeft: Project[] = [
  {
    href: "/ecommerce-platform",
    title: "E-Commerce Platform",
    subtitle: "Next.js, Tailwind, Django",
    description: (
      <>
        A scalable <span className="text-white">e-commerce solution</span> with blazing-fast frontend and robust backend, supporting thousands of products and real-time inventory.
      </>
    ),
    defaultImage: imgAllInOneDefault,
    hoverImage: imgAllInOneHover,
    imageAlt: "E-commerce web app",
  },
  {
    href: "/saas-dashboard",
    title: "SaaS Dashboard",
    subtitle: "Next.js, Tailwind, Django REST",
    description: (
      <>
        <span className="text-white">Custom analytics dashboard</span> for SaaS businesses, featuring real-time data, user management, and beautiful UI.
      </>
    ),
    defaultImage: imgHabitomicDefault,
    hoverImage: imgHabitomicHover,
    imageAlt: "SaaS dashboard",
  },
  {
    href: "/portfolio-builder",
    title: "Portfolio Site Builder",
    subtitle: "Next.js, Tailwind",
    description: (
      <>
        <span className="text-white">No-code portfolio builder</span> for creative professionals, with drag-and-drop editing and instant deployment.
      </>
    ),
    defaultImage: imgDanaplusDefault,
    hoverImage: imgDanaplusHover,
    imageAlt: "Portfolio builder",
  },
];

const projectsRight: Project[] = [
  {
    href: "/api-integration",
    title: "API Integration Suite",
    subtitle: "Django, Python",
    description: (
      <>
        <span className="text-white">Seamless API integrations</span> for payment, shipping, and third-party services, built with Django and Python.
      </>
    ),
    defaultImage: imgEasyFleetDefault,
    hoverImage: imgEasyFleetHover,
    imageAlt: "API integration",
  },
  {
    href: "/analytics-dashboard",
    title: "Real-Time Analytics",
    subtitle: "Next.js, Django Channels",
    description: (
      <>
        <span className="text-white">Live analytics dashboard</span> with WebSocket-powered updates and interactive charts.
      </>
    ),
    defaultImage: imgTasteIranDefault,
    hoverImage: imgTasteIranHover,
    imageAlt: "Real-time analytics",
  },
  {
    href: "/client-portal",
    title: "Client Portal",
    subtitle: "Next.js, Django",
    description: (
      <>
        <span className="text-white">Secure client portal</span> for document sharing, messaging, and project tracking.
      </>
    ),
    defaultImage: imgPetroidmDefault,
    hoverImage: imgPetroidmHover,
    imageAlt: "Client portal",
  },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <a
    href={project.href}
    aria-label={`View project: ${project.title} (${project.subtitle})`}
    className="space-y-4 flex flex-col justify-center items-center group cursor-pointer rounded-lg"
  >
    <div className="relative rounded-lg w-full max-w-[500px] h-[300px] group shadow-xl shadow-blue-600/20 overflow-clip group-hover:shadow-xl hover:scale-105 transition-all duration-900">
      <Image
        src={project.defaultImage}
        alt={project.imageAlt}
        className="w-full h-full object-cover transition-opacity duration-900 group-hover:opacity-0"
        priority={false}
        width={500}
        height={300}
      />
      <Image
        src={project.hoverImage}
        alt={`${project.imageAlt} hover`}
        className="w-full h-full object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        priority={false}
        width={500}
        height={300}
      />
    </div>
    <div className="text-[#A1A1A6] space-y-2 w-full max-w-[500px]">
      <div className="flex flex-col items-start space-y-1">
        <h3 className="font-extrabold text-white text-2xl sm:text-xl md:text-3xl lg:text-2xl 2xl:text-4xl group-hover:text-blue-500/90 transition-all duration-300 cursor-pointer">
          {project.title}
        </h3>
        <h4 className="text-xs sm:text-xs md:text-base xl:text-xl">{project.subtitle}</h4>
      </div>
      <p className="font-medium text-xs sm:text-xs md:text-base xl:text-xl">{project.description}</p>
    </div>
  </a>
);

const OurProjects: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-start items-center px-6 xl:px-10 py-10 lg:py-14 bg-black mx-auto">
      <h2 className="text-5xl sm:text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold text-white my-20 relative inline-block">
        Our Projects
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5">
        <div className="flex flex-col space-y-14 sm:space-y-20 md:space-y-28 2xl:space-y-40 md:px-20 sm:px-16 mt-0 lg:mt-0 items-center">
          {projectsLeft.map((project) => (
            <ProjectCard key={project.href} project={project} />
          ))}

          <div className="hidden lg:flex justify-center items-center w-full text-white font-bold xl:text-4xl lg:text-3xl 2xl:w-3/4 md:w-3/4 mt-10">
            <p>Need More Info? Take A Look At Our Projects.</p>
          </div>
        </div>

        <div className="flex flex-col space-y-14 sm:space-y-20 md:space-y-28 2xl:space-y-40 mt-15 sm:mt-30 lg:mt-35 2xl:mt-55 items-center">
          {projectsRight.map((project) => (
            <ProjectCard key={project.href} project={project} />
          ))}

          <div className="lg:hidden flex justify-center items-center text-white font-bold text-3xl md:text-4xl mt-14 sm:mt-10 w-full sm:w-4/5">
            <p>Need More Info? Take A Look At Our Projects.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProjects;
