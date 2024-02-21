/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/products/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/districts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/characteristics/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/bookings/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#0FA3C7",
        "primary-dark": "#075264",
        complement: "#0F75C7",
        second: "#8F0FC7",
        title: "#5E6470",
        error: {
          100: "#D44421",
          200: "#C7330F",
        },
        success: {
          100: "#BEF264",
          200: "#AFCE2D",
        },
      },
    },
  },
  plugins: [],
};
