/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#F9F9FB",
        text: "#313234",
        primary: "#F5CA48",
        secondary: "#F26C68",
        textgray: "#CDCDCD",
        textgray2: "#C4C4C4",
        price: "#E4723C",
      }
    },
  },
  plugins: [],
}

