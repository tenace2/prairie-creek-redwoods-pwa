import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
	base: '/prairie-creek-redwoods-pwa/',
	plugins: [
		vue(),
		// PWA plugin temporarily disabled to fix build issues
	],
});
