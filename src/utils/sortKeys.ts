import { isObject } from './is';

type AnyObject = { [key: string]: any };

export function sortKeys(obj: AnyObject): AnyObject {
  const sortedObj: AnyObject = {};
  const keys = Object.keys(obj).sort();

  for (const key of keys) {
    const value = obj[key];
    if (isObject(value)) {
      sortedObj[key] = sortKeys(value);
    } else {
      sortedObj[key] = value;
    }
  }

  return sortedObj;
}
