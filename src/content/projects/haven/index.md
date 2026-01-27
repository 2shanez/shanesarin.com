---
title: "Haven"
description: "Protection That Works Automatically"
date: "Jan 2026"
status: "concept"
tags: ["chainlink", "insurance", "parametric", "oracles", "defi", "consumer"]
demo: "/demos/haven.html"
featured: true
---

# Haven – Protection That Works Automatically

**Haven** is the first consumer-facing parametric protection platform. Powered by Chainlink oracles, it transforms how people think about insurance: no claims, no paperwork, no waiting. Just automatic payouts when life happens.

## The Thesis

Insurance is universally hated. Not because people don't want protection — they do. They hate the *claims process*:

- **45 days** average travel insurance claim processing time
- **30%** of legitimate claims initially denied
- **12+ documents** required for a typical claim
- **Hours** on hold with customer service

The solution isn't better claims processing. It's **no claims at all**.

## What is Parametric Protection?

Traditional insurance: *Something bad happens → You prove it → They decide if you get paid*

Parametric protection: *Something bad happens → Data verifies it → You get paid automatically*

The key insight: most "covered events" are already recorded by authoritative data sources. Flight delays are in FlightAware. Weather is in NOAA. Event cancellations are in Ticketmaster. We don't need humans to verify these events — we need oracles.

## Why Chainlink

This product is impossible without Chainlink. Here's why:

### Chainlink Functions
Pull real-world data from any API (FlightAware, NOAA, UPS) directly into smart contracts. This is what triggers the payout logic.

### Chainlink Automation
Continuously monitor for covered events and trigger smart contract execution automatically. No human needs to push a button.

### Decentralized Verification
Multiple independent nodes verify each data point. No single source of truth can be manipulated or corrupted.

### CCIP (Cross-Chain)
Enable payouts on any major chain. Users can receive USDC on Ethereum, Base, Arbitrum, or any supported network.

## Products

### FlightShield
Automatic payouts when your flight is delayed or cancelled.
- Data source: FlightAware API
- Triggers: 2+ hour delays, cancellations, missed connections
- Payout: Up to $500

### WeatherGuard
Bad weather ruins your vacation? Get compensated automatically.
- Data source: NOAA weather stations
- Triggers: Rain on 3+ vacation days, extreme temps, beach washouts
- Payout: Up to $300

### EventCover
Concert cancelled? Game postponed? Instant protection.
- Data source: Ticketmaster API
- Triggers: Cancellations, venue changes, artist no-shows
- Payout: Up to $750

### DeliveryShield
Package lost or significantly late? Instant compensation.
- Data source: UPS/FedEx/USPS tracking APIs
- Triggers: Lost packages, 7+ day delays
- Payout: Up to $200

## Business Model

### Consumer
- **Per-trip pricing**: $4.99/flight for FlightShield
- **Subscription**: $19.99/month for Haven+ (all products, unlimited)

### B2B/Enterprise
- **White-label API** for travel platforms, airlines, OTAs
- Per-transaction fees
- Custom payout tiers

## Market Opportunity

| Metric | Value |
|--------|-------|
| Global travel insurance market (2030) | $90B |
| Parametric insurance market (2031) | $29B |
| Travelers who skip insurance due to distrust | 45% |
| Average claim processing time | 30+ days |

The parametric insurance market is exploding in B2B/enterprise (crop insurance, supply chain). But consumer-facing products barely exist. Haven is building the consumer layer.

## Competitive Landscape

| Company | Focus | Gap |
|---------|-------|-----|
| Etherisc | B2B parametric protocol | Not consumer-facing |
| Arbol | Climate/crop insurance | Enterprise focus |
| Lemonade | Consumer insurance | Still claims-based |
| Traditional insurers | Everything | Slow, manual, adversarial |
| **Haven** | Consumer parametric | ✓ |

## Why Now

1. **Chainlink maturity**: Functions, Automation, and CCIP are production-ready
2. **Consumer crypto adoption**: Wallets are mainstream (Coinbase, MetaMask mobile)
3. **Travel recovery**: Post-pandemic travel is booming; so are delays
4. **Distrust peak**: Consumer trust in insurance at all-time low
5. **Regulatory clarity**: Parametric products have clearer regulatory path than traditional insurance

## The Vision

Haven becomes the protection primitive for the internet. Every flight booking, every event ticket, every package shipment gets optional Haven protection at checkout — and when things go wrong, you just get paid.

No claims. No calls. No waiting.

---

*[View the demo →](/demos/haven.html)*
