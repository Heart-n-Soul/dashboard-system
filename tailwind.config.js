/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        krona: ["Krona One", "sans-serif"],
      },
      colors: {
        "primary-1": "#858585",
        "primary-2": "#3F20FF",
        "primary-2-light": "#A293FF",
        secondary: "#4E4E4E",
        "seondary-1": "#414141",
        "secondary-2": "#909090",
        "secondary-3": "#D8D8D8",
        "secondary-4": "#EEEEEE",
      },
    },
    backgroundImage: {
      "linear-grad": "linear-gradient(90deg, #DF1EFF -28.65%, #FFC93E 100%)",
    },
  },

  plugins: [],
};
