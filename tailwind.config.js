/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      colors: {
        'blue-color': '#3952f5',
        'pink-color': '#fc4778',
        'gradint-color': 'linear-gradient(90deg, hsla(344, 97%, 63%, 1) 0%, hsla(232, 90%, 59%, 1) 100%)',
        'white-color': '#F5F5F5',
        'gray-color': '#d4d2ea'
      },
      fontFamily: {
        fredoka: ["Fredoka"]
      }
    },
  },
  plugins: [],
}

