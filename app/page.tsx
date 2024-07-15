"use client";

import { AboutPage } from "@/components/pages/about";
import { ContactUsPage } from "@/components/pages/contactus";
import { HeroPage } from "@/components/pages/hero";
import { WorkPage } from "@/components/pages/work";
import { AboutSection } from "@/components/sections/about";
import { ContactSection } from "@/components/sections/contact";
import { HeroSection } from "@/components/sections/hero";
import { WorkSection } from "@/components/sections/work";

export default function Home() {
  return (
    <div className="m-0 p-0 box-border h-full w-full">
      <div className="fixed w-[20%] my-[50px] px-5">
        <div className="h-[100px] flex flex-col justify-between mb-5 p-5 border-[1.5px] border-black rounded-[20px] transition-[height] duration-500">
          <HeroPage />
        </div>
        <div className="h-[100px] flex flex-col justify-between mb-5 p-5 border-[1.5px] border-black rounded-[20px] transition-[height] duration-500">
          <AboutPage />
        </div>
        <div className="h-[100px] flex flex-col justify-between mb-5 p-5 border-[1.5px] border-black rounded-[20px] transition-[height] duration-500">
          <WorkPage />
        </div>
        <div className="h-[100px] flex flex-col justify-between mb-5 p-5 border-[1.5px] border-black rounded-[20px] transition-[height] duration-500">
          <ContactUsPage />
        </div>
      </div>

      {/* Sections */}
      <div className="absolute w-[80%] h-[100%] left-[20%] pt-[30px] pr-[20px]">
        <HeroSection />
        <WorkSection />
        <AboutSection />
        <ContactSection />
      </div>
    </div>
  );
}