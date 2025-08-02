import fs from 'fs-extra';
import log from './log';
/**
 * 获取文件内容
 * @param path string
 * @returns string
 */
export default (path: string) => {
  if (!fs.existsSync(path)) {
    log.error({ msg: '文件路径不存在: ' + path });
    return;
  }

  return fs.readFileSync(path, { encoding: 'utf-8' });
};
