"use client";

import AsciiBackground from "../animation/background";
import { MissionBlock } from "../blocks/mission";
import { Button } from "../ui/button"
import { Separator } from "../ui/separator"

const rowsData = [
    { title: "Our mission", headline: "We are building star society to:"},
    { number: "01", title: "Challenge", headline: "and growth using opensource.", highlightedText: "Inspire innovation", highlightedTextColor: "text-rangueOrange" },
    { number: "02", title: "Goal", headline: "a better future for all.", highlightedText: "Design", highlightedTextColor: "text-rangueOrange"  },
  ];

export const HeroSection = () => {
    return (
        <div className="w-full mt-5 mb-20">
            <div className="flex w-full justify-between mb-[20px] py-2.5 px-6 border-[1.5px] border-black rounded-[40px] font-[14px]">
                <p>01</p>
                <p>Hello</p>
            </div>
            <div className="w-full h-full p-[20px] border-[1.5px] hover:border-black rounded-[20px] bg-rangueOrange text-white">
                <p className="text-8xl p-4">01</p>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <h1 className="font-semibold text-[150px] p-4">
                    Hello
                </h1>
            </div>
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

            {/* Hero-section-2 */}
            <div className="w-full h-full p-[20px] border-[1.5px] border-zinc-900 rounded-[20px] bg-rangueOrange mt-4">
                <div className="flex flex-col p-2"> {/* Main flexbox */}
                    <div className="flex flex-col">
                        <div className="flex flex-row p-2">
                            <div className="basis-1/8 flex items-center mr-20">
                            <Button size="smalltext" className="rounded-[20px] bg-transparent text-black border-[1.5px] border-zinc-900 pointer-events-none">
                                01
                            </Button>
                            </div>
                            <div className="basis-7/8 flex items-center">
                            <h1 className="text-[100px] text-white font-semibold">
                                In candor, we find
                            </h1>
                            </div>
                        </div>
                        <Separator className="bg-zinc-800"/>
                        <div className="p-1">
                            <h1 className="text-white font-semibold text-[100px]">
                                the freedom to reach
                            </h1>
                        </div>
                        <Separator className="bg-zinc-800"/>
                        <div className="p-1">
                            <h1 className="text-white font-semibold text-[100px]">
                                the stars.
                            </h1>
                        </div>
                    </div>
                    {/* 02 */}
                    <div className="flex flex-col mt-[100px]">
                        <div className="flex flex-row p-2">
                            <div className="basis-1/8 flex items-center mr-20">
                            <Button size="smalltext" className="rounded-[20px] bg-transparent text-black border-[1.5px] border-zinc-900 pointer-events-none">
                                02
                            </Button>
                            </div>
                            <div className="basis-7/8 flex items-center">
                            <h1 className="text-[100px] text-white font-semibold">
                                Isolated efforts
                            </h1>
                            </div>
                        </div>
                        <Separator className="bg-zinc-800"/>
                        <div className="p-1">
                            <h1 className="text-white font-semibold text-[100px]">
                                creates boundaries in
                            </h1>
                        </div>
                        <Separator className="bg-zinc-800"/>
                        <div className="p-1">
                            <h1 className="text-white font-semibold text-[100px]">
                                the vast universe of
                            </h1>
                        </div>
                        <Separator className="bg-zinc-800"/>
                        <div className="p-1">
                            <h1 className="text-white font-semibold text-[100px]">
                                ideas. Together we map
                            </h1>
                        </div>
                        <Separator className="bg-zinc-800 h-[0.5px]"/>
                        <div className="p-1">
                            <h1 className="text-white font-semibold text-[100px]">
                                new possibilities.
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hero-section-3 */}
            <MissionBlock rows={rowsData}/>

            {/* Hero-section-4 */}
            <div className="w-full h-screen mt-4 flex items-center justify-center relative overflow-hidden">
            <AsciiBackground className="w-full h-screen border-[1.5px] border-zinc-900 rounded-[20px] bg-rangueOrange flex items-center justify-center relative">
                <h1 className="text-[300px] font-semibold text-white text-center relative z-10">
                    Infinity
                </h1>
            </AsciiBackground>
            </div>

            {/* Hero-section-5 */}
            
        </div>
    )
}