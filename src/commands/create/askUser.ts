import prompt from "../../utils/prompt";

// ========== overwrite ==========
/** 询问要创建的项目类型 */
export const askOverwrite = async () => {
  const { isOverwrite } = await prompt([
    // 返回值为 Promise
    // 具体配置参见：https://www.npmjs.com/package/inquirer#questions
    {
      type: "list",
      name: "isOverwrite",
      message: "原目录已经存在，请选择是否覆盖",
      choices: [
        { name: "覆盖", value: true },
        { name: "取消", value: false },
      ],
    },
  ]);

  return isOverwrite;
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
        { name: "vue", value: 'vue' },
        { name: "react", value: 'react' },
        { name: "uniapp", value: 'uniapp' },
        { name: "koa", value: 'koa' },
        // { name: "nest", value: 'nest' },
        { name: "library", value: 'library' },
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
