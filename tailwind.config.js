module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Component/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(primary)",
        secondary: "var(secondary)",
      },
    },
  },
  plugins: [],
};
