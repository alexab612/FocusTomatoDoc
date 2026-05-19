import { HomeCopy, Locale, site, ThemeMode } from "@/data/home";
import appIcon from "@/public/img/app-icon-37.png";
import Image from "next/image";

type HeaderProps = {
  copy: HomeCopy;
  locale: Locale;
  theme: ThemeMode;
  onLocaleChange: (locale: Locale) => void;
  onThemeChange: (theme: ThemeMode) => void;
};

export function Header({ copy, locale, theme, onLocaleChange, onThemeChange }: HeaderProps) {
  return (
    <header className="section-shell flex flex-wrap items-center justify-between gap-4 py-5 sm:py-7">
      <a href="#" className="flex items-center gap-3" aria-label="FocusTomato home">
        <Image src={appIcon} alt="" className="h-9 w-9 rounded-lg shadow-sm" priority />
        <span className="text-lg font-extrabold tracking-normal">{site.productName}</span>
      </a>
      <nav className="hidden items-center gap-8 text-sm font-semibold text-[var(--muted)] md:flex">
        {copy.nav.map((item) => (
          <a key={item.href} href={item.href} className="transition hover:text-[var(--ink)]">
            {item.label}
          </a>
        ))}
      </nav>
      <div className="flex items-center gap-2">
        <div className="flex rounded-lg border border-[var(--border)] bg-[var(--surface)] p-1 text-xs font-extrabold text-[var(--muted)] shadow-sm">
          {(["en", "zh"] as Locale[]).map((item) => (
            <button
              key={item}
              type="button"
              aria-label={`${copy.controls.language}: ${item}`}
              onClick={() => onLocaleChange(item)}
              className={`rounded-md px-3 py-1.5 transition ${
                locale === item ? "bg-[var(--ink)] text-[var(--surface)]" : "hover:text-[var(--ink)]"
              }`}
            >
              {item === "en" ? "EN" : "中文"}
            </button>
          ))}
        </div>
        <div className="flex rounded-lg border border-[var(--border)] bg-[var(--surface)] p-1 text-xs font-extrabold text-[var(--muted)] shadow-sm">
          {(["light", "dark"] as ThemeMode[]).map((item) => (
            <button
              key={item}
              type="button"
              aria-label={`${copy.controls.theme}: ${item}`}
              onClick={() => onThemeChange(item)}
              className={`rounded-md px-3 py-1.5 transition ${
                theme === item ? "bg-[var(--ink)] text-[var(--surface)]" : "hover:text-[var(--ink)]"
              }`}
            >
              {item === "light" ? copy.controls.light : copy.controls.dark}
            </button>
          ))}
        </div>
        <a
          href={site.downloadUrl}
          className="hidden rounded-lg bg-[var(--ink)] px-4 py-2 text-sm font-extrabold text-[var(--surface)] shadow-sm transition hover:-translate-y-0.5 sm:block"
          aria-label={copy.controls.download}
        >
          {copy.controls.download}
        </a>
      </div>
    </header>
  );
}
