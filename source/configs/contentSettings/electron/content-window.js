const contentWindow =
    `const path = require('path');
const electron = require('electron');
const { ipc } = require('./electron/ipc');
const { BrowserWindow } = electron;

const Menu = electron.Menu;

exports.CreateWin = (app) => {
    let mainWindow;
    // определение мониторовб 0 - главный
    const displays = electron.screen.getAllDisplays();
    mainWindow = new BrowserWindow({
        width: displays[0].size.width,
        height: displays[0].size.height,
        minWidth: 1200,
        minHeight: 900,
        frame: false,
        resizable: false,
        webPreferences: {
            nodeIntegration: true,
            webSecurity: false,
        },
    });

    ipc(mainWindow, app);
    // выключить при сборки ----------------------------------------------------------- !
    // инструмент разработчика
    const isDev = process.env.ELECTRON_DEVELOPMENT_MODE;

    //{ mode: 'undocked' }
    isDev ? mainWindow.webContents.openDevTools() : null;

    const localhost = 'http://localhost:3000/';
    const build = ` +
    '`file://' +
    '${path.join(__dirname, "../build/index.html")}' +
    '`' +
    `;

    mainWindow.loadURL(isDev ? localhost : build);

    const template = [];
    const newMenu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(newMenu);

    return mainWindow;
};`;

module.exports = contentWindow;
