import fs, { readFileSync } from "fs";
import os from "os";
import path from "path";

const configFile = path.join(os.homedir(), ".aicx", "config.json");

export function getConfig() {
    if (!fs.existsSync(configFile)) return null;
    const data = readFileSync(configFile, "utf-8");
    return JSON.parse(data);
}