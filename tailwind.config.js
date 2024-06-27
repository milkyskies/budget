const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/preline/dist/*.js'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Noto Sans JP', ...defaultTheme.fontFamily.sans]
			}
		}
	},
	plugins: [require('preline/plugin')],
	darkMode: 'class'
};
