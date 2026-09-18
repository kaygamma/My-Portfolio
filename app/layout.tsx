import type { Metadata } from "next";
import Link from 'next/link'
import { Geist, Geist_Mono } from "next/font/google";
import {Sun, Moon} from "lucide-react"
import "./globals.css";
import Header from "./Header";
import Footer from "./Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Edmund Yahaya | Portfolio",
  description: "Frontend developer portfolio — React, Next.js, and design-driven web projects.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="absolute min-h-full flex flex-col bg-slate-100 dark:bg-black/95 text-slate-800 dark:text-slate-200 transition-colors duration-150">
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
