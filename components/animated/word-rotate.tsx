"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

interface WordRotateProps {
  words: string[];
  duration?: number;
  framerProps?: any;
  className?: string;
  colors?: string[];
}

export default function WordRotate({
  words,
  duration = 2500,
  framerProps = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
    transition: { duration: 0.5, ease: "easeOut" }, // Increased duration for smoother transition
  },
  className,
  colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A5"], // Default colors if not provided
}: WordRotateProps) {
  const [index, setIndex] = useState(0);
  const [lastTime, setLastTime] = useState(Date.now());
  
  useEffect(() => {
    let animationFrameId: number;

    const animate = () => {
      const now = Date.now();
      if (now - lastTime >= duration) {
        setIndex((prevIndex) => (prevIndex + 1) % words.length);
        setLastTime(Date.now());
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    // Start the animation loop
    animationFrameId = requestAnimationFrame(animate);

    // Handle tab visibility changes
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        // Reset the lastTime to ensure smooth transitions when tab becomes active
        setLastTime(Date.now());
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Clean up on component unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [words, duration, lastTime]);

  const currentColor = colors[index % colors.length]; // Determine current color

  return (
    <div className="overflow-hidden py-2">
      <AnimatePresence mode="wait">
        <motion.h1
          key={words[index]}
          className={cn(className)}
          style={{ color: currentColor }}
          {...framerProps}
        >
          {words[index]}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
}
