const fs = require('fs');

const { Interfaces } = require('./templates');

function templatesInterfaces(format, pathFile) {
    if (format === 'tsx') {
        fs.writeFileSync(pathFile, Interfaces(), 'utf8');
    }
}

module.exports = templatesInterfaces;
