/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      Rubik: "'Rubik', sans-serif;",
    },
    colors: {
      transparent: "transparent",
      black: "#000000",
      white: "#ffffff",
      green: "#1FE544",
    },
    backgroundImage: {
      "green-to-blue":
        "linear-gradient(97.25deg, #1FE644 6.81%, #00A4B5 71.02%)",
    },
    extend: {},
  },
  plugins: [],
};
