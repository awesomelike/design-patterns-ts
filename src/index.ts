import inquirer from 'inquirer';
import path from 'path';
import fs from 'fs/promises';
import { DirContent } from './types/main';

const getDirContent = async (...dirNames: string[]): Promise<(DirContent)[]> => {
  const dirContent = await fs.readdir(path.join(__dirname, ...dirNames));
  console.log('YOUR_PATH', dirContent);

  const statContent = await Promise.all(dirContent.map(async (element) => {
    const fullPath = path.join(__dirname, ...dirNames, element);
    try {
      const stat = await fs.stat(fullPath);
      return ({
        name: element,
        isDirectory: stat.isDirectory(),
      });
    } catch (error) {
      return null;
    }
  }));
  return statContent.filter((element) => element !== null);
};

const displayContent = (content: DirContent[]) => content.map((element) => (element!.isDirectory ? `[*dir] ${element!.name}` : element!.name));

const main = async (): Promise<void> => {
  const choicesOne = await getDirContent('DesignPatterns');
  const answersOne: { category: string } = await inquirer.prompt([
    {
      type: 'list',
      name: 'category',
      message: 'Choose a design pattern category',
      choices: displayContent(choicesOne),
    },
  ]);

  console.log(answersOne);
  if (answersOne.category.includes('*dir')) {
    const choicesTwo = await getDirContent(answersOne.category.split(' ')[1]);
    console.log(choicesOne);
  }
};

main();
