import ora from "ora";
import { getConfig } from "../utils/config.js";
import generateCommit from "../utils/ai.js";
import inquirer from "inquirer";
import { commitChanges } from "../utils/git.js";

export default async function commitCommand() {
    const spinner = ora("Checking API key...").start();
    let responseSpinner;
    try {
        const config = getConfig();
        await new Promise(res => setTimeout(res, 500));

        if (!config || !config.apiKey) {
            spinner.fail("No API key found. Run `aicx init` first.");
            return;
        }

        spinner.succeed(`API key loaded: ${config.apiKey.slice(0, 8)}...`);

        let commitMessage = "";
        let shouldContinue = true;

        while (shouldContinue) {
            //Generating commit message
            responseSpinner = ora("Generating commit message...").start();
            commitMessage = await generateCommit();
            responseSpinner.succeed("Commit message generated!");
            console.log("\n Suggested commit message:");
            console.log(` ${commitMessage} \n`);

            //Asking user
            const { action } = await inquirer.prompt([
                {
                    type: "list",
                    name: "action",
                    message: "What you like to do?",
                    choices: [
                        { name: "Use this message", value: "use" },
                        { name: "Regenerate", value: "regenerate" },
                        { name: "Edit manually", value: "edit" },
                        { name: "Cancel", value: "cancel" }
                    ]
                }
            ]);

            if (action === "use") {
                const commitSpinner = ora("Committing changes...").start();
                commitChanges(commitMessage);
                commitSpinner.succeed("Changes committed successfully!");
                shouldContinue = false;
            } else if (action === "regenerate") {
                continue;
            } else if (action === "edit") {
                const { editMessage } = await inquirer.prompt([
                    {
                        type: "input",
                        name: "editMessage",
                        message: "Enter your commit message",
                        default: commitMessage
                    }
                ]);
                const commitSpinner = ora("Committing changes...").start();
                commitChanges(editMessage);
                commitSpinner.succeed("Changes committed successfully");
                shouldContinue = false;
            } else if (action === "cancel") {
                console.log("❌ Commit cancelled!")
                shouldContinue = false;
            }
        }

    } catch (error) {
        if (responseSpinner && responseSpinner.isSpinning) {
            responseSpinner.fail(`Failed: ${error.message}`);
        } else {
            spinner.fail(`Failed: ${error.message}`);
        }
    }
}