import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base relativa: el sitio funciona igual en duangomez.github.io o en /<repo>/.
export default defineConfig({
  plugins: [react()],
  base: './',
});
