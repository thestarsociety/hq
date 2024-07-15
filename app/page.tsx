"use client";

import { IndexPage } from "@/components/pages";
import { ApproachPage } from "@/components/pages/approach";
import { CareersPage } from "@/components/pages/careers";
import { ContactPage } from "@/components/pages/contact";
import { HeroPage } from "@/components/pages/hero";
import { TeamPage } from "@/components/pages/team";
import { WorkPage } from "@/components/pages/work";
import { IndexSection } from "@/components/sections";

// Sections
import { ApproachSection } from "@/components/sections/approach";
import { CareerSection } from "@/components/sections/careers";
import { ContactSection } from "@/components/sections/contact";
import { HeroSection } from "@/components/sections/hero";
import { TeamSection } from "@/components/sections/team";
import { WorkSection } from "@/components/sections/work";

export default function Home() {
  return (
    <div className="m-0 p-0 box-border h-full w-full">
      <div className="fixed w-[20%] my-[50px] px-5">
        <div className="h-[100px] flex flex-col justify-between mb-5 p-5 border-[1.5px] border-black rounded-[20px] transition-[height] duration-500">
          <HeroPage />
        </div>
        <div className="h-[100px] flex flex-col justify-between mb-5 p-5 border-[1.5px] border-black rounded-[20px] transition-[height] duration-500">
          <ApproachPage />
        </div>
        <div className="h-[100px] flex flex-col justify-between mb-5 p-5 border-[1.5px] border-black rounded-[20px] transition-[height] duration-500">
          <WorkPage />
        </div>
        <div className="h-[100px] flex flex-col justify-between mb-5 p-5 border-[1.5px] border-black rounded-[20px] transition-[height] duration-500">
          <TeamPage />
        </div>
        <div className="h-[100px] flex flex-col justify-between mb-5 p-5 border-[1.5px] border-black rounded-[20px] transition-[height] duration-500">
          <CareersPage />
        </div>
        <div className="h-[100px] flex flex-col justify-between mb-5 p-5 border-[1.5px] border-black rounded-[20px] transition-[height] duration-500">
          <ContactPage />
        </div>
        <div className="h-[100px] flex flex-col justify-between mb-5 p-5 border-[1.5px] border-black rounded-[20px] transition-[height] duration-500">
          <IndexPage />
        </div>
      </div>

      {/* Sections */}
      <div className="absolute w-[80%] h-[100%] left-[20%] pt-[30px] pr-[20px]">
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