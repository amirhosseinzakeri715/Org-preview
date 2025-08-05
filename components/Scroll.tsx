"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export default function Scroll() {
  const [scrollY, setScrollY] = useState(0)
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const transform1 = scrollY * -0.75
  const transform2 = scrollY * 0.75

  const sectionRef = useRef<HTMLDivElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)
  const [animatedChars, setAnimatedChars] = useState<number[]>([])

  const fullText ="we believe that humanity can solve any challenge. that our greatest resource is our people. and that responsibility, trust and integrity will help us drive a prosperous future."
  const characters = fullText.split("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)
            characters.forEach((_, index) => {
              setTimeout(() => {
                setAnimatedChars((prev) => [...prev, index])
              }, index * 50)
            })
          }
        })
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [hasAnimated, characters.length])
  return (
    <>
      <section className="bg-gradient-to-b from-blue-800 to-blue-900 pt-30">
        <div className="sticky inset-30 overflow-hidden text-9xl font-bold">
          <h5 className="text-white text-center text-xl">who we are</h5>
          <div
            className="text-cyan-500 text-right -mr-150"
            style={{
              transform: `translateX(${transform1}px)`,
              transition: "transform 0.1s ease-out"
            }}
          >
            critical thinkers
          </div>
          <div
            className="text-cyan-600 -ml-150"
            style={{
              transform: `translateX(${transform2}px)`,
              transition: "transform 0.1s ease-out"
            }}
          >
            collaborators
          </div>
          <div
            className="text-blue-600 text-right -mr-150"
            style={{
              transform: `translateX(${transform1}px)`,
              transition: "transform 0.1s ease-out"
            }}
          >
            innovators
          </div>
        </div>
        <div className="sm:px-2 md:px-18 lg:px-26 2xl:px-60 mt-screen">
          <Image src="/images/marquee-1.png" alt="Photo" width={524} height={296} className="rounded-xl mb-80 place-self-center px-6 sm:px-0 sm:place-self-end sm:mr-10"/>
          <Image src="/images/marquee-2.png" alt="Photo" width={windowWidth< 1024 ? 255 : 372} height={windowWidth< 1024 ? 144 : 210} className="rounded-xl pl-6 mb-6"/>
          <Image src="/images/marquee-3.png" alt="Photo" width={windowWidth< 1024 ? 344 : 419} height={windowWidth< 1024 ? 194 : 236} className="rounded-xl place-self-end sm:-mt-15 pr-6"/>
        </div>
      </section>
      <section className="bg-blue-900 place-content-center h-screen px-6 md:px-14 xl:px-36 2xl:px-60 space-y-5 place-items-center" ref={sectionRef}>
        <p className="text-4xl md:text-5xl lg:text-6xl text-center font-medium wrap-anywhere leading-tight">
          {characters.map((char, index) => (
            <span
              key={index}
              className={`transition-all duration-300 ease-out ${animatedChars.includes(index) ? "text-white" : "text-blue-300/20"}`}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </p>
        <button
          className="inline-block rounded-lg border border-cyan-400 px-6 py-3 text-lg font-semibold cursor-pointer text-white hover:bg-cyan-600 hover:border-0 hover:text-black"
        >
          discover who we are
        </button>
      </section>
    </>
  )
}