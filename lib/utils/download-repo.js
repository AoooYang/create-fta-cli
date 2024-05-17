
const ora = require("ora");
const fs = require("fs-extra");

const download = async (repo, dest) => {
  const process = ora(`git clone ${repo}, please wait...`);
  process.start();
  let result = await fs.copy(repo, dest, {overwrite: true});
  process.stop();
  return result;
};

module.exports = {
  download,
};