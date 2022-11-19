/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.vue",
  ],
  theme: {
    fontFamily: {
      sans: ['Rubik', 'Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        'blue': '#1fb6ff',
        'dark-blue': '#002D62',
        'dark-blue2': '#00244d',
        'blue': '#4884ee',
        'blue2': '#3E8EDE',
        'grey': '#5C5C5C',
        'yellow': '#FFC72C',
      },
    },
  },
  plugins: [],
}
