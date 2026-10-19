type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  headingLevel?: "h1" | "h2";
};

export default function PageIntro({
  eyebrow,
  title,
  description,
  headingLevel = "h1",
}: PageIntroProps) {
  const Heading = headingLevel;

  return (
    <header className="max-w-3xl py-14 sm:py-20">
      <p className="mb-5 inline-flex items-center rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-purple-700 dark:text-purple-300">
        {eyebrow}
      </p>
      <Heading className="text-4xl font-bold leading-tight tracking-tight text-slate-950 dark:text-white sm:text-6xl">
        {title}
      </Heading>
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
        {description}
      </p>
    </header>
  );
}
