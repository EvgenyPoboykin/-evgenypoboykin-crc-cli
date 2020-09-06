const { componentJsWithoutLogic, componentJsWithLogic, componentTsWithoutLogic, componentTsWithLogic } = require('./templates');

function templatesComponent(name, logic, format, style) {
    if (logic) {
        if (format === 'tsx') {
            return componentTsWithLogic(name, style);
        } else {
            return componentJsWithLogic(name, style);
        }
    } else {
        if (format === 'tsx') {
            return componentTsWithoutLogic(name, style);
        } else {
            return componentJsWithoutLogic(name, style);
        }
    }
}

module.exports = templatesComponent;
