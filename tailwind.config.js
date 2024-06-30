/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: 'Oswald, ui-serif',
        judul : 'lexend',
        penjelasan : 'merriweather',
        other : 'notosans',
      }
    },
    container: {
      center: true,
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light", "dark", "forest", "luxury"], // You can specify the themes you want to use
  },
}

