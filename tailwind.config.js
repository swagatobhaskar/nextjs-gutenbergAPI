module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        // right bottom blur rgba
        '3xl': '2px 3px 2px rgba(0, 0, 0, 0.25)',
      },
      colors: {
        'header-blue': '#235D85',
      },
      borderWidth: {
        '1': '1px',
      },
      fontSize: {
        'tiny': '0.68rem',
      },
    },
  },
  plugins: [],
}
