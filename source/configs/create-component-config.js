const fs = require('fs');
const path = require('path');
const CreateTemplate = require('./contentCreate/create-template.js');

const configPath = path.join(process.cwd(), 'crc-cli.json');
const existsConfig = fs.existsSync(configPath);

function createConfig(name, logic) {
    if (existsConfig) {
        CreateTemplate(name, logic);
    } else {
        console.log('crc-cli.json does not exists! Run "crc-cli --init" ❌');
    }
}

module.exports = createConfig;
