/* eslint-disable no-unused-vars */
import path from 'node:path';
import ejs, { type Data } from 'ejs';
import fs from 'fs-extra';
import prettier from 'prettier';
import { type PrettierParserType } from '../types';
import log from './log';

interface IWriteFileByEjs {
  fileName: string,
  dir: string,
  ejsParams: {renderStr: string; options?: Data},
  prettierParserType?: PrettierParserType
}

export enum PrettierParserTypeEnum {
  BABEL = 'babel',
  JSON = 'json',
  YAML = 'yaml',
  HTML = 'html',
  LESS = 'less',
  SCSS = 'scss',
  CSS = 'css',
  FLOW = 'flow',
  TS = 'typescript',
}

export async function writeFileByEjs(
  {
    fileName,
    dir,
    ejsParams,
    prettierParserType,
  }: IWriteFileByEjs
) {
  try {
    let configCode = ejs.render(ejsParams.renderStr, ejsParams?.options);

    if (prettierParserType) {
      configCode = await prettier.format(configCode, { tab: 2, parser: prettierParserType });
    }

    // 写入文件
    fs.outputFileSync(path.join(dir, fileName), configCode);
    log.success({ msg: `配置文件 ${fileName} 写入成功!` });
  } catch (error) {
    log.error({ msg: `写入配置文件 ${fileName} 时发生了错误: ${error}` });
  }
}
