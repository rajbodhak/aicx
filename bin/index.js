#!/usr/bin/env node

import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const cliPath = join(__dirname, 'cli.js');

// Spawn node with --no-warnings flag
const child = spawn(
    process.execPath,
    ['--no-warnings', cliPath, ...process.argv.slice(2)],
    { stdio: 'inherit' }
);

child.on('exit', (code) => {
    process.exit(code);
});