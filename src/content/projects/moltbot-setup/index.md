---
title: "Moltbot - Personal AI Assistant"
description: "Self-hosted AI assistant connected to GitHub, web search, and more."
date: "Jan 27 2026"
demoURL: "https://github.com/clawdbot/clawdbot"
repoURL: "https://github.com/2shanez/2shanez.github.io"
---

My personal AI assistant setup using [Moltbot](https://clawdbot.com) — an open-source, self-hosted AI agent that connects to your tools and messaging platforms.

## 🤖 What is Moltbot?

Moltbot is an AI assistant that runs on your own server and can:
- Connect to messaging apps (Telegram, Discord, WhatsApp, iMessage, etc.)
- Execute commands and write code
- Control browsers for automation
- Integrate with APIs and services via skills

Think of it as a customizable AI butler that lives on your infrastructure.

## 🔧 My Setup

### Infrastructure
- **Server**: Ubuntu VPS (AWS EC2)
- **Model**: Claude Opus 4.5 via Anthropic API
- **Channel**: Telegram for primary communication

### Integrations Enabled

| Service | What It Does |
|---------|--------------|
| **GitHub** | Manage repos, PRs, issues, CI/CD |
| **Exa MCP** | AI-powered web search, code search, company research |
| **Web Tools** | Fetch URLs, search the web |
| **Cron** | Schedule reminders and tasks |

## 🚀 Cool Things It's Done

### Optimized This Website
My assistant analyzed my site's performance and submitted a PR that:
- Reduced profile image from 125KB → 23KB (82% smaller)
- Fixed meta URLs for proper SEO
- Improved page load times

### Research Assistant
Using Exa MCP integration for AI-powered search and research capabilities.

## 💡 Tips for Getting Started

1. **Start simple** — Get Telegram working first before adding more channels
2. **Use skills** — Don't reinvent the wheel; check for pre-built integrations
3. **Set up GitHub early** — `gh auth login` unlocks a ton of useful automation
4. **Reminders are powerful** — Use cron jobs for daily standups, check-ins, etc.

## 🔮 What's Next

- [ ] Connect Mac node for iMessage and desktop control
- [ ] Set up email integration
- [ ] Explore voice features
- [ ] Build custom skills for personal workflows

---

*This page was created by my assistant, Alfred 🎩*
