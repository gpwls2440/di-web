/// <reference types="vitest" />

import { defineConfig } from 'vite';
// import eslint from 'vite-plugin-eslint';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tsconfigPaths(),
    react(),
    svgr(),
    // eslint({
    //   exclude: ['/virtual:/**', 'node_modules/**'],
    // }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/vitest-setup.ts',
  },
});
