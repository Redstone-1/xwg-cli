import chalk from 'chalk';
import { type LogMessage } from '../types';

class Log {
  message = ({
    msg,
    start,
    end
  }: LogMessage) => {
    return `${start ?? ''}[xwg-cli] ${msg}${end ?? ''}`;
  };

  log = (fn: () => string) => {
    console.log(fn?.());
  };

  success = (cfg: LogMessage) => {
    console.log(chalk.greenBright(this.message(cfg)));
  };

  error = (cfg: LogMessage) => {
    console.log(chalk.redBright(this.message(cfg)));
  };

  warn = (cfg: LogMessage) => {
    console.log(chalk.yellowBright(this.message(cfg)));
  };

  info = (cfg: LogMessage) => {
    console.log(chalk.gray(this.message(cfg)));
  };
}

export default new Log;
