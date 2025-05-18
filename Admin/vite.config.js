import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: process.env.PORT || 5174,
    host: '0.0.0.0',
    allowedHosts: ['ymca-admin.onrender.com'], // ✅ allow your Render domain
  },
})
