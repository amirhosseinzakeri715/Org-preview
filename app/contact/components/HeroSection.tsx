"use client";
import Image from "next/image";
import logoPng from "../../../public/images/logo-transparent-png2.png";
import Link from "next/link";
import { Button } from "./ui/button";
import { RocketIcon, UserIcon } from "./ui/icones";

export default function Hero() {
  return (
    <section className="w-full bg-gray-50 py-10 px-5">
      <div className="max-w-7xl mx-auto text-center">
        <div className="w-full mx-auto mb-5 max-w-xs md:max-w-sm lg:max-w-md">
          <Image
            src={logoPng}
            alt="Skynetics Logo"
            width={500}
            height={500}
            className="w-full h-auto object-contain hover:scale-110 transition-all duration-300"
            priority
          />
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
          Try <span className="text-blue-600">Sky Netics</span> on Your company <span className="inline-block">👋</span>
        </h1>

        <p className="text-xl text-gray-900/80 mb-16 max-w-3xl mx-auto">
          Start a no-commitment 14-day free trial and enjoy all SKYNETICS
          features on your website. (No credit card needed.)
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link href="/free-trial">
            <Button variant="primary">
              <RocketIcon size={20} />
              Start your free trial
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="secondary">
              <UserIcon size={20} />
              Book a demo with Sofie
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
