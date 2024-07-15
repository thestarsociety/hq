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
      <div className="fixed w-[15%] my-[50px] px-5">
        <div className="h-[100px] flex flex-col justify-between mb-5 p-5 border-[1.5px] hover:border-black rounded-[20px] transition-[height] duration-500 bg-minimalteal text-white">
          <HeroPage />
        </div>
        <div className="h-[100px] flex flex-col justify-between mb-5 p-5 border-[1.5px] hover:border-black rounded-[20px] transition-[height] duration-500 bg-mutedcoral text-white">
          <ApproachPage />
        </div>
        <div className="h-[100px] flex flex-col justify-between mb-5 p-5 border-[1.5px] hover:border-black rounded-[20px] transition-[height] duration-500 bg-dustylavender text-white">
          <WorkPage />
        </div>
        <div className="h-[100px] flex flex-col justify-between mb-5 p-5 border-[1.5px] hover:border-black rounded-[20px] transition-[height] duration-500 bg-sagegreen text-white">
          <TeamPage />
        </div>
        <div className="h-[100px] flex flex-col justify-between mb-5 p-5 border-[1.5px] hover:border-black rounded-[20px] transition-[height] duration-500 bg-subduednavy text-white">
          <CareersPage />
        </div>
        <div className="h-[100px] flex flex-col justify-between mb-5 p-5 border-[1.5px] hover:marker:border-black rounded-[20px] transition-[height] duration-500 bg-warmtaupe text-white">
          <ContactPage />
        </div>
        <div className="h-[100px] flex flex-col justify-between mb-5 p-5 border-[1.5px] hover:border-black rounded-[20px] transition-[height] duration-500 bg-mellowyellow text-white">
          <IndexPage />
        </div>
      </div>

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