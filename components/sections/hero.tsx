"use client";

import AsciiBackground from "../animation/background";
import { Button } from "../ui/button"
import { Separator } from "../ui/separator"

export const HeroSection = () => {
    return (
        <div className="w-full mt-5 mb-20">
            <div className="flex w-full justify-between mb-[20px] py-2.5 px-6 border-[1.5px] border-black rounded-[40px] font-[14px]">
                <p>01</p>
                <p>Hello</p>
            </div>
            <div className="w-full h-full p-[20px] border-[1.5px] hover:border-black rounded-[20px] bg-minimalteal text-white">
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
                            <h1 className="font-semibold text-minimalteal text-[170px]">
                            The
                            </h1>
                        </div>
                    </div>
                    <Separator className="bg-zinc-800"/>
                    <div className="flex items-center justify-center"> {/* Start to align */}
                        <h1 className="font-semibold text-minimalteal text-[170px]">
                            Star Society
                        </h1>
                    </div>
                </div>
            </div>

            {/* Hero-section-2 */}
            <div className="w-full h-full p-[20px] border-[1.5px] border-zinc-900 rounded-[20px] bg-minimalteal mt-4">
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
            <div className="w-full h-full p-[20px] border-[1.5px] border-zinc-900 rounded-[20px] bg-transparent mt-4">
                <div className="flex flex-row m-3 p-2">
                    <div className="flex flex-col w-[30%] mt-8 items-start">
                        <h2 className="text-3xl font-medium text-zinc-900 pt-2">
                            Our Mission
                        </h2>
                        <div className="mt-[230px] space-y-2">
                            <Button size="smalltext" className="rounded-[20px] bg-transparent text-black border-[1.5px] border-zinc-900 pointer-events-none">
                                01
                            </Button>
                            <h2 className="text-3xl font-medium text-zinc-900">
                                Challenge
                            </h2>
                        </div>
                        <div className="mt-[500px] space-y-2">
                            <Button size="smalltext" className="rounded-[20px] bg-transparent text-black border-[1.5px] border-zinc-900 pointer-events-none">
                                02
                            </Button>
                            <h2 className="text-3xl font-medium text-zinc-900">
                                Goal
                            </h2>
                        </div>
                    </div>
                    <div className="flex flex-col w-[70%] leading-snug">
                        <h1 className="text-[100px] text-zinc-900 font-semibold">
                            We are building Star Society to:
                        </h1>
                        <Separator className="bg-zinc-800 h-[0.5px] mt-4"/>
                        <h1 className="text-zinc-900 font-semibold text-[100px]">
                            Inspire innovation and growth through
                        </h1>
                        <h1 className="text-minimalteal font-semibold text-[100px]">
                            opensource.
                        </h1>
                        <Separator className="bg-zinc-800 h-[0.5px] mt-4"/>
                        <h1 className="text-zinc-900 font-semibold text-[100px]">
                            Design a better
                        </h1>
                        <h1 className="text-minimalteal font-semibold text-[100px]">
                            future for all.
                        </h1>
                    </div>
                </div>
            </div>

            {/* Hero-section-4 */}
            <div className="w-full h-screen p-[20px] mt-4 flex items-center justify-center relative overflow-hidden">
            <AsciiBackground className="w-full h-full border-[1.5px] border-zinc-900 rounded-[20px] bg-minimalteal flex items-center justify-center relative">
                <h1 className="text-[300px] font-semibold text-white text-center relative z-10">
                    Infinity
                </h1>
            </AsciiBackground>
            </div>
        </div>
    )
}