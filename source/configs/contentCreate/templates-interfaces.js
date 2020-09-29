const fs = require('fs');

const { Interfaces } = require('./templates');

function templatesInterfaces(format, pathFile, name) {
    if (format === 'tsx') {
        fs.writeFileSync(pathFile, Interfaces(name), 'utf8');
    }
}

module.exports = templatesInterfaces;
