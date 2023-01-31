/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cyan: 'hsl(180, 66%, 49%)',
        'dark-violet': 'hsl(257, 27%, 26%)',
        red: 'hsl(0, 87%, 67%)',
        gray: 'hsl(0, 0%, 75%)',
        'grayish-violet': 'hsl(257, 7%, 63%)',
        'dark-blue': 'hsl(255, 11%, 22%)',
        'dark-violet-deep': 'hsl(260, 8%, 14%)',
      },
    },
    backgroundImage: {
      'shorten-desktopbg': "url('./src/assets/bg-shorten-desktop.svg')",
      'shorten-mobilebg': "url('./src/assets/bg-shorten-mobile.svg')",
    },
  },
  plugins: [],
};
