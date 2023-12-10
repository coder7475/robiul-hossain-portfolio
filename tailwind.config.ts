import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      "primary": "#88AB8E",
      "secondary": "AFC8AD",
      "gray": "#EEE7DA",
      "light": "#F2F1EB"
    }
  },
  plugins: [],
}
export default config
