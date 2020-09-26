const fs = require('fs');

function templatesIndexComponent(indexComponents, nameComponent) {
    fs.readFile(indexComponents, 'utf8', (err, content) => {
        let inputContent = content.replace(/\s/g, '');

        // if inputContent not ''
        if (inputContent !== '') {
            // find all imports
            let imp = content.split('export {')[0];
            // find all exports
            let exp = content.split('export {')[1].split('}')[0];
            // clean export string , replace ''
            let cleanExp = exp.replace(/\s/g, '').split(',');

            let newArrayComponents = cleanExp.filter((item) => item !== '');

            // join cleanExp and name
            let newExp = [...newArrayComponents, nameComponent].join(', ');
            // new import
            let contentImp = `${imp}import ${nameComponent} from './${nameComponent}';`;
            // new export
            let contentExp = `export { ${newExp} };`;
            // new content components/index.js
            let newContent = [contentImp, contentExp].join('\n');
            // write content components/index.js
            fs.writeFileSync(indexComponents, newContent, 'utf8');
        } else {
            let newContent = [
                `import ${nameComponent} from './${nameComponent}';`,
                `export { ${nameComponent} };`,
            ].join('\n');
            fs.writeFileSync(indexComponents, newContent, 'utf8');
        }
    });
}

module.exports = templatesIndexComponent;
