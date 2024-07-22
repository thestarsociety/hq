"use client";

import { useEffect, useState } from "react";
import { IndexPage } from "./pages";
import { ApproachPage } from "./pages/approach";
import { CareersPage } from "./pages/careers";
import { ContactPage } from "./pages/contact";
import { HeroPage } from "./pages/hero";
import { TeamPage } from "./pages/team";
import { WorkPage } from "./pages/work";
import { useGlobalStore } from "@/hooks/use-store";

interface NavItem {
  id: string;
  component: React.ComponentType;
  bgColor: string;
}

const navItems: NavItem[] = [
  { id: 'hero', component: HeroPage, bgColor: 'bg-rangueOrange' },
  { id: 'approach', component: ApproachPage, bgColor: 'bg-spacePurple' },
  { id: 'work', component: WorkPage, bgColor: 'bg-wrathBlack' },
  { id: 'team', component: TeamPage, bgColor: 'bg-quasarBlue' },
  { id: 'careers', component: CareersPage, bgColor: 'bg-vibrantPink' },
  { id: 'contact', component: ContactPage, bgColor: 'bg-lemonYellow' },
  { id: 'index', component: IndexPage, bgColor: 'bg-forestGreen' },
];

export const NavBar: React.FC = () => {
  const { activeSection, setActiveSection, scrollProgress, setScrollProgress } = useGlobalStore();

  useEffect(() => {
    const sectionDivs = Array.from(document.querySelectorAll<HTMLDivElement>(".sections > div"));
    const mapDivs = Array.from(document.querySelectorAll<HTMLDivElement>(".map > div"));
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.5 });

    sectionDivs.forEach((section) => observer.observe(section));

    const handleScroll = () => {
      sectionDivs.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, 1 - (rect.bottom / rect.height)));
        setScrollProgress(section.id, progress);

        if (section.id === activeSection) {
          mapDivs[index].style.height = `${100 + progress * 50}px`;
        } else {
          mapDivs[index].style.height = "100px";
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
  
    return () => {
      sectionDivs.forEach((section) => observer.unobserve(section));
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setActiveSection, setScrollProgress, activeSection]);

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="map hidden fixed lg:block lg:fixed h-full w-[15%] my-[50px] px-5 mb-4">
      {navItems.map(item => (
        <div
          key={item.id}
          className={`relative flex flex-col justify-between mb-5 p-5 border-[1.5px] hover:border-black rounded-[20px] transition-all duration-500 ${item.bgColor} ${
            item.id === 'contact' || item.id === 'index' ? 'text-black' : 'text-white'
          } ${
            activeSection === item.id ? 'h-[150px]' : 'h-[100px]'
          } cursor-pointer`}
          onClick={() => handleNavClick(item.id)}
        >
          <item.component />
          <div 
            className="absolute bottom-2 left-2 w-2 h-2 rounded-full bg-white"
            style={{ 
              transform: `scale(${scrollProgress[item.id] || 0})`,
              transition: 'transform 0.3s ease-out'
            }}
          />
        </div>
      ))}
      <div className="pb-2"></div>
    </div>
  );
};