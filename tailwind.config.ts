import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        primaryLight: "#F0F0F0",
        primary: "#013A63",
        primaryDark: "#011627",

        secondaryLight: "#E5F6FF",
        secondary: "#00B4D8",
        secondaryDark: "#0077A2",

        accent: "#FF7043",
      },
    },
  },
  plugins: [],
} satisfies Config;
