import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink: '#0B0B0F',
        panel: '#111217',
        line: '#1F212A',
        mist: '#A7ADBB',
        black: '#000000',
        'prussian-blue': '#14213d',
        orange: '#fca311',
        'alabaster-grey': '#e5e5e5',
        white: '#ffffff',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Newsreader', 'Playfair Display', 'ui-serif', 'Georgia', 'serif'],
      },
      boxShadow: {
        glow: '0 0 80px rgba(255,255,255,0.08)',
      },
    },
  },
  plugins: [typography],
};
