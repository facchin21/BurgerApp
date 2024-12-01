/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
    colors: {
      primary: "#28292B",
      secondary: "#FFFFFF",
      datail: "#FFBB4D",
      detailDark : '#1E1E1E',
      datailText : '#646464',
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};
