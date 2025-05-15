/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light mode colors
        'light-bg': '#ffffff',
        'light-text': '#1a1a1a',
        // Dark mode colors
        'dark-bg': '#1a1a1a',
        'dark-text': '#ffffff',
      }
    },
  },
  plugins: [],
}

