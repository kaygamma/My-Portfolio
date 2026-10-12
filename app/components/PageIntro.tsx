type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function PageIntro({
  eyebrow,
  title,
  description,
}: PageIntroProps) {
  return (
    <header className="max-w-3xl py-14 sm:py-20">
      <p className="mb-5 inline-flex items-center rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-purple-700 dark:text-purple-300">
        {eyebrow}
      </p>
      <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-950 dark:text-white sm:text-6xl">
        {title}
      </h1>
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
        {description}
      </p>
    </header>
  );
}
