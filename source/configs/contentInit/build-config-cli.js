const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');

const configPath = path.join(process.cwd(), 'crc-cli.json');
const packagePath = path.join(process.cwd(), 'package.json');

function Messages(answers) {
    if (answers.style === 'styled-components' && answers.format === 'js') {
        return console.log('You need install some dependencies: 📌 yarn add -D styled-components 📌');
    } else if (answers.style === 'styled-components' && answers.format === 'tsx') {
        return console.log('You need install some dependencies: 📌 yarn add -D styled-components @types/styled-components 📌');
    }
}

async function buildConfigCli() {
    const answers = await inquirer.prompt([
        {
            type: 'text',
            name: 'components',
            message: 'Where your Components places? 💼',
            default: './src/App/components/',
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

    const newCliConfig = {
        components: answers.components,
        format: answers.format,
        style: answers.style,
    };

    if (fs.existsSync(packagePath)) {
        let packageContent = require(packagePath);

        const newScript = {
            cc: 'crc-cli',
        };

        packageContent.scripts = packageContent.scripts || {};
        packageContent.scripts = { ...packageContent.scripts, ...newScript };

        fs.writeFileSync(packagePath, JSON.stringify(packageContent, null, 2), 'utf8');
        fs.writeFileSync(configPath, JSON.stringify(newCliConfig, null, 2), 'utf8');

        Messages(answers);
    } else {
        fs.writeFileSync(configPath, JSON.stringify(newCliConfig, null, 2), 'utf8');
        Messages(answers);
    }
}

module.exports = buildConfigCli;
