# AICX - AI-Powered Commit Generator 🚀

[![npm version](https://img.shields.io/npm/v/aicx-cli.svg)](https://www.npmjs.com/package/aicx-cli)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/node/v/aicx-cli.svg)](https://nodejs.org)

> Generate beautiful, conventional commit messages using AI. Say goodbye to "fix stuff" commits! 👋

**AICX** is a CLI tool that uses AI (OpenAI or Gemini) to automatically generate meaningful commit messages based on your staged changes. It follows the [Conventional Commits](https://www.conventionalcommits.org/) specification.

## ✨ Features

- 🤖 **AI-Powered** - Generates meaningful commit messages using OpenAI or Gemini
- 🎯 **Conventional Commits** - Follows standard commit message format
- 🔄 **Regenerate** - Not happy? Generate a new message instantly
- ✏️ **Edit Before Commit** - Review and modify messages before committing
- 🆓 **Free Option** - Use Gemini's free API
- 💰 **Premium Option** - Use OpenAI for enhanced quality
- 🎨 **Beautiful CLI** - Clean, intuitive interface with helpful feedback
- ⚡ **Fast** - Generate commits in seconds

## 📦 Installation

### Global Installation (Recommended)

```bash
npm install -g aicx-cli
```

### Local Installation

```bash
npm install aicx-cli
npx aicx init
```

## 🚀 Quick Start

### Step 1: Initialize AICX

```bash
aicx init
```

Choose your AI provider:
- **Gemini** (Free, recommended for getting started)
  - Get your API key: [Google AI Studio](https://aistudio.google.com/apikey)
- **OpenAI** (Paid, requires $5 minimum credit)
  - Get your API key: [OpenAI Platform](https://platform.openai.com/api-keys)

### Step 2: Generate Your First Commit

```bash
# Stage your changes
git add .

# Generate commit message
aicx commit
```

That's it! 🎉

## 📖 Usage

### Initialize or Reconfigure

```bash
aicx init
```

This will:
1. Ask you to choose between Gemini or OpenAI
2. Prompt for your API key
3. Save configuration to `~/.aicx/config.json`

### Generate Commit Messages

```bash
# Stage your changes first
git add <files>

# Generate commit
aicx commit
```

You'll see options to:
- **Use this message** - Commit with the generated message
- **Regenerate** - Generate a new message
- **Edit manually** - Modify the message before committing
- **Cancel** - Exit without committing

### Get Help

```bash
# General help
aicx --help

# Command-specific help
aicx commit --help
aicx init --help

# Check version
aicx --version
```

## 💡 Examples

### Basic Workflow

```bash
$ git add src/components/Button.js
$ aicx commit

✔ Ready! Using gemini (AIzaSyBn...)
⠋ Generating commit message...
✔ Commit message generated!

 Suggested commit message:
 feat(ui): add new Button component with hover effects 

? What you like to do? (Use arrow keys)
❯ Use this message
  Regenerate
  Edit manually
  Cancel
```

### Editing Messages

```bash
? What you like to do? Edit manually
? Enter your commit message: feat(ui): add Button component with animations
⠋ Committing changes...
✔ Changes committed successfully!
```

### Generated Commit Examples

AICX generates commits following conventional commit format:

```
feat(auth): implement OAuth2 login flow
fix(api): resolve null pointer exception in user endpoint
docs(readme): update installation instructions
refactor(utils): simplify date formatting logic
style(css): improve responsive layout for mobile devices
test(auth): add unit tests for login validation
chore(deps): update dependencies to latest versions
```

## 🆚 OpenAI vs Gemini

| Feature         | Gemini            | OpenAI                    |
| --------------- | ----------------- | ------------------------- |
| **Cost**        | 🆓 Free            | 💰 Paid (~$0.15/1M tokens) |
| **Setup**       | API key only      | API key + $5 minimum      |
| **Quality**     | ⭐⭐⭐⭐ Excellent    | ⭐⭐⭐⭐⭐ Outstanding         |
| **Speed**       | ⚡ Fast            | ⚡ Fast                    |
| **Rate Limits** | 60 requests/min   | Varies by tier            |
| **Best For**    | Personal projects | Professional/team use     |

### Recommendation

- **Start with Gemini** - Free and excellent for most use cases
- **Upgrade to OpenAI** - If you need the absolute best quality or higher rate limits

## 🔧 Configuration

Configuration is stored in `~/.aicx/config.json`:

```json
{
  "provider": "gemini",
  "apiKey": "your-api-key-here"
}
```

### Reconfigure

Simply run `aicx init` again to change your provider or API key.

### Manual Configuration

You can manually edit `~/.aicx/config.json` if needed.

## ❓ Troubleshooting

### "aicx: command not found"

**Solution:** Install globally or use `npx`:
```bash
npm install -g aicx-cli
# or
npx aicx-cli init
```

### "No API key found"

**Solution:** Run initialization:
```bash
aicx init
```

### "No staged changes found"

**Solution:** Stage your changes first:
```bash
git add <files>
# or stage all changes
git add .
```

### "Not a git repository"

**Solution:** Initialize git:
```bash
git init
```

### "Invalid API key"

**Solution:** 
1. Verify your API key is correct
2. Check you're using the right provider (Gemini vs OpenAI)
3. Reconfigure: `aicx init`

### "Insufficient OpenAI credits"

**Solution:** Add credits to your OpenAI account:
- Minimum: $5
- Visit: [OpenAI Billing](https://platform.openai.com/account/billing)

### "Rate limit exceeded"

**Solution:** 
- **Gemini:** Wait a moment and try again (60 requests/min limit)
- **OpenAI:** Check your tier limits or upgrade your plan

## 🛠️ How It Works

1. **Reads Git Diff** - Analyzes your staged changes
2. **Sends to AI** - Processes diff through OpenAI or Gemini
3. **Generates Message** - Creates a conventional commit message
4. **Interactive Review** - Lets you approve, regenerate, or edit
5. **Commits** - Executes `git commit` with the final message

## 🔒 Security & Privacy

- **API Keys** - Stored locally in `~/.aicx/config.json` (never shared)
- **Code Analysis** - Only staged changes are sent to AI providers
- **No Telemetry** - AICX doesn't collect or send usage data
- **Open Source** - Review the code on [GitHub](https://github.com/rajbodhak/aicx)

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Report Bugs** - [Open an issue](https://github.com/rajbodhak/aicx/issues)
2. **Suggest Features** - Share your ideas
3. **Submit PRs** - Improve the code
4. **Spread the Word** - Star ⭐ the repo

### Development Setup

```bash
# Clone the repository
git clone https://github.com/rajbodhak/aicx.git
cd aicx

# Install dependencies
npm install

# Link for local testing
npm link

# Test your changes
aicx --help
```

## 📝 Changelog

### v1.0.0 (Initial Release)
- ✅ OpenAI integration (GPT-4o-mini)
- ✅ Gemini integration (Gemini 2.5 Flash)
- ✅ Interactive commit workflow
- ✅ Message regeneration
- ✅ Manual editing
- ✅ Conventional commit format
- ✅ Beautiful CLI with spinners and colors
- ✅ Comprehensive error handling

## 🗺️ Roadmap

Future features we're considering:

- [ ] Support for Claude AI
- [ ] Custom commit templates
- [ ] Commit message history
- [ ] Multi-language support
- [ ] Git hooks integration
- [ ] Team presets and sharing
- [ ] Commit message analysis and suggestions
- [ ] Local LLM support (Ollama)

Vote for features or suggest new ones in [Issues](https://github.com/rajbodhak/aicx/issues)!

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Raj Bodhak**
- GitHub: [@rajbodhak](https://github.com/rajbodhak)
- Twitter: [@rajidesu](https://twitter.com/rajbodhak) 

## 🙏 Acknowledgments

Built with these amazing tools:
- [Commander.js](https://github.com/tj/commander.js) - CLI framework
- [Inquirer.js](https://github.com/SBoudrias/Inquirer.js) - Interactive prompts
- [OpenAI API](https://platform.openai.com) - AI generation
- [Google Gemini](https://ai.google.dev) - AI generation
- [Chalk](https://github.com/chalk/chalk) - Terminal styling
- [Ora](https://github.com/sindresorhus/ora) - Elegant spinners

## 📣 Show Your Support

If AICX helps you write better commits, please:
- ⭐ Star the [GitHub repository](https://github.com/rajbodhak/aicx)
- 🐦 Share on Twitter
- 📝 Write a blog post
- 💬 Tell your developer friends

---

<div align="center">

**Made with ❤️ for developers who hate writing commit messages**

[Report Bug](https://github.com/rajbodhak/aicx/issues) · [Request Feature](https://github.com/rajbodhak/aicx/issues) · [Documentation](https://github.com/rajbodhak/aicx#readme)

</div>