import Inquirer from 'inquirer';
import { PromptListItem } from '../types';

export default async (prompts: PromptListItem[]) => {
  return await new Inquirer.prompt(prompts);
};
