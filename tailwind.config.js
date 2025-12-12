/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
            brand: {
                orange: "#FF9933", // Saffron
                dark: "#1A1A1A",
                gold: "#D4AF37",
                light: "#FFF8F0",
            }
        },
        fontFamily: {
            serif: ['Playfair Display', 'serif'],
            sans: ['Inter', 'sans-serif'],
        }
      },
    },
    plugins: [],
  }
