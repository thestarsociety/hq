"use client";

import { useGlobalStore } from "@/hooks/use-store";
import { cn } from "@/lib/utils";

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isExpanded = useGlobalStore((state) => state.isExpanded);

  return (
    <div className={cn(
      "h-full w-full transition-colors duration-300",
      isExpanded ? "bg-black" : "bg-tssWhite"
    )}>
      {children}
    </div>
  );
}