/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      objectPosition: {
        'photo': '0% 20%',
      },
      colors: {
        neutral: {
          0: 'rgb(253, 253, 253)',
          1: 'rgb(235, 238, 239)',
          2: 'rgb(204, 209, 210)',
          4: 'rgb(153, 162, 165)',
          6: 'rgb(153, 162, 165)',
          8: 'rgb(36, 43, 51)',
          10: 'rgb(0, 23, 31)',
        },
        site: {
          darkcolor1: '#151b29',
          darkcolor2: '#070d1b',
          darkcolor3: '#0a101e',
          darkcolor4: '#101624',
          darkcolor5: '#3f4551',
        },
        state: {
          red: 'rgb(255, 86, 79)',
          green: 'rgb(52, 199, 89)',
          orange: 'rgb(255, 145, 44)',
          blue: 'rgb(0, 167, 231)',
          purple: 'rgb(94, 84, 142)',
          yellow: 'rgb(254, 197, 68)',
        },
      },
      borderRadius: {
        inherit: 'inherit',
      },

      animation: {
        don: 'don',
      },
      transitionDelay: {
        3: '-3000ms',
      },
      keyframes: {
        don: {
          '0%': {transform: 'rotate(0deg)'},
          '100%': {transform: 'rotate(360deg)'},
        },
      },
    },
  },
  plugins: [],
}
