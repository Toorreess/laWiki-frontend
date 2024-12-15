import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import dotenv from 'dotenv'
dotenv.config()

// const env = process.env.NODE_ENV || 'dev'
// const HOST = env === 'dev' ? 'http://localhost:8080' : process.env.LAWIKI_HOST

export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    proxy: {
      // '/api': {
      //   target: HOST,
      //   changeOrigin: false,
      //   rewrite: (path) => path.replace(/^\/api/, ''),
      // },
    },
  },
})
