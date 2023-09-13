/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'white': '#F3F4F8',
        'orange': '#FFBB5D',
        'orange-light': '#FFEED5',
        'teal': '#70BBB9',
        'teal-light': '#9FE4E5',
        'blue-paypal': '#2997D4',
        'purple-discord': '#7289DA',
        'dark': '#101223',
      },
    },
  },
  plugins: [],
}