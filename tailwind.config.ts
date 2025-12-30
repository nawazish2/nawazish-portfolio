import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xs': '375px',    // Small phones
      'sm': '640px',    // Large phones
      'md': '768px',    // Tablets (iPad portrait)
      'lg': '1024px',   // Small laptops / iPad landscape
      'xl': '1280px',   // Laptops
      '2xl': '1536px',  // Large laptops / desktops
      '3xl': '1920px',  // Large desktops
    },
    extend: {
      colors: {
        // Dark mode colors
        dark: {
          bg: "#0a0a0a",
          surface: "#111111",
          border: "#1a1a1a",
        },
        // Light mode colors
        light: {
          bg: "#fafafa",
          surface: "#ffffff",
          border: "#e5e5e5",
        },
        // Accent colors
        cyan: {
          DEFAULT: "#00fff5",
          glow: "#00fff580",
          dark: "#00cccc",
        },
        magenta: {
          DEFAULT: "#ff00ff",
          glow: "#ff00ff80",
          dark: "#cc00cc",
        },
        // Neutral
        neutral: {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
          950: "#0a0a0a",
        },
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      animation: {
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "glitch": "glitch 0.3s ease-in-out",
        "gradient": "gradient 8s ease infinite",
        "spin-slow": "spin 20s linear infinite",
        "fade-in": "fade-in 0.5s ease-out",
        "slide-up": "slide-up 0.5s ease-out",
        "slide-down": "slide-down 0.5s ease-out",
        "cursor-trail": "cursor-trail 0.5s ease-out forwards",
      },
      keyframes: {
        "glow-pulse": {
          "0%, 100%": {
            boxShadow: "0 0 20px var(--tw-shadow-color)",
          },
          "50%": {
            boxShadow: "0 0 40px var(--tw-shadow-color)",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glitch: {
          "0%": { transform: "translate(0)" },
          "20%": { transform: "translate(-2px, 2px)" },
          "40%": { transform: "translate(-2px, -2px)" },
          "60%": { transform: "translate(2px, 2px)" },
          "80%": { transform: "translate(2px, -2px)" },
          "100%": { transform: "translate(0)" },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-down": {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "cursor-trail": {
          "0%": { opacity: "1", transform: "scale(1)" },
          "100%": { opacity: "0", transform: "scale(0.5)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "cyber-grid": `
          linear-gradient(to right, rgba(0, 255, 245, 0.1) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0, 255, 245, 0.1) 1px, transparent 1px)
        `,
      },
      backgroundSize: {
        "grid": "50px 50px",
      },
      boxShadow: {
        "glow-cyan": "0 0 20px rgba(0, 255, 245, 0.5)",
        "glow-magenta": "0 0 20px rgba(255, 0, 255, 0.5)",
        "glow-white": "0 0 20px rgba(255, 255, 255, 0.3)",
      },
    },
  },
  plugins: [],
};

export default config;

