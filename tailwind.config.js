/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'glass-gray': 'rgba(255, 255, 255, 0.1)', // Adjust alpha value as needed
      },
      boxShadow: {
        glass: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1)', // Example glassmorphism shadow
      },
    },
  },
  plugins: [],
}

