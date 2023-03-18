/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.js", "./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        netflix: {
          red: {
            button: "#E50914",
            DEFAULT: "#E50914",
          },
          gray: {
            form: "#333333",
            text: "#737373",
          },
          yellow: {
            form: "#E87C03",
          },
        },
      },
      fontFamily: {
        netflix: [
          "Netflix Regular",
          "Netflix Medium",
          "Netflix Bold",
          "Netflix Black",
          "Helvetica Neue",
          "Helvetica",
          "Arial,sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
