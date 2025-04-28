import { defineConfig } from 'vite'
import tailwincss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
            tailwincss()
            ],

  // For development purpose
  server: {
    port: 5173,
    host: true,
    // proxy: {

    // }
  }
})
