const fs = require('fs');
const path = require('path');

const contentYml = require('./electron/content-yml.js');
const contentEnv = require('./electron/content-env.js');
const contentElectronJs = require('./electron/content-electron.js');
const contentWindow = require('./electron/content-window.js');
const contentIpc = require('./electron/content-ipc.js');
const configScripts = require('./electron/scripts-config.js');

const contentProject = require('../contentProject/content-project.js');

const packagePath = path.join(process.cwd(), 'package.json');
const ymlPath = path.join(process.cwd(), 'electron-builder.yml');
const envPath = path.join(process.cwd(), '.env');
const iconsPath = path.join(process.cwd(), 'icons');
// const publicDirPath = path.join(process.cwd(), 'public');
const electronDirPath = path.join(process.cwd(), 'public/electron');
const electronJsPath = path.join(process.cwd(), 'public/electron.js');
const windowJsPath = path.join(process.cwd(), 'public/window.js');
const picJsPath = path.join(process.cwd(), 'public/electron/ipc.js');

async function reactElectronConfig(package, answers) {
    let packageJson = require(packagePath);
    packageJson.scripts = packageJson.scripts || {};
    packageJson.homepage = packageJson.homepage || '';
    packageJson.main = packageJson.main || '';
    packageJson.homepage = '.';
    packageJson.main = 'public/electron.js';
    packageJson.scripts = { ...packageJson.scripts, ...configScripts(package) };

    await fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2), 'utf8');
    await fs.writeFileSync(ymlPath, contentYml, 'utf8');
    await fs.writeFileSync(envPath, contentEnv, 'utf8');
    await fs.mkdirSync(iconsPath);

    await fs.mkdirSync(electronDirPath);
    await fs.writeFileSync(electronJsPath, contentElectronJs, 'utf8');
    await fs.writeFileSync(windowJsPath, contentWindow, 'utf8');
    await fs.writeFileSync(picJsPath, contentIpc, 'utf8');

    contentProject(answers.style, answers.format);

    console.log('You need install some dependencies: 📌 yarn add -D electron electron-builder concurrently cross-env wait-on 📌');
}

module.exports = reactElectronConfig;
