"use client";

import { useEffect, useState } from "react";
import { IndexPage } from "./pages";
import { ApproachPage } from "./pages/approach";
import { CareersPage } from "./pages/careers";
import { ContactPage } from "./pages/contact";
import { HeroPage } from "./pages/hero";
import { TeamPage } from "./pages/team";
import { WorkPage } from "./pages/work";

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
  { id: 'careers', component: CareersPage, bgColor: 'bg-subduednavy' },
  { id: 'contact', component: ContactPage, bgColor: 'bg-warmtaupe' },
  { id: 'index', component: IndexPage, bgColor: 'bg-mellowyellow' },
];

export const NavBar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('');
  const [scrollProgress, setScrollProgress] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    const mapDivs = Array.from(document.querySelectorAll<HTMLDivElement>(".map > div"));
    const sectionDivs = Array.from(document.querySelectorAll<HTMLDivElement>(".sections > div"));
  
    const sectionHeights: number[] = [];
    const accumulatedHeights: number[] = [];
    const RATIO = 0.12;
  
    let accumulatedHeight = 0;
  
    sectionDivs.forEach((section) => {
      const height = section.clientHeight;
      sectionHeights.push(height * RATIO);
      accumulatedHeight += height;
      accumulatedHeights.push(accumulatedHeight);
    });
  
    let lastActiveIndex = -1;
  
    function updateMapHeight(scrollPos: number) {
      for (let i = 0; i < accumulatedHeights.length; i++) {
        if (i === 0 && scrollPos < accumulatedHeights[i]) {
          if (lastActiveIndex !== i) {
            if (lastActiveIndex >= 0) {
              mapDivs[lastActiveIndex].style.height = "100px";
            }
            mapDivs[i].style.height = `${sectionHeights[i]}px`;
            lastActiveIndex = i;
          }
          break;
        } else if (
          i > 0 && scrollPos >= accumulatedHeights[i - 1] && scrollPos < accumulatedHeights[i]
        ) {
          if (lastActiveIndex !== i) {
            if (lastActiveIndex >= 0) {
              mapDivs[lastActiveIndex].style.height = "100px";
            }
            mapDivs[i].style.height = `${sectionHeights[i]}px`;
            lastActiveIndex = i;
          }
          break;
        }
      }
    }
  
    const sectionTotalHeights = sectionDivs.reduce((sum, section) => sum + section.clientHeight, 0);
    const mapTotalHeights = mapDivs.reduce((sum, map) => sum + map.clientHeight, 0) + (mapDivs.length - 1) * 75;
  
    const sectionScrollableHeight = sectionTotalHeights - window.innerHeight;
    const mapScrollableHeight = mapTotalHeights - window.innerHeight;
  
    const scrollRatio = mapScrollableHeight / sectionScrollableHeight;
  
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const mapTranslateY = scrollPos * scrollRatio;
      const mapElement = document.querySelector<HTMLDivElement>(".map");
      if (mapElement) {
        mapElement.style.transform = `translateY(-${mapTranslateY}px)`;
      }
      updateMapHeight(scrollPos);
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  return (
    <div className="map fixed h-full w-[15%] my-[50px] px-5 mb-4">
      {navItems.map(item => (
        <div
          key={item.id}
          className={`relative flex flex-col justify-between mb-5 p-5 border-[1.5px] hover:border-black rounded-[20px] transition-all duration-500 ${item.bgColor} text-tssWhite ${
            activeSection === item.id ? 'h-[150px]' : 'h-[100px]'
          }`}
        >
          <item.component />
        </div>
      ))}
      <div className="pb-2"></div>
    </div>
  );
};
