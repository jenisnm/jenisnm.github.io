import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: '/',
  }

<<<<<<< HEAD
=======
  if (command !== 'serve') {
    config.base = '/jenihacker.github.io/'
  }

>>>>>>> aa0aedc19cd9a823ffb6d2080560c0fde8e33229
  return config
})
