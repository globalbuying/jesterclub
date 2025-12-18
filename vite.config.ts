
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // This allows the app to use process.env.API_KEY in the browser
    // by injecting the value from the environment during build/dev.
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY),
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  }
});
