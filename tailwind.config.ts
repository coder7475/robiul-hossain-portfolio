import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      "primary": "slate",
      "secondary": "#F4FF8",
      "gray": "#111",
      "light": "#000"
    }
  },
  plugins: [],
}
export default config
