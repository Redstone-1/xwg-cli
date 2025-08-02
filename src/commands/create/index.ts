import chalk from 'chalk';
import { program } from 'commander';
import create from './create';

export default () => {
  program
    .command('create <project-name>') // 这里不能使用 chalk
    .description(chalk.cyan('创建新项目'))
    .option('-f, --force', chalk.redBright('如果目录已存在将覆盖原目录, 请谨慎使用, 这会先删除你已存在的项目再进行创建'))
    .action(create);
};
