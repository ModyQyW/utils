import { builtinModules } from 'node:module';
import { defineConfig } from 'rollup';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import esbuild from 'rollup-plugin-esbuild';
import dts from 'rollup-plugin-dts';
import del from 'rollup-plugin-delete';
import { PackageJson } from 'type-fest';
import pkg from './package.json' assert { type: 'json' };

const isDev = !!process.env.ROLLUP_WATCH;

const packageJson = pkg as PackageJson;
const dependencies = packageJson.dependencies ?? {};
const peerDependencies = packageJson.peerDependencies ?? {};

const input = {
  index: './src/index.ts',
};

const external = [
  ...builtinModules,
  ...builtinModules.map((m) => `node:${m}`),
  ...Object.keys(dependencies).map((item) => new RegExp(`^${item}`)),
  ...Object.keys(peerDependencies).map((item) => new RegExp(`^${item}`)),
];

export default defineConfig([
  {
    input,
    output: [
      {
        dir: './dist',
        entryFileNames: '[name].mjs',
        format: 'esm',
      },
      {
        dir: './dist',
        entryFileNames: '[name].cjs',
        format: 'cjs',
        footer: `module.exports = Object.assign(exports.default || {}, exports);`,
      },
    ],
    plugins: [
      nodeResolve({ preferBuiltins: true }),
      commonjs(),
      esbuild({ target: 'es2020' }),
      del({
        targets: './dist/**/*',
        runOnce: isDev,
      }),
    ],
    external,
  },
  {
    input,
    output: {
      dir: './dist',
      entryFileNames: '[name].d.ts',
      format: 'esm',
    },
    plugins: [dts({ respectExternal: true })],
    external,
  },
]);
