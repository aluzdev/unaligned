/** @type {import('tailwindcss').Config} */

export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js',
		'./layouts/**/*.html',
		'./content/**/*.md',
		'./content/**/*.html',
		'./src/**/*.js',
	], // make sure to safelist these classes when using purge

	safelist: [
		'w-64',
		'w-1/2',
		'rounded-l-lg',
		'rounded-r-lg',
		'bg-gray-200',
		'grid-cols-4',
		'grid-cols-7',
		'h-6',
		'leading-6',
		'h-9',
		'leading-9',
		'shadow-lg',
	],

	// enable dark mode via class strategy
	darkMode: 'class',

	theme: {
		extend: {
			// extend base Tailwind CSS utility classes
		},
	},
	plugins: [
		// include Flowbite as a plugin in your Tailwind CSS project
		require('flowbite/plugin'),
	],
}
