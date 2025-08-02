import path from 'node:path';
import fs from 'fs-extra';
import simpleGit from 'simple-git';
import { type DownloadRepoParams } from '../types';
import loading from './loading';
import log from './log';

const git = simpleGit();

/**
 * 下载 git 仓库
 * @param url - 仓库地址
 * @param name - 项目名称
 * @param directory - 目标存储路径
 */
export const downloadByGit = async ({
  url,
  name,
  directory
}: DownloadRepoParams) => {
  return await loading({
    tip: '正在下载仓库, 请稍后...',
    call: () => git.clone(url, directory),
    success: async () => {
      // 删除 .git 文件夹
      await fs.remove(path.join(directory, '.git'));

      log.success({ msg: '下载成功！执行以下命令打开并运行项目:', start: '\r\n' });
      log.success({ msg: `cd ${name}` });
      log.success({ msg: 'npm install' });
      log.success({ msg: 'npm run dev' });
      log.success({ msg: '问题、意见、建议请反馈至：https://github.com/Redstone-1/xwg-cli/issues' });
    },
    fail: (error) => {
      log.error({ msg: `仓库下载失败: ${error}` });
    }
  });
};
