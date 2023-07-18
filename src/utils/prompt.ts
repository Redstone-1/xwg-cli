import Inquirer from 'inquirer';
import { TPromptListItem } from '../types';

export default async (prompts: TPromptListItem[]) => {
  return await new Inquirer.prompt(prompts);
};
