import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  server: {
    port: 5173, // Change this to your preferred port
    strictPort: true, // Ensures it does not change to another port
    host: 'localhost', // Optional: ensures it's always localhost
  },
  
})
