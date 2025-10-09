import inquirer from "inquirer";
import fs from "fs";
import os from "os";
import path from "path";
import ora from "ora";

export default async function initCommand() {
    try {
        // Ask which provider
        const { provider } = await inquirer.prompt([
            {
                type: "list",
                name: "provider",
                message: "Choose your AI provider:",
                choices: [
                    { name: "Gemini (Free, recommended)", value: "gemini" },
                    { name: "OpenAI (Paid, requires $5 minimum)", value: "openai" }
                ]
            }
        ]);

        // Ask for API key
        const providerName = provider === "gemini" ? "Gemini" : "OpenAI";
        const { apiKey } = await inquirer.prompt([
            {
                type: "input",
                name: "apiKey",
                message: `Enter your ${providerName} API key:`,
                validate: (input) => {
                    if (!input.trim()) {
                        return "API key cannot be empty";
                    }
                    return true;
                }
            }
        ]);

        const spinner = ora("Saving configuration...").start();

        const configDir = path.join(os.homedir(), ".aicx");
        const configPath = path.join(configDir, "config.json");

        await new Promise(res => setTimeout(res, 300)); // UX delay

        if (!fs.existsSync(configDir)) {
            fs.mkdirSync(configDir, { recursive: true });
        }

        const config = {
            provider,
            apiKey: apiKey.trim()
        };

        fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
        spinner.succeed("Configuration saved successfully!");
    } catch (error) {
        // Gracefully handle Ctrl + C
        if (error.isTtyError || error.name === "ExitPromptError") {
            console.log("\nOperation cancelled by user!");
            process.exit(0);
        } else {
            console.error("❌ Error:", error.message);
            process.exit(1);
        }
    }
}
