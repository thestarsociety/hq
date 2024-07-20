"use client";

import { useEffect } from "react";
import AsciiBackground from "../animation/background";
import { MissionBlock } from "../blocks/mission";
import QuoteBlock from "../blocks/quoteBlock";
import { SectionWelcome } from "../blocks/sectionWelcome";
import { Separator } from "../ui/separator"

const rowsData = [
    { title: "Our mission", headline: "We are building star society to:"},
    { number: "01", title: "Challenge", headline: "and growth using opensource.", highlightedText: "Inspire innovation", highlightedTextColor: "text-rangueOrange" },
    { number: "02", title: "Goal", headline: "a better future for all.", highlightedText: "Design", highlightedTextColor: "text-rangueOrange"  },
  ];

const quotes: string[][] = [
    ["In candor, we find", "the freedom to reach", "the stars."],
    ["Isolated efforts", "creates boundaries in", "the vast universe of", "ideas. Together we map", "new possibilities."]
  ];

export const HeroSection = () => {

    useEffect(() => {
        const hash = window.location.hash.slice(1);
        if (hash) {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, []);

    return (
        <div className="w-full mt-5 mb-20">
            <div className="flex w-full justify-between mb-[20px] py-2.5 px-6 border-[1.5px] border-black rounded-[40px] font-[14px]">
                <p>01</p>
                <p>Hello</p>
            </div>
            <SectionWelcome backgroundColor="bg-rangueOrange" sectionText="Hello" sectionNo="01"/>
            {/* Hero-section-1 */}
            <div className="w-full h-full p-[20px] border-[1.5px] border-zinc-900 rounded-[20px] bg-transparent mt-4">
                <div className="flex flex-col p-2">
                    <div className="flex items-center justify-center">
                        <h1 className="font-semibold text-zinc-900 text-[170px]">
                            We are
                        </h1>
                    </div>
                    <Separator className="bg-zinc-800"/>
                    <div className="flex flex-row p-4">
                        <div className="basis-1/3 mt-6 mr-4 flex items-center">
                            <h2 className="text-2xl text-zinc-900 font-medium text-center">
                            We are an opensource foundation that is dedicated to building a better future for all.
                            </h2>
                        </div>
                        <div className="basis-2/3 flex items-center justify-center">
                            <h1 className="font-semibold text-rangueOrange text-[170px]">
                            The
                            </h1>
                        </div>
                    </div>
                    <Separator className="bg-zinc-800"/>
                    <div className="flex items-center justify-center"> {/* Start to align */}
                        <h1 className="font-semibold text-rangueOrange text-[170px]">
                            Star Society
                        </h1>
                    </div>
                </div>
            </div>

            {/* Quotes */}
            <QuoteBlock quotes={quotes} backgroundColor="bg-rangueOrange"/>

            {/* Hero-section-3 */}
            <MissionBlock rows={rowsData}/>

            {/* Hero-section-4 */}
            <div className="w-full h-screen mt-4 flex items-center justify-center relative overflow-hidden">
            <AsciiBackground className="w-full h-screen border-[1.5px] border-zinc-900 rounded-[20px] bg-rangueOrange flex items-center justify-center relative">
                <h1 className="text-[300px] font-semibold text-tssWhite text-center relative z-10">
                    Infinity
                </h1>
            </AsciiBackground>
            </div>

            {/* Hero-section-5 */}
            
        </div>
    )
}