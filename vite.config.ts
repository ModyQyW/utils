import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve('src', 'index.ts'),
      name: 'UTILS',
      fileName: 'index',
    },
  },
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
  ],
});
