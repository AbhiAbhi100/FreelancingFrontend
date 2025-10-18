import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    sourcemap: false, // disable source maps to save memory
    chunkSizeWarningLimit: 2000, // increase warning threshold
    rollupOptions: {
      output: {
        // split node_modules into a separate vendor chunk
        manualChunks(id) {
          if (id.includes('node_modules')) return 'vendor';
        },
      },
    },
  },
});
