/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}', './assets/**/*.{png,jpg,jpeg,svg}'],
	theme: {
		extend: {
			backgroundImage: {},
		},
	},
	plugins: [require('tailwindcss-animated')],
}
