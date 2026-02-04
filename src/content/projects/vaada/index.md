---
title: "Vaada - The Commitment Market"
description: "Stake money on your goals. Keep your promise, keep your stake + earn from those who don't. Verified by Chainlink oracles."
date: "Feb 04 2026"
demoURL: "https://vaada.io"
repoURL: "https://github.com/2shanez/vaada"
draft: false
---

# Vaada — The Commitment Market

**Vaada** is a decentralized commitment protocol that allows users to stake money on personal goals. Users commit USDC to fitness challenges verified by Strava data through Chainlink oracles. Hit your goal, keep your stake plus earn from those who didn't. Miss it, your stake goes to the winners.

This is the "put your money where your mouth is" protocol.

*"Vaada" means "promise" in Hindi.*

🔗 **Live:** [vaada.io](https://vaada.io)

---

## The Problem

$72 billion is spent annually on fitness and self-improvement. Yet:

- **92%** of people fail their New Year's resolutions
- **50%** of gym memberships go unused
- Fitness apps have **<5%** long-term retention

The missing ingredient isn't information or access — it's commitment with real stakes.

Behavioral economics shows loss aversion is **2x stronger** than gain motivation. People work harder to avoid losing $100 than to gain $100.

Vaada weaponizes this.

---

## The Solution

Vaada creates financial commitment for personal goals:

1. **Stake** — Commit USDC to a fitness goal (e.g., "Run 10 miles this week")
2. **Perform** — Complete your activity on Strava
3. **Verify** — Chainlink Functions automatically fetch your Strava data
4. **Settle** — Hit your goal = stake returned + bonus from losers. Miss = stake distributed to winners.

No middleman. No refunds. No excuses.

---

## The Innovation

**Programmable consequences for real-world behavior.** That's the primitive Vaada introduces.

Before now, you could:
- Bet on sports (someone else's behavior)
- Bet on prices (market behavior)
- "Commit" to personal goals (honor system, no enforcement)

With Vaada, you program automatic, trustless consequences for *your own* verified actions.

The machine decides. No disputes. No "I forgot to log it." No referee. The oracle fetches your data, the contract evaluates the outcome, the money moves.

This pattern — **verifiable real-world outcomes triggering on-chain settlement** — is new.

---

## Beyond Fitness

The innovation isn't "fitness app with crypto." It's **verifiable real-world outcomes as a smart contract primitive**.

This unlocks consequences for any behavior with a data source:

| Domain | Data Source | Consequence |
|--------|-------------|-------------|
| Fitness | Strava, Apple Health | Stake on miles, workouts |
| Learning | Coursera, Duolingo | Stake on course completion |
| Productivity | GitHub, Linear | Stake on shipping code |
| Health | Oura, Whoop | Stake on sleep, recovery |
| Sobriety | Wearables, biomarkers | Stake on streaks |

Vaada is the first product built on this primitive. It won't be the last.

---

## How It Works

```
User Stakes USDC
      ↓
VaadaStake.sol (holds funds, tracks challenges)
      ↓
Deadline Reached
      ↓
Chainlink Automation (triggers verification)
      ↓
Chainlink Functions (fetches Strava API)
      ↓
verifyChallenge(id, actualMiles)
      ↓
Settlement (winner paid, loser slashed)
```

---

## Economic Model

**For Users:**
- **Winners:** Receive stake back + proportional share of loser pool
- **Losers:** Stake distributed to winners weighted by their stakes
- **Fee:** 0% — platform never touches user stakes

**Stake-Weighted Payouts:**

Your Bonus = (Your Stake / Total Winner Stakes) × Loser Pool

*If you stake $100 and total winner stakes are $500, you get 20% of the loser pool.*

**Tiered Stakes (10x ratio):**

| Goal Type | Min | Max |
|-----------|-----|-----|
| Test | $1 | $10 |
| Daily | $5 | $50 |
| Weekly | $10 | $100 |
| Monthly | $20 | $200 |

This ensures fair reward distribution while preventing whale domination.

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| **Chain** | Base (Coinbase L2) |
| **Contracts** | Solidity + Foundry |
| **Oracles** | Chainlink Functions + Automation |
| **Frontend** | Next.js, React, Tailwind |
| **Auth** | Privy (email/Google/wallet) |
| **Verification** | Strava API |

---

## Status

- ✅ Smart contracts deployed (Base Sepolia)
- ✅ Chainlink Functions + Automation wired
- ✅ Frontend live at vaada.io
- ✅ Strava OAuth integration
- 🔄 E2E verification in progress
- ⏳ Mainnet launch coming soon

---

## The Vision

**Polymarket** is where you bet on the world.
**Vaada** is where you bet on yourself.

Accountability shouldn't rely on willpower. It should rely on economics.

---

*Built by Shane Sarin*
