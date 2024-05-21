const fs = require('fs-extra');
const path = require('path');
const inquirer = require('inquirer');
const open = require("open");
const log = require('../utils/log');
const { languagePrompt } = require('../utils/prompt');
const { download } = require('../utils/download-repo');
const { execCommand } = require("../utils/terminal");

const createProject = async (projectName) => {

  const destDir = path.resolve(process.cwd(), projectName);
  if (fs.existsSync(destDir)) {
    console.log(
      `Target directory ${log.origin.red(
        destDir
      )} already exists, please input another`
    );
    process.exit(1);
  }
  const { language } = await inquirer.prompt(languagePrompt);

  const sourceTemplate = language === "typescript" ? "react-ts" : "react-js";

  const source = path.resolve(__dirname, `../template/${sourceTemplate}`);

  await download(source, destDir);
  await execCommand("git", ["init"], {cwd: destDir});
  await execCommand("npm",["i"], {cwd: destDir});
  await execCommand("npm", ["run", "serve"], {cwd: destDir, stdio: 'inherit'}, false);
  open("http://localhost:8080/")
};

module.exports = {
  createProject
};

