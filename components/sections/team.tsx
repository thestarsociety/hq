"use client";

import Image from "next/image"
import QuoteBlock from "../blocks/quoteBlock";
import StarSociety from "../blocks/abstractText";
import AnimatedDopeText from "../blocks/animatedDopeText";

const quotes: string[][] = [
    ["Finding the best", "talent in the world and", "helping them make the", "best work of their lives."]
  ];

export const TeamSection = () => {
    return (
        <div className="w-full mt-5 mb-20">
            <div className="flex w-full justify-between mb-[20px] py-2.5 px-6 border-[1.5px] border-black rounded-[40px] font-[14px]">
                <p>01</p>
                <p>The Star Society</p>
            </div>
            <div className="w-full h-full p-[20px] border-[1.5px] hover:border-black rounded-[20px] bg-quasarBlue text-white">
                <p className="text-8xl p-4">04</p>
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
                    Team
                </h1>
            </div>

            {/* Node display */}
            <div className="w-full h-auto p-[20px] border-[1.5px] hover:border-black rounded-[20px] bg-quasarBlue text-white mt-4">
                <Image 
                    src="/assets/node-display.svg"
                    alt="node display"
                    width={1190}
                    height={720}
                />
            </div>

            {/* Quote */}
            <QuoteBlock quotes={quotes} backgroundColor="bg-quasarBlue"/>

            {/* Abstract text */}
            <StarSociety
                topTextLeft={{
                text: "The",
                fontSize: "text-[200px]",
                color: "text-quasarBlue"
                }}
                topTextRight={{
                    text: "Star",
                    fontSize: "text-[200px]",
                    color: "text-quasarBlue",
                    imageUrl: "/assets/title-block-s.svg",
                    imageWidth:280,
                    imageHeight:280
                  }}
                middleLeft={{
                    content: "A super connector community created by TSS to connect the star peoples."
                }}
                middleRight={{
                    text: "Talent",
                    fontSize: "text-[200px]",
                    color: "text-quasarBlue",
                    imageUrl:"/assets/title-block-t.svg",
                    imageHeight:280,
                    imageWidth:280
                }}
                bottomText={{
                    text: "Network",
                    fontSize: "text-[200px]",
                    color: "text-quasarBlue",
                    imageUrl: "/assets/title-block-n.svg", // Optional
                    imageWidth:280,
                    imageHeight:280  // Optional
                }}
                gap="6" // Optional, defaults to "4"
            />

            {/* Animated Dope */}
            <AnimatedDopeText 
                text="HOW WE WORK"
                backgroundColor="bg-quasarBlue"
                arrowColor="#FF3D00"
            />
        </div>
    )
}