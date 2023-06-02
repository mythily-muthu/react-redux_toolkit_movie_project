/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        "primary": " #0f171e",
        "secondary": "#1a242f",
        "fontprimary": "#ffffff",
        "fontsecondary": "#79b8f3",
      }
    },
  },
  plugins: [],
}

