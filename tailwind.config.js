/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        'primary': '#f1f1f1',
        'black-txt':"black",
        'secondary': '#25DD86',
        'dimmed': 'black',
        'bg': '#070B14',
        'card-bg': 'white',
        'fields': '#05080D',
        'btn-color': '#4155E4',
        'sub-btn': '#e2e5ff'
      },
      letterSpacing: {
        '1': '0.025em',
        '2': '0.05em',
        '3': '0.15em',
        '4': '0.2em',
      }
    },
  },
  corePlugins: {
  },
  plugins: [],
}