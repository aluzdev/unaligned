/** @type {import('tailwindcss').Config} */
import { defineConfig } from 'tailwindcss'
import flowbite from 'flowbite/plugin'
export default {
	darkMode: 'class', // Add this line to enable dark mode

	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js',
	],
	theme: {
		extend: {},
	},
	plugins: [require('flowbite/plugin')],
}
