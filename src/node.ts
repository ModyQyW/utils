import { resolve } from 'node:path';
import { readFileSync } from 'node:fs';
import { type PackageJson } from './types';

export * from 'mlly';

export const getPackageJson = (cwd = process.cwd()) =>
  JSON.parse(readFileSync(resolve(cwd, 'package.json'), 'utf8')) as PackageJson;
