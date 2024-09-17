/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        opensans:'open-sans'
      },
      aspectRatio:{
        card:'2/3'
      }
    },
  },
  plugins: [],
}