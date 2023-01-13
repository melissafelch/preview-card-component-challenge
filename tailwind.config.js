/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      colors: {
        "cream": "hsl(30, 38%, 92%)",
        "dark-cyan": "hsl(158, 36%, 37%)",
        "dark-blue": "hsl(212, 21%, 14%)",
        "grey-blue": "hsl(228, 12%, 48%)"
      },
      backgroundImage: {
        'product-desktop': "url('../images/image-product-desktop.jpg')",
        'product-mobile': "url('../images/image-product-mobile.jpg')",
      },
      fontFamily: {
        'serif': ['Fraunces', 'serif'],
        'sans': ['Montserrat', 'sans-serif']
      },
      width: {
        'base': '600px',
        'mobile': '350px',
      },
      gridTemplateRows: {
        'mobile-card': "270px repeat(1, 1fr)"
      },
      letterSpacing: {
        'wild': '.4em'
      }
    },
  },
  plugins: [],
}
