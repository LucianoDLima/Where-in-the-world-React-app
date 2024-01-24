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
      },
    },
  },
  plugins: [],
};
