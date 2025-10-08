import chalk from "chalk";

export const log = {
    success: (msg) => console.log(chalk.green(msg)),
    error: (msg) => console.log(chalk.red(msg)),
    info: (msg) => console.log(chalk.cyan(msg)),
    warn: (msg) => console.log(chalk.yellow(msg)),
};
