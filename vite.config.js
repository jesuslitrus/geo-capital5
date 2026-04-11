import { defineConfig } from 'vite'

export default defineConfig({
  base: './',   // 👈 AÑADE ESTA LÍNEA

  server: {
    host: true,
    port: 5173
  }
})