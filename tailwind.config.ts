import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        sky1: "#C3EBFA",
        skyLight1: "#EDF9FD",
        purple1: "#CFCEFF",
        purpleLight1: "#F1F0FF",
        Yellow1: "#FAE27C",
        YellowLight1: "#FEFCE8",
      },
    },
  },
  plugins: [],
};
export default config;
