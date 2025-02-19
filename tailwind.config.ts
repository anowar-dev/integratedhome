import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // primary: "#CBFF8C",
        primary: "#CBFF8C",
        // secondary: "#1F363D",
        secondary: "#353935",
        light: "#FFF",
      },
    },
  },
  plugins: [],
} satisfies Config;
