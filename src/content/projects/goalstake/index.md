---
title: "GoalStake - The Commitment Market"
description: "Stake money on your goals. Hit them, keep it. Miss them, lose it. Verified by Chainlink oracles, settled automatically on Base."
date: "Feb 01 2026"
status: "concepts"
demoURL: "https://goalstake.co"
repoURL: "https://github.com/2shanez/goalstake"
draft: false
---

# GoalStake — The Commitment Market

**GoalStake** is a decentralized commitment protocol where you stake real money on your goals. Hit them, you keep your stake + earn from losers. Miss them, your stake goes to winners. No willpower required — just consequences.

Powered by Chainlink oracles on Base, your progress is verified automatically via Strava and payouts happen without human intervention.

**Starting with fitness. Expanding to every goal that can be measured.**

## The Problem

Goals fail because there are no real consequences. You can ignore a notification. You can't ignore losing $100.

- **81%** of New Year's resolutions fail by February
- **92%** of people never achieve their goals
- **$10B+** spent annually on self-improvement apps people abandon

The missing ingredient isn't information or motivation. It's **skin in the game**.

## How It Works

```
1. Join a goal → Pick from curated challenges
2. Stake money → $100 USDC
3. Connect your data source (Strava, Apple Health, etc.)
4. Chainlink verifies your progress
5. Deadline hits:
   ✅ Hit goal → Get your $100 back (+ bonus from loser pool)
   ❌ Miss goal → Money redistributed to winners
```

## Phase 1: Fitness

We're starting with fitness because the data is clean and verifiable.

| Challenge | Metric | Data Source |
|-----------|--------|-------------|
| Running | Miles/week | Strava, Garmin |
| Steps | Daily average | Apple Health, Fitbit |
| Workouts | Sessions/week | Apple Health, Strava |
| Cycling | Miles/week | Strava, Garmin |
| Active calories | Daily average | Apple Watch, Whoop |

## Future Categories

GoalStake expands to any goal with verifiable data:

| Category | Example Goal | Data Source |
|----------|--------------|-------------|
| **Learning** | Complete Coursera course | Coursera API |
| **Reading** | Finish 4 books/month | Goodreads, Kindle |
| **Sleep** | 7+ hours for 30 days | Oura, Whoop |
| **Screen time** | Under 2hr/day | iOS Screen Time |
| **Meditation** | 10 min/day streak | Headspace, Calm |
| **Coding** | Ship commits daily | GitHub API |

## Why Chainlink

This doesn't work without trustless verification.

| Component | Chainlink Service |
|-----------|-------------------|
| **Activity data** | Functions (pulls APIs) |
| **Auto-settlement** | Automation (triggers at deadline) |
| **Cross-chain stakes** | CCIP (stake from any chain) |

No human decides if you hit your goal. The oracle checks, the contract settles, the money moves.

## Where Loser Money Goes

Loser stakes are split evenly among winners. The more people fail, the more winners earn.

## Revenue Model

**Yield-as-revenue**: All staked funds are deposited into DeFi yield protocols (Aave, Compound) while locked. The platform earns the yield — users pay nothing.

**Winners get paid twice:**
1. Their original stake back
2. A share of the loser pool — the more people fail, the more winners earn

This creates a sustainable flywheel: users are motivated to win, losers fund the rewards, and the platform takes only the yield.

| TVL | Annual Yield Revenue |
|-----|---------------------|
| $1M | ~$60K |
| $10M | ~$600K |
| $100M | ~$6M |

Plus: Premium subscriptions, sponsored challenges, B2B corporate wellness.

## Competitive Landscape

| Product | Model | Gap |
|---------|-------|-----|
| **StickK** | Web2 commitment contracts | Honor system, centralized |
| **STEPN** | Move-to-earn | Inflationary, Ponzi dynamics |
| **Beeminder** | Pledge money on goals | Web2, no DeFi yield |
| **Fitness apps** | Freemium | Easy to ignore |
| **GoalStake** | Stake-to-commit | Trustless, multi-category, sustainable |

## The Insight

Move-to-earn failed because "earn tokens for walking" is inflationary and unsustainable.

Stake-to-commit works because it's **zero-sum**: you're not earning new tokens, you're keeping your own money (or losing it to someone who worked harder).

The money comes from losers — not token inflation.

## Roadmap

### Phase 1: Fitness
- Strava integration
- Running, cycling, workout challenges
- Crypto-native users

### Phase 2: Expand Activities
- Apple Health, Garmin, Whoop
- Steps, calories, sleep
- Mobile app

### Phase 3: New Categories
- Learning (Coursera, Udemy)
- Reading (Goodreads)
- Habits (screen time, meditation)

### Phase 4: Mainstream
- Fiat on-ramp
- Sponsored challenges
- B2B corporate wellness
- White-label API

## The Vision

Goals shouldn't rely on motivation. They should rely on economics.

When your wallet is on the line, you show up. When showing up means getting paid, you keep coming back.

**GoalStake: Bet on yourself.**

---

## Technical Details

**Live on Base Sepolia (Testnet)**

| Contract | Address |
|----------|---------|
| GoalStake | `0x36842e04C5b1CBD0cD0bdF4E44c27EB42EBF3eAC` |
| Automation | `0x8E69bf57b08992204317584b5e906c1B6e6E609E` |

**Stack:**
- Chain: Base (Coinbase L2)
- Oracles: Chainlink Functions + Automation
- Frontend: Next.js, RainbowKit, wagmi
- Verification: Strava API

---

*Built by Shane Sarin • [goalstake.co](https://goalstake.co) • [GitHub](https://github.com/2shanez/goalstake)*
