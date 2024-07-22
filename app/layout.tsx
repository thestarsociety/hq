// app/layout.tsx
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/themeProvider";
import { constructMetadata } from "@/lib/metadata";
import ClientLayout from "./clientLayout";

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
      <body className={grotesk.className}>
        <ThemeProvider attribute="class" defaultTheme="light" forcedTheme="light" disableTransitionOnChange>
          <ClientLayout>{children}</ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}