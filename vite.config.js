import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const pages = ['index', 'signin', 'signup', 'cars', 'car-details', 'categories', 'brands', 'compare', 'contact', 'news'];
const input = Object.fromEntries(pages.map((page) => [page, `${page}.html`]));

export default defineConfig({
  plugins: [react()],
  build: { rollupOptions: { input } }
});
