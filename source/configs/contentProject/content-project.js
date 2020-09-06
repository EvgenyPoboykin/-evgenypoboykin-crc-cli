const fs = require('fs');
const path = require('path');

const indexCss = require('./components/indexCss');
const indexInPoint = require('./components/indexInPoint');
const SW = require('./components/SW');

const templatesComponent = require('../contentCreate/templates-component.js');
const temlateeFormat = require('../contentCreate/templates-format.js');
const templatesLogic = require('../contentCreate/templates-logic.js');
const { styleFile, index, Interfaces } = require('../contentCreate/templates.js');

const projectPath = path.join(process.cwd(), 'src');

async function contentProject(style, format) {
    await fs.mkdirSync(projectPath);
    await fs.mkdirSync(`${projectPath}/App`);
    await fs.mkdirSync(`${projectPath}/App/components`);
    await fs.mkdirSync(`${projectPath}/App/state`);
    await fs.mkdirSync(`${projectPath}/App/assets`);

    await fs.writeFileSync(`${projectPath}/index.js`, indexInPoint, 'utf8');
    await fs.writeFileSync(`${projectPath}/index.css`, indexCss, 'utf8');
    await fs.writeFileSync(`${projectPath}/serviceWorker.js`, SW, 'utf8');

    const ContentApp = templatesComponent('App', true, format, style);
    const ContentStyle = styleFile(style, 'App');
    const StyleFormat = temlateeFormat(style, format);
    const ContentIndex = index('App');

    await fs.writeFileSync(`${projectPath}/App/index.${format}`, ContentIndex, 'utf8');
    await fs.writeFileSync(`${projectPath}/App/interfaces.tsx`, Interfaces(), 'utf8');

    templatesLogic(true, `${projectPath}/App/logic.${format}`, 'App');

    await fs.writeFileSync(`${projectPath}/App/App.${format}`, ContentApp, 'utf8');
    await fs.writeFileSync(`${projectPath}/App/style.${StyleFormat}`, ContentStyle, 'utf8');
}

module.exports = contentProject;
