const fs = require('fs');
const MakeIndexComponents = require('./func-make-index-components');
const Create = require('./func-create');

function CheckIndexComponents(pathFiles, inputData) {
    fs.readFile(pathFiles.indexComponents, 'utf-8', (err, content) => {
        if (content !== undefined) {
            Create(pathFiles, inputData);
        } else {
            MakeIndexComponents(pathFiles.indexComponents);
            Create(pathFiles, inputData);
        }
    });
}

module.exports = CheckIndexComponents;
