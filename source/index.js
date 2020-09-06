const arg = require('arg');

const initConfig = require('./configs/init-config');
const settingsConfig = require('./configs/project-settings-config');
const removeConfig = require('./configs/remove-component-config');
const createConfig = require('./configs/create-component-config');

function parseArgs(rawArgs) {
    const args = arg(
        {
            '-i': Boolean,
            '-s': Boolean,
            '-r': Boolean,
            '-l': Boolean,
            '--init': '-i',
            '--projectsettings': '-s',
            '--remove': '-r',
            '--logic': '-l',
        },
        {
            argv: rawArgs.slice(2),
        }
    );

    return {
        init: args['-i'] || false,
        projectSettings: args['-s'] || false,
        logic: args['-l'] || false,
        removeTemplate: args['-r'] || false,
        template: args._[0],
    };
}
export function cli(args) {
    const options = parseArgs(args);

    // console.log(options);

    if (options.init && options.template === undefined && !options.logic && !options.projectSettings && !options.removeTemplate) {
        initConfig();
    } else if (options.projectSettings && options.template === undefined && !options.logic && !options.removeTemplate && !options.init) {
        settingsConfig();
    } else if ((options.template !== undefined || (options.template !== undefined && options.logic)) && !options.projectSettings && !options.removeTemplate && !options.init) {
        createConfig(options.template, options.logic);
    } else if (options.template !== undefined && options.removeTemplate && !options.logic && !options.projectSettings && !options.init) {
        removeConfig(options.template);
    }
}
