"use client";

import { Menu, Scan, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import ProfilePic from "./profilepic1.png";
import ToggleTheme from "./components/ToggleTheme";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);
  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ];

  const linkClass = (href: string) =>
    `rounded-full px-3 py-2 text-sm font-medium transition-colors hover:bg-purple-500/10 hover:text-purple-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500 dark:hover:text-purple-300 ${
      pathname === href
        ? "bg-purple-500/10 text-purple-700 dark:text-purple-300"
        : "text-slate-700 dark:text-slate-300"
    }`;

  return (
    <div className="sticky top-0 z-10  border border-black/15 dark:border-white/15 bg-slate-100/10 dark:bg-black/60 text-slate-800 dark:text-slate-200 shadow-lg rounded-4xl m-1.5 backdrop-blur-xs transition-all duration-300">
      <div className="flex items-center justify-between md:justify-start md:gap-8 p-4">
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

          <div className="hidden md:flex flex-col">
            <h1 className="text-xl font-bold">Kay Gamma</h1>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Software Engineer
            </p>
          </div>
        </div>

        <nav
          className="hidden md:flex md:gap-6 gap-3 m-auto"
          aria-label="Main navigation"
        >
          {links.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={linkClass(href)}
              aria-current={pathname === href ? "page" : undefined}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <ToggleTheme />
        </div>

        <button
          type="button"
          className="md:hidden rounded-lg p-2 hover:bg-black/5 dark:hover:bg-white/10"
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <nav
          id="mobile-navigation"
          className="md:hidden flex flex-col items-center gap-5 border-t border-black/10 dark:border-white/15 px-4 py-5"
          aria-label="Mobile navigation"
        >
          {links.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`${linkClass(href)} w-full text-center`}
              aria-current={pathname === href ? "page" : undefined}
              onClick={closeMenu}
            >
              {label}
            </Link>
          ))}
          <ToggleTheme />
        </nav>
      )}
    </div>
  );
}
