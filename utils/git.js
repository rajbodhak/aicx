import { execSync } from "child_process";

export function getStagedDiff() {
    const diff = execSync("git diff --cached").toString();
    if (!diff.trim()) {
        throw new Error("No staged changes found. Please stage your files first.");
    }
    return diff;
}

export function commitChanges(message) {
    const escapedMessage = message.replace(/"/g, '\\"');
    execSync(`git commit -m "${escapedMessage}"`);
}

export function pushChanges() {
    execSync("git push");
}