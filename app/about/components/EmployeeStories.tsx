import Link from "next/link";
import Image from "next/image";
import pg from '../../../public/images/P_G.jpg';
import React from "react";

const EmployeeStories = () => {
  return (
    <section className=" md:w-3/5 mx-auto px-4 py-16 space-y-16 text-left text-gray-700">
      <div className="space-y-6 text-sm leading-tight mx-2">
        <p>
          There&apos;s no single formula for innovation at our company, because no two
          projects or developers are the same. Just as we are committed to delivering
          a superior user experience in our products, we are dedicated to fostering
          a superior employee experience for our team.
        </p>

        <p>
          We celebrate the uniqueness of each team member&apos;s journey because we
          know that breakthrough solutions come from people who feel{" "}
          <strong>inspired</strong> to solve complex challenges, have equal
          opportunities and multiple paths to <strong>grow</strong> their skills,
          feel pride in <strong>making an impact</strong> with code, and know
          they&apos;re being <strong>valued and rewarded</strong> for their
          contributions to our clients&apos; and our company&apos;s success.
        </p>

        <p>
          We believe that supporting our team&apos;s well-being is crucial for
          creating amazing software. That&apos;s why our benefits package is
          designed to support our developers in all aspects of their lives. See{" "}
          <Link
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline font-bold hover:text-blue-900 transition"
          >
            Our Benefits & Perks
          </Link>{" "}
          to learn more about our commitment to financial, mental, physical, and
          work-life balance.
        </p>
      </div>

      <a href="#" className="relative w-full h-auto aspect-video max-w-4xl mx-auto group cursor-pointer overflow-clip rounded-3xl shadow-lg block">
        <Image
          src={pg}
          alt="Employee Value Video Thumbnail"
          width={1280}
          height={720}
          className="w-full h-full brightness-80 opacity-95 hover:brightness-100 hover:object-cover rounded-3xl shadow-lg  transition-all duration-500 group-hover:scale-105"
        />
      </a>
    </section>
  );
};

export default EmployeeStories;
