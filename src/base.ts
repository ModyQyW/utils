import isEqual from 'lodash.isequal';
import isEqualWith from 'lodash.isequalwith';

export { isEqual, isEqualWith };

export const timestamp = () => +Date.now();
