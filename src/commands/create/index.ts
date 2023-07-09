import { program } from 'commander';
import create from './create';

export default () => {
  program
    .command('create <project-name>')
    .description('创建新项目')
    .option("-f, --force", "如果目录已存在将覆盖原目录")
    .action(create);
};
