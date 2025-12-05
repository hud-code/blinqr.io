// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://blinqr.io',
	integrations: [
		starlight({
			title: 'BlinQR',
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
						{ label: 'Hardware Requirements', slug: 'getting-started/hardware' },
						{ label: 'Assembly Guide', slug: 'getting-started/assembly' },
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

