/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        senate: {
          primary: '#1a365d',
          secondary: '#718096',
          accent: '#e53e3e',
        },
      },
      fontFamily: {
        senate: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
