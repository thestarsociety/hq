
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/themeProvider";
import { constructMetadata } from "@/lib/metadata";
import Menu from "@/components/animated/menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Menu />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
