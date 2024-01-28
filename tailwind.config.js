/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "30rem",
        md: "48rem",
        lg: "61rem",
        xl: "80rem",
      },
      textColor: {
        primary: "hsl(var(--clr-text-primary) / <alpha-value>)",
      },
      backgroundColor: {
        primary: "hsl(var(--clr-bg-primary) / <alpha-value>)",
        secondary: "hsl(var(--clr-bg-secondary) / <alpha-value>)",
        loading: "hsl(var(--clr-bg-loading) / <alpha-value>)",
      },
      fill: {
        text: {
          primary: "hsl(var(--clr-text-primary) / <alpha-value>)",
        },
      },
      stroke: {
        text: {
          primary: "hsl(var(--clr-text-primary) / <alpha-value>)",
        },
      },
      boxShadow: {
        soft: "0px 3px 5px 0px rgba(0, 0, 0, 0.1)",
        foggy: "0px 0px 15px 0px rgba(0, 0, 0, 0.23)",
      },
      fontFamily: {
        nunito: ["Nunito Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
