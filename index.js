#!/usr/bin/env node
const { program } = require("commander");
const createCommand = require('./lib/core/create.js');
const pak = require("./package.json");

program
  .name(pak.name)
  .description(pak.description)
  .version(pak.version);

createCommand();

program.parse();

