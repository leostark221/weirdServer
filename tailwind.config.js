/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        coral: '#FF7F50',
        panelblue: '#055076',
      }
    },
  },
  plugins: [],
}