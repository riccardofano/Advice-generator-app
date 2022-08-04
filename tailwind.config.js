/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      cyan: {
        200: "hsl(193, 38%, 86%)",
      },
      neon: "hsl(150, 100%, 66%)",
      blue: {
        400: "hsl(217, 19%, 38%)",
        600: "hsl(217, 19%, 24%)",
        800: "hsl(218, 23%, 16%)",
      },
    },
  },
  plugins: [],
};
