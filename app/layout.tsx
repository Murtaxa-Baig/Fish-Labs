import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fish Labs — Professional AI Voice Studio & Acoustic Architecture",
  description:
    "Transform your audio workflow with studio-grade voice cloning, instant vocal stem separation, and generative voice synthesis—engineered by Fish Labs.",
  keywords: [
    "Fish Labs",
    "AI Voice Studio",
    "Voice Cloning",
    "Stem Separation",
    "Neural Audio",
    "Acoustic Architecture",
  ],
  icons: {
    icon: "/images/logo-icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#fafafa] text-[#111827] font-sans selection:bg-[#f46117] selection:text-white">
        {children}
      </body>
    </html>
  );
}
