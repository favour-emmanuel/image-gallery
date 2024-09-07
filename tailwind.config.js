/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        plusSans: ["'Plus Jakarta Sans'", "sans-serif"],
      },
      colors: {
        appWhite: "#f7f7f7",
        appGray: "#7f7f7f",
        appBlack: "#111111",
        appCyan: "#07A081",
      },
    },
  },
  plugins: [],
};
