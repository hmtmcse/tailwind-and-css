import {defineConfig} from 'vite';
import {resolve} from 'path';

export default defineConfig({
    // 1. Silence the Bootstrap/Sass warnings
    css: {
        preprocessorOptions: {
            scss: {
                silenceDeprecations: ['import', 'global-builtin', 'color-functions', 'mixed-decls', 'if-function'],
            },
        },
    },
    build: {
        rollupOptions: {
            // 2. Define multiple entry points
            input: {
                main: resolve(__dirname, 'index.html'),
                accordion_style: resolve(__dirname, 'src/scss/accordion.scss'),
                accordion_js: resolve(__dirname, 'src/js/accordion.js'),
                // Add more components here as you build them:
                // modal_style: resolve(__dirname, 'src/scss/modal.scss'),
            },
            output: {
                // 3. Keep filenames clean
                entryFileNames: `assets/[name].js`,
                chunkFileNames: `assets/[name].js`,
                assetFileNames: `assets/[name].[ext]`
            }
        }
    }
});