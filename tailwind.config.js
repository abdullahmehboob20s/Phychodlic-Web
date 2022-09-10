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
      "light-gray": "rgba(255, 255, 255, 0.1)",
    },
    backgroundImage: {
      "green-to-blue":
        "linear-gradient(97.25deg, #1FE644 6.81%, #00A4B5 71.02%)",
      "light-green-gradient":
        "linear-gradient(85.18deg, #1A1E1B -1.07%, rgba(1, 27, 8, 0.6) 93.12%)",
    },
    boxShadow: {
      "team-card": "0px 4px 9px rgba(0, 0, 0, 0.37)",
    },
    extend: {
      zIndex: {
        60: 60,
        70: 70,
        80: 80,
        90: 90,
        100: 100,
        110: 110,
        120: 120,
        140: 140,
        160: 160,
      },
    },
  },
  plugins: [],
};
