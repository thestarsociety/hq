"use client";

import AnimatedDopeText from "../blocks/animatedDopeText"
import QuoteBlock from "../blocks/quoteBlock"
import { SectionWelcome } from "../blocks/sectionWelcome"
import { ShowcaseImage } from "../blocks/showcaseImage"

const quotes: string[][] = [
    ["The (Cosmic) Index", "is our compendium of", "unusually great", "products, people, and", "ideas that inspire us to", "think differently."]
]

export const IndexSection = () => {
    return (
        <div className="w-full mt-5 mb-20">
            <div className="flex w-full justify-between mb-[20px] py-2.5 px-6 border-[1.5px] border-black rounded-[40px] font-[14px]">
                <p>01</p>
                <p>The Star Society</p>
            </div>
            
            <SectionWelcome backgroundColor="bg-forestGreen" sectionNo="07" sectionText="Cosmic Index" textColor="text-black"/>

            <ShowcaseImage backgroundImage="/assets/cosmic-index.svg" backgroundColor="bg-transparent"/>

            <QuoteBlock backgroundColor="bg-forestGreen" quotes={quotes} textColor="text-black"/>

            <AnimatedDopeText text="Subscribe to our cosmic newsletter!" arrowColor="#000000" backgroundColor="bg-forestGreen" textColor="text-black"/>
        </div>
    )
}