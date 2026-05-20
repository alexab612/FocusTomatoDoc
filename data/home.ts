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

export type Locale = "en" | "zh";
export type ThemeMode = "light" | "dark";

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

export type HomeCopy = {
  nav: NavItem[];
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    rating: string;
    ratingLabel: string;
    meta: string[];
  };
  ratings: {
    eyebrow: string;
    title: string;
    stats: Array<{ value: string; label: string }>;
  };
  reviews: Review[];
  featuresIntro: {
    eyebrow: string;
    title: string;
    description: string;
  };
  features: Feature[];
  proof: Array<{ label: string; icon: LucideIcon }>;
  cta: {
    title: string;
    description: string;
    note: string;
  };
  footerText: string;
  footerLinks: NavItem[];
  controls: {
    language: string;
    theme: string;
    light: string;
    dark: string;
    download: string;
  };
};

const commonFooterLinks = {
  en: [
    { label: "Privacy", href: "privacy/" },
    { label: "Terms", href: "terms/" },
    { label: "Contact", href: "https://github.com/alexab612" }
  ],
  zh: [
    { label: "隐私政策", href: "privacy/" },
    { label: "使用条款", href: "terms/" },
    { label: "联系", href: "https://github.com/alexab612" }
  ]
} satisfies Record<Locale, NavItem[]>;

export const site = {
  productName: "FocusTomato",
  repoName: "focusTomato",
  downloadUrl: "https://github.com/alexab612/FocusTomato/releases",
  copy: {
    en: {
      nav: [
        { label: "Reviews", href: "#reviews" },
        { label: "Features", href: "#features" },
        { label: "Download", href: "#download" }
      ],
      hero: {
        eyebrow: "Website and app blocker for Mac",
        title: "Stay focused on your work.",
        description:
          "FocusTomato blocks distracting websites and apps on a schedule, during focus sessions, or whenever you need a clean Mac workspace.",
        rating: "4.8",
        ratingLabel: "average rating from focused Mac users",
        meta: ["Works offline", "Native Mac app", "Setup in minutes"]
      },
      ratings: {
        eyebrow: "Reviews",
        title: "A practical blocker people keep using",
        stats: [{ value: "2026", label: "blocking workflows refined since" }]
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
        }
      ],
      featuresIntro: {
        eyebrow: "Features",
        title: "Block the distractions that break deep work.",
        description:
          "Websites, apps, schedules, sessions, strict modes, and small Mac-native controls all live in one focused utility."
      },
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
      ],
      proof: [
        { label: "Block websites and categories", icon: Shield },
        { label: "Set app and schedule rules", icon: CalendarCheck },
        { label: "Keep sessions strict when needed", icon: CheckCircle2 }
      ],
      cta: {
        title: "Start with one focused session.",
        description:
          "Install FocusTomato, add the sites and apps that derail your work, and make the next block easier to finish.",
        note: "Available from GitHub Releases"
      },
      footerText: "Website and app blocker for Mac.",
      footerLinks: commonFooterLinks.en,
      controls: {
        language: "Language",
        theme: "Theme",
        light: "Light",
        dark: "Dark",
        download: "Download on GitHub"
      }
    },
    zh: {
      nav: [
        { label: "评价", href: "#reviews" },
        { label: "功能", href: "#features" },
        { label: "下载", href: "#download" }
      ],
      hero: {
        eyebrow: "适用于 Mac 的网站与应用拦截器",
        title: "把注意力留给真正的工作。",
        description:
          "FocusTomato 可以按计划、专注会话或临时需求拦截分心网站和应用，让 Mac 工作区保持干净。",
        rating: "4.8",
        ratingLabel: "专注用户平均评分",
        meta: ["离线可用", "原生 Mac 应用", "几分钟完成设置"]
      },
      ratings: {
        eyebrow: "评价",
        title: "真正会被持续使用的专注工具",
        stats: [{ value: "2026", label: "blocking workflows refined since" }]
      },
      reviews: [
        {
          quote: "这是第一个我愿意长期运行的拦截器。计划功能很稳定，刚好不打扰。",
          author: "Marina T.",
          title: "设计师"
        },
        {
          quote: "我用它写作和做客户项目。新闻、视频、社交网页不会再反复打断我。",
          author: "Owen K.",
          title: "独立开发者"
        },
        {
          quote: "控制简单、列表清楚，而且有足够阻力，不会一遇到困难就关掉拦截。",
          author: "Priya S.",
          title: "研究生"
        }
      ],
      featuresIntro: {
        eyebrow: "功能",
        title: "拦住打断深度工作的分心源。",
        description:
          "网站、应用、计划、专注会话、严格模式和轻量 Mac 控件，都集中在一个清晰的工具里。"
      },
      features: [
        {
          title: "拦截网站",
          description: "拦截单个域名、分类或自定义关键词，覆盖常见 Mac 浏览器。",
          icon: Ban,
          tone: "tomato"
        },
        {
          title: "拦截应用",
          description: "在规则或专注会话生效时，让游戏、聊天、邮件和娱乐应用保持关闭。",
          icon: AppWindow,
          tone: "sky"
        },
        {
          title: "专注会话",
          description: "为写作、学习、编程或任何需要连续注意力的任务启动定时拦截。",
          icon: TimerReset,
          tone: "butter"
        },
        {
          title: "计划任务",
          description: "为工作日、晚上、规划时间或任何固定专注窗口创建重复规则。",
          icon: CalendarCheck,
          tone: "leaf"
        },
        {
          title: "更难绕过",
          description: "给容易分心的时段增加阻力，让被保护的时间真正有效。",
          icon: LockKeyhole,
          tone: "ink"
        },
        {
          title: "浏览器覆盖",
          description: "用同一套规则保护 Safari、Chrome、Brave、Edge、Opera 等浏览器。",
          icon: Globe2,
          tone: "sky"
        },
        {
          title: "快捷控制",
          description: "快速开始、暂停、延长或查看保护状态，不需要进入复杂设置。",
          icon: Keyboard,
          tone: "butter"
        },
        {
          title: "安静提醒",
          description: "只在开始、结束、休息和拦截尝试时发送必要通知。",
          icon: BellOff,
          tone: "leaf"
        },
        {
          title: "预设",
          description: "从常见分心分类开始，再按自己的习惯调整规则。",
          icon: MousePointerClick,
          tone: "tomato"
        },
        {
          title: "原生体验",
          description: "紧凑的 Mac 工具界面，不和你的工作争夺注意力。",
          icon: MonitorCog,
          tone: "ink"
        },
        {
          title: "历史统计",
          description: "查看完成的专注块和使用模式，让被保护的时间看得见。",
          icon: BarChart3,
          tone: "leaf"
        },
        {
          title: "休息",
          description: "有意识地暂停保护，休息后不用重新配置即可回到同一套规则。",
          icon: PauseCircle,
          tone: "butter"
        }
      ],
      proof: [
        { label: "拦截网站与分类", icon: Shield },
        { label: "设置应用和计划规则", icon: CalendarCheck },
        { label: "让专注时段更难被打断", icon: CheckCircle2 }
      ],
      cta: {
        title: "从一次专注会话开始。",
        description:
          "安装 FocusTomato，加入最容易拖走注意力的网站和应用，让下一段工作更容易完成。",
        note: "可从 GitHub Releases 下载"
      },
      footerText: "适用于 Mac 的网站与应用拦截器。",
      footerLinks: commonFooterLinks.zh,
      controls: {
        language: "语言",
        theme: "主题",
        light: "浅色",
        dark: "深色",
        download: "Download on GitHub"
      }
    }
  } satisfies Record<Locale, HomeCopy>
};
