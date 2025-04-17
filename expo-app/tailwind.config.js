/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    './src/app/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{tsx,jsx}'
  ],
  darkMode: 'class',
  presets: [require('nativewind/preset')],
  theme: {
    extend: {}
  },
  plugins: []
}
