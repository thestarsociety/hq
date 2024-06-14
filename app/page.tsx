"use client"
import { TssIcon } from "@/components/icons/tssLogo";
import RetroGrid from "@/components/magicui/retro-grid";
import ShimmerButton from "@/components/magicui/shimmer-button";
import TypingAnimation from "@/components/magicui/typing-animation";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  const onClick = () => {
    router.push("/hq");
  }

  return (
    <div className="flex relative h-screen w-full items-center justify-center overflow-hidden">
      <RetroGrid />
      <div className="z-10 text-center flex flex-col items-center justify-center space-y-5">
        <TssIcon height={250} width={250}/>
        <TypingAnimation 
          className="text-xl font-semibold text-white"
          text="We build cool stuff"
          duration={200}
        />
        <ShimmerButton className="shadow-2xl" shimmerColor="yellow" onClick={onClick}>
            <span className="text-white font-semibold">
              HQ
            </span>
        </ShimmerButton>
      </div>
    </div>
  );
}
