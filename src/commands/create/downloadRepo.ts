import { askCreateType, askNeedTypeScript } from "./askUser";
import { loading } from "../../utils/loading";
import { getRepoURL, downloadGitRepo } from "../../const";
import { TProjectType } from '../../types';

/**
 * 下载库模板
 * @param url - 下载地址
 * @param projectName - 项目名称
 * @param targetDirectory - 目标存储路径
 */
const downloadLibrary = async (projectName: string, targetDirectory: string) => {
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
 * 执行创建命令
 * @param projectType - 项目类型 "library" | "react" | "vue" | "uniapp"
 * @param projectName - 项目名称
 * @param targetDirectory - 目标存储路径
 */
const execCreate = async (projectType: TProjectType, projectName: string, targetDirectory: string) => {
  switch (projectType) {
    case 'library':
      await downloadLibrary(projectName, targetDirectory);
      break;
      case 'vue':
        break;
    case 'react':
      break;
    case 'uniapp':
      break;
  }
};

/**
 * 创建项目
 * @param projectName - 项目名称
 * @param targetDirectory - 目标存储路径
 */
export default async (projectName: string, targetDirectory: string) => {
  const projectType = await askCreateType();
  await execCreate(projectType, projectName, targetDirectory);
};
