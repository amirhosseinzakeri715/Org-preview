"use client"

import { useState } from "react"

export const ScrollToTopButton: React.FC= () =>{
  const [isHovered, setIsHovered] = useState(false);

  const scrollToTop= () =>{
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <button
      onClick={scrollToTop}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative overflow-hidden px-5 py-2.5 rounded-full border-2 border-white/30 font-semibold transition-all duration-300 cursor-pointer hover:scale-100"
    >
      <div
        className={`absolute inset-0 transition-all duration-300 ease-out rounded-full`}
        style={{
          background: isHovered ? `radial-gradient(ellipse at center, 
            rgba(255,255,255,0.3) 0%, 
            rgba(255,255,255,0.5) 30%, 
            rgba(255,255,255,0.7) 60%, 
            rgba(255,255,255,0.9) 80%, 
            rgba(255,255,255,1) 100%)`
          : "transparent"
        }}
      />
      <div
        className={`absolute inset-0 bg-white transition-all duration-500 ease-out delay-75 rounded-full ${
          isHovered ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
        }`}
      />
      <span
        className={`relative z-10 transition-colors duration-700 ${
          isHovered ? "text-blue-600" : "text-white"
        }`}
      >
        Back to top
      </span>
    </button>
  )
}