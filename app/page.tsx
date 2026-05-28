"use client";

import { Feature, Locale, site, ThemeMode } from "@/data/home";
import { Header } from "@/components/Header";
import { HeroMockup } from "@/components/HeroMockup";
import appIcon from "@/public/img/app-icon-37.png";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const toneClasses: Record<Feature["tone"], string> = {
  tomato: "bg-tomato/10 text-tomato",
  leaf: "bg-leaf/10 text-leaf",
  sky: "bg-sky/50 text-[#12648b]",
  butter: "bg-butter/40 text-[#8a5c00]",
  ink: "bg-[var(--ink)] text-[var(--surface)]"
};

export default function Home() {
  const [locale, setLocale] = useState<Locale>("en");
  const [theme, setTheme] = useState<ThemeMode>("light");
  const copy = site.copy[locale];

  useEffect(() => {
    const savedLocale = window.localStorage.getItem("focustomato-locale") as Locale | null;
    const savedTheme = window.localStorage.getItem("focustomato-theme") as ThemeMode | null;
    if (savedLocale === "en" || savedLocale === "zh") setLocale(savedLocale);
    if (savedTheme === "light" || savedTheme === "dark") setTheme(savedTheme);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("focustomato-locale", locale);
    document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
  }, [locale]);

  useEffect(() => {
    window.localStorage.setItem("focustomato-theme", theme);
  }, [theme]);

  return (
    <main data-theme={theme} className="min-h-screen overflow-hidden bg-[var(--page-bg)] text-[var(--ink)] transition-colors">
      <Header copy={copy} locale={locale} theme={theme} onLocaleChange={setLocale} onThemeChange={setTheme} />
      <section className="section-shell pb-16 pt-8 text-center sm:pb-20 sm:pt-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm font-extrabold text-[var(--ink)] shadow-sm">
            <Image src={appIcon} alt="" className="h-6 w-6 rounded-md" priority />
            {copy.hero.eyebrow}
          </div>
          <h1 className="mx-auto max-w-4xl text-5xl font-black leading-[0.98] tracking-normal text-[var(--ink)] sm:text-6xl lg:text-7xl">
            {copy.hero.title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg font-medium leading-8 text-[var(--muted)] sm:text-xl">
            {copy.hero.description}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4">
            <a
              href={site.downloadUrl}
              className="rounded-xl bg-[var(--ink)] px-6 py-3 text-base font-extrabold text-[var(--surface)] shadow-button transition hover:-translate-y-0.5"
              aria-label={copy.controls.download}
            >
              {copy.controls.download}
            </a>
            <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm font-bold text-[var(--muted)]">
              {copy.hero.meta.map((item) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-leaf" aria-hidden />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-11 sm:mt-14">
          <HeroMockup copy={copy} />
        </div>
      </section>

      <section id="features" className="py-20 sm:py-24">
        <div className="section-shell">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-black uppercase text-leaf">{copy.featuresIntro.eyebrow}</p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-[var(--ink)] sm:text-5xl">
              {copy.featuresIntro.title}
            </h2>
            <p className="mt-4 text-lg font-medium leading-8 text-[var(--muted)]">
              {copy.featuresIntro.description}
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {copy.features.map((feature) => {
              const Icon = feature.icon;
              return (
                <article key={feature.title} className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm">
                  <div className={`mb-5 grid h-11 w-11 place-items-center rounded-lg ${toneClasses[feature.tone]}`}>
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <h3 className="text-lg font-black text-[var(--ink)]">{feature.title}</h3>
                  <p className="mt-3 text-sm font-semibold leading-7 text-[var(--muted)]">{feature.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="download" className="border-y border-[var(--border)] bg-[var(--band)] py-16 sm:py-20">
        <div className="section-shell text-center">
          <Image src={appIcon} alt="" className="mx-auto h-14 w-14 rounded-xl" />
          <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-black leading-tight text-[var(--ink)] sm:text-5xl">
            {copy.cta.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg font-semibold leading-8 text-[var(--muted)]">{copy.cta.description}</p>
          <div className="mt-8 flex flex-col items-center gap-3">
            <a
              href={site.downloadUrl}
              className="rounded-xl bg-[var(--ink)] px-6 py-3 text-base font-extrabold text-[var(--surface)] shadow-button transition hover:-translate-y-0.5"
              aria-label={copy.controls.download}
            >
              {copy.controls.download}
            </a>
            <p className="text-sm font-bold text-[var(--muted)]">{copy.cta.note}</p>
          </div>
        </div>
      </section>

      <footer className="section-shell flex flex-col gap-4 py-8 text-sm font-semibold text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {site.productName}. {copy.footerText}</p>
        <div className="flex gap-5">
          {copy.footerLinks.map((link) => (
            <a key={link.label} href={link.href} className="transition hover:text-[var(--ink)]">
              {link.label}
            </a>
          ))}
        </div>
      </footer>
    </main>
  );
}
