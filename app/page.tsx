"use client";

import { AboutPage } from "@/components/pages/about";
import { ContactUsPage } from "@/components/pages/contactus";
import { HeroPage } from "@/components/pages/hero";
import { WorkPage } from "@/components/pages/work";

export default function Home() {
  return (
    <div className="h-full w-full font-semibold">
      <div className="flex flex-col">
        <div>
          <HeroPage />
        </div>
        <div>
          <AboutPage />
        </div>
        <div>
          <WorkPage />
        </div>
        <div>
          <ContactUsPage />
        </div>
      </div>
    </div>
  );
}