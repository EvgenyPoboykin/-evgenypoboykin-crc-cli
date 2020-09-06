const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const buildCliConfig = require('./contentInit/build-config-cli.js');

const configPath = path.join(process.cwd(), 'crc-cli.json');
const existsConfig = fs.existsSync(configPath);

async function initConfig() {
    if (existsConfig) {
        inquirer
            .prompt([
                {
                    type: 'confirm',
                    name: 'overwrite',
                    message: 'crc-cli.json already exists! Would you like to overwrite it ? 🤔',
                    default: true,
                },
            ])
            .then((answers) => {
                if (answers.overwrite) {
                    buildCliConfig();
                } else {
                    console.log('Goodbye! 👋');
                }
            });
    } else {
        buildCliConfig();
    }
}

module.exports = initConfig;
