import prompt from '../../utils/prompt';

/** 询问是否覆盖已有项目 */
export const askOverwrite = async () => {
  const { isOverwrite } = await prompt([
    // 返回值为 Promise
    // 具体配置参见: https://www.npmjs.com/package/inquirer#questions
    {
      type: 'confirm',
      name: 'isOverwrite',
      message: '原目录已经存在, 请选择是否覆盖',
    },
  ]);

  return isOverwrite;
};

/** 询问要创建的项目类型 */
export const askCreateType = async () => {
  const { projectType } = await prompt([
    // 返回值为 Promise
    // 具体配置参见: https://www.npmjs.com/package/inquirer#questions
    {
      type: 'list',
      name: 'projectType',
      message: '请选择你要创建的项目类型',
      choices: [
        { name: 'vue', value: 'vue' },
        { name: 'react', value: 'react' },
        { name: 'uniapp', value: 'uniapp' },
        { name: 'koa', value: 'koa' },
        // { name: 'nest', value: 'nest' },
        { name: 'library', value: 'library' },
      ],
    },
  ]);

  return projectType;
};

/** 询问是否需要 TypeScript */
export const askNeedTypeScript = async () => {
  const { needTypeScript } = await prompt([
    // 返回值为 Promise
    // 具体配置参见: https://www.npmjs.com/package/inquirer#questions
    {
      type: 'confirm',
      name: 'needTypeScript',
      message: '是否需要 TypeScript ?',
    },
  ]);

  return needTypeScript;
};

/** 询问是否采用 cli 创建的模板 */
export const askIsAgreeCli = async () => {
  const { isAgreeCli } = await prompt([
    // 返回值为 Promise
    // 具体配置参见: https://www.npmjs.com/package/inquirer#questions
    {
      type: 'confirm',
      name: 'isAgreeCli',
      message: 'uniapp 模板采用 cli 创建, 暂不提供由 HBuilderX 创建的模板, 是否继续？',
    },
  ]);

  return isAgreeCli;
};

/** 询问是否采用 vite 创建的模板 */
export const askIsAgreeVite = async () => {
  const { isAgreeVite } = await prompt([
    // 返回值为 Promise
    // 具体配置参见: https://www.npmjs.com/package/inquirer#questions
    {
      type: 'confirm',
      name: 'isAgreeVite',
      message: '此模板构建工具使用 vite, 是否继续？',
    },
  ]);

  return isAgreeVite;
};

/** 询问使用的 vue 版本 */
export const askVueVersion = async () => {
  const { vueVersion } = await prompt([
    // 返回值为 Promise
    // 具体配置参见: https://www.npmjs.com/package/inquirer#questions
    {
      type: 'list',
      name: 'vueVersion',
      message: '使用 vue2 还是 vue3 ?',
      choices: [
        { name: 'vue2', value: 2 },
        { name: 'vue3', value: 3 },
      ],
    },
  ]);

  return vueVersion;
};

/** 询问是否需要 uview-ui */
export const askNeedUviewUI = async () => {
  const { needUviewUI } = await prompt([
    // 返回值为 Promise
    // 具体配置参见: https://www.npmjs.com/package/inquirer#questions
    {
      type: 'confirm',
      name: 'needUviewUI',
      message: '是否需要 uview-ui ?',
    },
  ]);

  return needUviewUI;
};

/** 询问是否需要 eslint */
export const askNeedESlint = async () => {
  const { needESlint } = await prompt([
    // 返回值为 Promise
    // 具体配置参见: https://www.npmjs.com/package/inquirer#questions
    {
      type: 'confirm',
      name: 'needESlint',
      message: '是否需要 eslint ?',
    },
  ]);

  return needESlint;
};

/** 询问是否需要 commitlint */
export const askNeedCommitlint = async () => {
  const { needCommitlint } = await prompt([
    // 返回值为 Promise
    // 具体配置参见: https://www.npmjs.com/package/inquirer#questions
    {
      type: 'confirm',
      name: 'needCommitlint',
      message: '是否需要 commitlint ?',
    },
  ]);

  return needCommitlint;
};

/** 询问是否继续创建 vue3 模板 */
export const askAgreeVue3Template = async () => {
  const { agreeVue3Tempalte } = await prompt([
    // 返回值为 Promise
    // 具体配置参见: https://www.npmjs.com/package/inquirer#questions
    {
      type: 'confirm',
      name: 'agreeVue3Tempalte',
      message: '目前仅提供 vue3 版本的模板, 是否继续 ?',
    },
  ]);

  return agreeVue3Tempalte;
};
