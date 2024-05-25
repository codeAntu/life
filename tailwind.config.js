/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: '#39d353',
        primary: '#1e1e1e',
        secondary: '#2e2e2e',
        bg : "#0d1117"
      },
    },
  },
  plugins: [],
}
