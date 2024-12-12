/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{js,jsx,ts,tsx}'
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'darkbrickentrance': 'url("./assets/darkbrickentrance2.jpg")',
				'boxring': 'url("./assets/boxring2.jpg")',
			},
			fontFamily: {
				pokemon: ["pokemon", "sans-serif"]
			},
			colors: {
				pokemon: '#E69138'
			}
		}
	},
	plugins: [],
}
