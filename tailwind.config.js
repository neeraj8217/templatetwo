// /** @type {import('tailwindcss').Config} */
import { screens } from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";

// export const content = ["./*.{html,js}"];
// <% let colors
//   =['#032B43','#FFB100','#489FB5','#FEFDF900','#FEFDF9','#827684','#489FB5'];%>
// export const theme = {
//   extend: {
//     colors: {
//       ...colors,
//       prime: "#2A4C9B",
//       bg: "#f3f6f6",
//     },
//     screens: {
//       ...screens,
//       vsm: "320px",
//     },
//   },
// };

// export const plugins = [require("tailwind-scrollbar")({ nocompatible: true })];
import { screens } from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      vsm: "320px",
      sm: "640px",
      md: "768px,",
      xl: "1280px",
      xxl: "1536px",
    },
    extend: {
      colors: {
        primary: "#100e43",
        light: "#F0FBFC",
        dark: "#181d38",
      },
    },
  },
  plugins: [],
};
