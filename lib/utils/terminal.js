const execa = require("execa");


const execCommand = (str, cwd) => execa(str, {cwd, stdin: [2,2,2]});

module.exports = {
  execCommand
}