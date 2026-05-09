import { Feature, site } from "@/data/home";
import { Header } from "@/components/Header";
import { HeroMockup } from "@/components/HeroMockup";
import { ArrowRight, Download, Star } from "lucide-react";

const toneClasses: Record<Feature["tone"], string> = {
  tomato: "bg-tomato/10 text-tomato",
  leaf: "bg-leaf/10 text-leaf",
  sky: "bg-sky/50 text-[#12648b]",
  butter: "bg-butter/40 text-[#8a5c00]",
  ink: "bg-ink text-white"
};

export default function Home() {
  return (
    <main className="overflow-hidden">
      <div className="noise" />
      <Header />
      <section className="section-shell grid min-h-[calc(100vh-84px)] items-center gap-12 pb-16 pt-8 lg:grid-cols-[0.95fr_1.05fr] lg:pb-24">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-3 py-2 text-sm font-black text-ink shadow-sm">
            <span className="h-2 w-2 rounded-full bg-leaf" />
            {site.hero.eyebrow}
          </div>
          <h1 className="max-w-3xl text-5xl font-black leading-[0.96] tracking-normal text-ink sm:text-6xl lg:text-7xl">
            {site.hero.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg font-medium leading-8 text-ink/70 sm:text-xl">
            {site.hero.description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#download"
              className="inline-flex h-14 items-center justify-center gap-3 rounded-lg bg-tomato px-7 text-base font-black text-white shadow-button transition hover:-translate-y-0.5"
            >
              <Download className="h-5 w-5" aria-hidden />
              {site.hero.primaryCta}
            </a>
            <a
              href="#features"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-lg border border-ink/10 bg-white px-7 text-base font-black text-ink transition hover:-translate-y-0.5"
            >
              {site.hero.secondaryCta}
              <ArrowRight className="h-5 w-5" aria-hidden />
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-5 w-5 fill-butter text-butter" aria-hidden />
              ))}
            </div>
            <p className="text-sm font-bold text-ink/60">
              <span className="text-ink">{site.hero.rating}</span> {site.hero.ratingLabel}
            </p>
          </div>
        </div>
        <HeroMockup />
      </section>

      <section id="reviews" className="bg-white py-20">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase text-tomato">Reviews</p>
              <h2 className="mt-3 max-w-lg text-3xl font-black leading-tight text-ink sm:text-5xl">
                {site.ratings.title}
              </h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {site.ratings.stats.map((stat) => (
                <div key={stat.label} className="rounded-lg border border-ink/10 bg-[#fbfcff] p-5">
                  <p className="text-3xl font-black text-ink">{stat.value}</p>
                  <p className="mt-1 text-sm font-semibold text-ink/60">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {site.reviews.map((review) => (
              <article key={review.author} className="rounded-lg border border-ink/10 bg-[#fffaf2] p-6">
                <div className="mb-5 flex">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-tomato text-tomato" aria-hidden />
                  ))}
                </div>
                <p className="text-lg font-bold leading-7 text-ink">"{review.quote}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-ink text-sm font-black text-white">
                    {review.author
                      .split(" ")
                      .map((part) => part[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="text-sm font-black">{review.author}</p>
                    <p className="text-xs font-semibold text-ink/50">{review.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="py-20 sm:py-24">
        <div className="section-shell">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-black uppercase text-leaf">Features</p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-ink sm:text-5xl">
              Everything needed to stay on task.
            </h2>
            <p className="mt-4 text-lg font-medium leading-8 text-ink/60">
              Familiar focus tools, sharpened into a fast Mac-style workflow and backed by rules that keep distractions closed.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {site.features.map((feature) => {
              const Icon = feature.icon;
              return (
                <article key={feature.title} className="rounded-lg border border-ink/10 bg-white p-6 shadow-sm">
                  <div className={`mb-5 grid h-12 w-12 place-items-center rounded-lg ${toneClasses[feature.tone]}`}>
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <h3 className="text-xl font-black text-ink">{feature.title}</h3>
                  <p className="mt-3 text-sm font-semibold leading-7 text-ink/60">{feature.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="download" className="bg-ink py-14 text-white sm:py-20">
        <div className="section-shell relative overflow-hidden">
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-tomato/70" />
          <div className="absolute bottom-0 right-16 hidden h-28 w-28 rounded-full bg-sky/70 md:block" />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase text-butter">Download</p>
              <h2 className="mt-3 max-w-2xl text-3xl font-black leading-tight sm:text-5xl">
                {site.cta.title}
              </h2>
              <p className="mt-4 max-w-xl text-lg font-semibold leading-8 text-white/70">{site.cta.description}</p>
            </div>
            <a
              href="#"
              className="inline-flex h-14 items-center justify-center gap-3 rounded-lg bg-white px-7 text-base font-black text-ink transition hover:-translate-y-0.5"
            >
              <Download className="h-5 w-5" aria-hidden />
              {site.cta.button}
            </a>
          </div>
        </div>
      </section>

      <footer className="section-shell flex flex-col gap-4 border-t border-ink/10 py-8 text-sm font-semibold text-ink/60 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {site.productName}. Built as a static homepage clone.</p>
        <div className="flex gap-5">
          {site.footerLinks.map((link) => (
            <a key={link.label} href={link.href} className="transition hover:text-ink">
              {link.label}
            </a>
          ))}
        </div>
      </footer>
    </main>
  );
}
