/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,ts,tsx,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#02b875",
        secondary: "#212121",
      },
      screens: {
        sm: { max: "639px" },
        // => @media (max-width: 639px) { ... }
        md: "800px",
        // => @media (min-width: 768px) { ... }
      },
    },
  },
  plugins: [],
}