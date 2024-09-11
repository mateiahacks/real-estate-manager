/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F93B1D",
        "gray-1": "#DBDBDB",
        "gray-2": "#808A93",
        "gray-3": "#F3F3F3",
        green: "#45A849",
      },
    },
  },
  plugins: [],
};
