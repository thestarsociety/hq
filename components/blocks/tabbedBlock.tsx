"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Tab = {
  title: string;
  value: string;
  content?: React.ReactNode;
  accentTextColour?: string;
  numberBgColor?: string;
  backgroundImage?: string;
};

export const Tabs = ({ tabs: propTabs, footerTitle = "Approach" }: { tabs: Tab[]; footerTitle?: string  }) => {
  const [active, setActive] = useState<Tab>(propTabs[0]);
  const [tabs, setTabs] = useState<Tab[]>(propTabs);
  const [hovering, setHovering] = useState(false);

  const moveSelectedTabToTop = (idx: number) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };

  return (
    <div className="flex flex-col items-start justify-start w-full aspect-[1190/630] border border-t-0 border-black rounded-[20px] rounded-b-2xl mb-4 overflow-hidden pt-[2px] relative mt-4">
      <div className="flex items-center justify-between w-[calc(100%+3px)] -mt-[2px] -ml-[1px] p-0">
        {propTabs.map((tab, idx) => (
          <div
            key={tab.title}
            className={`flex items-center justify-between w-1/2 h-[60px] border border-black rounded-t-2xl ml-[-1px] cursor-pointer p-6 ${
              active.value === tab.value ? "border-b-0" : ""
            }`}
            data-index={idx}
            onClick={() => moveSelectedTabToTop(idx)}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            <h3
              className={`font-[400] text-lg ${
                active.value === tab.value
                  ? tab.accentTextColour || "text-spacePurple"
                  : ""
              }`}
            >
              {tab.title}
            </h3>
            <span
              className={`flex h-[1.6vw] w-[2.4vw] items-center justify-center border-[1px] border-zinc-900 rounded-[1.7vw] text-[1vw] text-zinc-950 ${
                active.value === tab.value
                  ? `text-gray-50 border-none ${
                      tab.numberBgColor || "bg-spacePurple"
                    }`
                  : ""
              }`}
            >
              {`0${idx + 1}`}
            </span>
          </div>
        ))}
      </div>
      <div className="flex w-full h-[calc(100%-60px)] relative">
        {tabs.map((tab, idx) => (
          <motion.div
            key={tab.value}
            className={`flex flex-col absolute top-0 left-0 w-full h-full items-center justify-center ${
              active.value === tab.value ? "active" : ""
            }`}
            data-index={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: active.value === tab.value ? 1 : 0,
              y: active.value === tab.value ? 0 : 20,
            }}
            transition={{ duration: 0.2 }}
          >
            {tab.backgroundImage && (
              <Image
                src={tab.backgroundImage}
                alt={`Background for ${tab.title}`}
                layout="fill"
                objectFit="cover"
                className="z-0"
              />
            )}
            <div className="z-10 relative">
              <h1 className="text-[100px] text-zinc-900 tracking-tighter leading-tight m-8 p-8">
                {tab.content}
              </h1>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="absolute bottom-8 left-0 right-0 flex items-center justify-between px-12">
        <div className="text-spacePurple">({footerTitle})</div>
          <div className="section-number">
            ● {`0${tabs.indexOf(active) + 1} / ${tabs.length}`}
          </div>
      </div>
    </div>
  );
};

export const FadeInDiv = ({
  tabs,
  hovering,
}: {
  tabs: Tab[];
  active: Tab;
  hovering?: boolean;
}) => {
  const isActive = (tab: Tab) => {
    return tab.value === tabs[0].value;
  };

  return (
    <div className="relative w-full h-full">
      {tabs.map((tab, idx) => (
        <motion.div
          key={tab.value}
          layoutId={tab.value}
          style={{
            scale: 1 - idx * 0.1,
            top: hovering ? idx * -50 : 0,
            zIndex: -idx,
            opacity: idx < 3 ? 1 - idx * 0.1 : 0,
          }}
          animate={{
            y: isActive(tab) ? [0, 40, 0] : 0,
          }}
          className="absolute top-0 left-0 w-full h-full"
        >
          {tab.content}
        </motion.div>
      ))}
    </div>
  );
};