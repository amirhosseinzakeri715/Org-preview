"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

const Card = () => {
  const cards = [
    {
      id: 1,
      title: "Custom Web Solutions",
      description:
        "We build beautiful, responsive, and high-performing websites tailored to your business needs.",
      cta: "See Our Work",
      bgColor: "rgba(11,45,113,0.4)",
    },
    {
      id: 2,
      title: "E-commerce Platforms",
      description:
        "From small shops to large-scale marketplaces, we create powerful e-commerce solutions.",
      cta: "Explore Services",
      bgColor: "rgba(0,102,178,0.4)",
    },
    {
      id: 3,
      title: "Mobile App Development",
      description:
        "Engage your users with intuitive and powerful mobile applications for iOS and Android.",
      cta: "Learn More",
      bgColor: "rgba(5,110,145,0.5)",
    },
    {
      id: 4,
      title: "Ongoing Support",
      description:
        "We provide reliable maintenance and support to keep your digital products running smoothly.",
      cta: "Get a Quote",
      bgColor: "rgba(113,27,0,0.4)",
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [cards.length])

  return (
    <>
      <div className="absolute bottom-8 sm:bottom-6 md:bottom-16 left-1/2 -translate-x-1/2 z-10 w-full px-3 sm:px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={cards[activeIndex].id}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
            }}
            className="w-full max-w-[280px] sm:max-w-[400px] md:max-w-[600px] lg:max-w-[800px] mx-auto text-white backdrop-blur-[30px] sm:backdrop-blur-[40px] p-2.5 sm:p-4 md:p-6 lg:p-10 rounded-lg md:rounded-xl shadow-lg sm:shadow-xl border border-white/10"
            style={{ backgroundColor: cards[activeIndex].bgColor }}
          >
            <div className="text-center">
              <h2 className="text-xs sm:text-base md:text-xl lg:text-3xl font-bold mb-1 sm:mb-2 leading-tight">
                {cards[activeIndex].title}
              </h2>
              <p className="text-[10px] sm:text-sm md:text-base mb-1.5 sm:mb-3 max-w-[220px] sm:max-w-[350px] md:max-w-[500px] mx-auto leading-tight opacity-90">
                {cards[activeIndex].description}
              </p>
              <button
                className="inline-flex items-center text-[10px] sm:text-sm md:text-base font-medium group bg-white/5 hover:bg-white/15 px-2 py-1 sm:px-3 sm:py-1.5 rounded-full transition-all duration-300"
                aria-label={cards[activeIndex].cta}
              >
                <span className="mr-1 sm:mr-2">{cards[activeIndex].cta}</span>
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-1 sm:bottom-2 md:bottom-10 left-1/2 -translate-x-1/2 z-20 flex space-x-2 sm:space-x-3">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-400 touch-manipulation ${
              activeIndex === index ? "w-3 sm:w-6 bg-white shadow-sm" : "bg-white/60 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </>
  )
}

export default Card
