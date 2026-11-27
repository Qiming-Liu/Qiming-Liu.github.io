import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

const src = dir => fileURLToPath(new URL(`./src/${dir}`, import.meta.url));

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      app: src('app'),
      assets: src('assets'),
      combination: src('combination'),
      components: src('components'),
      hooks: src('hooks'),
      pages: src('pages'),
      utils: src('utils'),
    },
  },
  assetsInclude: ['**/*.glb'],
  build: {
    outDir: 'build',
  },
});
