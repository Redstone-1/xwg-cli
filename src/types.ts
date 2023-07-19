export type KeysToUnion<T> = {
  [P in keyof T]: P
}[keyof T]

export type LoadingOther = {
  projectName: string
}

export type TRepoURL<T extends string> = `https://gitee.com/redstone-1/${T}.git`;

export type TRepoURLTag =
| 'vue-template'
| 'vue-template-typescript'
| 'react-template'
| 'react-template-typescript'
| 'uniapp-vue2'
| 'uniapp-vue2-uview'
| 'uniapp-vue3'
| 'uniapp-vue3-typescript'
| 'koa'
| 'nest'
| 'library'
| 'library-typescript'

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
