import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    global: 'window',
  },
  plugins: [
    react(),
    svgr(),
    {
      name: 'svg-import',
      resolveId(id) {
        if (id.endsWith('?svgr')) {
          const svgUrl = id.replace('?svgr', '')
          return { id: svgUrl, moduleSideEffects: true }
        }
        return null
      },
    },
  ],
  resolve: {
    alias: {
      '@momentum-design/icons': './node_modules/@momentum-design/icons',
    },
  },
  build: {
    assetsDir: './assets',
    assetsInlineLimit: 0,
  }
})
