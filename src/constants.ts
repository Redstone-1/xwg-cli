/**
 * 静态变量
 * @author xiwenge <1825744594@qq.com>
 * @create 2023/06/25
 */
import fs from 'fs-extra';
import path from 'path';
import { ValuesToUnion, RepoURLTag, RepoURL } from './types';

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

export const repoURLTag: RepoURLTag = {
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

export const getRepoURL = (tag: ValuesToUnion<RepoURLTag>): RepoURL => {
  return `https://gitee.com/redstone-1/${tag}.git`;
};
