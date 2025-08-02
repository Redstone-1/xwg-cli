/* eslint-disable no-unused-vars */
import path from 'node:path';
import fs from 'fs-extra';
import prettier from 'prettier';
import { PrettierParserEnum } from '../constants';
import { isObject } from './is';
import log from './log';
import readFileSync from './readFileSync';
import { sortKeys } from './sortKeys';

/**
 * 覆写 JSON 文件
 * @param fileName 输出的文件名
 * @param dir 文件路径
 * @param cb 回调
 */
export async function overwriteJSONFile({
  fileName,
  dir,
  cb,
}: {fileName: string, dir: string, cb: (target: any) => any}) {
  try {
    const filePath = path.join(dir, fileName);

    const json = readFileSync(filePath);

    if (json) {
      const jsonObj = JSON.parse(json);

      cb(jsonObj);

      Object.keys(jsonObj).forEach((key: string) => {
        if (isObject(jsonObj[key])) {
          jsonObj[key] = sortKeys(jsonObj[key]);
        }
      });

      const jsonStr = JSON.stringify(jsonObj);

      fs.outputFileSync(filePath, await prettier.format(jsonStr, { tab: 2, parser: PrettierParserEnum.JSON }));
      log.success({ msg: `配置文件 ${fileName} 覆写成功!` });
    }
  } catch (error) {
    log.error({ msg: `写入文件 ${fileName} 时发生了错误: ${error}` });
  }
}
