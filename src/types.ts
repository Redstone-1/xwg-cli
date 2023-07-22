export type ValuesToUnion<T> = {
  [P in keyof T]: T[P]
}[keyof T]

export type TLoadingOther = {
  projectName: string
}

export type TRepoURL<T extends string> = `https://gitee.com/redstone-1/${T}.git`;

export interface IRepoURLTag {
  vueTemplate: 'vue-template';
  vueTemplateTypescript: 'vue-template-typescript';
  reactTemplate: 'react-template';
  reactTemplateTypescript: 'react-template-typescript';
  uniappVue2: 'uniapp-vue2';
  uniappVue2Uview: 'uniapp-vue2-uview';
  uniappVue3: 'uniapp-vue3';
  uniappVue3Typescript: 'uniapp-vue3-typescript';
  koa: 'koa';
  nest: 'nest';
  library: 'library';
  libraryTypescript: 'library-typescript';
}

export type TRepoURLTag = ValuesToUnion<IRepoURLTag>

export type TProjectType =
| 'library'
| 'vue'
| 'react'
| 'uniapp'
| 'koa'
| 'nest';

export type TPromptType =
| 'input'
| 'number'
| 'confirm'
| 'list'
| 'rawlist'
| 'expand'
| 'checkbox'
| 'password'
| 'editor';

export type TPromptListItem = {
  type: TPromptType,
  name: string,
  message: string,
  choices: { name: string, value: string | number | boolean }[],
  prefix?: string,
  suffix?: string,
  pageSize?: number,
  loop?: boolean,
  askAnswered?: boolean,
  waitUserInput?: boolean,
}

export type TDownloadRepoParams = {
  repoURL: TRepoURL<TRepoURLTag>,
  projectName: string,
  targetDirectory: string,
}
