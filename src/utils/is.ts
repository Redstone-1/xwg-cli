
/**
 * 判断目标是否对象
 * @param target any
 * @returns boolean
 */
export const isObject = (target: any) => Object.prototype.toString.call(target) === '[object Object]';
