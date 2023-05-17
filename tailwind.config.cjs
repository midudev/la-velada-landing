/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				boxing: ['Boxing', 'Adjusted Arial Fallback', 'sans-serif'],
				'boxing-striped': ['Boxing Striped', 'Adjusted Arial Fallback', 'sans-serif'],
			}
		},
	},
	plugins: [
    require('tailwindcss-animated')
  ],
}
