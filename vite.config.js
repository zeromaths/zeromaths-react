import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/zeromaths-react/',
  plugins: [react()],
  build: {
    outDir: 'public',
  },
})
