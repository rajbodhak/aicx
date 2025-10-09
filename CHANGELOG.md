# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Planned
- Support for Claude AI
- Custom commit templates
- Commit message history
- Multi-language support
- Git hooks integration
- Local LLM support (Ollama)
- Option to disable auto-push

## [1.0.1] - 2025-10-09

### Added
- Auto-push to remote after committing successfully
- Graceful error handling for push failures
- Warning message when push fails but commit succeeds
- Better error messages for unknown commands

### Changed
- Improved CLI output formatting
- Enhanced user experience with push status indicators

### Fixed
- Unknown command handling now matches Git's error format
- Improved error messaging consistency

## [1.0.0] - 2025-10-07

### Added
- Initial release of AICX CLI
- OpenAI integration (GPT-4o-mini model)
- Google Gemini integration (Gemini 2.5 Flash model)
- Interactive commit workflow with multiple options
- Commit message regeneration
- Manual editing of commit messages
- Conventional commit format support
- Beautiful CLI with spinners and progress indicators
- Comprehensive error handling
- Configuration management (`~/.aicx/config.json`)
- `aicx init` command for setup
- `aicx commit` command for generating commits
- Help and version commands
- Support for both global and local installation

### Security
- Local storage of API keys
- No telemetry or usage tracking
- Privacy-focused design

---

## Release Notes

### Version 1.0.1
This release adds automatic pushing to remote repositories after committing, making the workflow even more seamless. If the push fails (e.g., no internet connection), your changes are safely committed locally with a clear warning message.

### Version 1.0.0
The initial release brings AI-powered commit message generation to your terminal. Choose between OpenAI's GPT-4o-mini or Google's Gemini 2.5 Flash to generate conventional commit messages based on your staged changes.

---

[Unreleased]: https://github.com/rajbodhak/aicx/compare/v1.0.1...HEAD
[1.0.1]: https://github.com/rajbodhak/aicx/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/rajbodhak/aicx/releases/tag/v1.0.0