"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type Tab = {
  title: string;
  value: string;
  content?: React.ReactNode;
};

export const Tabs = ({ tabs: propTabs }: { tabs: Tab[] }) => {
  const [active, setActive] = useState<Tab>(propTabs[0]);
  const [tabs, setTabs] = useState<Tab[]>(propTabs);

  const moveSelectedTabToTop = (idx: number) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };

  const [hovering, setHovering] = useState(false);

  return (
    <div className="flex flex-col items-start justify-start w-full aspect-[1190/630] border border-t-0 border-black rounded-[20px] rounded-b-2xl mb-4 overflow-hidden pt-[2px] relative mt-4">
      <div className="flex items-center justify-between w-[calc(100%+3px)] -mt-[2px] -ml-[1px] p-0">
        {propTabs.map((tab, idx) => (
          <div
            key={tab.title}
            className={`flex items-center justify-between w-1/2 h-[60px] border border-black rounded-t-2xl ml-[-1px] cursor-pointer p-4 ${
              active.value === tab.value ? "border-b-0" : ""
            }`}
            data-index={idx}
            onClick={() => moveSelectedTabToTop(idx)}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            <h3 className={`tab-title ${active.value === tab.value ? "text-purple" : ""}`}>
              {tab.title}
            </h3>
            <div className={`tab-number ${active.value === tab.value ? "text-offwhite bg-purple" : ""}`}>
              {`0${idx + 1}`}
            </div>
          </div>
        ))}
      </div>
      <div className="flex w-full">
        {tabs.map((tab, idx) => (
          <motion.div
            key={tab.value}
            className={`flex flex-col h-[100%-96px] pointer-events-none absolute top-12 w-full items-center justify-center ${active.value === tab.value ? "active" : ""}`}
            data-index={idx}
            style={{
              transform: active.value === tab.value ? "translate(0px, 0px)" : "translate(0px, 120%) scale(0)",
            }}
          >
            <h1 className="text-[100px] text-zinc-900 tracking-tighter leading-tight m-8 p-8">
              {tab.content}
            </h1>
          </motion.div>
        ))}
      </div>
      <div className="absolute bottom-[4.44vw] flex items-center justify-between self-center w-[calc(100%-96px)]">
        <div className="text-purple">(Approach)</div>
        <div className="section-number">● {`0${tabs.indexOf(active) + 1} / ${tabs.length}`}</div>
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