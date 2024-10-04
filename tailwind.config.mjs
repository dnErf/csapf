/** @type {import('tailwindcss').Config} */
const flowbite = require('flowbite/plugin')
const { addDynamicIconSelectors } = require('@iconify/tailwind')

export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'
		, './node_modules/flowbite/**/*.js'
	],
	theme: {
		extend: {},
	},
	plugins: [ flowbite({ charts: false }), addDynamicIconSelectors() ],
}
