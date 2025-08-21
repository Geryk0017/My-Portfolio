module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  safelist: ['!duration-[0ms]', '!delay-[0ms]', 'html.js :where([class*="taos:"]:not(.taos-init))'],
  content: {
    relative: true,
    transform: (content) => content.replace(/taos:/g, ''),
    files: ['./src/*.{html,js}'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#102E40',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('taos/plugin')],
}
