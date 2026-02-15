---
title: "vaada — the promise market"
description: "Stake money on your promises. Keep your vaada, keep your stake + earn from those who don't. Live on Base mainnet."
date: "Feb 15 2026"
status: "live"
demoURL: "https://vaada.io"
repoURL: "https://github.com/2shanez/vaada"
draft: false
---

# 🤝 The Promise Market

> *vaada (वादा) — Hindi for "promise"*

Vaada is a decentralized commitment protocol that allows users to stake money on personal goals. Users commit USDC to fitness challenges verified by Fitbit or Strava data through Chainlink oracles. Hit your goal, keep your stake plus earn from those who didn't. Miss it, your stake goes to the winners.

This is the "put your money where your mouth is" protocol.

**🚀 Live on Base Mainnet**

---

## The Problem

**$72 billion** is spent annually on fitness and self-improvement. Yet:

- 92% of people fail their New Year's resolutions
- 50% of gym memberships go unused
- Fitness apps have <5% long-term retention

The missing ingredient isn't information or access — it's **commitment with real stakes**.

Behavioral economics shows loss aversion is 2x stronger than gain motivation. People work harder to avoid losing $100 than to gain $100. Vaada weaponizes this.

---

## The Solution

Vaada creates **financial commitment** for personal goals:

1. **Stake** — Commit $20 USDC to a fitness goal (e.g., "10K steps today")
2. **Perform** — Complete your activity on Fitbit or Strava
3. **Verify** — Chainlink Functions automatically fetch your fitness data
4. **Settle** — Hit your goal = stake returned + bonus from losers. Miss = stake distributed to winners.

No middleman. No refunds. No excuses.

---

## The Innovation

**Programmable consequences for real-world behavior.**

That's the primitive Vaada introduces.

Before now, you could:
- Bet on sports (someone else's behavior)
- Bet on prices (market behavior)
- "Commit" to personal goals (honor system, no enforcement)

With Vaada:
- You program automatic, trustless consequences for *your own* verified actions

**The machine decides.** No disputes. No "I forgot to log it." No referee. The oracle fetches your data, the contract evaluates the outcome, the money moves.

The innovation isn't "fitness app with crypto." It's **verifiable real-world outcomes as a smart contract primitive.**

---

## How It Works

```
User Stakes USDC
       ↓
   VaadaV3.sol (holds funds, tracks challenges)
       ↓
   USDC deposited to Morpho Vault (~4.9% APY)
       ↓
   Deadline Reached
       ↓
   Chainlink Automation (triggers verification)
       ↓
   Chainlink Functions (fetches Fitbit/Strava API)
       ↓
   verifyChallenge(id, actualValue)
       ↓
   Settlement (winner paid, loser slashed)
```

### Economic Model

**For Users:**
- **Winners**: Receive stake back + proportional share of loser pool
- **Losers**: Stake distributed to winners weighted by their stakes
- **Fee**: 0% — platform never touches user stakes

**Platform Revenue:**
- Staked USDC earns yield in Morpho vault (~4.9% APY)
- Users get full stakes back; platform keeps the yield
- Zero-fee UX with sustainable revenue

---

## Why Crypto?

| Traditional Apps | Vaada |
|------------------|-------|
| "Challenges" with no stakes | Real money on the line |
| Trust the company | Trust the code |
| Refunds available | No refunds, no excuses |
| Single jurisdiction | Global, permissionless |
| Centralized custody | Self-custody, transparent |

---

## Market Opportunity

Commitment isn't a feature — it's a **market**.

Every coach, gym buddy, AA sponsor, and accountability partner proves demand exists. People pay for someone to hold them to their word. Vaada makes that programmable.

**Adjacent markets:**
- Fitness/wellness: **$96B**
- Prediction markets: **$65B**
- Habit/productivity apps: **$12B**
- Corporate wellness: **$56B**

Vaada isn't competing in these markets. We're creating **The Promise Market** — a new category where commitment meets capital.

**Polymarket** is where you bet on the world.  
**Vaada** is where you bet on yourself.

---

## Features

- ✅ Fitbit integration (steps)
- ✅ Strava integration (miles)
- ✅ Chainlink oracle verification
- ✅ Morpho vault yield on locked stakes
- ✅ Stake-weighted payouts
- ✅ Privy auth (email/Google/wallet)
- ✅ Profile names & leaderboards
- ✅ Anti-cheat (device-recorded only)
- ✅ Live on Base Mainnet

---

## Expansion Verticals

Vaada starts with fitness but the model applies to any verifiable commitment:

| Vertical | Verification Source |
|----------|---------------------|
| **Fitness (Steps)** | Fitbit ✅ |
| **Fitness (Running)** | Strava ✅ |
| **Coding** | GitHub commits |
| **Learning** | Duolingo, Coursera |
| **Finance** | Plaid (savings goals) |
| **Content** | YouTube, Twitter |

Same contract. Different oracles. Infinite use cases.

---

## Technical Details

### Contracts (Base Mainnet)

| Contract | Address |
|----------|---------|
| VaadaV3 | `0xAc67E863221B703CEE9B440a7beFe71EA8725434` |
| AutomationV3 | `0xA6BcEcA41fCF743324a864F47dd03F0D3806341D` |
| NewUserChallenge | `0x7a2959ff82aeF587A6B8491A1816bb4BA7aEE554` |

### Stack

- **Chain**: Base (Coinbase L2) — Mainnet
- **Oracles**: Chainlink Functions + Automation
- **Yield**: Morpho Vault
- **Frontend**: Next.js 16, Privy, wagmi
- **Verification**: Fitbit + Strava APIs via Chainlink

---

## The Vision

Vaada becomes the **commitment layer for the internet**.

Every commitment — fitness, learning, work, habits — can have financial stakes attached. Not as punishment, but as **commitment devices** that help people become who they want to be.

We're not building a fitness app. We're building **The Promise Market**.

---

*Built by Shane Sarin • [vaada.io](https://vaada.io) • [GitHub](https://github.com/2shanez/vaada)*
