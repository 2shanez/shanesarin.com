---
title: "vaada — Stake Your Word"
description: "A commitment market where you stake money on promises. Keep your vaada, keep your stake. Break it, and those who kept theirs earn from you."
date: "Feb 08 2026"
status: "development"
demoURL: "https://vaada.io"
repoURL: "https://github.com/2shanez/vaada"
draft: false
---

# vaada — The Commitment Market

**vaada** (Hindi for "promise") is a decentralized commitment protocol where you stake real money on your promises. Keep your vaada, keep your stake + earn from those who don't. Break it, your stake goes to those who kept theirs.

Powered by Chainlink oracles on Base, your progress is verified automatically via Strava and payouts happen without human intervention.

**Starting with fitness. Expanding to any promise that can be verified.**

## The Problem

Goals fail because there are no real consequences. You can ignore a notification. You can't ignore losing $100.

- **81%** of New Year's resolutions fail by February
- **92%** of people never achieve their goals
- **$10B+** spent annually on self-improvement apps people abandon

The missing ingredient isn't information or motivation. It's **skin in the game**.

## How It Works

```
1. Pick a vaada → Choose from curated challenges
2. Stake USDC → Put skin in the game ($5-$200)
3. Connect Strava → Auto-verify your activity
4. Chainlink verifies your progress
5. Deadline hits:
   ✅ Keep vaada → Get stake back + earn from those who don't
   ❌ Break vaada → Stake distributed to keepers
```

## Phase 1: Fitness

We're starting with fitness because the data is clean and verifiable.

- **Running** — Daily Mile, Weekly 15, Monthly 50
- **Cycling** — Daily Ride, Weekend Warrior, Weekly 50
- **Swimming** — Daily Swim, Swim 5K

All verified automatically via Strava. No honor system.

## Future Categories

vaada expands to any promise with verifiable data:

- **Learning** — Complete courses (Coursera, Udemy)
- **Reading** — Finish books (Goodreads, Kindle)
- **Coding** — Ship commits (GitHub)
- **Sleep** — 7+ hours (Oura, Whoop)
- **Screen time** — Under limits (iOS)

## Why Chainlink

This doesn't work without trustless verification.

- **Functions** — Pulls activity data from APIs
- **Automation** — Triggers settlement at deadline
- **CCIP** — Cross-chain stakes (future)

No human decides if you kept your vaada. The oracle checks, the contract settles, the money moves.

## The Insight

Move-to-earn failed because "earn tokens for walking" is inflationary and unsustainable.

Stake-to-commit works because it's **zero-sum**: you're not earning new tokens, you're keeping your own money (or losing it to someone who showed up).

The money comes from those who break their promises — not token inflation.

## Tech Stack

**Live on Base Sepolia (Testnet)**

| Component | Details |
|-----------|---------|
| Chain | Base (Coinbase L2) |
| Contract | GoalStakeV3 |
| Oracles | Chainlink Functions + Automation |
| Frontend | Next.js, Privy, wagmi |
| Verification | Strava API |

## Status

🟢 **Active Development**

- Smart contracts deployed and tested
- Strava integration working
- Full E2E win/lose paths verified
- UI polish in progress
- Preparing for friend launch

---

*vaada = promise*

*Built by Shane Sarin • [vaada.io](https://vaada.io) • [GitHub](https://github.com/2shanez/vaada)*
