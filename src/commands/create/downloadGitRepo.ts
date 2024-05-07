import chalk from 'chalk';
import {
  askCreateType,
  askNeedTypeScript,
  askIsAgreeCli,
  askVueVersion,
  askNeedUviewUI,
} from './askUser';
import { downloadByGit } from '../../utils/downloadByGit';
import { getRepoURL, repoURLTag } from '../../constants';
import { ProjectType, RepoURL } from '../../types';

/**
 * 下载 vue 模板
 */
const downloadVueTemplate = async (name: string, directory: string) => {
  let repoURL = '';
  const needTypeScript = await askNeedTypeScript();
  if (needTypeScript) {
    repoURL = getRepoURL(repoURLTag.vueTemplateTypescript);
  }
  if (!needTypeScript) {
    repoURL = getRepoURL(repoURLTag.vueTemplate);
  }
  await downloadByGit({ url: repoURL as RepoURL, name, directory });
};

/**
 * 下载 react 模板
 */
const downloadReactTemplate = async (name: string, directory: string) => {
  let repoURL = '';
  const needTypeScript = await askNeedTypeScript();
  if (needTypeScript) {
    repoURL = getRepoURL(repoURLTag.reactTemplateTypescript);
  }
  if (!needTypeScript) {
    repoURL = getRepoURL(repoURLTag.reactTemplate);
  }
  await downloadByGit({ url: repoURL as RepoURL, name, directory });
};

/**
 * 下载库模板
 */
const downloadLibraryTemplate = async (name: string, directory: string) => {
  let repoURL = '';
  const needTypeScript = await askNeedTypeScript();
  if (needTypeScript) {
    repoURL = getRepoURL(repoURLTag.libraryTypescript);
  }
  if (!needTypeScript) {
    repoURL = getRepoURL(repoURLTag.library);
  }
  await downloadByGit({ url: repoURL as RepoURL, name, directory });
};

/**
 * 下载 uniapp 模板
 */
const downloadUniappTemplate = async (name: string, directory: string) => {
  const isAgreeCli = await askIsAgreeCli();
  if (!isAgreeCli) return;

  let repoURL = '';
  const vueVersion = await askVueVersion();
  if (vueVersion === 2) {
    const needUviewUI = await askNeedUviewUI();
    if (needUviewUI) {
      repoURL = getRepoURL(repoURLTag.uniappVue2Uview);
    }
    if (!needUviewUI) {
      repoURL = getRepoURL(repoURLTag.uniappVue2);
    }
  }

  if (vueVersion === 3) {
    const needTypeScript = await askNeedTypeScript();
    if (needTypeScript) {
      repoURL = getRepoURL(repoURLTag.uniappVue3Typescript);
    }
    if (!needTypeScript) {
      repoURL = getRepoURL(repoURLTag.uniappVue3);
    }
  }

  await downloadByGit({ url: repoURL as RepoURL, name, directory });
};

/**
 * 下载 koa 模板
 */
const downloadKoaTemplate = async (name: string, directory: string) => {
  const repoURL = getRepoURL(repoURLTag.koa);
  await downloadByGit({ url: repoURL as RepoURL, name, directory });
};

/**
 * 执行创建命令
 * @param projectType - 项目类型 'library' | 'react' | 'vue' | 'uniapp' | 'koa' | nest''
 * @param projectName - 项目名称
 * @param targetDirectory - 目标存储路径
 */
const execCreate = async (projectType: ProjectType, projectName: string, targetDirectory: string) => {
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
