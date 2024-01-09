const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      light: {
        colors: {
          primary: {
            //... 50 to 900
            foreground: "#FFFFFF",
            DEFAULT: "#4761D4",
          },
          secondary: {
            foreground: "#FFFFFF",
            DEFAULT: "#006FEE"
          },
          focus: "#ae7ede"
        }
      },
      dark: {
        colors: {
          primary: {
            //... 50 to 900
            foreground: "#FFFFFF",
            DEFAULT: "#4761D4",
          },
          focus: "#ae7ede"
        }
      }
    }
  })],
}

