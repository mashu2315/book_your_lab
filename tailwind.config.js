/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
            extend: {
              fontFamily: {
                nunito: ['Nunito', 'Poppins' ,'sans-serif'],
              },
              keyframes: {
      fadeIn: {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 },
      },
      fadeInUp: {
        '0%': { transform: 'translateY(20px)', opacity: 0 },
        '100%': { transform: 'translateY(0)', opacity: 1 },
      },
      fadeInSlow: {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 },
      },
      slideDown: {
        '0%': { transform: 'translateY(-20px)', opacity: 0 },
        '100%': { transform: 'translateY(0)', opacity: 1 },
      },
    },
    animation: {
      fadeIn: 'fadeIn 1s ease-out',
      fadeInUp: 'fadeInUp 1s ease-out',
      fadeInSlow: 'fadeInSlow 2s ease-out',
      slideDown: 'slideDown 1s ease-in-out',
    },
            },
          },
 plugins: [require("tailwind-scrollbar")],

}

