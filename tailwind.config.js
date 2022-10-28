const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["Nunito Sans", "sans-serif", ...defaultTheme.fontFamily.sans,],
        typewriter: ["Cabin", "sans-serif", ...defaultTheme.fontFamily.sans],
        hero_title: [
          "Work Sans",
          "sans-serif",
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
  plugins: [],
};
