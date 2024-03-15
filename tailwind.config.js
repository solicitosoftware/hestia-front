/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
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
      maxWidth: {
        mobile: "17.8rem",
        tablet: "33.5rem",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
