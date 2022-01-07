import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve('src', 'index.ts'),
      name: 'UTILS',
      fileName: (format) => `index.${format}.${format === 'es' ? 'm' : ''}js`,
    },
  },
});
