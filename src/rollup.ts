import { builtinModules } from 'node:module';
import {
  type AddonFunction as RollupAddonFunction,
  type ExternalOption as RollupExternalOption,
  type RollupOptions,
} from 'rollup';
import hashbang from 'rollup-plugin-hashbang';
import json, { type RollupJsonOptions } from '@rollup/plugin-json';
import nodeResolve, { type RollupNodeResolveOptions } from '@rollup/plugin-node-resolve';
import commonjs, { type RollupCommonJSOptions } from '@rollup/plugin-commonjs';
import esbuild, { type Options as RollupEsbuildOptions } from 'rollup-plugin-esbuild';
// @ts-ignore
import bundleSize from 'rollup-plugin-bundle-size';
import terser from '@rollup/plugin-terser';
import { type MinifyOptions as TerserOptions } from 'terser';
import dts, { type Options as RollupDtsOptions } from 'rollup-plugin-dts';
import { getPackageJson } from './base';
import { type PackageJson } from './types';

export const rollupIsDevelopment = () => process.env.ROLLUP_WATCH;
export const rollupIsProduction = () => !rollupIsDevelopment();

export const rollupCjsFooter: RollupAddonFunction = () =>
  'module.exports = Object.assign(exports.default, exports);';

export const rollupEsmBanner: RollupAddonFunction = ({ modules }) => {
  const entries = Object.entries(modules);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  for (const [_, { code }] of entries) {
    if (code?.includes('__dirname')) {
      return "import { fileURLToPath } from 'url'; import { dirname } from 'path'; const __filename = fileURLToPath(import.meta.url); const __dirname = dirname(__filename);";
    }
    if (code?.includes('__filename')) {
      return "import { fileURLToPath } from 'url'; const __filename = fileURLToPath(import.meta.url);";
    }
  }
  return '';
};

export const rollupExternal = (
  packageJson?: PackageJson,
  noExternal?: string[],
): RollupExternalOption => {
  const pkg = packageJson ?? getPackageJson();
  return [
    ...Object.keys(pkg.dependencies ?? {}),
    ...Object.keys(pkg.peerDependencies ?? {}),
    ...builtinModules,
    ...builtinModules.map((m) => `node:${m}`),
  ].filter((item) => !(noExternal ?? []).includes(item));
};

export function rollupHashbang() {
  return hashbang();
}

export { RollupJsonOptions };
export function rollupJson(options?: RollupJsonOptions) {
  return json({
    preferConst: true,
    ...options,
  });
}

export { RollupNodeResolveOptions };
export function rollupNodeResolve(options?: RollupNodeResolveOptions) {
  return nodeResolve({
    preferBuiltins: true,
    ...options,
  });
}

export { RollupCommonJSOptions };
export function rollupCommonjs(options?: RollupCommonJSOptions) {
  return commonjs({
    ...options,
  });
}

export { RollupEsbuildOptions };
export function rollupEsbuild(options?: RollupEsbuildOptions) {
  return esbuild({
    target: 'es2017',
    ...options,
  });
}

export function rollupBundleSize() {
  return bundleSize();
}

export interface RollupTerserOptions extends TerserOptions {
  maxWorkers?: number;
}
export function rollupTerser(options?: RollupTerserOptions) {
  return rollupIsProduction()
    ? terser({
        compress: {
          drop_console: true,
        },
        format: {
          ascii_only: true,
        },
        ...options,
      })
    : null;
}

export { RollupDtsOptions };
export function rollupDts(options?: RollupDtsOptions) {
  return dts({
    // https://github.com/Swatinem/rollup-plugin-dts/issues/143
    compilerOptions: { preserveSymlinks: false },
    respectExternal: true,
    ...options,
  });
}

export function rollupIndexConfig(
  packageJson?: PackageJson,
  { input = './src/index.ts', ...options }: Partial<RollupOptions> = {},
) {
  const pkg = packageJson ?? getPackageJson();
  const { main = './dist/index.cjs', module = './dist/index.mjs' } = pkg;
  const rollupOptions: RollupOptions = {
    input,
    output: [
      { file: main, format: 'cjs', exports: 'named', footer: rollupCjsFooter },
      { file: module, format: 'esm', banner: rollupEsmBanner },
    ],
    plugins: [
      rollupJson(),
      rollupNodeResolve(),
      rollupCommonjs(),
      rollupEsbuild(),
      rollupBundleSize(),
      rollupTerser(),
    ],
    external: rollupExternal(pkg),
    ...options,
  };
  return rollupOptions;
}

export function rollupIndexTypesConfig(
  packageJson?: PackageJson,
  { input = './src/index.ts', ...options }: Partial<RollupOptions> = {},
) {
  const pkg = packageJson ?? getPackageJson();
  const { types = './dist/index.d.ts' } = pkg;
  const rollupOptions: RollupOptions = {
    input,
    output: [{ file: types, format: 'esm' }],
    plugins: [rollupDts(), rollupBundleSize()],
    external: rollupExternal(pkg),
    ...options,
  };
  return rollupOptions;
}

export function rollupWorkerConfig(
  packageJson?: PackageJson,
  { input = './src/worker.ts', ...options }: Partial<RollupOptions> = {},
) {
  const pkg = packageJson ?? getPackageJson();
  const rollupOptions: RollupOptions = {
    input,
    output: [
      { file: './dist/worker.cjs', format: 'cjs' },
      { file: './dist/worker.mjs', format: 'esm', banner: rollupEsmBanner },
    ],
    plugins: [
      rollupJson(),
      rollupNodeResolve(),
      rollupCommonjs(),
      rollupEsbuild(),
      rollupBundleSize(),
      rollupTerser(),
    ],
    external: rollupExternal(pkg),
    ...options,
  };
  return rollupOptions;
}

export function rollupCliConfig(
  packageJson?: PackageJson,
  { input = './src/cli.ts', ...options }: Partial<RollupOptions> = {},
) {
  const pkg = packageJson ?? getPackageJson();
  const { bin = './dist/cli.cjs', type = 'commonjs' } = pkg;
  const rollupOptions: RollupOptions = {
    input,
    output:
      typeof bin === 'string'
        ? { file: bin, format: type }
        : [...new Set(Object.values(bin))].map((v) => ({ file: v, format: type })),
    plugins: [
      rollupHashbang(),
      rollupJson(),
      rollupNodeResolve(),
      rollupCommonjs(),
      rollupEsbuild(),
      rollupBundleSize(),
      rollupTerser(),
    ],
    external: rollupExternal(packageJson),
    ...options,
  };
  return rollupOptions;
}
