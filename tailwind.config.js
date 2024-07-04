/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'glow': '0 0 10px rgb(239,68,68, 1), inset 0 0 5px rgba(209,38,38, 0.1)', // Adjust the color and size as needed
      },
    },
  },
  plugins: [],
}