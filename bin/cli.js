#!/usr/bin/env node

import { program } from "commander";
import commitCommand from "../commands/commit.js";
import initCommand from "../commands/init.js";

program
    .name("aicx")
    .version("1.0.0")
    .description("AI-powered commit message generator for Git")
    .usage("<command>")
    .helpOption("-h, --help", "Display help for command")
    .addHelpText('after', `
Examples:
  $ aicx init                 Configure your AI provider (OpenAI or Gemini)
  $ aicx commit               Generate AI-powered commit message
  $ aicx --version            Show version number
  $ aicx --help               Show this help message

Need help? Visit: https://github.com/rajbodhak/aicx
    `);

program
    .command("commit")
    .description("Generate AI-powered commit messages for staged changes")
    .addHelpText('after', `
Examples:
  $ git add .
  $ aicx commit
    `)
    .action(commitCommand);

program
    .command("init")
    .description("Configure your AI provider (OpenAI or Gemini)")
    .addHelpText('after', `
Examples:
  $ aicx init                 Interactive setup wizard
    `)
    .action(initCommand);

// Handle unknown commands - Git style
program.on('command:*', (operands) => {
    console.error(`aicx: '${operands[0]}' is not a aicx command. See 'aicx --help'.`);
    process.exit(1);
});

// Show help if no command provided
if (!process.argv.slice(2).length) {
    program.outputHelp();
}

program.parse(process.argv);