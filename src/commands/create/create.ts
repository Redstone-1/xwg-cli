import path from 'path';
import fs from 'fs-extra';
import dirExistCall from './dirExistCall';
import downloadRepo from './downloadRepo';

/**
 * 创建新项目
 * @param projectName - 项目名
 * @param options - 命令参数
 */
export default async (projectName: string, options: any) => {
  // 获取当前工作目录
  const cwd = process.cwd();
  // 拼接得到项目目录
  const targetDirectory = path.join(cwd, projectName);
  // 判断目录是否存在
  if (fs.existsSync(targetDirectory)) {
    await dirExistCall(options, projectName, targetDirectory);
  } else {
    await downloadRepo(projectName, targetDirectory);
  }
};
