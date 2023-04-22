/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dimGreen: "#A3DA8D",
        mainGreen: "#146356",
        mainOrange: "#FFA17A",
        dimPeach: "#FFE3D8",
        mainWhite: "#FFFFFF",
        dimWhite: "#FAFAFA;",
        mainBlack: "#0E0E0E",
        mainGrey: "#575757"
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}

