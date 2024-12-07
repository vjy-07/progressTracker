import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/progressTracker/", // your base URL
  server: {
    open: true,  // This will automatically open the browser
  }
});