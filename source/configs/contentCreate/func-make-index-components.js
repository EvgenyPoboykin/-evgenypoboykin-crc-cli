const fs = require('fs');

function MakeIndexComponents(indexComponents) {
    fs.writeFileSync(indexComponents, '', 'utf8');
}

module.exports = MakeIndexComponents;
