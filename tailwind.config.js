/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'working-img' : "url('/work-proceess.webp')"
      },
      fontFamily: {
        'primary' : ["Poppins", "sans-serif"],
        'secondary' : ["Syne", "sans-serif"]
      },
      colors: {
        'heroBg' : "#1E142E",
        'para': 'rgba(255, 255, 255, 0.85)',
        'primary': "#FF69B4"  
      }
    },
  },
  plugins: [],
}
