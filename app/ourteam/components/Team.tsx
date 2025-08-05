"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import p from "../../../public/images/marquee-2.png";
import p1 from "../../../public/images/marquee-3.png";

type TeamMember = {
  name: string;
  role: string;
  imageSrc: StaticImageData;
  hoverImageSrc: StaticImageData;
  imageAlt: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "Hamid Khezeil",
    role: "Chief Executive Officer",
    imageSrc: p,
    hoverImageSrc: p1,
    imageAlt: "Hamid Khezeil",
  },
  {
    name: "Mohammad Ghafourian",
    role: "Tech Lead",
    imageSrc: p,
    hoverImageSrc: p1,
    imageAlt: "Mohammad Ghafourian",
  },
  {
    name: "Mahnoosh Ghafourian",
    role: "AI Expert / Software Engineer",
    imageSrc: p,
    hoverImageSrc: p1,
    imageAlt: "Mahnoosh Ghafourian",
  },
  {
    name: "Mahdi Mottahedi",
    role: "Back-end Engineer",
    imageSrc: p,
    hoverImageSrc: p1,
    imageAlt: "Mahdi Mottahedi",
  },
  {
    name: "Nazanin Aboozari",
    role: "Project Advisor",
    imageSrc: p,
    hoverImageSrc: p1,
    imageAlt: "Nazanin Aboozari",
  },
  {
    name: "Ehsan Goldoust",
    role: "Front-end Engineer",
    imageSrc: p,
    hoverImageSrc: p1,
    imageAlt: "Ehsan Goldoust",
  },
  {
    name: "Shaden Ghasri",
    role: "Front-end Engineer",
    imageSrc: p,
    hoverImageSrc: p1,
    imageAlt: "Shaden Ghasri",
  },
  {
    name: "Rayan Shekarabi",
    role: "UI/UX Engineer",
    imageSrc: p,
    hoverImageSrc: p1,
    imageAlt: "Rayan Shekarabi",
  },
];

const TeamSection = () => {
  return (
    <section className="relative w-full bg-black text-white py-20 px-5">
      <div className="max-w-7xl mx-auto py-5 space-y-20 text-center">
        {/* Title and description */}
        <div className="space-y-5 mt-5">
          <h2 className="text-2xl py-10 md:text-4xl font-bold">
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              LONG-TERM
            </span>{" "}
            MAINTENANCE <br /> AND SUPPORT
          </h2>
          <p className="text-sm md:text-base pt-5 text-gray-400/80 max-w-3xl mx-auto">
            Once the development is complete, we won&apos;t leave our clients high
            and dry! Our engineers are here to help you get through any bumps on
            the road by bug fixing, guiding clients through the right path and
            supporting their requests, for as long as both parties have agreed
            to it.
          </p>
        </div>

        {/* Sub-title */}
        <div>
          <h3 className="text-xl py-5 md:text-2xl font-semibold">
            CHOOSE THE RIGHT TEAM <br /> FOR YOUR PROJECT.
          </h3>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center ">
              <div className="w-32 h-40 relative overflow-clip rounded-2xl group">
                {/* Default Image */}
                <Image
                  src={member.imageSrc}
                  alt={member.imageAlt}
                  fill
                  className="object-cover grayscale group-hover:opacity-0 transition-all duration-400"
                />
                {/* Hover Image */}
                <Image
                  src={member.hoverImageSrc}
                  alt={`${member.name} - professional portrait`}
                  fill
                  className="object-cover absolute top-0 left-0 opacity-10 group-hover:opacity-90 group-hover:scale-110 transition-all duration-900"
                />
              </div>
              <h4 className="font-bold p-2 text-sm">{member.name}</h4>
              <p className="text-xs text-gray-400/90 text-center">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full bg-black py-16 px-4 flex justify-center items-center">
        <div className="max-w-7xl w-full flex flex-col items-center text-center space-y-10">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
            WE LIKE SHARING <br className="hidden md:block" /> THE GLORY
          </h2>

          <Link
            href="/contact"
            className="inline-flex h-12 hover:scale-105 transition-all duration-300 items-center justify-center rounded-xl border-2 border-slate-500 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%]  px-6 font-medium text-white  focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2"
          >
            Submit Your Request
          </Link>

          <p className="max-w-3xl text-gray-400/80 text-sm md:text-base font-medium">
            We are always looking for great problem-solvers with passion and
            knowledge. These are the types of people we want to team up with and
            thrive together as our new members. Feel free to send your resume,
            we&apos;ll get back to you as soon as possible.
          </p>
        </div>
      </div>
      <div className="absolute -bottom-40 left-0 w-full h-40 bg-black"></div>
    </section>
  );
};

export default TeamSection;
