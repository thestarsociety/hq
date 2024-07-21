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
      <div className="sections absolute w-[85%] left-[15%] pt-[30px] pr-[20px]">
        <div id="hero" className="sec min-h-screen"><HeroSection /></div>
        <div id="approach" className="sec min-h-screen"><ApproachSection /></div>
        <div id="work" className="sec min-h-screen"><WorkSection /></div>
        <div id="team" className="sec min-h-screen"><TeamSection /></div>
        <div id="careers" className="sec min-h-screen"><CareerSection /></div>
        <div id="contact" className="sec min-h-screen"><ContactSection /></div>
        <div id="index" className="sec min-h-screen"><IndexSection /></div>
        
      </div>
    </div>
  );
}

export default Home;
