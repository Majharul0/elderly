/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0070F0",
        // light-primary: "#8ABDF8",
        light: "#E6F1FE",
        secondary: "#3D4854",
        secondary2: "#5D6670",
        lightGray: "#8386A8",
        black: "#3D4854",
        white: "#fff",
        success:"#01BE4F"
      },
      screens: {
        sm: "320px",
        md: "768px",
        md2: "900px",
        lg: "974px",
        lg2: "1280px",
        xl: "1440px",
        xl2:"2000px"
      },
    },
  },
  plugins: [],
};
