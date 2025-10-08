import path from "path";
import os from "os";
import fs from "fs";
import OpenAI from "openai";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { getStagedDiff } from "./git.js";

export default async function generateCommit() {
    const configPath = path.join(os.homedir(), ".aicx", "config.json");
    let config = {};

    if (fs.existsSync(configPath)) {
        config = JSON.parse(fs.readFileSync(configPath, "utf-8"));
    }

    const provider = config.provider;
    const diff = getStagedDiff();

    if (provider === "openai") {
        const client = new OpenAI({
            apiKey: config.apiKey
        });

        const response = await client.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                {
                    role: "system",
                    content: "You are a helpful assistant that generates concise, conventional commit messages."
                },
                {
                    role: "user",
                    content: `Generate a short conventional commit message for these changes:\n\n${diff}`
                }
            ],
            max_tokens: 150
        });

        return response.choices[0].message.content.trim();

    } else if (provider === "gemini") {
        const genAI = new GoogleGenerativeAI(config.apiKey);
        const model = genAI.getGenerativeModel({
            model: "gemini-2.5-flash"
        });

        const result = await model.generateContent(
            `Generate a short, conventional commit message for these changes:\n\n${diff}`
        );

        return result.response.text().trim();
    } else {
        throw new Error("Invalid provider. Please run 'aicx init' to configure.");
    }
}