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
      }
    }
  },
  plugins: [],
  darkMode: ['selector', '[data-mode="dark"]']
};
export default config;
