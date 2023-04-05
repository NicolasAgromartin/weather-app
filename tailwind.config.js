/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/App.jsx",
    "./src/components/**/*.jsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Nunito' : ['Nunito Sans', 'sans-serif']
      },
      backgroundImage: {
        'sky-image' : "url('/image/sky.jpg')"
      }
    },
  },
  plugins: [],
}

