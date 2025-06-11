/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Scan all apps
    "../../apps/*/src/**/*.{js,ts,jsx,tsx,html}",
    // Scan the ui package itself
    "./src/**/*.{js,ts,jsx,tsx,html}",
    // Also scan any components that might be in the ui package
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
