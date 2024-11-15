import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{gjs,gts,hbs,html,js,ts}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Playfair Display ', 'sans-serif'],
        lovelace: ['Lovelace', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
