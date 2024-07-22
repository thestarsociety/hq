"use client";

// Sections
import { ApproachSection } from "@/components/sections/approach";
import { IndexSection } from "@/components/sections";
import { CareerSection } from "@/components/sections/careers";
import { ContactSection } from "@/components/sections/contact";
import { HeroSection } from "@/components/sections/hero";
import { TeamSection } from "@/components/sections/team";
import { WorkSection } from "@/components/sections/work";
import { NavBar } from "@/components/navBar";

const Home: React.FC = () => {
  return (
      <div className="m-0 p-0 box-border h-full w-full">
      <NavBar />

      {/* Sections */}
      <div className="sections absolute w-full lg:w-[85%] lg:left-[15%] pt-[30px] lg:pr-[20px] p-4">
        <div id="hero" className="sec"><HeroSection /></div>
        <div id="approach" className="sec"><ApproachSection /></div>
        <div id="work" className="sec"><WorkSection /></div>
        <div id="team" className="sec"><TeamSection /></div>
        <div id="careers" className="sec"><CareerSection /></div>
        <div id="contact" className="sec"><ContactSection /></div>
        <div id="index" className="sec"><IndexSection /></div>
        
      </div>
    </div>
  );
}

export default Home;
