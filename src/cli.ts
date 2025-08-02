import chalk from 'chalk';
import { program } from 'commander';
import { create } from './commands';
import { BRAND_LOGO, VERSION } from './constants';
import log from './utils/log';

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

    log.log(() => chalk.cyan(`Welcome to use xwg-cli, current version is v${VERSION}.`));
    log.log(() => chalk.cyan(BRAND_LOGO));

    /** ------------ 将所有命令解耦出去独立 ------------ */

    /**
     * create 命令
     */
    create();

    /** ---------------------------------------------- */

    program.on('--help', function () {
      log.log(() => `\r\n ${chalk.gray('[xwg-cli] 终端执行')} ${chalk.cyan('xwg <command> --help')} ${chalk.gray('获取更多命令详情')}`);
    });

    program.parse(process.argv);
  };
}

export default new Cli;
