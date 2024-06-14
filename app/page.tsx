"use client"
import RetroGrid from "@/components/magicui/retro-grid";

export default function Home() {
  return (
    <div className="flex relative h-screen w-full items-center justify-center overflow-hidden">
      <RetroGrid />
      <div className="z-10 text-7xl font-bold text-center pointer-events-none">
        <h1>The Star Society</h1>
      </div>
    </div>
  );
}
