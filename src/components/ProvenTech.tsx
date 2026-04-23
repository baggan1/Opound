import { useState } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// ProvenTech.tsx  —  Work We've Shipped
//
// CryptoFIX: Full expanded case study (hero treatment)
// NatureNani: One-line capability card (subordinate, no domain claim)
// ─────────────────────────────────────────────────────────────────────────────

const EXCHANGE_SCORES = [
  {
    name: "Kraken",
    total: 67.6,
    tiers: [
      { label: "Order Lifecycle", score: 35.1, max: 40 },
      { label: "Execution Quality", score: 15.0, max: 20 },
      { label: "Post-Trade & Allocation", score: 7.6, max: 15 },
      { label: "Admin & Session", score: 9.9, max: 15 },
    ],
    verdict: "Stronger institutional OMS fit — stateful session recovery, Trade Capture Reports, and RFQ support. Easier to plug into legacy TradFi infrastructure.",
    badge: "OMS-READY",
    badgeColor: "#00A372",
  },
  {
    name: "Coinbase",
    total: 59.6,
    tiers: [
      { label: "Order Lifecycle", score: 36.1, max: 40 },
      { label: "Execution Quality", score: 15.0, max: 20 },
      { label: "Post-Trade & Allocation", score: 0.0, max: 15 },
      { label: "Admin & Session", score: 8.5, max: 15 },
    ],
    verdict: "Superior compliance infrastructure — dedicated Drop Copy feed and full OrderCancelReplace support. Better fit for firms with strict risk auditing requirements.",
    badge: "COMPLIANCE-HARDENED",
    badgeColor: "#0066CC",
  },
];

const SHARED_GAPS = [
  {
    gap: "Wallet Attribution (T4_WAL)",
    detail: "Neither exchange supports DAWG-drafted tag 803 for on-chain wallet ↔ FIX trade association.",
  },
  {
    gap: "DontKnowTrade (35=Q)",
    detail: "Standard TradFi message for rejecting unrecognized trades is absent on both platforms.",
  },
  {
    gap: "ContraTrader (T2_8_375)",
    detail: "No identification of counterparty trader/market maker — limits TCA depth for institutional desks.",
  },
];

function ScoreBar({ score, max }: { score: number; max: number }) {
  const pct = Math.round((score / max) * 100);
  return (
    <div className="mt-1">
      <div className="flex justify-between text-xs text-gray-400 mb-1">
        <span>{score} / {max}</span>
        <span>{pct}%</span>
      </div>
      <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{
            width: `${pct}%`,
            background: pct >= 75 ? "#00A372" : pct >= 50 ? "#F59E0B" : "#EF4444",
          }}
        />
      </div>
    </div>
  );
}

function ExchangeCard({ exchange }: { exchange: typeof EXCHANGE_SCORES[0] }) {
  const [expanded, setExpanded] = useState(false);
  const ringColor = exchange.badgeColor;

  return (
    <div
      className="rounded-2xl border border-gray-800 bg-slate-950 p-6 flex flex-col gap-4"
      style={{ boxShadow: `0 0 0 1px ${ringColor}22` }}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div>
          <span
            className="text-xs font-mono font-bold tracking-widest px-2 py-0.5 rounded"
            style={{ background: `${ringColor}18`, color: ringColor }}
          >
            {exchange.badge}
          </span>
          <h3 className="mt-2 text-xl font-bold text-white">{exchange.name}</h3>
        </div>
        <div className="text-right">
          <div
            className="text-4xl font-black tabular-nums"
            style={{ color: ringColor }}
          >
            {exchange.total}
          </div>
          <div className="text-xs text-gray-500 font-mono">/ 100 pts</div>
        </div>
      </div>

      {/* Tier breakdown */}
      <div className="space-y-3">
        {exchange.tiers.map((tier) => (
          <div key={tier.label}>
            <div className="text-xs text-gray-400 font-medium">{tier.label}</div>
            <ScoreBar score={tier.score} max={tier.max} />
          </div>
        ))}
      </div>

      {/* Verdict */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="text-left text-xs font-mono text-gray-500 hover:text-gray-300 transition-colors flex items-center gap-1 mt-1"
      >
        <span>{expanded ? "▲" : "▼"}</span>
        <span>{expanded ? "Hide assessment" : "Institutional assessment"}</span>
      </button>
      {expanded && (
        <p className="text-sm text-gray-400 leading-relaxed border-t border-gray-800 pt-3">
          {exchange.verdict}
        </p>
      )}
    </div>
  );
}

export function ProvenTech({ onOpenContact }: { onOpenContact?: (service?: string) => void }) {
  return (
    <section id="work" className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">

        {/* ── Section label ── */}
        <div className="mb-14">
          <span className="text-xs font-mono font-bold tracking-widest text-[#00A372] uppercase">
            Work We've Shipped
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-black text-white leading-tight">
            Production AI for<br />
            <span className="text-[#00A372]">Regulated Markets</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl text-lg">
            Not prototypes. Not slides. Deployed systems with institutional-grade rigor.
          </p>
        </div>

        {/* ══════════════════════════════════════════════════════════
            CRYPTOFIX — FEATURED CASE STUDY
        ══════════════════════════════════════════════════════════ */}
        <div className="rounded-3xl border border-[#00A372]/30 bg-slate-950 overflow-hidden mb-8">

          {/* Case study header */}
          <div className="px-8 pt-8 pb-6 border-b border-gray-800">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-xs font-mono font-bold tracking-widest bg-[#00A372]/15 text-[#00A372] px-3 py-1 rounded-full">
                    REGULATORY TECH
                  </span>
                  <span className="text-xs font-mono text-gray-500">
                    FIX Protocol · Digital Assets · Institutional Infrastructure
                  </span>
                </div>
                <h3 className="mt-3 text-3xl md:text-4xl font-black text-white">
                  CryptoFIX Auditor
                </h3>
                <p className="mt-1 text-[#00A372] font-medium text-lg">
                  Automated FIX Protocol Readiness Scoring for Crypto Exchanges
                </p>
              </div>
              <a
                href="https://fix.opound.com"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-black bg-[#00A372] hover:bg-[#00b87f] transition-colors"
              >
                Live Tool ↗
              </a>
            </div>
          </div>

          {/* Problem / Approach / Result */}
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-800">
            {[
              {
                label: "Problem",
                icon: "⚠",
                color: "#EF4444",
                body: "Crypto exchanges need institutional adoption to achieve scale and TradFi-comparable trust. FIX protocol is the universal language every institutional OMS — Bloomberg EMSX, Charles River, Fidessa — already speaks. Without rigorous FIX conformance, liquidity providers, prime brokers, and asset managers can't connect without expensive custom engineering. There's no standardized rubric to measure readiness — so firms fly blind.",
              },
              {
                label: "Approach",
                icon: "⚙",
                color: "#F59E0B",
                body: "Built an 80+ checkpoint automated auditor spanning 8 institutional tiers: order lifecycle, execution quality, TCA fields, post-trade allocation, compliance & drop copy, market data, and session management. The rubric mirrors what a TradFi connectivity team actually certifies against. Each exchange gets a scored report with gap analysis and an institutional recommendation — the same deliverable a sell-side FIX consultant would produce manually.",
              },
              {
                label: "Result",
                icon: "✓",
                color: "#00A372",
                body: "Live at fix.opound.com. Scored Kraken (67.6/100) and Coinbase Exchange (59.6/100) against the master rubric with granular tier breakdowns. Surfaces three shared industry gaps that neither exchange has solved — wallet attribution, DontKnowTrade, and ContraTrader identification — framing the path for broader crypto-to-TradFi convergence.",
              },
            ].map(({ label, icon, color, body }) => (
              <div key={label} className="px-7 py-7">
                <div className="flex items-center gap-2 mb-3">
                  <span style={{ color }} className="text-base">{icon}</span>
                  <span
                    className="text-xs font-mono font-bold tracking-widest uppercase"
                    style={{ color }}
                  >
                    {label}
                  </span>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>

          {/* ── Exchange scores ── */}
          <div className="px-8 pb-8 pt-2">
            <div className="mb-5 flex items-center gap-3">
              <div className="h-px flex-1 bg-gray-800" />
              <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">
                Exchange Benchmark Results
              </span>
              <div className="h-px flex-1 bg-gray-800" />
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {EXCHANGE_SCORES.map((ex) => (
                <ExchangeCard key={ex.name} exchange={ex} />
              ))}
            </div>

            {/* Shared gaps */}
            <div className="mt-6 rounded-xl border border-gray-800 bg-slate-950 p-5">
              <p className="text-xs font-mono font-bold text-gray-500 uppercase tracking-widest mb-4">
                Shared Industry Gaps — Both Exchanges
              </p>
              <div className="space-y-3">
                {SHARED_GAPS.map(({ gap, detail }) => (
                  <div key={gap} className="flex gap-3">
                    <span className="text-yellow-500 mt-0.5 shrink-0">△</span>
                    <div>
                      <span className="text-sm font-semibold text-gray-300">{gap}</span>
                      <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{detail}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-gray-600 leading-relaxed">
                These gaps represent the frontier of crypto-to-FIX standardization — the final mile for
                crypto exchanges to achieve TradFi-comparable institutional trust and regulatory comparability.
              </p>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════
            NATURENANI — SUBORDINATE CAPABILITY CARD
        ══════════════════════════════════════════════════════════ */}
        <div className="rounded-2xl border border-gray-800 bg-slate-950/60 px-7 py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
          <div className="flex items-start gap-4">
            <div className="mt-0.5 w-8 h-8 rounded-lg bg-emerald-950 border border-emerald-800 flex items-center justify-center shrink-0 text-base">
              🌿
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-mono font-bold tracking-widest text-gray-500 uppercase">
                  Technical Capability Proof
                </span>
              </div>
              <h4 className="mt-0.5 text-base font-bold text-gray-200">NatureNani</h4>
              <p className="mt-1 text-sm text-gray-500 leading-relaxed max-w-xl">
                Solo 0→1 production SaaS build: multi-agentic RAG architecture (pgvector + Gemini), Stripe subscription billing with webhook state sync, Supabase RLS auth, and SSE streaming — demonstrating full-stack AI delivery from concept to live deployment.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="/portfolio"
              className="text-xs font-mono text-gray-600 hover:text-gray-400 transition-colors whitespace-nowrap"
            >
              Architecture details →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
