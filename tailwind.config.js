/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['"Inter"'],
      },
      screens: {
        'xxl': '1568px', // Custom breakpoint at 1568px
      },
      spacing: {
        '120': '120px', // Add custom padding-top 120px
      },
      colors: {
        'primary': '#2B7DC2',
        'secondary': '#003C6E',
      },
      backgroundImage: {
        'custom-image': "url('/images/hero-bg.png')",
      },
      boxShadow: {
        'left-right-gray': '-4px 0 10px rgba(128, 128, 128, 0.3), 4px 0 10px rgba(128, 128, 128, 0.3)',
      },
    },
  },
  plugins: [],
}

