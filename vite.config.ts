import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve('./', 'src')
    }
  },
  server: {
    proxy: {
      //'/api': 'http://localhost:8080/api',
      //'/foo': 'http://localhost:4567/foo',
      '/api': {
        target: 'http://localhost:8080/api',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  }
})
