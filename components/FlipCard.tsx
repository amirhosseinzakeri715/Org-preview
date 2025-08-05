"use client";

import type React from "react";

import { useState } from "react";
import Image from "next/image";
import { Plus } from "lucide-react";
import p1 from "../public/images/logo-transparence/Artificial-intelligence.png";
import p4 from "../public/images/logo-transparence/Software for hardware .png";
import p5 from "../public/images/logo-transparence/Software-design.png";
import p6 from "../public/images/logo-transparence/Startup Consulting Services.png";

import type { StaticImageData } from "next/image";

interface CardData {
  id: number;
  title: string;
  description: string;
  image?: StaticImageData | string;
  isDark: boolean;
}

const cardsData: CardData[] = [
  {
    id: 1,
    title: "Software Design And Development",
    description:
      "With Considerable Experience in Developing Various Software in National and International Level, PARATECH Company Designs and Develops Customized Products with The Latest Technology Trends and Standards In The Shortest Time and At The Most Reasonable Price.",
    image: p5,
    isDark: true,
  },
  {
    id: 2,
    title: "Artificial intelligence & New technologies",
    description:
      "With AI At the Forefront of Our Priorities, We Provide Our Customers with The Best Solutions Possible. We Embrace Working with New Technologies Such as AR, VR and Others.",
    image: p1,
    isDark: false,
  },
  {
    id: 3,
    title: "Consulting Service (Startups & Companies)",
    description:
      "Our Business Partners Can Rely on Us for Technical Support of Their Products.",
    image: p6,
    isDark: false,
  },
  {
    id: 4,
    title: "Production Of Special Software For Hardware",
    description:
      "With the Development of Technology, There Are Many Devices That Require Programming. PARATECH Features a Remarkable Background in Programming Such Devices.",
    image: p4,
    isDark: true,
  },
];

interface FlipCardProps {
  card: CardData;
  isFlipped: boolean;
  onFlip: () => void;
}

const FlipCard: React.FC<FlipCardProps> = ({ card, isFlipped, onFlip }) => {
  const cardClasses = `
    2xl:w-[437px] xl:w-[359px] lg:w-[320px] md:w-[280px] w-full 
    md:h-full h-[320px] flex flex-col justify-between 
    md:rounded-[56px] rounded-[30px] px-8 2xl:py-16 xl:py-10 py-8
    ${card.isDark ? "bg-[#1d1d1f]" : "bg-[#f5f5f7]"}
  `;

  const textColor = card.isDark ? "text-white" : "text-[#1d1d1f]";
  const iconColor = card.isDark ? "text-white" : "text-[#1d1d1f]";

  return (
    <div className="relative w-full h-full" style={{ perspective: "1000px" }}>
      <div
        className={`relative w-full h-full transition-transform duration-600 transform-style-preserve-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          className={`absolute inset-0 backface-hidden ${cardClasses}`}
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="w-full h-fit flex flex-row justify-between">
            <div className="2xl:w-[85px] xl:w-[80px] lg:w-[75px] md:w-[60px] w-[80px] h-full">
              <Image
                src={card.image || "/placeholder.svg"}
                alt={card.title}
                width={85}
                height={85}
                className="w-full h-auto"
              />
            </div>
            <button
              onClick={onFlip}
              aria-label="Flip card"
              className="2xl:w-[45px] 2xl:h-[45px] xl:w-[40px] xl:h-[40px] w-[30px] h-[30px] cursor-pointer hover:scale-120 transition-transform"
            >
              <Plus className={`w-full h-full ${iconColor}`} />
            </button>
          </div>
          <h3
            className={`${textColor} font-semibold 2xl:text-2xl xl:text-xl text-xl 2xl:w-[350px] xl:w-[280px] h-fit`}
          >
            {card.title}
          </h3>
        </div>

        <div
          className={`absolute inset-0 backface-hidden rotate-y-180 ${cardClasses}`}
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(-180deg)",
          }}
        >
          <div className="w-full h-fit flex flex-row justify-end">
            <button
              onClick={onFlip}
              aria-label="Flip card"
              className="2xl:w-[45px] 2xl:h-[45px] xl:w-[40px] xl:h-[40px] w-[30px] h-[30px] cursor-pointer rotate-45 hover:scale-110 transition-transform"
            >
              <Plus className={`w-full h-full ${iconColor}`} />
            </button>
          </div>
          <h4
            className={`${textColor} font-semibold flex flex-col justify-center 2xl:text-xl lg:text-base md:text-xs text-sm 2xl:w-[350px] xl:w-[250px] h-full overflow-hidden`}
          >
            {card.description}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default function FlipCardsSection() {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  const handleCardFlip = (cardId: number) => {
    setFlippedCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(cardId)) {
        newSet.delete(cardId);
      } else {
        newSet.add(cardId);
      }
      return newSet;
    });
  };

  return (
    <div className="w-full mt-40 pt-20 2xl:h-[1000px] xl:h-[900px] lg:h-[800px] md:h-[700px] h-[1500px] flex justify-center items-center">
      <div className="2xl:w-[900px] xl:w-[750px] lg:w-[700px] md:w-[600px] w-[80%] md:h-[85%] h-[90%] grid md:grid-cols-2 grid-cols-1 gap-8">
        {cardsData.map((card) => (
          <FlipCard
            key={card.id}
            card={card}
            isFlipped={flippedCards.has(card.id)}
            onFlip={() => handleCardFlip(card.id)}
          />
        ))}
      </div>
    </div>
  );
}
