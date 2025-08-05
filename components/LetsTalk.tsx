"use client";

import Link from "next/link";
import React from "react";

const LetsTalkSection = () => {
  return (
    <section className="relative flex max-h-screen items-center justify-center bg-white overflow-hidden pb-15 ">
      <div className="container relative z-10 mx-auto px-6 py-20 text-center">
        <h1 className="mb-6 font-heading text-6xl font-bold leading-tight text-gray-900 md:text-7xl lg:text-8xl xl:text-9xl">
          Let<span className="text-primary">&apos;</span>s Talk!
        </h1>

        <h2 className="mb-8 text-xl font-semibold text-gray-800/90 md:text-2xl lg:mb-12 lg:text-3xl">
          SHARE YOUR EXCITEMENT WITH US!
        </h2>

        <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-700/80 md:text-xl">
          Whether you need assistance with your project or consultation to find
          the best solution, we will be happy to hear from you.
        </p>

        <div className="flex items-center justify-center">
          <Link href="/contact" className="inline-flex h-12 max-w-fit items-center justify-center rounded-xl border-2 border-slate-500 bg-[linear-gradient(110deg,#FFFFFF,45%,#e9eaea,55%,#FFFFFF)] bg-[length:200%_100%] px-6 font-medium text-black focus:ring-2 focus:ring-slate-50 focus:ring-offset-1 focus:ring-offset-slate-50 md:text-lg hover:scale-105 cursor-pointer transition-all duration-500 lg:text-xl mt-6 mb-16">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LetsTalkSection;
