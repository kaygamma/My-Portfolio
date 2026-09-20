import { Scan } from "lucide-react";
import ProfilePic from "./profilepic1.png";
import ToggleTheme from "./components/ToggleTheme";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="sticky top-0 z-10  border border-black/15 dark:border-white/15 bg-slate-100/10 dark:bg-black/60 text-slate-800 dark:text-slate-200 shadow-lg rounded-4xl m-1.5 backdrop-blur-xs transition-all duration-150">
      <div className="flex flex-wrap items-center justify-between p-4">
        <div className="flex items-center gap-4">
          <div className="relative flex items-center justify-center">
            <Scan
              className="absolute z-0 text-black/80 dark:text-white/80 "
              size={64}
              strokeWidth={0.2}
            />
            <Image
              src={ProfilePic}
              alt="Kay Gamma"
              width={40}
              height={40}
              className="border border-black/30 dark:border-white/20 backdrop-blur-md"
            />
          </div>

          <div>
            <h1 className="text-xl font-bold">Kay Gamma</h1>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Software Engineer
            </p>
          </div>
        </div>
        <nav className="flex gap-4">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <ToggleTheme />
      </div>
    </div>
  );
}
