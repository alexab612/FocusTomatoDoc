import {
  AppWindow,
  Ban,
  BarChart3,
  BellOff,
  CalendarCheck,
  CheckCircle2,
  Globe2,
  Keyboard,
  LockKeyhole,
  MonitorCog,
  type LucideIcon,
  MousePointerClick,
  PauseCircle,
  Shield,
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
  title: string;
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
    eyebrow: "Website and app blocker for Mac",
    title: "Stay focused on your work.",
    description:
      "FocusTomato blocks distracting websites and apps on a schedule, during focus sessions, or whenever you need a clean Mac workspace.",
    rating: "4.8",
    ratingLabel: "average rating on the Mac App Store",
    meta: ["Works offline", "Native Mac app", "Setup in minutes"]
  },
  ratings: {
    title: "A practical blocker people keep using",
    stats: [
      { value: "4.8/5", label: "average user rating" },
      { value: "100k+", label: "downloads from focused Mac users" },
      { value: "2015", label: "blocking workflows refined since" }
    ]
  },
  reviews: [
    {
      quote:
        "The first blocker that felt native enough to leave running. The schedules are boring in the best possible way.",
      author: "Marina T.",
      title: "Designer"
    },
    {
      quote:
        "I use it for writing blocks and client work. It removes the whole negotiation with news, video, and social tabs.",
      author: "Owen K.",
      title: "Independent developer"
    },
    {
      quote:
        "Simple controls, quick lists, and enough friction that I do not just turn the blocker off when work gets hard.",
      author: "Priya S.",
      title: "Graduate student"
    },
    {
      quote:
        "The app-blocking rules are what made it stick for me. Closing the browser was not enough when chat was still open.",
      author: "Darren L.",
      title: "Product manager"
    },
    {
      quote:
        "It handles my recurring workday schedule and stays out of the way. That is exactly what I wanted.",
      author: "Nina R.",
      title: "Editor"
    },
    {
      quote:
        "Focus sessions are fast to start and the break behavior is clear. It feels like a Mac utility, not a productivity project.",
      author: "Caleb W.",
      title: "Founder"
    }
  ] satisfies Review[],
  features: [
    {
      title: "Block websites",
      description:
        "Block individual domains, full categories, or custom keyword matches across common Mac browsers.",
      icon: Ban,
      tone: "tomato"
    },
    {
      title: "Block apps",
      description:
        "Keep games, chat, mail, and entertainment apps closed while a rule or focus session is active.",
      icon: AppWindow,
      tone: "sky"
    },
    {
      title: "Focus sessions",
      description:
        "Start a timed block for deep work, studying, writing, coding, or any task that needs uninterrupted attention.",
      icon: TimerReset,
      tone: "butter"
    },
    {
      title: "Schedules",
      description:
        "Create repeating rules for weekdays, evenings, planning blocks, or any recurring attention window.",
      icon: CalendarCheck,
      tone: "leaf"
    },
    {
      title: "Harder to bypass",
      description:
        "Add guardrails that make blocked time meaningful when impulse control is the real bottleneck.",
      icon: LockKeyhole,
      tone: "ink"
    },
    {
      title: "Browser coverage",
      description:
        "Protect Safari, Chrome, Brave, Edge, Opera, and other browsers with the same blocking rules.",
      icon: Globe2,
      tone: "sky"
    },
    {
      title: "Quick controls",
      description:
        "Start, pause, extend, or inspect active protection without digging through complicated setup screens.",
      icon: Keyboard,
      tone: "butter"
    },
    {
      title: "Quiet alerts",
      description:
        "Only surface useful notifications for starts, stops, breaks, and blocked attempts.",
      icon: BellOff,
      tone: "leaf"
    },
    {
      title: "Presets",
      description:
        "Begin with common distraction categories, then tailor the rules to your actual habits.",
      icon: MousePointerClick,
      tone: "tomato"
    },
    {
      title: "System-native feel",
      description:
        "Use a compact Mac interface that looks like a utility and does not compete with your work.",
      icon: MonitorCog,
      tone: "ink"
    },
    {
      title: "Session history",
      description:
        "See completed focus blocks and patterns so the time you protected is visible.",
      icon: BarChart3,
      tone: "leaf"
    },
    {
      title: "Breaks",
      description:
        "Pause protection intentionally for breaks, then return to the same rules without rebuilding your setup.",
      icon: PauseCircle,
      tone: "butter"
    }
  ] satisfies Feature[],
  proof: [
    { label: "Block websites and categories", icon: Shield },
    { label: "Set app and schedule rules", icon: CalendarCheck },
    { label: "Keep sessions strict when needed", icon: CheckCircle2 }
  ],
  cta: {
    title: "Start with one focused session.",
    description:
      "Install FocusTomato, add the sites and apps that derail your work, and make the next block easier to finish.",
    note: "Available on the Mac App Store"
  },
  footerLinks: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Contact", href: "mailto:hello@example.com" }
  ]
};
