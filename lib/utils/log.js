const chalk = require("chalk");
const log = console.log;

const error = (...v) => log(chalk.red(v));
const success = (...v) => log(chalk.green(v));
const hint = (...v) => log(chalk.blue(v));

module.exports = {
  error,
  hint,
  success,
  origin: chalk
};
