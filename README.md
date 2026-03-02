# Opound AI Consulting Website

> **Live Site:** [www.opound.com](https://www.opound.com)  
> **Hosted on:** Vercel  
> **Stack:** React + TypeScript + Vite + TailwindCSS + React Router Dom

---

## 📋 Overview

**Opound AI Consulting** is a professional AI consulting firm for small and scaling businesses. The site's mission is to help business owners discover, quantify, and eliminate the cost of manual, repetitive work through custom AI agents, automation pipelines, and strategic roadmaps — all built with the rigor of 15+ years of FinTech experience.

The site is designed as a **conversion-first, multi-page application** with interactive tools (ROI Calculator, Efficiency Lab) that dynamically personalize the experience for each visitor before directing them to contextually-aware pricing options.

---

## 🗂️ Pages

### `/` — Home
The primary landing experience. Leads the visitor from awareness → pain identification → solution discovery → CTA.

| Section | Description |
|---|---|
| **Hero** | "Unlock Efficiency. Scale with AI." – Establishes the core value proposition with a tagline: *Powered by 15 Years of FinTech Expertise.* |
| **The Opound Choice (ProvenTech)** | A proof-of-work case study highlighting the **NatureNani** production build — a live app serving 1,000+ active AI users, used to demonstrate enterprise rigor. |
| **ROI Calculator** | Interactive 3-slider tool. Inputs: `Number of Employees`, `Hours/week on manual tasks`, `Avg. Hourly Rate`. Output: personalized "You are losing **$X/mo**" and "Opound can fix this for **$Y/mo**" values. Includes a **"View Pricing"** button that routes to `/pricing` while retaining the calculated figures in a global state. |
| **Efficiency Lab** | A free, real-time AI audit tool. Users describe their biggest business bottleneck in a text field. Gemini AI returns a structured analysis including: *Efficiency Gain*, *Deployment Cycle*, and a *Strategic Recommendation*. |
| **Enterprise Tech for Scaling Teams** | A services grid showcasing 6 core competencies: Business Automation, Custom RAG Chatbots, Financial Intelligence, AI Marketing & SEO, Data Visualization, and AI Readiness Assessment. |
| **Contact / Book Your Assessment** | Lead-capture form with fields for name, company, budget range, and message. CTA: *"Book your AI Readiness Assessment"*. Contact email: `hello@opound.com`. |

---

### `/pricing` — Pricing
Presents the 3 engagement tiers with full pricing transparency. Features a **live-synced ROI widget** that shows the visitor's personalized savings estimate from the Home page calculator.

| Feature | Description |
|---|---|
| **Mini ROI Widget (Sticky Bar)** | A persistent top-bar displaying *"Your Estimated Monthly Loss to Manual Tasks: $X/mo"* — dynamically updated from the global ROI state set on the Home page. |
| **Tier 1 – The AI Readiness Audit** | Starting at **$2,450** (one-time). A 2–3 week deep-dive audit identifying $10k+ in monthly operational savings. Deliverable: a prioritized AI roadmap. |
| **Tier 2 – The Specialist Agent** | Starting at **$3,000/mo**. Custom-built autonomous AI agent for one core business function (Booking, Triage, RAG, CRM Integration). Includes performance-upside tracking. |
| **Tier 3 – Fractional AI Officer** | Starting at **$7,500/mo**. A full strategic partnership — ongoing roadmap management, staff training, tool expansion, and enterprise-level expertise. |
| **Your AI, Your Terms** | Two exit/engagement models: **Option A – The Opound Exit Guarantee** (Build-Operate-Transfer: full code ownership upon Transfer Fee payment) and **Option B – Opound Managed Retainer** (Opound retains admin ownership with a 99.9% uptime SLA). |

---

### `/about` — About Us
Humanizes the brand by introducing the founder and the principles that drive the firm.

| Section | Description |
|---|---|
| **Meet the Founder** | Introduces **Navilla Bagga**, Principal Consultant — *"The Bridge Between Enterprise Rigor and Small Business Growth."* |
| **Core Philosophy** | "Secure, Scalable, Human" — practical, production-ready AI systems with FinTech-grade security and a people-first delivery model. |
| **Trust Section** | Highlights 15+ years of FinTech/AI experience and a **Tang Soo Do 2nd Degree Black Belt** — bridging technical discipline with principled leadership. |

---

### `/privacy` — Privacy Policy
A detailed privacy policy covering data collection, usage, and protection for Opound's AI consulting services. Limits data collection and clarifies that no professional legal/financial advice is provided.

---

### `/terms` — Terms of Service
Covers the scope of services, limitations of liability, intellectual property policies, and educational project disclaimers (case studies such as NatureNani and Gourmet Canopy Botanicals are for informational purposes only).

---

## 🧩 Global Features

### Lead Magnet Popup
A timed popup (appears after 3 seconds, Home page only) offering a free **"Small Business AI Efficiency Checklist"** (PDF download) in exchange for an email address. Suppressed per session after close or submission.

### Legal Transparency Modal
Accessible via the Footer's **"Legal Transparency"** button. A modal summarizing:
- **Ownership & Transfer:** All source code transfers to client upon payment of Transfer Fee.
- **Managed Services:** Opound retains subscription admin ownership with 99.9% uptime guarantee.

### Navbar
Fixed, scroll-aware navigation with glassmorphism styling.

| Link | Destination |
|---|---|
| Home | `/` |
| Solutions | `/#services` (scrolls to the services grid on the home page) |
| Pricing | `/pricing` |
| About Us | `/about` |
| **Get Started** *(CTA button)* | `/pricing` |

### Footer
- Quick links: Services, Pricing, About Us, Contact
- Legal links: Legal Transparency, Privacy Policy, Terms of Service
- Copyright: `© 2026 OPOUND LLC. ALL RIGHTS RESERVED.`

---

## ⚙️ Technical Architecture

```
src/
├── App.tsx                    # Root — ROIProvider + Router + Layout
├── context/
│   └── ROIContext.tsx          # Global ROI state shared across Home ↔ Pricing
├── pages/
│   ├── Home.tsx
│   ├── Pricing.tsx
│   └── About.tsx
└── components/
    ├── Navbar.tsx
    ├── Hero.tsx
    ├── ProvenTech.tsx
    ├── ROICalculator.tsx       # Full calculator (Home page)
    ├── MiniROIWidget.tsx       # Sticky bar widget (Pricing page)
    ├── EfficiencyLab.tsx       # Gemini-powered AI audit tool
    ├── ServicesGrid.tsx        # 6-card service grid
    ├── PricingTable.tsx        # 3-tier pricing cards
    ├── YourAITerms.tsx         # Exit Guarantee / Retainer options
    ├── Contact.tsx
    ├── SectionHeading.tsx
    ├── TrustSection.tsx
    ├── TermsOfService.tsx
    └── PrivacyPolicy.tsx
```

### Key Integrations
- **Gemini AI** — Powers the Efficiency Lab bottleneck analysis
- **Formspree** — Handles the contact form and lead magnet email submissions
- **Vercel** — Hosting and deployment platform

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

The dev server runs at `http://localhost:5174` by default.

---

## 📬 Contact

**Email:** hello@opound.com  
**Website:** [www.opound.com](https://www.opound.com)
