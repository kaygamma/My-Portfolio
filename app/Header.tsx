"use client";

import { Menu, Scan, X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import ProfilePic from "./profilepic1.png";
import ToggleTheme from "./components/ToggleTheme";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  const closeMenu = () => setIsMenuOpen(false);
  const isHome = pathname === "/";
  const links = [
    { label: "Home", route: "/", section: "#home" },
    { label: "Projects", route: "/projects", section: "#projects" },
    { label: "About", route: "/about", section: "#about" },
    { label: "Contact", route: "/contact", section: "#contact" },
  ];

  useEffect(() => {
    if (!isHome) return;

    const sectionIds = ["home", "projects", "about", "contact"];
    const updateActiveSection = () => {
      const active = sectionIds
        .map((id) => document.getElementById(id))
        .filter((section): section is HTMLElement => section !== null)
        .filter((section) => section.getBoundingClientRect().top <= 120)
        .pop();

      setActiveSection(active ? `#${active.id}` : "#home");
    };
    const initialFrame = window.requestAnimationFrame(updateActiveSection);
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("hashchange", updateActiveSection);

    return () => {
      window.cancelAnimationFrame(initialFrame);
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("hashchange", updateActiveSection);
    };
  }, [isHome]);

  const linkClass = (isCurrent: boolean) =>
    `rounded-full px-3 py-2 text-sm font-medium transition-colors hover:bg-purple-500/10 hover:text-purple-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500 dark:hover:text-purple-300 ${
      isCurrent
        ? "bg-purple-500/10 text-purple-700 dark:text-purple-300"
        : "text-slate-700 dark:text-slate-300"
    }`;

  const renderNavLink = (
    { label, route, section }: (typeof links)[number],
    mobile = false,
  ) => {
    const isCurrent = isHome ? activeSection === section : pathname === route;

    return (
      <Link
        key={route}
        href={isHome ? section : route}
        className={`${linkClass(isCurrent)} ${
          mobile ? "w-full text-center" : ""
        }`}
        aria-current={isCurrent ? (isHome ? "location" : "page") : undefined}
        onClick={mobile ? closeMenu : undefined}
      >
        {label}
      </Link>
    );
  };

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
            <p className="text-xl font-bold">Kay Gamma</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Software Engineer
            </p>
          </div>
        </div>

        <nav
          className="hidden md:flex md:gap-6 gap-3 m-auto"
          aria-label="Main navigation"
        >
          {links.map((link) => renderNavLink(link))}
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
          {links.map((link) => renderNavLink(link, true))}
          <ToggleTheme />
        </nav>
      )}
    </div>
  );
}
