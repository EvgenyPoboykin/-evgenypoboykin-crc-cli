const contentIpc = `const { ipcMain } = require('electron');

exports.ipc = (win, app) => {
    ipcMain.on('close', (e) => {
        app.quit();
    });
    ipcMain.on('minimize', (e) => {
        win.minimize();
    });
    ipcMain.on('maximize', (e) => {
        win.maximize();
    });

};
`;

module.exports = contentIpc;
