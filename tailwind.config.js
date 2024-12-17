import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        garet: ["garet", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
        default: ["Garet", "sans-serif"],
      },
      borderRadius: {
        inherit: "inherit",
      },
      spacing: {
        navbar: "102px",
        "navbar-mobile": "80px",
      },
      backgroundImage: {
        "gradient-primary":
          "linear-gradient(271deg, #2685BF 0.46%, #90007F 99.54%)",
      },
      colors: {
        primary: "#1E0E62",
        "primary-dark": "#151439",
      },
    },
  },
  plugins: [nextui()],
};
