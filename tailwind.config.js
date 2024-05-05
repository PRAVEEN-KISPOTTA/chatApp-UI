/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'secondary':'#ED553D'
      },
      fontFamily: {
        cursive: ['"Comic Sans MS"', 'cursive'],
      },
    },
  },
  plugins: [],
}