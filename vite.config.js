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
			includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
			manifest: {
				name: 'Prairie Creek Redwoods Guide',
				short_name: 'Redwoods Guide',
				description:
					'Your mobile guide to camping, swimming, and hiking in Prairie Creek Redwoods State Park',
				theme_color: '#2d5016',
				background_color: '#f5f5f5',
				display: 'standalone',
				orientation: 'portrait-primary',
				icons: [
					{
						src: '/pwa-192x192.png',
						sizes: '192x192',
						type: 'image/png',
					},
					{
						src: '/pwa-512x512.png',
						sizes: '512x512',
						type: 'image/png',
					},
				],
			},
			workbox: {
				runtimeCaching: [
					{
						urlPattern: /^https:\/\/www\.google\.com\/maps\//,
						handler: 'CacheFirst',
						options: {
							cacheName: 'google-maps-cache',
							expiration: {
								maxEntries: 10,
								maxAgeSeconds: 60 * 60 * 24 * 7, // 1 week
							},
						},
					},
				],
			},
		}),
	],
});
