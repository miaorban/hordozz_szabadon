import {nextui} from '@nextui-org/theme';
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'hordozas-brown': '#bda78f',
      'hordozas-beige': '#eceada',
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        white: "var(--white)",
      },
      backgroundImage: {
        'hordozas-brown-1': "url('/top_right.svg')",
        'hordozas-brown-2': "url('/bottom_left.svg')",
        'hordozas-mixed-1': "url('/top_left.svg')",
        'hordozas-mixed-2': "url('/bottom_right.svg')",
        'hordozas-ember': "url('/hordozo_ember_2.svg')",
        'hordozas-right-top-brown': "url('/bg-right-top-brown.svg')",
        'hordozas-left-bottom-mixed': "url('/mixed-bottom-left.svg')",
        'hordozas-right-bottom-mixed': "url('/mixed-bottom-right.svg')",
        
      }
    },
  },
  plugins: [nextui({
    addCommonColors: true,
    themes: {
      dark: {
        colors: {
          primary: {
            DEFAULT: "#FFFFFF",
            foreground: "#000000",
          },
          focus: "#BEF264",
        },
      },
      light: {
        colors: {
          primary: {
            DEFAULT: "#333333",
            foreground: "#000000",
          },
          secondary: {
            DEFAULT: "#AB967F",
            foreground: "#000000",
          },
          focus: "#BEF264",
        },
      },
    },
  })],
  // darkMode: 'class'
};
export default config;
