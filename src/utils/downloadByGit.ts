import simpleGit from 'simple-git';
import { loading } from './loading';
import { DownloadRepoParams } from '../types';

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
  await loading(
    '正在下载模板，请稍后...',
    () => git.clone(url, directory),
    { projectName: name }
  );
};
