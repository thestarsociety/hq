// app/layout.tsx
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/themeProvider";
import { constructMetadata } from "@/lib/metadata";
import { cn } from "@/lib/utils";

const grotesk = localFont({
  src: './ClashGrotesk-Variable.ttf',
  display: 'swap',
})

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
        <body className={cn(
          "h-full w-full transition-colors duration-300 bg-tssWhite",
          grotesk.className
        )}>
          <ThemeProvider attribute="class" defaultTheme="light" forcedTheme="light" disableTransitionOnChange>
            {children}
          </ThemeProvider>
        </body>
    </html>
  );
}