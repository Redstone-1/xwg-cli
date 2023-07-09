import fs from "fs-extra";
import prompt from "../../utils/prompt";
import downloadRepo from './downloadRepo';

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
    const { isOverwrite } = await prompt([
      // 返回值为 Promise
      // 具体配置参见：https://www.npmjs.com/package/inquirer#questions
      {
        type: "list",
        name: "isOverwrite",
        message: "原目录已经存在，请选择是否覆盖",
        choices: [
          { name: "覆盖", value: true },
          { name: "取消", value: false },
        ],
      },
    ]);
    // 选择 Overwirte
    if (isOverwrite) {
      // 先删除掉原有重名目录
      await fs.remove(targetDirectory);
      await downloadRepo(projectName, targetDirectory);
    }
  }
};
