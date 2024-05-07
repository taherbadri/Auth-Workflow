/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./components/**/*.{jsx,tsx,js,ts,react}",
		"./src/**/*.{jsx,tsx,js,ts,react}",
	],
	theme: {
		extend: {},
	},
	plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
