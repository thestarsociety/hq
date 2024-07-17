"use client";

import { TagBlock } from "./tagBlock"

export const CapabilitiesBlock = () => {
    return (
        <div className="w-full h-auto border-[1.5px] border-none rounded-[20px] bg-transparent mt-4 flex flex-row gap-4 justify-between">
            <TagBlock title="DESIGN" tagNumber="01" items={["Creative Direction", "Custom Illustrations", "User Experience", "Visual Design", "Product Design", "Motion Design", "Brand Design", "Interaction Design", "Prototyping", "Copywriting"]}/>
            <TagBlock title="STRATEGY" tagNumber="02" items={["Product Management", "Business Analysis", "Product Roadmapping", "Ecosystem Strategy", "Brand Strategy", "Consumer Research & Testing", "Technology Strategy", "Content Strategy", "Social Media", "Data Planning"]}/>
            <TagBlock title="TECHNOLOGY" tagNumber="03" items={["Frontend Development", "Backend Development", "Technical Architecture", "CI/CD", "Cloud Management", "Machine Learning", "Manual & Automated QA", "API Development", "System Design", "Voice Interfaces"]}/>
        </div>
    )
}