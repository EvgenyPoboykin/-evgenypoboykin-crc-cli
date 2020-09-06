function configScript(package) {
    if (package === 'npm') {
        return {
            'r-start': 'react-scripts start',
            'r-build': 'react-scripts build',
            'r-test': 'react-scripts test',
            'r-eject': 'react-scripts eject',
            'electron-start': 'electron . ',
            'build:mac': 'ELECTRON_DEVELOPMENT_MODE=0 npm run r-build && electron-builder --mac',
            'build:win': 'ELECTRON_DEVELOPMENT_MODE=0 npm run r-build && electron-builder --win --ia32 --x64',
            start: 'ELECTRON_DEVELOPMENT_MODE=1 concurrently "cross-env BROWSER=none npm run r-start" "wait-on http://localhost:3000 && npm run electron-start"',
            build: 'ELECTRON_DEVELOPMENT_MODE=0 npm run r-build && electron-builder --win --ia32 --x64 --mac',
        };
    }
    return {
        'r-start': 'react-scripts start',
        'r-build': 'react-scripts build',
        'r-test': 'react-scripts test',
        'r-eject': 'react-scripts eject',
        'electron-start': 'electron . ',
        'build:mac': 'ELECTRON_DEVELOPMENT_MODE=0 yarn r-build && electron-builder --mac',
        'build:win': 'ELECTRON_DEVELOPMENT_MODE=0 yarn r-build && electron-builder --win --ia32 --x64',
        start: 'ELECTRON_DEVELOPMENT_MODE=1 concurrently "cross-env BROWSER=none yarn r-start" "wait-on http://localhost:3000 && yarn electron-start"',
        build: 'ELECTRON_DEVELOPMENT_MODE=0 yarn r-build && electron-builder --win --ia32 --x64 --mac',
    };
}

module.exports = configScript;
