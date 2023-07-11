import {
  askIsAgreeVite,
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
      console.log(chalk.gray.bold(`\r\n  开发中，敬请期待...\r\n`));
      break;
    case 'react':
      console.log(chalk.gray.bold(`\r\n  开发中，敬请期待...\r\n`));
      break;
    case 'uniapp':
      await downloadUniappTemplate(projectName, targetDirectory);
      break;
    case 'koa':
      console.log(chalk.gray.bold(`\r\n  开发中，敬请期待...\r\n`));
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
  const isAgreeVite = await askIsAgreeVite();
  if (!isAgreeVite) return;

  console.log(chalk.red.bold(`\r\n  Vite 官方提示：Node 版本需要 14.18+ 或 16+ 或更高\r\n`));

  const projectType = await askCreateType();
  await execCreate(projectType, projectName, targetDirectory);
};
