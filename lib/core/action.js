const fs = require('fs-extra');
const path = require('path');
const inquirer = require('inquirer');
const log = require('../utils/log');
const { languagePrompt } = require('../utils/prompt');
const { download } = require('../utils/download-repo');
const { execCommand } = require("../utils/terminal");

const createProject = async (projectName, options) => {
  const { ts: useTypescript } = options;
  console.log(useTypescript);

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

  const sourceTemplate = language === "typescript" ? "react-ts" : "react-ts";

  const source = path.resolve(__dirname, `../template/${sourceTemplate}`);
  await download(source, destDir);
  
  log.hint("Init git repository...")
  await execCommand("git init", destDir);
  log.hint("Initialization of git repository completed")
  log.hint("Start installing dependencies…")
  await execCommand("npm i", destDir);
  log.hint('Installing dependencies completed');
  console.log("")
  log.success("Project created successfully")
  log.hint("Start the project using the following command in the terminal")
  log.hint(`$cd ${projectName}`)
  log.hint(`$ npm run serve`)

};

module.exports = {
  createProject
};

