// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://blinqr.io',
	integrations: [
		starlight({
			title: 'blinqr',
			description: 'Open-source reminder box with BLE connectivity',
			social: [
				{ icon: 'github', label: 'Firmware', href: 'https://github.com/hud-code/blinqr-firmware' },
			],
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Introduction', slug: 'getting-started/introduction' },
					],
				},
				{
					label: 'Build Guide',
					items: [
						{ label: 'Overview', slug: 'build/index' },
						{ label: 'Bill of Materials', slug: 'build/bom' },
						{ label: 'Wiring Diagram', slug: 'build/wiring' },
						{ label: '3D Printing', slug: 'build/3d-printing' },
						{ label: 'Final Assembly', slug: 'build/assembly' },
					],
				},
				{
					label: 'Firmware',
					items: [
						{ label: 'Building', slug: 'firmware/building' },
						{ label: 'Flashing', slug: 'firmware/flashing' },
						{ label: 'Customization', slug: 'firmware/customization' },
					],
				},
				{
					label: 'Protocol',
					items: [
						{ label: 'BLE Specification', slug: 'protocol/ble-specification' },
						{ label: 'Data Model', slug: 'protocol/data-model' },
					],
				},
				{
					label: 'Contributing',
					items: [
						{ label: 'How to Contribute', slug: 'contributing/how-to-contribute' },
					],
				},
			],
			head: [
				{
					tag: 'meta',
					attrs: {
						property: 'og:image',
						content: 'https://blinqr.io/og-image.png',
					},
				},
			],
		}),
	],
});

