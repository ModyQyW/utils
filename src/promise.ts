import pRetry from 'p-retry';
import { Fn } from './types';

export { pRetry };

export function sleep(ms: number, callback?: Fn<any>) {
  return new Promise<void>((resolve) =>
    setTimeout(async () => {
      await callback?.();
      resolve();
    }, ms),
  );
}
