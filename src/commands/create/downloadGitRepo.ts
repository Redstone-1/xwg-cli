import { getRepoURL, repoURLTag, ProjectTypeEnum } from '../../constants';
import { ProjectType, RepoURL } from '../../types';
import { downloadByGit } from '../../utils/downloadByGit';
import log from '../../utils/log';
import { overwriteJSONFile } from '../../utils/overwriteJSONFile';
import { writeFileByEjs, PrettierParserTypeEnum } from '../../utils/writeFileByEjs';
import {
  askCreateType,
  askNeedTypeScript,
  askIsAgreeCli,
  askVueVersion,
  askNeedUviewUI,
  askAgreeVue3Template,
  askNeedESlint,
} from './askUser';
import eslintConfigTemp from './configfile-template/eslint';
import eslintIgnoreTemp from './configfile-template/eslintIgnore';

/**
 * 下载 vue 模板
 */
const downloadVueTemplate = async (name: string, directory: string) => {
  let repoURL = '';
  const agreeVue3Tempalte = await askAgreeVue3Template();

  if (!agreeVue3Tempalte) {
    return;
  }

  const needTypeScript = await askNeedTypeScript();

  if (needTypeScript) {
    repoURL = getRepoURL(repoURLTag.vueTemplateTypescript);
  }

  if (!needTypeScript) {
    repoURL = getRepoURL(repoURLTag.vueTemplate);
  }

  await downloadByGit({ url: repoURL as RepoURL, name, directory });

  const needESlint = await askNeedESlint();

  if (needESlint) {
    await writeFileByEjs({
      fileName: '.eslintrc',
      dir: directory,
      ejsParams: {
        renderStr: eslintConfigTemp,
        options: {
          language: needTypeScript ? 'typescript' : '',
          framework: 'vue'
        }
      },
      prettierParserType: PrettierParserTypeEnum.JSON
    });

    await writeFileByEjs({
      fileName: '.eslintignore',
      dir: directory,
      ejsParams: { renderStr: eslintIgnoreTemp }
    });

    await overwriteJSONFile({
      fileName: 'package.json',
      dir: directory,
      cb: (obj) => {
        if ('scripts' in obj) {
          obj.scripts = {
            ...obj.scripts,
            'lint': "eslint . --ext '.js,.ts' --fix",
          };
        }

        if ('devDependencies' in obj) {
          obj.devDependencies = needTypeScript
          ? {
            ...obj.devDependencies,
            '@typescript-eslint/eslint-plugin': '^6.0.0',
            '@typescript-eslint/parser': '^6.0.0',
            'eslint': '^8.44.0',
            'eslint-plugin-vue': '^9.15.1',
            'vue-eslint-parser': '^9.3.1',
          } : {
            ...obj.devDependencies,
            'eslint': '^8.44.0',
            'eslint-plugin-vue': '^9.15.1',
            'vue-eslint-parser': '^9.3.1',
          };
        }
      }
    });
  }
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

  const needESlint = await askNeedESlint();

  if (needESlint) {
    await writeFileByEjs({
      fileName: '.eslintrc',
      dir: directory,
      ejsParams: {
        renderStr: eslintConfigTemp,
        options: {
          language: needTypeScript ? 'typescript' : '',
          framework: 'react'
        }
      },
      prettierParserType: PrettierParserTypeEnum.JSON
    });

    await writeFileByEjs({
      fileName: '.eslintignore',
      dir: directory,
      ejsParams: { renderStr: eslintIgnoreTemp }
    });

    await overwriteJSONFile({
      fileName: 'package.json',
      dir: directory,
      cb: (obj) => {
        if ('scripts' in obj) {
          obj.scripts = {
            ...obj.scripts,
            'lint': 'eslint src --ext js,jsx --report-unused-disable-directives --max-warnings 0',
          };
        }

        if ('devDependencies' in obj) {
          obj.devDependencies = needTypeScript
          ? {
            ...obj.devDependencies,
            '@typescript-eslint/eslint-plugin': '^6.0.0',
            '@typescript-eslint/parser': '^6.0.0',
            'eslint': '^8.44.0',
            'eslint-plugin-react': '^7.32.2',
          } : {
            ...obj.devDependencies,
            'eslint': '^8.44.0',
            'eslint-plugin-react': '^7.32.2',
            'eslint-plugin-react-hooks': '^4.6.0',
            'eslint-plugin-react-refresh': '^0.4.1',
          };
        }
      }
    });
  }
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
 * @param projectType - 项目类型
 * @param projectName - 项目名称
 * @param targetDirectory - 目标存储路径
 */
const execCreate = async (projectType: ProjectType, projectName: string, targetDirectory: string) => {
  switch (projectType) {
    case ProjectTypeEnum.LIBRARY:
      await downloadLibraryTemplate(projectName, targetDirectory);
      break;
    case ProjectTypeEnum.VUE:
      await downloadVueTemplate(projectName, targetDirectory);
      break;
    case ProjectTypeEnum.REACT:
      await downloadReactTemplate(projectName, targetDirectory);
      break;
    case ProjectTypeEnum.UNIAPP:
      await downloadUniappTemplate(projectName, targetDirectory);
      break;
    case ProjectTypeEnum.KOA:
      await downloadKoaTemplate(projectName, targetDirectory);
      break;
  }
};

/**
 * 创建项目
 * @param projectName - 项目名称
 * @param targetDirectory - 目标存储路径
 */
export default async (projectName: string, targetDirectory: string) => {
  log.info({ msg: '请注意: 本 cli 下部分模板采用 vite 构建, node 版本需要 14.18+ 或 16+ 或更高', end: '\r\n' });

  const projectType = await askCreateType();
  await execCreate(projectType, projectName, targetDirectory);
};
