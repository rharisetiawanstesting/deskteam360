import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0F172A",
          accent: "#F97316",
          soft: "#F8FAFC",
          pink: "#EC2179",
          navy: "#0B1538",
          "navy-soft": "#1B2554",
          cyan: "#22D3EE",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 8px 30px rgba(2,6,23,0.06)",
        glow: "0 0 0 4px rgba(34,211,238,0.18)",
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(120% 70% at 50% 0%, #1B2554 0%, #0B1538 60%, #060B22 100%)",
        "logo-gradient": "linear-gradient(135deg, #F97316 0%, #EC2179 100%)",
      },
      keyframes: {
        "hero-float": {
          "0%, 100%": { transform: "translate3d(0,-12px,0)" },
          "50%": { transform: "translate3d(0,12px,0)" },
        },
        marquee: {
          from: { transform: "translate3d(0,0,0)" },
          to: { transform: "translate3d(-50%,0,0)" },
        },
      },
      animation: {
        "hero-float": "hero-float 6s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
