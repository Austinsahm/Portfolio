/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}','./node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {
      backgroundImage: {
        'more-bgImage': "url('/assets/background_image.jpg')",
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
