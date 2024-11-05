import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lcars: {
          black: '#000000',
          spaceWhite: '#f5f6fa',
          violetCreme: '#ddbbff',
          green: '#33cc99',
          magenta: '#cc4499',
          blue: '#4455ff',
          yellow: '#ffcc33',
          violet: '#9944ff',
          orange: '#ff7700',
          africanViolet: '#cc88ff',
          text: '#cc77ff',
          red: '#dd4444',
          almond: '#ffaa90',
          almondCreme: '#ffbbaa',
          sunflower: '#ffcc66',
          bluey: '#7788ff',
          gray: '#666688',
          sky: '#aaaaff',
          ice: '#88ccff',
          gold: '#ffaa00',
          mars: '#ff2200',
          peach: '#ff8866',
          butterscotch: '#ff9966',
          tomato: '#ff5555',
          lilac: '#cc33ff',
          raC68: '#ff0000',
          raC69: '#cc0000',
          raC70: '#ee0000',
          raC71: '#dfdfdf',
          raC72: '#f7f7f7',
          tngC60: '#00bb00',
          tngC61: '#3f3'
        },
        matrix: {
          DEFAULT: 'hsl(123, 100%, 50%)',
          dark: 'hsl(120, 100%, 2%)',
          glow: 'hsl(123, 100%, 50%, 0.5)'
        },
      },
      fontFamily: {
        'lcars': 'Antonio, Arial Narrow, Avenir Next Condensed, sans-serif',
        'code': 'Fira Code, monospace'
      },
      borderRadius: {
        'lcars-standard': '1.5rem',
        'lcars-left': '1.5rem 0 0 1.5rem',
        'lcars-right': '0 1.5rem 1.5rem 0',
        'lcars-button': '1.5rem',
        'lcars-elbow-tl': '1.5rem 0 0 0',
        'lcars-elbow-tr': '0 1.5rem 0 0',
        'lcars-elbow-bl': '0 0 0 1.5rem',
        'lcars-elbow-br': '0 0 1.5rem 0',
      },
      spacing: {
        'lcars-button': '4.5rem',
        'lcars-panel': '12rem',
        'lcars-sidebar': '21rem',
        'lcars-gap': '0.75rem',
        'lcars-button-height': '3rem',
        'lcars-button-width': '9rem',
        'lcars-text-padding': '1.5rem',
        'lcars-elbow-curve': '1.5rem',
      },
      height: {
        'lcars-title': '3rem',
        'lcars-header': '6rem',
        'lcars-button': '3rem',
        'lcars-button-lg': '4.5rem',
      },
      width: {
        'lcars-button': '12rem',
        'lcars-sidebar': '21rem',
        'lcars-panel': '15rem',
      },
      fontSize: {
        'lcars': ['1rem', '1.5'],
        'lcars-title': ['1.5rem', '1.75'],
        'lcars-header': ['2rem', '2.25'],
      },
      backgroundImage: {
        'matrix-rain': 'linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.95))'
      },
      animation: {
        'trace-border': 'traceBorder 4s linear infinite',
      },
      keyframes: {
        traceBorder: {
          '0%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(100%, 0)' },
          '50%': { transform: 'translate(100%, 100%)' },
          '75%': { transform: 'translate(0, 100%)' },
          '100%': { transform: 'translate(0, 0)' }
        }
      },
      gridTemplateColums: {
        '17': 'repeat(17, minmax(0, 1fr))',
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;