"use client";

import { SectionWelcome } from "../blocks/sectionWelcome"

export const WorkSection = () => {
    return (
        <div className="w-full mt-5 mb-20">
            <div className="flex w-full justify-between mb-[20px] py-2.5 px-6 border-[1.5px] border-black rounded-[40px] font-[14px]">
                <p>01</p>
                <p>The Star Society</p>
            </div>
           
           {/* welcome */}
           <SectionWelcome backgroundColor="bg-wrathBlack" sectionText="Work" sectionNo="03"/>
        </div>
    )
}