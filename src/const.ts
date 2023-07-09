/**
 * 静态变量
 * @author xiwenge <1825744594@qq.com>
 * @create 2023/06/25
 */
import fs from 'fs-extra';
import path from 'node:path';
import util from 'node:util';
import download from 'download-git-repo';

/** 当前根目录 */
export const ROOT_DIR = path.resolve(__dirname, '../');

const { version } = fs.readJSONSync(path.resolve(ROOT_DIR, 'package.json'));

/** https://tooltt.com/art-ascii/ font: ANSI Shadow */
export const BRAND_LOGO = `
  ██╗  ██╗██╗    ██╗ ██████╗      ██████╗██╗     ██╗
  ╚██╗██╔╝██║    ██║██╔════╝     ██╔════╝██║     ██║
  ╚███╔╝ ██║ █╗ ██║██║  ███╗    ██║     ██║     ██║
  ██╔██╗ ██║███╗██║██║   ██║    ██║     ██║     ██║
  ██╔╝ ██╗╚███╔███╔╝╚██████╔╝    ╚██████╗███████╗██║
  ╚═╝  ╚═╝ ╚══╝╚══╝  ╚═════╝      ╚═════╝╚══════╝╚═╝
`;

/** 当前版本号 */
export const VERSION = version;

export const getRepoURL = (tag: string) => {
  return `https://gitee.com/redstone-1/${tag}.git`;
};

export const downloadGitRepo = util.promisify(download);
