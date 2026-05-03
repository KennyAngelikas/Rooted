import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  assetsInclude: ['**/*.svg', '**/*.csv'],
  base: '/Rooted/',  // Add this line for GitHub Pages subpath
})