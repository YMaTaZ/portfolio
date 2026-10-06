import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

// Multi-page static build: home / EODD case / KKH case / about.
// base './' keeps every asset path relative, so dist/ works on GitHub Pages sub-paths or any static host.
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        eodd: resolve(__dirname, 'eodd.html'),
        kkh: resolve(__dirname, 'kkh.html'),
        about: resolve(__dirname, 'about.html')
      },
      onwarn(warning, warn) {
        if (warning.code === 'MODULE_LEVEL_DIRECTIVE') return;
        warn(warning);
      }
    }
  }
});
