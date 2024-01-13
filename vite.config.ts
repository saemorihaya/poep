import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		host: true,
		port: 3000, // ここに希望のポート番号を設定
		watch: {
			usePolling: true,
		  },
	},
	preview: {
        port: 4000
    }
});
