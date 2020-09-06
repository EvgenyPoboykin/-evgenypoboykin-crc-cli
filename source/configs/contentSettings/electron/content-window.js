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
        width: 500,
        height: 940,
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

    isDev ? mainWindow.webContents.openDevTools({ mode: 'undocked' }) : null;

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
