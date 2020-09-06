const contentYml =
    `appId: your.app.id
copyright: Your Name
productName: Product Name

asar: true

directories:
    buildResources: icons/
    output: dist/

artifactName: '` +
    '${productName}-${version}-${platform}.${ext}' +
    `'

electronUpdaterCompatibility: 1.0.0

files:
    - package.json
    - electron.js
    - window.js
    - electron/ipc.js
    - public/
    - build/
    - node_modules/

mac:
    target:
        - dmg
        - zip

dmg:
    icon: icons/icon.icns
    contents:
        - type: link
          path: /Applications
          x: 410
          y: 150
        - type: file
          x: 130
          y: 150

win:
    publisherName: Product Name
    target:
        - nsis
        - zip
`;

module.exports = contentYml;
