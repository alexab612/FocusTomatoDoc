import { Feature, site } from "@/data/home";
import { Header } from "@/components/Header";
import { HeroMockup } from "@/components/HeroMockup";
import appIcon from "@/public/img/app-icon-37.png";
import downloadBadge from "@/public/img/download-badge.svg";
import starRating from "@/public/img/5-star-rating.svg";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

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
      <Header />
      <section className="section-shell pb-16 pt-8 text-center sm:pb-20 sm:pt-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-3 py-2 text-sm font-extrabold text-ink shadow-sm">
            <Image src={appIcon} alt="" className="h-6 w-6 rounded-md" priority />
            {site.hero.eyebrow}
          </div>
          <h1 className="mx-auto max-w-4xl text-5xl font-black leading-[0.98] tracking-normal text-ink sm:text-6xl lg:text-7xl">
            {site.hero.title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg font-medium leading-8 text-ink/70 sm:text-xl">
            {site.hero.description}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4">
            <a
              href="#download"
              className="transition hover:-translate-y-0.5"
              aria-label="Download FocusTomato on the Mac App Store"
            >
              <Image src={downloadBadge} alt="Download on the Mac App Store" className="h-12 w-auto" priority />
            </a>
            <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm font-bold text-ink/60">
              {site.hero.meta.map((item) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-leaf" aria-hidden />
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-7 flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-4">
            <Image src={starRating} alt="Five star rating" className="h-5 w-auto" priority />
            <p className="text-sm font-bold text-ink/65">
              <span className="text-ink">{site.hero.rating}</span> {site.hero.ratingLabel}
            </p>
          </div>
        </div>
        <div className="mt-11 sm:mt-14">
          <HeroMockup />
        </div>
      </section>

      <section id="reviews" className="bg-white py-16 sm:py-20">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase text-tomato">Reviews</p>
              <h2 className="mt-3 max-w-lg text-3xl font-black leading-tight text-ink sm:text-5xl">
                {site.ratings.title}
              </h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {site.ratings.stats.map((stat) => (
                <div key={stat.label} className="rounded-lg border border-ink/10 bg-[#f7f8f9] p-5">
                  <p className="text-3xl font-black text-ink">{stat.value}</p>
                  <p className="mt-1 text-sm font-semibold text-ink/60">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {site.reviews.map((review) => (
              <article key={review.author} className="rounded-lg border border-ink/10 bg-white p-6 shadow-sm">
                <Image src={starRating} alt="" className="mb-5 h-4 w-auto" />
                <p className="text-base font-bold leading-7 text-ink">&ldquo;{review.quote}&rdquo;</p>
                <div className="mt-6 flex items-center gap-3 border-t border-ink/10 pt-4">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-[#eef5f1] text-sm font-black text-leaf">
                    {review.author
                      .split(" ")
                      .map((part) => part[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="text-sm font-black">{review.author}</p>
                    <p className="text-xs font-semibold text-ink/50">{review.title}</p>
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
              Block the distractions that break deep work.
            </h2>
            <p className="mt-4 text-lg font-medium leading-8 text-ink/60">
              Websites, apps, schedules, sessions, strict modes, and small Mac-native controls all live in one focused utility.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {site.features.map((feature) => {
              const Icon = feature.icon;
              return (
                <article key={feature.title} className="rounded-lg border border-ink/10 bg-white p-5 shadow-sm">
                  <div className={`mb-5 grid h-11 w-11 place-items-center rounded-lg ${toneClasses[feature.tone]}`}>
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <h3 className="text-lg font-black text-ink">{feature.title}</h3>
                  <p className="mt-3 text-sm font-semibold leading-7 text-ink/60">{feature.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="download" className="border-y border-ink/10 bg-[#f6f8fb] py-16 sm:py-20">
        <div className="section-shell text-center">
          <Image src={appIcon} alt="" className="mx-auto h-14 w-14 rounded-xl" />
          <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-black leading-tight text-ink sm:text-5xl">
            {site.cta.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg font-semibold leading-8 text-ink/65">{site.cta.description}</p>
          <div className="mt-8 flex flex-col items-center gap-3">
            <a
              href="#"
              className="transition hover:-translate-y-0.5"
              aria-label="Download FocusTomato on the Mac App Store"
            >
              <Image src={downloadBadge} alt="Download on the Mac App Store" className="h-12 w-auto" />
            </a>
            <p className="text-sm font-bold text-ink/55">{site.cta.note}</p>
          </div>
        </div>
      </section>

      <footer className="section-shell flex flex-col gap-4 py-8 text-sm font-semibold text-ink/60 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {site.productName}. Website and app blocker for Mac.</p>
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
