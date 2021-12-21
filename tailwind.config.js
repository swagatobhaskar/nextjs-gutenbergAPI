module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '4px 5px 2px rgba(0, 0, 0, 0.25)',
      },
      colors: {
        'header-blue': '#235D85',
      },
    },
  },
  plugins: [],
}
