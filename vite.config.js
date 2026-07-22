import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins:[react()],       // ← yahan comma nahi hona chahiye
  base: '/my_website/'
})