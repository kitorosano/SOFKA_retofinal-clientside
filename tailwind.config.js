module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%': { transform: 'rotate(-5deg)' },
          '10%': { transform: 'rotate(5deg)' },
          '20%': { transform: 'rotate(-1deg)' },
          '30%': { transform: 'rotate(1deg)' },
          '40%, 60%': { transform: 'rotate(-0.5deg)' },
          '50%, 70%': { transform: 'rotate(0.5deg)' },
          '80%': { transform: 'rotate(-0.2deg)' },
          '85%': { transform: 'rotate(0.2deg)' },
          '90%, 100%': { transform: 'rotate(0deg)' }
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out',
      }
    },
  },
  plugins: [
    // require('@tailwindcss/forms')
    require('tailwind-scrollbar-hide')
  ],
}