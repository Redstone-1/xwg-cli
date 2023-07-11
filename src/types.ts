export type KeysToUnion<T> = {
  [P in keyof T]: P
}[keyof T]

export type LoadingOther = {
  projectName: string
}

export type TProjectType = 'library' | 'vue' | 'react' | 'uniapp' | 'koa' | 'nest';
