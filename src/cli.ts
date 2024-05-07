import { program } from 'commander';
import chalk from 'chalk';
import { create } from './commands';
import { BRAND_LOGO, VERSION } from './const';

/**
 * 创建 Cli 类
 * @author xiwenge <1825744594@qq.com>
 * @create 2024/05/07
 */
class Cli {
  /**
   * cli 启动方法
   */
  start = () => {
    program.name(chalk.cyan('xwg')).usage(`${chalk.yellow('<command>')} [options]`);

    program.version(
      `\r\n  ${chalk.cyan.bold(VERSION)}
      ${chalk.cyan.bold(BRAND_LOGO)}`
    );

    /** ------------ 将所有命令解耦出去独立 ------------ */

    /**
     * create 命令
     */
    create();

    /** ---------------------------------------------- */

    program.on("--help", function () {
      console.log(`\r\n终端执行 ${chalk.cyan.bold("xwg <command> --help")} 获取更多命令详情\r\n`);
    });

    program.parse(process.argv);
  };
}

export default new Cli;
