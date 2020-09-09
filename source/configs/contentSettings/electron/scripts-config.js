function configScript(package) {
    if (package === 'npm') {
        return {
            'r-start': 'react-scripts start',
            'r-build': 'react-scripts build',
            'r-test': 'react-scripts test',
            'r-eject': 'react-scripts eject',
            'electron-start': 'electron . ',
            mac: 'npm run r-build && electron-builder --mac',
            win: 'npm run r-build && electron-builder --win --ia32 --x64',
            lnx: 'npm run r-build && electron-builder --linux',
            start: 'concurrently "cross-env BROWSER=none NODE_ENV=development npm run r-start" "wait-on http://localhost:3000 && npm run electron-start"',
            build_all: 'npm run r-build && electron-builder --win --ia32 --x64 --mac --linux',
        };
    }
    return {
        'r-start': 'react-scripts start',
        'r-build': 'react-scripts build',
        'r-test': 'react-scripts test',
        'r-eject': 'react-scripts eject',
        'electron-start': 'electron . ',
        mac: 'yarn r-build && electron-builder --mac',
        win: 'yarn r-build && electron-builder --win --ia32 --x64',
        lnx: 'npm run r-build && electron-builder --linux',
        start: 'concurrently "cross-env BROWSER=none NODE_ENV=development yarn r-start" "wait-on http://localhost:3000 && yarn electron-start"',
        build_all: 'yarn r-build && electron-builder --win --ia32 --x64 --mac --linux',
    };
}

module.exports = configScript;
