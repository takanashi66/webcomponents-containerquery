import { resolve } from 'path'
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [],
    base: "/",
    root: 'resources',
    build: {
        outDir: '../public',
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'resources/index.html'),
                // nested: resolve(__dirname, 'resources/page/index.html'),
            },
        },
    },
    server: {
        port: 3333,
    },
});
