/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'open-sans': ["Open Sans", 'sans-serif'],
      'poppins': ["Poppins", 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#5F35F5',
        secondary: '#11175D',
      }
    },
  },
  plugins: [],
}

