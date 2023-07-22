/**
 * 静态变量
 * @author xiwenge <1825744594@qq.com>
 * @create 2023/06/25
 */
import fs from 'fs-extra';
import path from 'path';
import util from 'util';
import download from 'download-git-repo';
import { TRepoURLTag, IRepoURLTag, TRepoURL } from './types';

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

export const getRepoURL = (tag: TRepoURLTag): TRepoURL<TRepoURLTag> => {
  return `https://gitee.com/redstone-1/${tag}.git`;
};

export const downloadGitRepo = util.promisify(download);

export const repoURLTag: IRepoURLTag = {
  vueTemplate: 'vue-template',
  vueTemplateTypescript: 'vue-template-typescript',
  reactTemplate: 'react-template',
  reactTemplateTypescript: 'react-template-typescript',
  uniappVue2: 'uniapp-vue2',
  uniappVue2Uview: 'uniapp-vue2-uview',
  uniappVue3: 'uniapp-vue3',
  uniappVue3Typescript: 'uniapp-vue3-typescript',
  koa: 'koa',
  nest: 'nest',
  library: 'library',
  libraryTypescript: 'library-typescript',
};
