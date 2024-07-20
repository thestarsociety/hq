"use client";

import { SectionWelcome } from "../blocks/sectionWelcome"
import { ShowWork } from "../blocks/showWork";

export const WorkSection = () => {
    return (
        <div className="w-full mt-5 mb-20">
            <div className="flex w-full justify-between mb-[20px] py-2.5 px-6 border-[1.5px] border-black rounded-[40px] font-[14px]">
                <p>01</p>
                <p>The Star Society</p>
            </div>
           
           {/* welcome */}
           <SectionWelcome backgroundColor="bg-wrathBlack" sectionText="Work" sectionNo="03"/>

           {/* Work ShowCase */}
           <div className="space-y-8">
            <ShowWork brandName="Fresh Studio" backgroundColor="bg-duskBlack" brandLogo="/assets/title-block-n.svg" categoryTag="Brand Design" backgroundImages={[
                "/showcase/saturn-2.jpg"
            ]} expandedText="This is saturn." additionalSection={<div className="bg-gray-200 p-6 rounded-[20px]">This is an additional section.</div>} comingSoon={true}/>
            <ShowWork brandName="Saturn" backgroundColor="bg-duskBlack" brandLogo="/showcase/Saturn/saturn-logo.svg" categoryTag="Brand Design" backgroundImages={["/showcase/saturn-2.jpg"]} expandedText="Saturn AI" additionalSection={<div className="bg-gray-200 p-6 rounded-[20px]">This is an additional section.</div>} comingSoon={false}/>
            <ShowWork brandName="Meta AI" backgroundColor="bg-duskBlack" brandLogo="/showcase/metaai/meta-ai-logo.svg" categoryTag="Brand Identity" backgroundImages={["/showcase/saturn-2.jpg"]} expandedText="Branding AI by visualizing its beautiful complexities." expandedTextColor="text-blue-600" additionalSection={<div className="bg-gray-200 p-6 rounded-[20px]">This is an additional section.</div>} comingSoon={false}/>
           </div>
        </div>
    )
}