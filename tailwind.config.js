/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: '#fff',
      black: '#000',
      default: '#707070',
      secondary: '#BDB43F',
      primary: '#0D676F',
      'primary-dark': '#274769',
      danger: '#E80643'
    },
    extend: {
      fontFamily: {
        ozone: ['DB Ozone X', 'prompt', 'SansSerif'],
      },
    },
  },
  plugins: [],
}
