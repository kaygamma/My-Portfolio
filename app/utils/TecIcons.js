import {
  siHtml5,
  siCss,
  siJavascript,
  siReact,
  siNextdotjs,
  siTailwindcss,
  siNodedotjs,
  siDocker,
  siFigma,
  siGit,
  siGithub,
} from "simple-icons";

const stack = [
  { name: "HTML5", Icon: siHtml5, color: `#${siHtml5.hex}` },
  { name: "CSS3", Icon: siCss, color: `#${siCss.hex}` },
  { name: "JavaScript", Icon: siJavascript, color: `#${siJavascript.hex}` },
  { name: "React", Icon: siReact, color: `#${siReact.hex}` },
  { name: "Next.js", Icon: siNextdotjs, color: `#${siNextdotjs.hex}` },
  { name: "Tailwind CSS", Icon: siTailwindcss, color: `#${siTailwindcss.hex}` },
  { name: "Node.js", Icon: siNodedotjs, color: `#${siNodedotjs.hex}` },
  { name: "Docker", Icon: siDocker, color: `#${siDocker.hex}` },
  { name: "Figma", Icon: siFigma, color: `#${siFigma.hex}` },
  { name: "Git", Icon: siGit, color: `#${siGit.hex}` },
  { name: "GitHub", Icon: siGithub, color: `#${siGithub.hex}` },
];
const socialIcons = [
  {
    name: "LinkedIn",
    Icon: {
      path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
    },
    color: "#0A66C2",
  },
];

export function getTecIcon(
  iconName,
  className = "h-7 w-7",
  decorative = false,
  colorOverride,
) {
  const iconData =
    [...stack, ...socialIcons].find(({ name }) => name === iconName) || null;
  if (!iconData) return null;

  const { name, Icon } = iconData;
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      role={decorative ? undefined : "img"}
      aria-label={decorative ? undefined : name}
      aria-hidden={decorative ? true : undefined}
      style={{
        color: colorOverride || iconData.color,
        fill: "currentColor",
      }}
    >
      <path d={Icon.path} />
    </svg>
  );
}
export { socialIcons, stack };
