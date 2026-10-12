"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Check,
  Copy,
  Mail,
} from "lucide-react";
import { getTecIcon } from "../utils/TecIcons";

const email = "yahedmund00@gmail.com";

const contactMethods = [
  {
    label: "Email",
    detail: email,
    href: `mailto:${email}`,
    Icon: Mail,
  },
  {
    label: "GitHub",
    detail: "Explore my work",
    href: "https://github.com/kaygamma",
    iconName: "GitHub",
  },
  {
    label: "LinkedIn",
    detail: "Let’s connect",
    href: "https://www.linkedin.com/in/edmund-yahaya/",
    iconName: "LinkedIn",
  },
];

export default function ContactActions() {
  const [copyState, setCopyState] = useState<
    "idle" | "copying" | "copied" | "error"
  >("idle");

  async function copyEmail() {
    setCopyState("copying");
    try {
      await navigator.clipboard.writeText(email);
      setCopyState("copied");
    } catch {
      setCopyState("error");
    }
  }

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-3">
        {contactMethods.map(({ label, detail, href, Icon, iconName }) => (
          <a
            key={label}
            href={href}
            target={label === "Email" ? undefined : "_blank"}
            rel={label === "Email" ? undefined : "noopener noreferrer"}
            className="group rounded-3xl border border-slate-200 bg-white/80 p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-purple-400 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-500 dark:border-white/10 dark:bg-white/5 dark:hover:border-purple-400/70"
          >
            <span className="mb-6 flex h-11 w-11 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-700 transition-colors group-hover:bg-purple-500 group-hover:text-white dark:text-purple-300">
              {iconName ? (
                getTecIcon(
                  iconName,
                  `h-5 w-5 ${iconName === "GitHub" ? "dark:invert" : ""}`,
                  true,
                )
              ) : Icon ? (
                <Icon size={20} />
              ) : null}
            </span>
            <span className="flex items-center justify-between font-semibold text-slate-900 dark:text-white">
              {label}
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </span>
            <span className="mt-1 block break-all text-sm text-slate-600 dark:text-slate-400">
              {detail}
            </span>
          </a>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={copyEmail}
          disabled={copyState === "copying"}
          className="inline-flex min-h-11 items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-purple-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-500 dark:bg-white dark:text-slate-900 dark:hover:bg-purple-200"
        >
          {copyState === "copied" ? <Check size={16} /> : <Copy size={16} />}
          {copyState === "copied"
            ? "Email copied"
            : copyState === "copying"
              ? "Copying email…"
              : "Copy email"}
        </button>
        <p aria-live="polite" className="text-sm text-slate-600 dark:text-slate-400">
          {copyState === "error" &&
            "Could not copy automatically. Use the email link above instead."}
        </p>
      </div>
    </div>
  );
}
