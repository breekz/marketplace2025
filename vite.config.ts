import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'build',
    target: 'esnext',
  },
  server: {
    port: 3000,
    open: true,
  },
  base: '/marketplace2025/', // Change to '/your-repo-name/' for GitHub Pages
});
