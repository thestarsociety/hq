"use client";
import { TssDarkIcon } from "@/components/icons/tssDarkLogo";
import { TssIcon } from "@/components/icons/tssLogo";
import RetroGrid from "@/components/magicui/retro-grid";
import ShimmerButton from "@/components/magicui/shimmer-button";
import TypingAnimation from "@/components/magicui/typing-animation";
import { ModeToggle } from "@/components/modeToggle";
import { Loader2 } from "lucide-react";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { MultiStepLoader } from "@/components/magicui/multi-step-loader";
import { XSquareIcon } from "lucide-react";
import { ShinyButton } from "@/components/magicui/shiny-button";

const loadingStates = [
  { text: "Connecting to server" },
  { text: "Verifying SSL" },
  { text: "Let's Go!" }
];

export default function Home() {
  const { theme, systemTheme } = useTheme();
  const [resolvedTheme, setResolvedTheme] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    if (theme === "system") {
      setResolvedTheme(systemTheme);
    } else {
      setResolvedTheme(theme);
    }
  }, [theme, systemTheme]);
  
  const router = useRouter();
  
  const onClick = () => {
    setLoading(true);
  };
  
  const handleComplete = () => {
    router.push("/hq");
  };
  
  return (
    <div className="flex relative h-screen w-full items-center justify-center overflow-hidden">
      <MultiStepLoader
        loadingStates={loadingStates}
        loading={loading}
        duration={2000}
        onComplete={handleComplete} // Set onComplete callback
      />
      <div className="z-10 text-center flex flex-col items-center justify-center space-y-5">
        <ShinyButton name="🚀 Introducing Orion" urlPush="https://orion.thestarsociety.tech"/>
        {resolvedTheme === undefined ? (
          <Loader2 height={8} width={8} className="animate-spin" />
        ) : resolvedTheme === "dark" ? (
          <TssIcon height={250} width={250} />
        ) : (
          <TssDarkIcon height={250} width={250} />
        )}
        <TypingAnimation
          className="text-xl font-semibold text-black dark:text-white"
          text="We build cool stuff"
          duration={200}
        />
        <ShimmerButton className="shadow-2xl" shimmerColor="yellow" onClick={onClick}>
          <span className="text-white font-semibold">Enter HQ</span>
        </ShimmerButton>
        {loading && (
          <button
            className="fixed top-4 right-4 text-black dark:text-white z-[120]"
            onClick={() => setLoading(false)}
          >
            <XSquareIcon className="top-4 right-4 h-10 w-10" />
          </button>
        )}
      </div>
      <RetroGrid />
      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>
    </div>
  );
}
