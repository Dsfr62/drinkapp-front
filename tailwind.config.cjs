/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/components/**/*.tsx",
    "./src/pages/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        firstBrown: "#907E63",
        firstNuts: "#ba9b7b",
        firstYellow: "#ddd09d",
        firstGreen: "#829a84",
        firstPink: "#bfa3a3",
      },
      spacing: {
        '128': '32rem',
      }
    },
  },
  plugins: [],
}
