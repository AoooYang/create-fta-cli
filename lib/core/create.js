
const { program } = require('commander');
const { createProject } = require("./action.js");
const createCommand = () => {
  program
    .command('create <project-name>')
    .description('create a new project by create-fta-cli')
    .action(createProject);
};

module.exports = createCommand;

