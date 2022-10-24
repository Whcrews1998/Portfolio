/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
        timesNewRoman: "timesNewRoman",
      },
      colors: {
        contact: '#5f6d79',
        resumeTitle: '#4b4b4b',
      },
      fontSize: {
        xxs: ['0.65rem', '0.90rem']
      },
      fontWeight: {
        xxbold: '900',
      }
    },
  },
  plugins: [],
}