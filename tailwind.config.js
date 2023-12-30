/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      spacing : {
        '53': '13.5rem',
        '62': '15.3rem',
        '98': '25rem',
      },
    },
  },
  plugins: [],
}
