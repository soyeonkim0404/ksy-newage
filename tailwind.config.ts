import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        syBlue: '#538dcc',
        syRed: '#ff4234',
        syOrange: '#fe6e39',
        syGreen: '#64b580',
        sySky: '#eef5fd',
        syPurple: '#8d94ef',
        syNavy: '#333748'
        /* syBlue: '#5091e1',
        syRed: '#e86763',
        syGreen: '#87d487',
        syWhite: '#f8f1f0',
        syYellow: '#f8d558'*/
      },
      backgroundImage: {
        'custom-gradient':
          'radial-gradient(circle 369px at -2.9% 12.9%, rgba(247, 234, 163, 1) 0%, rgba(236, 180, 238, 0.56) 46.4%, rgba(163, 203, 247, 1) 100.7%)'
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite'
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' }
        }
      }
    },
    screens: {
      sm: '768px',
      md: '1024px',
      lg: '1280px',
      homeBreakPoint: '1689px',
      homeMobileBreakPoint: '693px'
    }
  },
  plugins: [],
  darkMode: ['selector', '[data-mode="dark"]']
};
export default config;
