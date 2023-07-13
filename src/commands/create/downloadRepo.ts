import {
  askCreateType,
  askNeedTypeScript,
  askIsAgreeCli,
  askVueVersion,
  askNeedUviewUI,
} from "./askUser";
import { loading } from "../../utils/loading";
import { getRepoURL, downloadGitRepo } from "../../const";
import { TProjectType } from '../../types';
import chalk from "chalk";

/**
 * 下载 vue 模板
 * @param projectName - 项目名称
 * @param targetDirectory - 目标存储路径
 */
const downloadVueTemplate = async (projectName: string, targetDirectory: string) => {
  let repoURL = '';
  const needTypeScript = await askNeedTypeScript();
  if (needTypeScript) {
    repoURL = getRepoURL('vue-template-typescript');
  }
  if (!needTypeScript) {
    repoURL = getRepoURL('vue-template');
  }
  await loading('正在下载模板，请稍后...', () => downloadGitRepo(`direct:${repoURL}`, targetDirectory, { clone: true }), { projectName });
};

/**
 * 下载 react 模板
 * @param projectName - 项目名称
 * @param targetDirectory - 目标存储路径
 */
const downloadReactTemplate = async (projectName: string, targetDirectory: string) => {
  let repoURL = '';
  const needTypeScript = await askNeedTypeScript();
  if (needTypeScript) {
    repoURL = getRepoURL('react-template-typescript');
  }
  if (!needTypeScript) {
    repoURL = getRepoURL('react-template');
  }
  await loading('正在下载模板，请稍后...', () => downloadGitRepo(`direct:${repoURL}`, targetDirectory, { clone: true }), { projectName });
};

/**
 * 下载库模板
 * @param projectName - 项目名称
 * @param targetDirectory - 目标存储路径
 */
const downloadLibraryTemplate = async (projectName: string, targetDirectory: string) => {
  let repoURL = '';
  const needTypeScript = await askNeedTypeScript();
  if (needTypeScript) {
    repoURL = getRepoURL('library-typescript');
  }
  if (!needTypeScript) {
    repoURL = getRepoURL('library');
  }
  await loading('正在下载模板，请稍后...', () => downloadGitRepo(`direct:${repoURL}`, targetDirectory, { clone: true }), { projectName });
};

/**
 * 下载 uniapp 模板
 * @param projectName - 项目名称
 * @param targetDirectory - 目标存储路径
 */
const downloadUniappTemplate = async (projectName: string, targetDirectory: string) => {
  const isAgreeCli = await askIsAgreeCli();
  if (!isAgreeCli) return;

  let repoURL = '';
  const vueVersion = await askVueVersion();
  if (vueVersion === 2) {
    const needUviewUI = await askNeedUviewUI();
    if (needUviewUI) {
      repoURL = getRepoURL('uniapp-vue2-uview');
    }
    if (!needUviewUI) {
      repoURL = getRepoURL('uniapp-vue2');
    }
  }

  if (vueVersion === 3) {
    const needTypeScript = await askNeedTypeScript();
    if (needTypeScript) {
      repoURL = getRepoURL('uniapp-vue3-typescript');
    }
    if (!needTypeScript) {
      repoURL = getRepoURL('uniapp-vue3');
    }
  }

  await loading('正在下载模板，请稍后...', () => downloadGitRepo(`direct:${repoURL}`, targetDirectory, { clone: true }), { projectName });
};

/**
 * 下载 koa 模板
 * @param projectName - 项目名称
 * @param targetDirectory - 目标存储路径
 */
const downloadKoaTemplate = async (projectName: string, targetDirectory: string) => {
  const repoURL = getRepoURL('koa');
  await loading('正在下载模板，请稍后...', () => downloadGitRepo(`direct:${repoURL}`, targetDirectory, { clone: true }), { projectName });
};

/**
 * 执行创建命令
 * @param projectType - 项目类型 "library" | "react" | "vue" | "uniapp" | "koa" | nest""
 * @param projectName - 项目名称
 * @param targetDirectory - 目标存储路径
 */
const execCreate = async (projectType: TProjectType, projectName: string, targetDirectory: string) => {
  switch (projectType) {
    case 'library':
      await downloadLibraryTemplate(projectName, targetDirectory);
      break;
    case 'vue':
      await downloadVueTemplate(projectName, targetDirectory);
      break;
    case 'react':
      await downloadReactTemplate(projectName, targetDirectory);
      break;
    case 'uniapp':
      await downloadUniappTemplate(projectName, targetDirectory);
      break;
    case 'koa':
      await downloadKoaTemplate(projectName, targetDirectory);
      break;
    case 'nest':
      console.log(chalk.gray.bold(`\r\n  开发中，敬请期待...\r\n`));
      break;
  }
};

/**
 * 创建项目
 * @param projectName - 项目名称
 * @param targetDirectory - 目标存储路径
 */
export default async (projectName: string, targetDirectory: string) => {
  console.log(chalk.red.bold(`\r\n  请注意：本 cli 下大部分模板采用 vite 构建，node 版本需要 14.18+ 或 16+ 或更高\r\n`));

  const projectType = await askCreateType();
  await execCreate(projectType, projectName, targetDirectory);
};
