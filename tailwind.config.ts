import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1480px"
      }
    },

    colors: {
      primary: "#EE1D23",
      white: {
        DEFAULT: "#FFFFFF",
        1: "#BBBBBB",
        2: "#EEEDED"
      },

      gray: {
        1: "#090909",
        2: "#1B1B1B",
        3: "#323232"
      },

      card: {
        1: "rgba(0, 0, 0, .7)"
      }
    }
  }
} satisfies Config;