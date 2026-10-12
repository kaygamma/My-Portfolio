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
export function getTecIcon(iconName) {
  const iconData = stack.find(({ name }) => name === iconName) || null;
  if (!iconData) return null;

  const { name, Icon } = iconData;
  return (
    <div>
      <svg
        className="w-7 h-7"
        viewBox="0 0 24 24"
        role="img"
        aria-label={name}
        style={{ color: iconData.color }}
      >
        <path d={Icon.path} />
      </svg>
    </div>
  );
}
export { stack };
