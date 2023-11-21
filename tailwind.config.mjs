/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			transitionProperty: {
				'height': 'max-height',
				'colors': 'background-color, border-color, color, fill, stroke',
			},
			transitionDuration: {
				'500': '500ms',
			},
			/* customize radius */
			borderRadius: {
				'psc': '30px',
			},
		},
	},
	plugins: [],
}
