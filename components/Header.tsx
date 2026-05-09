import { site } from "@/data/home";
import { Download } from "lucide-react";

export function Header() {
  return (
    <header className="section-shell flex items-center justify-between py-5">
      <a href="#" className="flex items-center gap-3" aria-label="FocusTomato home">
        <span className="relative grid h-10 w-10 place-items-center rounded-lg bg-tomato text-white shadow-button">
          <span className="absolute -top-1 h-3 w-5 rounded-full bg-leaf" />
          <span className="h-5 w-5 rounded-full border-2 border-white/80" />
        </span>
        <span className="text-lg font-black tracking-normal">{site.productName}</span>
      </a>
      <nav className="hidden items-center gap-8 text-sm font-semibold text-ink/70 md:flex">
        {site.nav.map((item) => (
          <a key={item.href} href={item.href} className="transition hover:text-ink">
            {item.label}
          </a>
        ))}
      </nav>
      <a
        href="#download"
        className="inline-flex h-11 items-center gap-2 rounded-lg bg-ink px-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-black"
      >
        <Download className="h-4 w-4" aria-hidden />
        <span className="hidden sm:inline">Download</span>
      </a>
    </header>
  );
}
