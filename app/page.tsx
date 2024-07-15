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

export default function Home() {
  return (
    <div className="m-0 p-0 box-border h-full w-full">
      <NavBar />

      {/* Sections */}
      <div className="absolute w-[85%] h-[100%] left-[15%] pt-[30px] pr-[20px]">
        <HeroSection />
        <ApproachSection />
        <WorkSection />
        <TeamSection />
        <CareerSection />
        <ContactSection />
        <IndexSection />
      </div>
    </div>
  );
}