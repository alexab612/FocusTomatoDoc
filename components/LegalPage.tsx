type LegalSection = {
  title: string;
  body: string[];
};

type LegalPageProps = {
  eyebrow: string;
  title: string;
  effectiveDate: string;
  intro: string;
  chineseSections: LegalSection[];
  englishSections: LegalSection[];
};

function SectionGroup({
  title,
  sections
}: {
  title: string;
  sections: LegalSection[];
}) {
  return (
    <section className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm sm:p-8">
      <h2 className="text-2xl font-black text-[var(--ink)]">{title}</h2>
      <div className="mt-6 space-y-6">
        {sections.map((section) => (
          <article key={section.title}>
            <h3 className="text-lg font-black text-[var(--ink)]">{section.title}</h3>
            <div className="mt-2 space-y-3 text-sm font-medium leading-7 text-[var(--muted)] sm:text-base">
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function LegalPage({
  eyebrow,
  title,
  effectiveDate,
  intro,
  chineseSections,
  englishSections
}: LegalPageProps) {
  return (
    <main className="min-h-screen bg-[var(--page-bg)] text-[var(--ink)]">
      <section className="section-shell py-10 sm:py-14">
        <a href="../" className="text-sm font-bold text-tomato transition hover:text-[var(--ink)]">
          Back to FocusTomato
        </a>

        <div className="mt-8 max-w-3xl">
          <p className="text-sm font-black uppercase text-tomato">{eyebrow}</p>
          <h1 className="mt-3 text-4xl font-black leading-tight text-[var(--ink)] sm:text-5xl">{title}</h1>
          <p className="mt-4 text-sm font-bold text-[var(--muted)]">Effective date: {effectiveDate}</p>
          <p className="mt-5 text-base font-medium leading-8 text-[var(--muted)] sm:text-lg">{intro}</p>
        </div>

        <div className="mt-10 grid gap-5">
          <SectionGroup title="中文" sections={chineseSections} />
          <SectionGroup title="English" sections={englishSections} />
        </div>
      </section>
    </main>
  );
}
