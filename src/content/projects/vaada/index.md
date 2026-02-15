---
title: "vaada — the promise market"
description: "Stake money on your promises. Keep your vaada, keep your stake + earn from those who don't. Live on Base mainnet."
date: "Feb 15 2026"
status: "live"
demoURL: "https://vaada.io"
repoURL: "https://github.com/2shanez/vaada"
draft: true
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

1. **Stake** — Commit USDC to a fitness goal (e.g., "Run 10 miles this week")
2. **Perform** — Complete your activity on Strava or Fitbit
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

**Stake-Weighted Payouts:**
```
Your Bonus = (Your Stake / Total Winner Stakes) × Loser Pool
```

Example: If you stake $100 and total winner stakes are $500, you get 20% of the loser pool.

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

Vaada isn't competing in these markets. We're creating **The Commitment Market** — a new category where commitment meets capital.

### Competitive Landscape

| Competitor | Model | Limitation |
|------------|-------|------------|
| StickK | Pledge to charity | No upside for winners |
| Beeminder | Pay when you fail | Centralized, no community |
| DietBet | Weight loss pools | Single vertical, Web2 |
| Strava | Social fitness | No financial stakes |
| Polymarket | Predict others | Can't bet on yourself |

**Vaada's edge**: Bet on yourself + crypto-native + automated verification.

---

## Expansion Verticals

Vaada starts with fitness but the model applies to any verifiable commitment:

| Vertical | Verification Source |
|----------|---------------------|
| **Fitness (Steps)** | Fitbit ✅ |
| **Fitness (Running)** | Strava ✅ |
| **Fitness (Future)** | Apple Health, Garmin, Whoop |
| **Coding** | GitHub commits, contributions |
| **Learning** | Duolingo, course completions |
| **Finance** | Plaid (savings goals) |
| **Content** | YouTube uploads, Twitter posts |

Same contract. Different oracles. Infinite use cases.

---

## Roadmap

### Phase 1: Foundation (Current)
- [x] Core staking contract (VaadaV3 deployed)
- [x] Fitbit integration (steps verification)
- [x] Strava integration (miles verification)
- [x] Chainlink Functions verification
- [x] Chainlink Automation for triggers
- [x] Anti-cheat filter (manual entries blocked)
- [x] Privy wallet integration (email/Google login)
- [x] Goal types (FITBIT_STEPS, STRAVA_MILES)
- [x] Base mainnet launch
- [ ] First 100 users

---

## Technical Details

### Contracts (Base Mainnet)

| Contract | Address |
|----------|---------|
| VaadaV3 | `0xAc67E863221B703CEE9B440a7beFe71EA8725434` |
| GoalStakeAutomationV3 | `0xA6BcEcA41fCF743324a864F47dd03F0D3806341D` |
| NewUserChallenge | `0x65010ef348b8f274540342b50fc8582c217F8e5c` |

### Stack

- **Chain**: Base (Coinbase L2)
- **Oracles**: Chainlink Functions + Automation
- **Frontend**: Next.js, Privy, wagmi
- **Verification**: Fitbit/Strava API via Chainlink

---

## Why Now?

1. **Post-Polymarket legitimacy** — Prediction markets are mainstream
2. **Base ecosystem growth** — Coinbase distribution, low fees
3. **Chainlink Functions maturity** — Reliable off-chain compute
4. **Consumer crypto moment** — People ready for useful dApps

The infrastructure is ready. The psychology is proven. The market is waiting.

---

## The Vision

Vaada becomes the **commitment layer for the internet**.

Every commitment — fitness, learning, work, habits — can have financial stakes attached. Not as punishment, but as **commitment devices** that help people become who they want to be.

We're not building a fitness app. We're building **The Commitment Market**.

**Polymarket** is where you bet on the world.
**Vaada** is where you bet on yourself.

---

*Built by Shane Sarin • [vaada.io](https://vaada.io)*
