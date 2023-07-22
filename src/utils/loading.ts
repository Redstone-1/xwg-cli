import ora from "ora";
import chalk from "chalk";
import { TLoadingOther } from '../types';

/**
 * 睡眠函数
 * @param {Number} delay 睡眠时间
 */
const sleep = (delay: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(false);
    }, delay);
  });
};

/**
 * 加载中方法
 * @param message - 提示信息
 * @param callback - 执行的回调
 * @param projectName - 项目名
 * @returns
 */
export const loading = async (message: string, callback: () => any, other: TLoadingOther): Promise<any> => {
  const spinner = ora(message);
  spinner.start(); // 开启加载
  try {
    const res = await callback();
    // 加载成功
    spinner.succeed(
      `${chalk.black.bold('下载成功！执行以下命令打开并运行项目:')}
      \r\n  ${chalk.gray.bold(`cd ${other?.projectName}`)}
      \r\n  ${chalk.gray.bold('npm install')}
      \r\n  ${chalk.gray.bold('npm run dev')}
      \r\n  ${chalk.gray.bold('问题、意见、建议请反馈至：https://github.com/Redstone-1/xwg-cli/issues')}
      `
    );
    return res;
  } catch (error) {
    // 加载失败
    spinner.fail("请求失败，正在重试...");
    await sleep(1000);
    // 重新拉取
    return loading(message, callback, other);
  }
};
