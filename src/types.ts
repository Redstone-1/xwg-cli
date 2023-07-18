export type KeysToUnion<T> = {
  [P in keyof T]: P
}[keyof T]

export type LoadingOther = {
  projectName: string
}

export type TProjectType = 'library' | 'vue' | 'react' | 'uniapp' | 'koa' | 'nest';

export type TPromptType = 'input' | 'number' | 'confirm' | 'list' | 'rawlist' | 'expand' | 'checkbox' | 'password' | 'editor';

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
