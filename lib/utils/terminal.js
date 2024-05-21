const execa = require("execa");
const ora = require("ora");

const execCommand = async (command, args, option, useOra=true) => {
  try {  
    let oraProcess;
    if(useOra) {
      oraProcess = ora(`${command} ${args}, please wait...`);
      oraProcess.start();
    }
    const {stdout } = await execa(command, args, option);
    console.log(stdout);
    if(useOra) {
      oraProcess.stop();
    }
  } catch (error) {
    console.log(error)
    process.exit(1);
  }
};

module.exports = {
  execCommand
}