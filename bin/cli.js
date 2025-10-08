#!/usr/bin/env node

import { program } from "commander";
import commitCommand from "../commands/commit.js";
import initCommand from "../commands/init.js";

program
    .name("aicx")
    .version("1.0.0")
    .description("A CLI for generating commits using AI")
    .action(() => {
        console.log("Hii 👋 from aicx");
    });

program
    .command("commit")
    .description("Checking Config")
    .action(commitCommand);

program
    .command("init")
    .description("Configuration openAI api key")
    .action(initCommand);

program.parse(process.argv);