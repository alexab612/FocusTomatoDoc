import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#151515",
        tomato: "#F05A38",
        leaf: "#2F8F62",
        butter: "#FFD76A",
        sky: "#BDE7FF"
      },
      boxShadow: {
        soft: "0 24px 70px rgba(18, 20, 23, 0.12)",
        button: "0 14px 28px rgba(240, 90, 56, 0.28)"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
