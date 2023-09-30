/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "450px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      gridTemplateColumns: {
        hero: "2fr 1fr 1fr",
      },
      fontFamily: {
        blinker: ["Blinker"],
      },
      boxShadow: {
        navbar: "0 4px 5px -5px rgba(0,0,0,.23)",
        img: "0 0 13px 0 rgba(0,0,0,.18)",
      },
    },
  },
  plugins: [],
};
