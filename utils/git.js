import { execSync } from "child_process";

export function getStagedDiff() {
    const diff = execSync("git diff --cached").toString();
    if (!diff.trim()) {
        throw new Error("No staged changes found. Please stage your files first.");
    }
    return diff;
}


export function commitChanges(message) {
    execSync(`git commit -m "${message}"`);
}