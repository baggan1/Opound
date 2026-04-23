# Opound AI Consulting Website

> **Live Site:** [www.opound.com](https://www.opound.com)  
> **Hosted on:** Vercel  
> **Stack:** React + TypeScript + Vite + TailwindCSS + Vercel Functions + Supabase + Resend
> **Brand Color:** #00A372 (Opound Green)

---

## 📋 Overview

**Opound LLC** provides senior-level AI Product & FinTech leadership for regulated businesses. We help firms move from AI exploration to production-grade systems with enterprise rigor. 

Recently updated to feature **CryptoFIX**, an automated institutional readiness auditor that scores FIX protocol implementations against TradFi standards.

---

## 🗂️ Pages

### `/` — Home
The primary conversion hub. Featured lead paths: **Strategy Call** and **Direct Inquiry**.

| Section | Description |
|---|---|
| **Hero** | Fractional AI Product & FinTech Leadership for Regulated Businesses. |
| **Work We've Shipped** | Featured: **CryptoFIX Auditor** (REGULATORY TECH) — Automated FIX protocol gap analysis and RoE generation. Also includes NatureNani (Live SaaS). |
| **How We Engage** | High-touch services: Fractional AI Lead, **CryptoFIX Institutional Readiness Audit**, Integration Sprints, and Strategic Advisory. |
| **ROI Calculator** | Interactive tool quantifying the monthly loss to manual tasks. |
| **Efficiency Lab** | Real-time AI bottleneck analysis tool powered by Google Gemini. |
| **Contact Section** | Integrated message capture form with real-time Supabase sync and Resend notifications. |

---

## 🧩 Conversion & Lead Capture

Opound now uses a **Secure Dual-Path Lead Capture System**:

### 1. Gated Strategy Call (Path A)
- **Component:** `BookingModal`
- **Flow:** Users must provide details (Name, Work Email, Company, Service) before accessing the Calendly widget.
- **Integration:** Data is saved to Supabase; then the user is transitioned to an inline Calendly widget with pre-filled details.

### 2. Send Message / Audit Inquiry (Path B)
- **Component:** `ContactModal` & `Contact`
- **Flow:** Direct inquiry form for custom audits or general messages.
- **Integration:** Real-time push to Supabase `strategy_leads` table and instant email notification to the principal via Resend.

---

## ⚙️ Technical Architecture

```
Opound/
├── api/
│   └── capture-lead-v2.ts      # Vercel Function (Node.js) — Leads Backend
├── src/
│   ├── App.tsx                 # App Root & Modal Orchestration
│   ├── constants/
│   │   └── services.ts         # Standardized service list constants
│   ├── lib/
│   │   └── supabase.ts         # Supabase Client Initialization
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Pricing.tsx
│   │   └── About.tsx
│   └── components/
│       ├── BookingModal.tsx    # Gated Calendly flow
│       ├── ContactModal.tsx    # Popup message form
│       ├── Contact.tsx         # Inline contact section
│       ├── ServicesGrid.tsx    # Pricing-aware service cards
│       ├── ProvenTech.tsx      # Case studies (CryptoFIX Auditor)
│       └── ...
```

### Key Integrations
- **Supabase** — Lead storage in the `strategy_leads` table.
- **Resend** — Email notification engine for immediate lead alerts.
- **Google Gemini** — Powers the Efficiency Lab logic.
- **Vercel Functions** — Secure backend handling for database and email secrets.

---

## 🚀 Running Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

**Environment Variables Required:**
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY` (Backend only)
- `RESEND_API_KEY` (Backend only)

---

## 📬 Contact

**Email:** hello@opound.com  
**Website:** [www.opound.com](https://www.opound.com)
