"use client";

import React, { useRef, useEffect, useState } from "react";
import Now from "./Now";
import { timelineData } from "./timelineData";
import TimelineItem from "./TimelineItem";

const TimeLine: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const nowRef = useRef<HTMLDivElement>(null);
  const [circlePositions, setCirclePositions] = useState<number[]>([]);
  const [lineHeight, setLineHeight] = useState(0);
  const [dottedLineTop, setDottedLineTop] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const items =
      containerRef.current.querySelectorAll<HTMLDivElement>(".timeline-item");

    const containerTop =
      containerRef.current.getBoundingClientRect().top + window.scrollY;
    const positions = Array.from(items).map((item) => {
      const itemTop = item.getBoundingClientRect().top + window.scrollY;
      return itemTop - containerTop + item.offsetHeight / 2;
    });
    setCirclePositions(positions);

    if (nowRef.current) {
      const nowTop =
        nowRef.current.getBoundingClientRect().top + window.scrollY;
      const solidLineH = nowTop - containerTop;
      setLineHeight(solidLineH);

      setDottedLineTop(solidLineH + nowRef.current.offsetHeight);
    }
  }, []);

  return (
    <main className="w-full min-h-screen bg-white overflow-x-hidden">
      <section
        ref={containerRef}
        className="md:w-5/6 mx-auto px-4 py-10 my-10 space-y-16 relative md:pl-[2rem]"
      >
        <div
          aria-hidden="true"
          className="hidden md:block absolute rounded-sm -left-20 bg-gradient-to-b from-blue-500 to-purple-600"
          style={{ width: "2px", height: lineHeight, top: 0 }}
        />

        <div
          aria-hidden="true"
          className="hidden md:block absolute -left-20 border-l border-dotted border-blue-500"
          style={{
            width: "64px",
            height: `calc(100% - ${dottedLineTop}px)`,
            top: dottedLineTop,
          }}
        />

        {circlePositions.length > 0 &&
          circlePositions.map((pos, i) => (
            <span
              key={i}
              aria-hidden="true"
              className="hidden md:block absolute -left-20 bg-white border-4 border-blue-500 rounded-full"
              style={{
                width: 20,
                height: 20,
                top: pos - 220,
                transform: "translateX(-50%)",
              }}
            />
          ))}

        <div className="max-w-5xl mx-auto space-y-10 relative z-10">
          <h1 className="text-center mx-auto text-3xl md:text-6xl font-bold leading-relaxed bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent animate-[riseUp_1s_ease-out]">
            Growth Timeline
          </h1>
        </div>

        <div className="relative z-10 space-y-20">
          {timelineData.map((item, index) => (
            <div key={index} className="timeline-item relative">
              <TimelineItem {...item} />
            </div>
          ))}
        </div>

        <div ref={nowRef} />
      </section>

      <Now />
    </main>
  );
};

export default TimeLine;
