import ora from "ora";
import { getConfig } from "../utils/config.js";
import generateCommit from "../utils/ai.js";

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

        responseSpinner = ora("Generating commit message...").start();
        const response = await generateCommit();
        responseSpinner.succeed("Commit message generated!");
        console.log(response.output_text || response)
    } catch (error) {
        if (responseSpinner && responseSpinner.isSpinning) {
            responseSpinner.fail(`Failed: ${error.message}`);
        } else {
            spinner.fail(`Failed: ${error.message}`);
        }
    }
}