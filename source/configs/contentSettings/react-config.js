const contentProject = require('../contentProject/content-project.js');

async function reactConfig(answers) {
    await contentProject(answers.style, answers.format);
}

module.exports = reactConfig;
