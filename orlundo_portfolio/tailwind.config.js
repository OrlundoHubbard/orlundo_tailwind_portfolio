/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ['./pages/**/*.{js, ts, tsx}',
'./components/**/*.{js, jsx, ts, tsx}',
],

  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
        roboto: 'Roboto'
      }
    },
  },
  plugins: [],
}
