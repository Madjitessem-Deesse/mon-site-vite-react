import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: '/mon-site-react-vite/', // remplace par le nom exact de ton dépôt GitHub
  plugins: [react()],
});
