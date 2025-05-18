import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: process.env.PORT || 5174, // use Render-assigned port or fallback
    host: '0.0.0.0', // required so Render can access the server
  }
})
