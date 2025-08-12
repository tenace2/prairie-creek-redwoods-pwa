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
			workbox: {
				globPatterns: ['**/*.{js,css,html,ico,png,svg}']
			},
			manifest: {
				name: 'Prairie Creek Redwoods Guide',
				short_name: 'Redwoods Guide',
				description: 'Mobile guide for Prairie Creek Redwoods State Park',
				theme_color: '#2d5016',
				background_color: '#f5f5f5',
				display: 'standalone',
				icons: [
					{
						src: '/prairie-creek-redwoods-pwa/vite.svg',
						sizes: '512x512',
						type: 'image/svg+xml'
					}
				]
			}
		})
	],
});
