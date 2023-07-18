import fs from "fs-extra";
import downloadRepo from './downloadRepo';
import { askOverwrite } from './askUser';

/**
 * 如果目录已经存在时调用
 * @param options - 命令参数
 * @param targetDirectory - 目标路径
 */
export default async (options: any, projectName: string, targetDirectory: string) => {
  // 判断是否使用 --force 参数
  if (options.force) {
    // 删除重名目录
    await fs.remove(targetDirectory);
    await downloadRepo(projectName, targetDirectory);
  } else {
    const isOverwrite = await askOverwrite();
    // 选择 Overwirte
    if (isOverwrite) {
      // 先删除掉原有重名目录
      await fs.remove(targetDirectory);
      await downloadRepo(projectName, targetDirectory);
    }
  }
};
