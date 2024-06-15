"use client"
import { TssDarkIcon } from "@/components/icons/tssDarkLogo";
import { TssIcon } from "@/components/icons/tssLogo";
import RetroGrid from "@/components/magicui/retro-grid";
import ShimmerButton from "@/components/magicui/shimmer-button";
import TypingAnimation from "@/components/magicui/typing-animation";
import { ModeToggle } from "@/components/modeToggle";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {

  const { theme, systemTheme } = useTheme();
  const [resolvedTheme, setResolvedTheme] = useState(theme);

  useEffect(() => {
    if(theme === "system") {
      setResolvedTheme(systemTheme);
    } else {
      setResolvedTheme(theme);
    }
  }, [theme, systemTheme]);

  const router = useRouter();

  const onClick = () => {
    router.push("/hq");
  }

  return (
    <div className="flex relative h-screen w-full items-center justify-center overflow-hidden">
      <div className="z-10 text-center flex flex-col items-center justify-center space-y-5">
        {resolvedTheme === "dark" ? (
          <TssIcon height={250} width={250}/>
        ) : (
          <TssDarkIcon height={250} width={250}/>
        )}
        <TypingAnimation 
          className="text-xl font-semibold text-black dark:text-white"
          text="We build cool stuff"
          duration={200}
        />
        <ShimmerButton className="shadow-2xl" shimmerColor="yellow" onClick={onClick}>
            <span className="text-white font-semibold">
              HQ
            </span>
        </ShimmerButton>
      </div>
      <RetroGrid />
      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>
    </div>
  );
}
