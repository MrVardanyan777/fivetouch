/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'black': '#1e272e',
        'gray': '#818D97',
        'blue': '#8FACC0',
        'lightblue': '#D2E4F1'
      },
      backgroundImage: {
        'main-pattern': "url('/images/background-pattern.jpg')",
        'secondary-pattern': "url('/images/secondary-pattern.jpg')"
      },
      fontFamily: {
        'kalnia': ['Kalnia', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
