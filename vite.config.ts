import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/persWeb/',  // <-- Use your repo name EXACTLY, case sensitive
  plugins: [react()],
});
