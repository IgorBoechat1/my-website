
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      clipPath: {
        'inward-diamond': 'path("M50 0 C65 15, 65 15, 100 50 C85 65, 85 65, 50 100 C35 85, 35 85, 0 50 C15 35, 15 35, 50 0 Z")',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        primary: ['Monigue', 'sans-serif'],
        secondary: ['Neue Regrade', 'sans-serif'],
      },
      fontSize: {
        hero: '30vw',
        igor: '35vw',
        digital: '37vw',
        creative: '30vw',
        dev: '25vw',
        res: '15vw',
        large: '5rem',
        medium: '3rem',
        small: '1.5rem',
      },
      keyframes: {
        zoomBackground: {
          '0%': { backgroundSize: '100%' },
          '50%': { backgroundSize: '120%' },
          '100%': { backgroundSize: '100%' },
        },
      },
      animation: {
        zoomBackground: 'zoomBackground 20s infinite',
      },
    },
  },
  plugins: [],
}