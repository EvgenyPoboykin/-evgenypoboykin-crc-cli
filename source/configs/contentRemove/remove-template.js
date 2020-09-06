const fs = require('fs');
const path = require('path');

const cliConfig = path.join(process.cwd(), 'ep-crc-cli.json');

var configPath;

if (fs.existsSync(cliConfig)) {
    configPath = require(cliConfig);
}

function RemoveTemplate(name) {
    let format = configPath.format;
    let removeComponent = `${configPath.components}${name}`;
    let indexComponents = `${configPath.components}index.${format}`;

    fs.rmdirSync(removeComponent, { recursive: true });

    fs.readFile(indexComponents, 'utf8', (err, content) => {
        // find all exports
        let exp = content.split('export {')[1].split('}')[0];

        let prebuildExp = exp.split(name).join('\n').replace(/\s/g, '');

        if (prebuildExp !== '') {
            // find all imports
            let imp = content.split('export {')[0];

            let cleanExp = prebuildExp.replace(/\s/g, '').split(',');

            let withoutName = imp.split(`import ${name} from './${name}';`);

            let cleanImp = withoutName.join().split('\n');

            let newImp = [];
            let newExp = [];

            for (let i = 0; i < cleanExp.length; i++) {
                if (cleanExp[i] !== '' && cleanExp[i] !== ',') {
                    newExp.push(cleanExp[i]);
                }
            }

            for (let i = 0; i < cleanImp.length; i++) {
                if (cleanImp[i] !== '' && cleanImp[i] !== ',') {
                    newImp.push(cleanImp[i]);
                }
            }

            let ImportData = newImp.join('\n');

            let ExportData = newExp.join(', ');
            // new content components/index.js
            let newContent = [ImportData, `export { ${ExportData} };`].join('\n');
            // write content components/index.js
            fs.writeFileSync(indexComponents, newContent, 'utf8');
        } else {
            fs.writeFileSync(indexComponents, '', 'utf8');
        }
    });

    console.log('\x1b[32m', `Component ${name} Removed!`);
}

module.exports = RemoveTemplate;
