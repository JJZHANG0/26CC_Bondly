import fs from 'node:fs'
import path from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const spaPath = path.join(__dirname, 'spa.html')

/** Dev only: serve spa.html at / so root index.html can stay a GitHub redirect stub. */
function devSpaFallback() {
  return {
    name: 'dev-spa-fallback',
    configureServer(server) {
      if (process.env.npm_lifecycle_event === 'preview') return
      server.middlewares.use((req, res, next) => {
        const url = (req.url || '').split('?')[0]
        if (url === '/' || url === '/index.html') {
          try {
            const html = fs.readFileSync(spaPath, 'utf-8')
            res.setHeader('Content-Type', 'text/html; charset=utf-8')
            res.end(html)
            return
          } catch {
            /* fall through */
          }
        }
        next()
      })
    },
  }
}

/** Vite emits spa.html; GitHub Pages / Actions expect index.html at bundle root. */
function renameSpaToIndex() {
  let outDir = path.join(__dirname, 'dist')
  return {
    name: 'rename-spa-to-index',
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir)
    },
    closeBundle() {
      const from = path.join(outDir, 'spa.html')
      const to = path.join(outDir, 'index.html')
      if (fs.existsSync(from)) {
        if (fs.existsSync(to)) fs.unlinkSync(to)
        fs.renameSync(from, to)
      }
    },
  }
}

export default defineConfig(({ command }) => ({
  base: command === 'serve' ? '/' : './',
  plugins: [vue(), command === 'serve' ? devSpaFallback() : null, command === 'build' ? renameSpaToIndex() : null].filter(
    Boolean
  ),
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      input: path.join(__dirname, 'spa.html'),
    },
  },
}))
