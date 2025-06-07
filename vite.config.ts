import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Use full HTTPS URL
  optimizeDeps: {
    exclude: ['lucide-react'],
  }
})