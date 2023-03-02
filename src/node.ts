import { resolve, dirname } from 'node:path';
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import { type PackageJson, type TsConfigJson } from './types';

/** Create a compatible CommonJS context that is missing in ESM. */
export function createCjs(url = import.meta.url) {
  const __filename = fileURLToPath(url);
  const __dirname = dirname(__filename);
  const require = createRequire(url);
  return { __filename, __dirname, require };
}

/** Resolve `package.json` path. Not validate the existence. */
export function resolvePackageJson(id = process.cwd()) {
  return id.endsWith('package.json') ? resolve(id) : resolve(id, 'package.json');
}

/** Get `package.json` as an object. */
export function getPackageJson(id = process.cwd()) {
  return JSON.parse(readFileSync(resolvePackageJson(id), 'utf8')) as PackageJson;
}

/** Set `package.json` content. */
export function setPackageJson(id = process.cwd(), packageJson: PackageJson = {}) {
  return writeFileSync(resolvePackageJson(id), JSON.stringify(packageJson, undefined, 2));
}

/** Resolve `tsconfig.json` path. Not validate the existence. */
export function resolveTsconfigJson(id = process.cwd()) {
  return id.endsWith('tsconfig.json') ? resolve(id) : resolve(id, 'tsconfig.json');
}

/** Get `tsconfig.json` as an object. */
export function getTsconfigJson(id = process.cwd()) {
  return JSON.parse(readFileSync(resolveTsconfigJson(id), 'utf8')) as TsConfigJson;
}

/** Set `tsconfig.json` content. */
export function setTsconfigJson(id = process.cwd(), tsconfigJson: TsConfigJson = {}) {
  return writeFileSync(resolveTsconfigJson(id), JSON.stringify(tsconfigJson, undefined, 2));
}
