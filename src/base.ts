import debounce from 'lodash.debounce';
import throttle from 'lodash.throttle';
import isEqual from 'lodash.isequal';
import { deepmerge } from 'deepmerge-ts';
import { nanoid } from 'nanoid';

export { debounce, throttle, isEqual, deepmerge as merge, nanoid };

export const timestamp = () => +Date.now();
