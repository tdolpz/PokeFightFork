/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{js,jsx,ts,tsx}'
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
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
