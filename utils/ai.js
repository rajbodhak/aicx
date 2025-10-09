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

        try {
            const response = await client.chat.completions.create({
                model: "gpt-4o-mini",
                messages: [
                    {
                        role: "system",
                        content: "You are a commit message generator. Generate ONLY a single-line conventional commit message. Do not include explanations, code blocks, or multiple lines. Format: type(scope): description"
                    },
                    {
                        role: "user",
                        content: `Generate a single-line conventional commit message (max 72 characters) for:\n\n${diff}`
                    }
                ],
                max_tokens: 50
            });

            return response.choices[0].message.content.trim();
        } catch (error) {
            if (error.status === 401) {
                throw new Error("Invalid OpenAI API key. Please run 'aicx init' to reconfigure.");
            } else if (error.status === 429) {
                throw new Error("Rate limit exceeded. Please try again in a moment.");
            } else if (error.code === 'insufficient_quota') {
                throw new Error("Insufficient OpenAI credits. Please add funds to your account.");
            }
            throw error;
        }

    } else if (provider === "gemini") {
        const genAI = new GoogleGenerativeAI(config.apiKey);
        const model = genAI.getGenerativeModel({
            model: "gemini-2.5-flash"
        });

        const result = await model.generateContent(
            `Generate ONLY a single-line conventional commit message for these changes. No explanations, no code blocks, no markdown. Just one line in format: type(scope): description. Maximum 72 characters.\n\nChanges:\n${diff}`
        );

        return result.response.text().trim();
    } else {
        throw new Error("Invalid provider. Please run 'aicx init' to configure.");
    }
}