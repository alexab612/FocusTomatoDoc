import { site } from "@/data/home";
import appIcon from "@/public/img/app-icon-37.png";
import downloadBadge from "@/public/img/download-badge.svg";
import Image from "next/image";

export function Header() {
  return (
    <header className="section-shell flex items-center justify-between py-5 sm:py-7">
      <a href="#" className="flex items-center gap-3" aria-label="FocusTomato home">
        <Image src={appIcon} alt="" className="h-9 w-9 rounded-lg" priority />
        <span className="text-lg font-extrabold tracking-normal">{site.productName}</span>
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
        className="hidden transition hover:-translate-y-0.5 sm:block"
        aria-label="Download FocusTomato on the Mac App Store"
      >
        <Image src={downloadBadge} alt="Download on the Mac App Store" className="h-10 w-auto" priority />
      </a>
    </header>
  );
}
