import Inquirer from 'inquirer';

export default async (prompts: any[]) => {
  return await new Inquirer.prompt(prompts);
};
