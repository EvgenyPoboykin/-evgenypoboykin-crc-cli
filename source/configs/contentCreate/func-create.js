const fs = require('fs');

const { index, styleFile } = require('./templates');

const templatesComponent = require('./templates-component');
const templatesLogic = require('./templates-logic');
const templatesIndexComponent = require('./templates-index-components');
const templatesInterfaces = require('./templates-interfaces');

function Create(pathFiles, inputData) {
    const nameComponent = inputData.name;

    //make a dir and name
    fs.mkdirSync(pathFiles.folderComponent);

    // create index.js from template index
    const contentIndex = index(nameComponent);
    const pathIndex = pathFiles.index;

    fs.writeFileSync(pathIndex, contentIndex, 'utf8');

    // create component logic.js from template component
    const logicLogic = inputData.logic;
    const pathLogic = pathFiles.logic;
    templatesLogic(logicLogic, pathLogic, nameComponent);

    const interfacesFormat = inputData.format;
    const interfacesPath = pathFiles.interfaces;
    templatesInterfaces(interfacesFormat, interfacesPath, nameComponent);

    // create component Name.js from template component
    const pathComponent = pathFiles.component;
    const contentComponent = templatesComponent(nameComponent, logicLogic, inputData.format, inputData.style);
    fs.writeFileSync(pathComponent, contentComponent, 'utf8');

    // create styles style.js from template style
    const style = inputData.style;
    const pathStyle = pathFiles.style;
    const contentStyle = styleFile(style, nameComponent);
    fs.writeFileSync(pathStyle, contentStyle, 'utf8');

    templatesIndexComponent(pathFiles.indexComponents, nameComponent);
}

module.exports = Create;
