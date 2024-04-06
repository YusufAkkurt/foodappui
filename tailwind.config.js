/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#F9F9FB",
        text: "#313234",
        primary: "#F5CA48",
        secondary: "#F26C68",
        textgray: "#CDCDCD",
        price: "#E4723C"
      }
    },
  },
  plugins: [],
}

