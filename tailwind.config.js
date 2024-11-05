/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "16px",
      },
      colors: {
        primary: "#10b981",
        secondary: "#64748b",
        dark: "#0f172a",
      },
      screens: {
        xl: "1320px",
      },
    },
  },
  plugins: [],
};
