import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./Header";
import Footer from "./Footer";
import ScrollProgress from "./components/ScrollProgress";
import { ThemeProvider } from "./context/ThemeProvider";
import { MotionConfig } from "framer-motion";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Edmund Yahaya | Portfolio",
  description:
    "Frontend developer portfolio — React, Next.js, and design-driven web projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  var isDark = stored ? stored === 'dark' : prefersDark;
                  if (isDark) {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-slate-100 dark:bg-black/95 text-slate-800 dark:text-slate-200 transition-colors duration-150">
        <MotionConfig reducedMotion="user">
          <ThemeProvider>
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </MotionConfig>
      </body>
    </html>
  );
}
