/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			screens: {
				'can-hover': { raw: '(hover: hover)' },
				'cannot-hover': { raw: '(hover: none)' }
			},
			width: {
				prose: '65ch'
			},
			flexBasis: {
				prose: '65ch'
			},
			fontFamily: {
				good: '"Comic Sans MS", sans-serif'
			},
			spacing: {
				'full-1': 'calc(100% + 0.25rem)',
				'full-1.5': 'calc(100% + 0.375rem)',
				'full-2': 'calc(100% + 0.5rem)'
			}
		}
	},
	plugins: []
};
