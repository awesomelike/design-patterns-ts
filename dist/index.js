"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const path_1 = __importDefault(require("path"));
const promises_1 = __importDefault(require("fs/promises"));
const getDirContent = (...dirNames) => __awaiter(void 0, void 0, void 0, function* () {
    const dirContent = yield promises_1.default.readdir(path_1.default.join(__dirname, ...dirNames));
    console.log('YOUR_PATH', dirContent);
    const statContent = yield Promise.all(dirContent.map((element) => __awaiter(void 0, void 0, void 0, function* () {
        const fullPath = path_1.default.join(__dirname, ...dirNames, element);
        try {
            const stat = yield promises_1.default.stat(fullPath);
            return ({
                name: element,
                isDirectory: stat.isDirectory(),
            });
        }
        catch (error) {
            return null;
        }
    })));
    return statContent.filter((element) => element !== null);
});
const displayContent = (content) => content.map((element) => (element.isDirectory ? `[*dir] ${element.name}` : element.name));
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const choicesOne = yield getDirContent('DesignPatterns');
    const answersOne = yield inquirer_1.default.prompt([
        {
            type: 'list',
            name: 'category',
            message: 'Choose a design pattern category',
            choices: displayContent(choicesOne),
        },
    ]);
    console.log(answersOne);
    if (answersOne.category.includes('*dir')) {
        const choicesTwo = yield getDirContent(answersOne.category.split(' ')[1]);
        console.log(choicesOne);
    }
});
main();
