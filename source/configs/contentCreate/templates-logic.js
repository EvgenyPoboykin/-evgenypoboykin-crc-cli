const fs = require('fs');

const { logicCode } = require('./templates');

function templatesLogic(logicInputData, pathFile, nameComponent) {
    if (logicInputData) {
        const contentLogic = logicCode(nameComponent);
        fs.writeFileSync(pathFile, contentLogic, 'utf8');
    }
}

module.exports = templatesLogic;
