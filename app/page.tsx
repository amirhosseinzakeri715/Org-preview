import Hero from "../components/Hero";
import Sticky2 from "../components/Sticky2";
import Sticky from "../components/Sticky";
import Scroll from "@/components/Scroll";
import FlipCardsSection from "@/components/FlipCard";
import InnovationSection from "@/components/seprator";
import TechnologyGrid from "@/components/Tech";
import OurProjects from "@/components/OurProject";
import TrustedCompanies from "@/components/Trusted";
import LetsTalkSection from "@/components/LetsTalk";


export default function Home() {
  return (
    
    <div>
      <Hero/>
      <Scroll/>
      <FlipCardsSection/>
      <Sticky/>
      <Sticky2/>
      <InnovationSection/>
      <TechnologyGrid/>
      <OurProjects/>
      <TrustedCompanies/>
      <LetsTalkSection/>
    </div>
  )
}