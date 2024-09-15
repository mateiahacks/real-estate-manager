/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F93B1D",
        "primary-2": "#DF3014",
        "gray-1": "#DBDBDB",
        "gray-2": "#808A93",
        "gray-3": "#F3F3F3",
        "transparent-black": "#02152680",
        green: "#45A849",
      },
    },
  },
  plugins: [],
};
