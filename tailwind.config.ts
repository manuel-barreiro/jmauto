import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'buttonBlue': '#4762FF',
        'grayBg': '#F6F8F7',
        'cardBg': '#E9ECF3',
        'titleColor': '#333333',
        'footerBg': '#1A1A1A'
        

      }
    },
  },
  plugins: [],
};
export default config;
