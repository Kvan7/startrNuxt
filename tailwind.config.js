/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#003a70',
				secondary: '#e5e5e5',
				accent: '#03746e',
				'mutual-blue': '#003a70',
				'mutual-light-blue': '#105fa8',
				'mutual-green': '#03746e',
				'mutual-yellow': '#f5b93c',
				'mutual-sand': '#fffbf2',
				'mutual-dark-gray': '#444444',
				'mutual-gray': '#e5e5e5',
			},
		},
	},
};
