# Contributing to AICX

First off, thank you for considering contributing to AICX! 🎉

It's people like you that make AICX such a great tool. We welcome contributions from everyone, whether you're fixing a typo, reporting a bug, or adding a major feature.

## Table of Contents

- [Contributing to AICX](#contributing-to-aicx)
  - [Table of Contents](#table-of-contents)
  - [Code of Conduct](#code-of-conduct)
  - [How Can I Contribute?](#how-can-i-contribute)
    - [Reporting Bugs](#reporting-bugs)
    - [Suggesting Enhancements](#suggesting-enhancements)
    - [Pull Requests](#pull-requests)
  - [Development Setup](#development-setup)
    - [Prerequisites](#prerequisites)
    - [Setup Steps](#setup-steps)
    - [Project Structure](#project-structure)
    - [Running Tests](#running-tests)
  - [Style Guidelines](#style-guidelines)
    - [JavaScript Style](#javascript-style)
    - [Code Formatting](#code-formatting)
    - [File Organization](#file-organization)
  - [Commit Message Guidelines](#commit-message-guidelines)
  - [Community](#community)
  - [Questions?](#questions)

## Code of Conduct

This project and everyone participating in it is governed by our commitment to creating a welcoming and inclusive environment. By participating, you are expected to uphold this code. Please be respectful and constructive in your interactions.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the [existing issues](https://github.com/rajbodhak/aicx/issues) to avoid duplicates.

When you create a bug report, include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps to reproduce the problem**
- **Provide specific examples**
- **Describe the behavior you observed and what you expected**
- **Include screenshots or GIFs if relevant**
- **Mention your environment:**
  - OS (Windows, macOS, Linux)
  - Node.js version (`node --version`)
  - npm version (`npm --version`)
  - AICX version (`aicx --version`)

**Example Bug Report:**

```markdown
## Bug: Auto-push fails silently on Windows

**Steps to reproduce:**
1. Install aicx-cli globally
2. Run `aicx init` and configure with Gemini
3. Stage changes with `git add .`
4. Run `aicx commit`
5. Select "Use this message"

**Expected behavior:**
Should show push spinner and success/failure message

**Actual behavior:**
Push step is skipped silently

**Environment:**
- OS: Windows 11
- Node.js: v20.10.0
- npm: 10.2.3
- aicx: 1.0.1
```

### Suggesting Enhancements

Enhancement suggestions are welcome! Before creating an enhancement suggestion:

- Check if the enhancement has already been suggested
- Provide a clear use case for why this enhancement would be useful
- Consider whether this fits the scope of the project

**Example Enhancement Suggestion:**

```markdown
## Feature Request: Support for Claude AI

**Problem:**
Currently only OpenAI and Gemini are supported. Claude AI is another popular option.

**Proposed Solution:**
Add Anthropic Claude as a third provider option in `aicx init`

**Benefits:**
- More choice for users
- Claude has competitive pricing
- Some users prefer Claude's output style

**Additional Context:**
Claude API documentation: [link]
```

### Pull Requests

We actively welcome your pull requests!

**Process:**

1. Fork the repo and create your branch from `main`
2. Make your changes
3. Test your changes thoroughly
4. Update documentation if needed
5. Write or update tests if applicable
6. Ensure your code follows the style guidelines
7. Submit a pull request

**Pull Request Guidelines:**

- **Keep PRs focused:** One feature/fix per PR
- **Write clear descriptions:** Explain what and why
- **Reference issues:** Use "Fixes #123" or "Closes #456"
- **Add tests:** If adding new functionality
- **Update docs:** If changing user-facing features

**Example Pull Request:**

```markdown
## Add support for custom commit templates

Fixes #42

### Changes
- Added `templates` config option
- Created template parser
- Updated `aicx init` to ask about templates
- Added template examples to docs

### Testing
- [x] Tested with default template
- [x] Tested with custom template
- [x] Tested invalid template handling
- [x] Updated README with template examples

### Screenshots
[Add screenshots if UI changes]
```

## Development Setup

### Prerequisites

- Node.js 16.0.0 or higher
- npm or yarn
- Git

### Setup Steps

```bash
# 1. Fork and clone the repository
git clone https://github.com/YOUR_USERNAME/aicx.git
cd aicx

# 2. Install dependencies
npm install

# 3. Link for local testing
npm link

# 4. Test your changes
aicx --help
aicx init
aicx commit

# 5. Make changes and test
# Your changes will be reflected immediately due to npm link
```

### Project Structure

```
aicx/
├── bin/
│   └── index.js          # CLI entry point
├── commands/
│   ├── init.js           # Init command
│   └── commit.js         # Commit command
├── utils/
│   ├── ai.js             # AI integration
│   ├── config.js         # Config management
│   ├── git.js            # Git operations
│   └── logger.js         # Logging utilities
├── package.json
└── README.md
```

### Running Tests

```bash
npm test
```

## Style Guidelines

### JavaScript Style

- Use ES6+ features
- Use `const` and `let`, not `var`
- Use arrow functions where appropriate
- Use template literals for string interpolation
- Add JSDoc comments for functions

**Example:**

```javascript
/**
 * Generates a commit message using AI
 * @param {string} diff - Git diff output
 * @returns {Promise<string>} Generated commit message
 */
export async function generateCommitMessage(diff) {
    // Implementation
}
```

### Code Formatting

- Use 4 spaces for indentation (not tabs)
- Add trailing commas in objects and arrays
- Use single quotes for strings
- Add semicolons
- Keep lines under 100 characters when possible

### File Organization

- One main export per file
- Group imports at the top
- Order: Node.js modules → npm packages → local modules

```javascript
// Node.js built-ins
import { execSync } from "child_process";
import { readFileSync } from "fs";

// npm packages
import inquirer from "inquirer";
import ora from "ora";

// Local modules
import { getConfig } from "../utils/config.js";
```

## Commit Message Guidelines

Since this is a tool about commit messages, we should practice what we preach! 😊

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Examples:**

```
feat(ai): add support for Claude AI provider

- Add Anthropic API integration
- Update init command to include Claude option
- Add Claude-specific configuration

Closes #42
```

```
fix(git): handle push failures gracefully

Previously, if git push failed, the entire operation
would crash. Now we catch the error and show a warning
while keeping the commit intact.

Fixes #56
```

```
docs(readme): update installation instructions

- Add troubleshooting for Windows users
- Clarify npm vs npx usage
- Add screenshots for init command
```

## Community

- **Issues:** [GitHub Issues](https://github.com/rajbodhak/aicx/issues)
- **Discussions:** [GitHub Discussions](https://github.com/rajbodhak/aicx/discussions)
- **Twitter:** [@rajidesu](https://twitter.com/rajidesu)

## Questions?

Don't hesitate to ask questions by:
- Opening an issue with the "question" label
- Starting a discussion on GitHub Discussions
- Reaching out on Twitter

Thank you for contributing to AICX! 🚀