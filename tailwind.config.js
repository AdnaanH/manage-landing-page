/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        BeVietnam: ['Be Vietnam Pro', 'sans-serif'],
      },
      colors: {
        'FmarineBlue': '#02295a',
        'FpurplishBlue': '#473dff',
        'FpastelBlue': '#adbeff',
        'FlightBlue': '#bfe2fd',
        'FstrawberryRed': '#ed3548',
        'FcoolGray': '#9699ab',
        'FlightGray': '#d6d9e6',
        'Fmagnolia': '#f0f6ff',
        'Falabaster': '#fafbff',
      }
    },
  },
  plugins: [],
}