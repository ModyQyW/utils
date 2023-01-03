import { resolve } from 'node:path';
import { readFileSync } from 'node:fs';
import debounce from 'lodash.debounce';
import throttle from 'lodash.throttle';
import isEqual from 'lodash.isequal';
import { deepmerge } from 'deepmerge-ts';
import { nanoid } from 'nanoid';
import { PackageJson } from './types';

export { debounce, throttle, isEqual, deepmerge as merge, nanoid };

export const timestamp = () => +Date.now();

export const getPackageJson = () =>
  JSON.parse(readFileSync(resolve(process.cwd(), 'package.json'), 'utf8')) as PackageJson;
