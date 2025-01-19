/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        chocolate: '#D2691E',
        mintcream: '#F5FFFA'
      },
      fontFamily: {
        fantasy: ['fantasy', 'cursive'],
        math: ['fantasy', 'cursive'],
      },
    },
  },
  plugins: [],
}
