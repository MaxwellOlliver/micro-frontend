/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Scan all apps more efficiently
    "../../apps/*/src/**/*.{js,ts,jsx,tsx}",
    // Scan the ui package itself
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
