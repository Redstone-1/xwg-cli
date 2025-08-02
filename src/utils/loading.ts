import ora from 'ora';
import { type LoadingParams } from '../types';
import sleep from './sleep';

interface LoadingParasExtend extends LoadingParams {
  retryTimes: number | null;
}

const execute = async ({
  tip = '正在执行操作, 请稍候...',
  call,
  success,
  fail,
  retryTimes = 0
}: LoadingParasExtend): Promise<any> => {
  const spinner = ora();
  spinner.start(tip); // 开启加载

  try {
    await call();
    // 加载成功
    spinner.succeed();

    if (typeof success === 'function') {
      await success();
    }

    return true;
  } catch (error) {
    // 加载失败
    spinner.fail();

    if (typeof fail === 'function') {
      await fail(error);
    }

    await sleep(1000);
    // 重新拉取

    if (typeof retryTimes === 'number' && retryTimes < 2) {
      retryTimes++;
      return execute({ call, success, fail, retryTimes });
    }

    retryTimes = null;
  }
};

const loadingFactory = () => {
  const retryTimes = 0;
  return ({ tip, call, success, fail }: LoadingParams) => execute({ tip, call, success, fail, retryTimes });
};

export default loadingFactory();
