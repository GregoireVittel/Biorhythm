import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// When deploying to GitHub Pages at https://gregoirevittel.github.io/Biorhythm/
// set base to '/Biorhythm/'. If you prefer relative assets, use './' instead.
export default defineConfig({
  base: '/Biorhythm/',
  plugins: [react()],
})
