---
title: "Vaada - Stake Your Promise"
description: "The commitment market. Stake money on your goals. Keep your promise, keep your stake + earn from those who don't."
date: "Feb 04 2026"
demoURL: "https://vaada.io"
repoURL: "https://github.com/2shanez/vaada"
draft: false
---

# Vaada — Stake Your Promise

**Vaada** (Hindi for "promise") is a commitment market where you stake real money on your goals. Keep your promise, you keep your stake — plus earn from those who don't.

Built on **Base** with **Chainlink** oracles for trustless verification.

🔗 **Live:** [vaada.io](https://vaada.io)

---

## The Problem

Goals fail because there are no real consequences.

- **81%** of New Year's resolutions fail by February
- You can ignore a notification
- You can't ignore losing $100

The missing ingredient isn't information or motivation. It's **skin in the game**.

---

## How It Works

```
1. Pick a goal → "Run 5 miles this week"
2. Stake USDC → $10 - $100
3. Connect Strava → Auto-verification enabled
4. Chainlink verifies at deadline
5. Results:
   ✅ Hit goal → Keep stake + bonus from loser pool
   ❌ Miss goal → Stake redistributed to winners
```

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| **Chain** | Base (Coinbase L2) |
| **Contracts** | Solidity, Foundry |
| **Oracles** | Chainlink Functions + Automation |
| **Frontend** | Next.js, React, Tailwind |
| **Auth** | Privy (email/Google/wallet) |
| **Verification** | Strava API |

---

## Smart Contract Architecture

**GoalStakeV3** — Core protocol with:
- Entry windows (deadline to join)
- Stake-weighted payouts
- Phased settlement (Entry → Competition → Settlement)
- Multi-participant pools

**GoalStakeAutomationV3** — Chainlink integration:
- Functions: Fetches Strava data off-chain
- Automation: Triggers verification at deadline
- Oracle pattern: Reports results on-chain

---

## Incentive Design

The protocol balances user acquisition with sustainability:

| Mechanic | Purpose |
|----------|---------|
| **Stake ranges** | Min/max prevents whales, encourages participation |
| **Entry windows** | Creates urgency, prevents gaming |
| **Stake weighting** | Bigger stakes = bigger share of loser pool |
| **Auto-settlement** | No disputes, no admin, trustless |

---

## Why "Vaada"

**Vaada** means "promise" in Hindi.

The name parallels **Aave** (Finnish for "ghost") — both are non-English words that sound clean and memorable in the crypto space.

**Tagline:** "Stake your word."

---

## Status

- ✅ Smart contracts deployed (Base Sepolia)
- ✅ Chainlink Functions + Automation wired
- ✅ Frontend live at vaada.io
- ✅ Strava OAuth integration
- 🔄 E2E testing in progress
- ⏳ Mainnet launch coming soon

---

## The Vision

**Polymarket** is where you bet on the world.
**Vaada** is where you bet on yourself.

Accountability shouldn't rely on willpower. It should rely on economics.

---

*Built by Shane Sarin with Alfred 🎩*
