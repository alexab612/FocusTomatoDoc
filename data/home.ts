import {
  AppWindow,
  Ban,
  BarChart3,
  BellOff,
  CalendarCheck,
  Clock3,
  Focus,
  Keyboard,
  LockKeyhole,
  type LucideIcon,
  MousePointerClick,
  ShieldCheck,
  TimerReset
} from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
};

export type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
  tone: "tomato" | "leaf" | "sky" | "butter" | "ink";
};

export type Review = {
  quote: string;
  author: string;
  role: string;
};

export const site = {
  productName: "FocusTomato",
  repoName: "focusTomato",
  nav: [
    { label: "Reviews", href: "#reviews" },
    { label: "Features", href: "#features" },
    { label: "Download", href: "#download" }
  ] satisfies NavItem[],
  hero: {
    eyebrow: "Distraction blocker for Mac",
    title: "Make focus the default.",
    description:
      "FocusTomato blocks tempting sites, quiets noisy apps, and wraps your work into calm focus sessions you can actually finish.",
    primaryCta: "Download for Mac",
    secondaryCta: "See features",
    rating: "4.9",
    ratingLabel: "average rating from focused makers"
  },
  ratings: {
    title: "Loved by people who do their best work on a Mac",
    stats: [
      { value: "25k+", label: "focus sessions started" },
      { value: "4.9/5", label: "average user rating" },
      { value: "12 min", label: "setup time saved weekly" }
    ]
  },
  reviews: [
    {
      quote:
        "It is strict enough to keep me honest, but polished enough that I leave it running all day.",
      author: "Maya Chen",
      role: "Product designer"
    },
    {
      quote:
        "The blocker feels instant, the schedule is simple, and the session view makes deep work visible.",
      author: "Jon Bell",
      role: "Independent developer"
    },
    {
      quote:
        "I stopped fiddling with productivity systems. FocusTomato gives me one obvious button: start.",
      author: "Ari Morgan",
      role: "Writer"
    }
  ] satisfies Review[],
  features: [
    {
      title: "Website blocking",
      description:
        "Create blocklists for social feeds, video rabbit holes, shopping sites, and any URL that steals attention.",
      icon: Ban,
      tone: "tomato"
    },
    {
      title: "App guardrails",
      description:
        "Keep chat, mail, and entertainment apps out of reach while a session is active.",
      icon: AppWindow,
      tone: "sky"
    },
    {
      title: "Focus timer",
      description:
        "Start crisp work intervals, extend them in one click, and take breaks without losing momentum.",
      icon: TimerReset,
      tone: "butter"
    },
    {
      title: "Scheduled protection",
      description:
        "Set recurring work blocks for mornings, writing days, study evenings, or maker hours.",
      icon: CalendarCheck,
      tone: "leaf"
    },
    {
      title: "Gentle lock mode",
      description:
        "Make rules harder to bypass during committed sessions without turning setup into a chore.",
      icon: LockKeyhole,
      tone: "ink"
    },
    {
      title: "Progress signals",
      description:
        "See completed sessions and streaks so focused time feels concrete, not invisible.",
      icon: BarChart3,
      tone: "tomato"
    },
    {
      title: "Keyboard first",
      description:
        "Trigger sessions and common actions quickly with a compact command-friendly workflow.",
      icon: Keyboard,
      tone: "sky"
    },
    {
      title: "Quiet notifications",
      description:
        "Only receive the alerts that matter: session starts, breaks, and return-to-work reminders.",
      icon: BellOff,
      tone: "leaf"
    },
    {
      title: "One-click setup",
      description:
        "Starter presets help you block the usual distractions, then fine-tune the rules to your habits.",
      icon: MousePointerClick,
      tone: "butter"
    }
  ] satisfies Feature[],
  cta: {
    title: "Ready for a calmer workday?",
    description:
      "Install FocusTomato, choose the distractions to block, and start your next session in under a minute.",
    button: "Get FocusTomato"
  },
  footerLinks: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Contact", href: "mailto:hello@example.com" }
  ]
};

export const heroRules = [
  { label: "Social feeds", status: "Blocked" },
  { label: "Video sites", status: "Blocked" },
  { label: "Chat apps", status: "Quiet" }
];

export const focusTimeline = [
  { time: "09:00", title: "Plan", icon: Clock3 },
  { time: "09:15", title: "Deep work", icon: Focus },
  { time: "10:45", title: "Review", icon: ShieldCheck }
];
