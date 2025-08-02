/**
 * 睡眠函数
 * @param {Number} delay 睡眠时间
 */
export default (delay: number) => new Promise((resolve) => setTimeout(() => resolve(false), delay));
