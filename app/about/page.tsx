"use client";

import React from "react";
import EmployeeStories from "./components/EmployeeStories";
import HeritageLeadership from "./components/HeritageLeadership";
import KnowUsBetter from "./components/KnowUsBetter";
import LatestEfforts from "./components/LatestEfforts";
import About from "./components/About";
import Logo from "./components/Logo";
import EmployeeStoriesSlider from "./components/EmployeeStoriesSlider";
import Hero from "./components/Hero";

const HeroSection: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Logo />
      <EmployeeStories />
      <EmployeeStoriesSlider />
      <HeritageLeadership />
      <LatestEfforts />
      <KnowUsBetter />
    </>
  );
};

export default HeroSection;
