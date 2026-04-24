import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/Navigation";
import { Noise } from "@/components/Noise";

export const metadata: Metadata = {
  title: "Deutsch AI - Learn German to Fluency",
  description: "Master German from A0 to C1 with AI-powered conversation and pronunciation training.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body className="min-h-screen bg-background text-foreground flex md:flex-row flex-col selection:bg-primary selection:text-primary-foreground">
        <Noise />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navigation />
          <main className="flex-1 flex flex-col pb-20 md:pb-0 min-h-screen overflow-x-hidden relative">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
