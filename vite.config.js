import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [vue()],
    base: './',
    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:3000', // 如 http://localhost:3000
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            }
        }
    }
});