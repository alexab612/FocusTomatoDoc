import { HomeCopy } from "@/data/home";
import screenshot from "@/public/img/screenshot.png";
import Image from "next/image";

export function HeroMockup({ copy }: { copy: HomeCopy }) {
  return (
    <div className="mx-auto w-full max-w-[860px]">
      <div className="rounded-[26px] border border-[var(--border)] bg-[var(--surface)] p-2 shadow-soft sm:p-3">
        <Image
          src={screenshot}
          alt="FocusTomato blocking settings with website, app, and schedule tabs"
          className="h-auto w-full rounded-[20px]"
          priority
          sizes="(max-width: 900px) calc(100vw - 32px), 860px"
        />
      </div>
      <div className="mx-auto mt-5 grid max-w-3xl gap-3 sm:grid-cols-3">
        {copy.proof.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className="flex min-h-16 items-center gap-3 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-left shadow-sm"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-tomato/10 text-tomato">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <span className="text-sm font-extrabold leading-5 text-[var(--ink)]">{item.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
