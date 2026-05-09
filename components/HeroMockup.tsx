import { focusTimeline, heroRules } from "@/data/home";
import { Check, Play, ShieldCheck } from "lucide-react";

export function HeroMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[520px] lg:mr-0">
      <div className="absolute -left-4 top-10 hidden h-28 w-28 rounded-full bg-sky/70 blur-3xl sm:block" />
      <div className="absolute -right-4 bottom-16 hidden h-32 w-32 rounded-full bg-tomato/25 blur-3xl sm:block" />
      <div className="relative rounded-[28px] border border-ink/10 bg-white p-3 shadow-soft">
        <div className="rounded-[20px] border border-ink/10 bg-[#1d1d1f] p-3 text-white">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex gap-1.5">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
            </div>
            <div className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-white/70">
              Active Session
            </div>
          </div>
          <div className="grid gap-3 md:grid-cols-[1fr_0.86fr]">
            <div className="rounded-xl bg-[#fffaf2] p-5 text-ink">
              <div className="mb-5 flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-lg bg-tomato text-white">
                  <ShieldCheck className="h-6 w-6" aria-hidden />
                </div>
                <div>
                  <p className="text-sm font-black">Morning Focus</p>
                  <p className="text-xs font-semibold text-ink/50">45 minutes remaining</p>
                </div>
              </div>
              <div className="relative mb-5 h-3 overflow-hidden rounded-full bg-ink/10">
                <div className="h-full w-[68%] rounded-full bg-tomato" />
              </div>
              <div className="grid grid-cols-3 gap-2">
                {["25", "05", "18"].map((value, index) => (
                  <div key={value} className="rounded-lg bg-white p-3 text-center ring-1 ring-ink/10">
                    <p className="text-xl font-black">{value}</p>
                    <p className="text-[10px] font-bold uppercase text-ink/50">
                      {["min", "break", "sites"][index]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-3">
              <div className="rounded-xl bg-white/10 p-4">
                <p className="mb-3 text-xs font-bold uppercase text-white/50">Blocklist</p>
                <div className="space-y-2">
                  {heroRules.map((rule) => (
                    <div key={rule.label} className="flex items-center justify-between rounded-lg bg-white px-3 py-2 text-ink">
                      <span className="text-sm font-bold">{rule.label}</span>
                      <span className="rounded-full bg-leaf/10 px-2 py-1 text-[10px] font-black uppercase text-leaf">
                        {rule.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <button className="flex h-14 items-center justify-center gap-2 rounded-xl bg-tomato font-black text-white shadow-button">
                <Play className="h-5 w-5 fill-white" aria-hidden />
                Start Focus
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative -mt-8 ml-auto mr-3 w-[88%] rounded-2xl border border-ink/10 bg-white p-3 shadow-soft sm:mr-8 sm:w-[78%]">
        <div className="grid grid-cols-3 gap-2">
          {focusTimeline.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.time} className="rounded-lg bg-[#f6f8fb] p-3">
                <Icon className="mb-3 h-4 w-4 text-tomato" aria-hidden />
                <p className="text-xs font-black">{item.time}</p>
                <p className="text-[11px] font-semibold text-ink/60">{item.title}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-3 flex items-center gap-2 rounded-lg bg-leaf/10 px-3 py-2 text-sm font-bold text-leaf">
          <Check className="h-4 w-4" aria-hidden />
          Protected until 11:00
        </div>
      </div>
    </div>
  );
}
