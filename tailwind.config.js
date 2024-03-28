/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'simplon-norm': ['Simplon Norm', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
