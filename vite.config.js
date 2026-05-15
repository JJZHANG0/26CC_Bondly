import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

// Use `command` — `process.env.NODE_ENV` is often unset when this file loads,
// which made `base` default to `/` in CI and broke GitHub Pages asset URLs.
export default defineConfig(({ command }) => ({
  base: command === 'serve' ? '/' : '/26CC_Bondly/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
}))
