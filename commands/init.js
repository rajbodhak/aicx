import inquirer from "inquirer";
import fs from "fs";
import os from "os";
import path from "path";
import ora from "ora";

export default async function initCommand() {
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

    // Ask for API key based on provider
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

    try {
        const configDir = path.join(os.homedir(), ".aicx");
        const configPath = path.join(configDir, "config.json");

        // Delay for UX
        await new Promise(res => setTimeout(res, 300));

        if (!fs.existsSync(configDir)) {
            fs.mkdirSync(configDir, { recursive: true });
        }

        const cleanKey = apiKey.trim();
        const config = {
            provider: provider,
            apiKey: cleanKey
        };

        fs.writeFileSync(configPath, JSON.stringify(config, null, 2));

        spinner.succeed(`Configuration saved successfully!`);

    } catch (error) {
        spinner.fail("Failed to save configuration");
        console.error(error.message);
        process.exit(1);
    }
}