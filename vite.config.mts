import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'
import Terminal from 'vite-plugin-terminal'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
    plugins: [
        vue(),
        VueDevTools(),
        Terminal({
            output: ['terminal', 'console'],
        }),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
    base: mode === 'production' ? '/vue3-url-xss/' : '/',
}))
