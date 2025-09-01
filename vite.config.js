import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Create separate chunks for large dependencies
          if (id.includes('node_modules')) {
            if (id.includes('@splinetool')) {
              return 'spline'
            }
            if (id.includes('three') || id.includes('@react-three')) {
              return 'three'
            }
            return 'vendor'
          }
        }
      }
    }
  },
  optimizeDeps: {
    exclude: ['@splinetool/runtime']
  }
})
