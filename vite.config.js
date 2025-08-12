import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
	base: '/prairie-creek-redwoods-pwa/',
	plugins: [
		vue(),
		VitePWA({
			registerType: 'autoUpdate',
			base: '/prairie-creek-redwoods-pwa/',
			scope: '/prairie-creek-redwoods-pwa/',
			workbox: {
				globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
				navigateFallback: '/prairie-creek-redwoods-pwa/index.html',
			},
			manifest: {
				name: 'Prairie Creek Redwoods Guide',
				short_name: 'Redwoods Guide',
				description: 'Mobile guide for Prairie Creek Redwoods State Park',
				theme_color: '#2d5016',
				background_color: '#f5f5f5',
				display: 'standalone',
				start_url: '/prairie-creek-redwoods-pwa/',
				icons: [
					{
						src: '/prairie-creek-redwoods-pwa/vite.svg',
						sizes: '192x192',
						type: 'image/svg+xml',
						purpose: 'any maskable',
					},
				],
			},
		}),
	],
});
