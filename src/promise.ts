import pLimit from 'p-limit';
import PQueue from 'p-queue';
import pRetry from 'p-retry';
import pDebounce from 'p-debounce';
import pThrottle from 'p-throttle';
import { Fn } from './types';

export { pLimit, PQueue, pRetry, pDebounce, pThrottle };

export function sleep(ms: number, callback?: Fn<any>) {
  return new Promise<void>((resolve) =>
    setTimeout(async () => {
      await callback?.();
      resolve();
    }, ms),
  );
}
