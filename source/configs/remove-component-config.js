const fs = require('fs');
const path = require('path');
const RemoveTemplate = require('./contentRemove/remove-template.js');

const configPath = path.join(process.cwd(), 'crc-cli.json');
const existsConfig = fs.existsSync(configPath);

function removeConfig(name) {
    if (existsConfig) {
        RemoveTemplate(name);
    } else {
        console.log('crc-cli.json does not exists! Run "crc-cli --init" ❌');
    }
}

module.exports = removeConfig;
