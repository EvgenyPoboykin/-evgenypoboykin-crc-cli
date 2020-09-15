const fs = require('fs');
const path = require('path');

const templatesFormat = require('./templates-format');
const CheckIndexComponents = require('./fucn-check-index-components');

const cliConfig = path.join(process.cwd(), 'crc-cli.json');

var configPath;

if (fs.existsSync(cliConfig)) {
    configPath = require(cliConfig);
}

function CreateTemplate(name, logic) {
    const format = configPath.format;
    const style = configPath.style;

    const styleFormat = templatesFormat(style, format);

    // folder components path from package.json
    const componentsFolder = `${configPath.components}`;
    const folderComponent = `${configPath.components}${name}`;
    const indexComponentPath = `${configPath.components}${name}/index.${format}`;
    const componentPath = `${configPath.components}${name}/${name}.${format}`;
    const logicComponentPath = `${configPath.components}${name}/logic.${format}`;
    const styleComponentPath = `${configPath.components}${name}/style.${styleFormat}`;
    const indexComponentsPath = `${configPath.components}index.${format}`;
    const interfacesPath = `${configPath.components}${name}/interfaces.tsx`;

    const pathFiles = {
        folderComponent: folderComponent,
        index: indexComponentPath,
        component: componentPath,
        logic: logicComponentPath,
        style: styleComponentPath,
        indexComponents: indexComponentsPath,
        interfaces: interfacesPath,
    };
    const inputData = {
        logic: logic,
        format: format,
        style: style,
        name: name,
    };

    if (!fs.existsSync(componentsFolder)) {
        fs.mkdirSync(componentsFolder);
        CheckIndexComponents(pathFiles, inputData);
    } else {
        CheckIndexComponents(pathFiles, inputData);
    }

    console.log('\x1b[32m', `New Component ${name} Created!`);
}

module.exports = CreateTemplate;
