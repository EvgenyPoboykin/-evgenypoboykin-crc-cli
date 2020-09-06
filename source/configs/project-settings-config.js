const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');

const reactElectronConfig = require('./contentSettings/react-electron-config');
const reactConfig = require('./contentSettings/react-config');

const configPath = path.join(process.cwd(), 'package.json');
const projectPath = path.join(process.cwd(), 'src');
const existsConfig = fs.existsSync(configPath);

async function settingsConfig() {
    if (existsConfig) {
        const answers = await inquirer.prompt([
            {
                type: 'list',
                name: 'type',
                message: 'What type of project? 📦',
                choices: ['React', 'React + Electron'],
            },
            {
                type: 'list',
                name: 'format',
                message: 'What format files you use? 🤖',
                choices: ['js', 'tsx'],
                default: 'js',
            },
            {
                type: 'list',
                name: 'style',
                message: 'What format style you use? 👽',
                choices: ['styled-components', 'css', 'scss'],
                default: 'styled-components',
            },
        ]);

        switch (answers.type) {
            case 'React':
                if (fs.existsSync(projectPath)) {
                    await fs.rmdirSync(projectPath, { recursive: true });
                    await reactConfig(answers);
                } else {
                    await reactConfig(answers);
                }
                break;
            case 'React + Electron':
                const answersRE = await inquirer.prompt([
                    {
                        type: 'list',
                        name: 'nodePackage',
                        message: 'What node package you use? 🤖',
                        choices: ['yarn', 'npm'],
                        default: 'yarn',
                    },
                ]);

                if (fs.existsSync(projectPath)) {
                    await fs.rmdirSync(projectPath, { recursive: true });
                    await reactElectronConfig(answersRE.nodePackage, answers);
                } else {
                    await reactElectronConfig(answersRE.nodePackage, answers);
                }

                break;
        }
    } else {
        console.log('package.json does not exists! ❌');
    }
}

module.exports = settingsConfig;
