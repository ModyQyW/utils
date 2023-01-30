import { resolve, dirname } from 'node:path';
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import { type PackageJson, type TsConfigJson } from './types';

/** Create a compatible CommonJS context that is missing in ESM. */
export const createCjs = (url = import.meta.url) => {
  const __filename = fileURLToPath(url);
  const __dirname = dirname(__filename);
  const require = createRequire(url);
  return { __filename, __dirname, require };
};

/** Resolve `package.json` path. Not validate the existence. */
export const resolvePackageJson = (id = process.cwd()) =>
  id.endsWith('package.json') ? resolve(id) : resolve(id, 'package.json');

/** Get `package.json` as an object. */
export const getPackageJson = (id = process.cwd()) =>
  JSON.parse(readFileSync(resolvePackageJson(id), 'utf8')) as PackageJson;

/** Set `package.json` content. */
export const setPackageJson = (id = process.cwd(), packageJson: PackageJson = {}) =>
  writeFileSync(resolvePackageJson(id), JSON.stringify(packageJson, undefined, 2));

/** Resolve `tsconfig.json` path. Not validate the existence. */
export const resolveTsconfigJson = (id = process.cwd()) =>
  id.endsWith('tsconfig.json') ? resolve(id) : resolve(id, 'tsconfig.json');

/** Get `tsconfig.json` as an object. */
export const getTsconfigJson = (id = process.cwd()) =>
  JSON.parse(readFileSync(resolveTsconfigJson(id), 'utf8')) as TsConfigJson;

/** Set `tsconfig.json` content. */
export const setTsconfigJson = (id = process.cwd(), tsconfigJson: TsConfigJson = {}) =>
  writeFileSync(resolveTsconfigJson(id), JSON.stringify(tsconfigJson, undefined, 2));
