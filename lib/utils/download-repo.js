
const ora = require("ora");
const fs = require("fs-extra");

const download = async (repo, dest) => {
  const oraProcess = ora(`create ${dest} directory, please wait...`);
  oraProcess.start();
  try {
    let result = await fs.copy(repo, dest, {overwrite: true});
    oraProcess.stop();
    return result;
  } catch (error) {
    process.exit(1);
  }

};

module.exports = {
  download,
};