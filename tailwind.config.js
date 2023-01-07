/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				VeryDarkGray: 'hsl(0, 0%, 17%)',
				DarkGray: 'hsl(0, 0%, 59%)',
			},
			fontFamily: {
				Rubik: ['Rubik', 'sans-serif'],
			},
			backgroundImage: {
				Pattern: "url('/public/images/pattern-bg.png')",
			},
		},
	},
	plugins: [],
};
