import prompt from "../../utils/prompt";

// ========== vite ==========
/** 询问是否支持使用 Vite 构建项目  */
export const askIsAgreeVite = async () => {
  const { isAgreeVite } = await prompt([
    // 返回值为 Promise
    // 具体配置参见：https://www.npmjs.com/package/inquirer#questions
    {
      type: "list",
      name: "isAgreeVite",
      message: "本 cli 下所有模板均使用 Vite 构建，是否继续？",
      choices: [
        { name: "继续", value: true },
        { name: "退出", value: false },
      ],
    },
  ]);

  return isAgreeVite;
};

// ========== library ==========
/** 询问要创建的项目类型 */
export const askCreateType = async () => {
  const { projectType } = await prompt([
    // 返回值为 Promise
    // 具体配置参见：https://www.npmjs.com/package/inquirer#questions
    {
      type: "list",
      name: "projectType",
      message: "请选择你要创建的项目类型",
      choices: [
        { name: "npm 库", value: 'library' },
        { name: "vue 项目", value: 'vue' },
        { name: "react 项目", value: 'react' },
        { name: "uniapp 项目", value: 'uniapp' },
        { name: "koa 项目", value: 'koa' },
        { name: "nest 项目", value: 'nest' },
      ],
    },
  ]);

  return projectType;
};

/** 询问是否需要 TypeScript */
export const askNeedTypeScript = async () => {
  const { needTypeScript } = await prompt([
    // 返回值为 Promise
    // 具体配置参见：https://www.npmjs.com/package/inquirer#questions
    {
      type: "list",
      name: "needTypeScript",
      message: "是否需要 TypeScript ?",
      choices: [
        { name: "需要", value: true },
        { name: "不需要", value: false },
      ],
    },
  ]);

  return needTypeScript;
};

// ========== uniapp ==========
/** 询问是否采用 cli 创建的模板 */
export const askIsAgreeCli = async () => {
  const { isAgreeCli } = await prompt([
    // 返回值为 Promise
    // 具体配置参见：https://www.npmjs.com/package/inquirer#questions
    {
      type: "list",
      name: "isAgreeCli",
      message: "uniapp 模板采用 cli 创建，暂不提供由 HBuilderX 创建的模板。是否继续？",
      choices: [
        { name: "继续", value: true },
        { name: "退出", value: false },
      ],
    },
  ]);

  return isAgreeCli;
};

/** 询问使用的 vue 版本 */
export const askVueVersion = async () => {
  const { vueVersion } = await prompt([
    // 返回值为 Promise
    // 具体配置参见：https://www.npmjs.com/package/inquirer#questions
    {
      type: "list",
      name: "vueVersion",
      message: "使用 vue2 还是 vue3 ?",
      choices: [
        { name: "vue2", value: 2 },
        { name: "vue3", value: 3 },
      ],
    },
  ]);

  return vueVersion;
};

/** 询问是否需要 uview-ui */
export const askNeedUviewUI = async () => {
  const { needUviewUI } = await prompt([
    // 返回值为 Promise
    // 具体配置参见：https://www.npmjs.com/package/inquirer#questions
    {
      type: "list",
      name: "needUviewUI",
      message: "是否需要 uview-ui ?",
      choices: [
        { name: "需要", value: true },
        { name: "不需要", value: false },
      ],
    },
  ]);

  return needUviewUI;
};
