/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'dragon-color': "linear-gradient(180deg, #53a4cf 50%, #f16e57 50%);",
        'fly-color': "linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%)",
        'ground-color': "linear-gradient(180deg, #f7de3f 50%, #ab9842 50%);",
      }
    },
  },
  plugins: [],
}
