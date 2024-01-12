import { getType } from '@kbam-frontend/madebyus';
import { Any } from '@interface/common';

export function findData(item: Any, target: string, todo: Any) {
  if (item != null) {
    const array = Object.keys(item);
    if (array != null) {
      // eslint-disable-next-line no-restricted-syntax
      for (const i of array) {
        if (i === target) {
          todo(i, item[i], item);
        } else if (item[i]?.constructor === Object) {
          findData(item[i], target, todo);
        } else if (item[i]?.constructor === Array) {
          const miniArray = item[i];
          // eslint-disable-next-line no-restricted-syntax, guard-for-in
          for (const f in miniArray) {
            findData(miniArray[f], target, todo);
          }
        }
      }
    }
  }
}

export function ObjectFilterValues(obj: Any, compareValue: Any) {
  return Object.fromEntries(
    Object.entries(obj).filter(([, value]) => {
      if (getType(value).isObject || getType(value).isArray) {
        return JSON.stringify(value) === JSON.stringify(compareValue);
      }
      return value === compareValue;
    }),
  );
}
