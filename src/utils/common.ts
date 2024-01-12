import { Any } from '@interface/common';

export function log(...arg: Any): void {
  // eslint-disable-next-line no-console
  console.log(...arg);
}

export function alert(...arg: Any): void {
  alert(...arg);
}
