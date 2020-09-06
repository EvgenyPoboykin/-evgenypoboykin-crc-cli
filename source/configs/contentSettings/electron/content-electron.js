const contentElectronJs = `const path = require('path');

const electron = require('electron');

const { app } = electron;

const { CreateWin } = require(path.join(__dirname, './window.js'));

app.on('ready', () => {
    CreateWin(app);
});

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
`;

module.exports = contentElectronJs;
