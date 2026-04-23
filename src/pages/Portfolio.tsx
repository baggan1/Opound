// ─────────────────────────────────────────────────────────────────────────────
// Portfolio.tsx  —  /portfolio  (NOT linked from main nav)
//
// Technical Explorations — capability proofs across domains.
// Full detail on NatureNani and Dental Demo.
// Framed honestly: these demonstrate build depth, not domain expertise claims.
// ─────────────────────────────────────────────────────────────────────────────

const NATURENANI_STACK = [
  { layer: "Reasoning & Persona", tech: "Google Gemini 2.5 Flash", detail: "High-frequency, low-latency reasoning for the 'Nani' AI persona" },
  { layer: "Voice / TTS", tech: "Gemini TTS (gemini-2.5-flash-preview-tts)", detail: "Expressive speech synthesis for guided voice consultations" },
  { layer: "Semantic Search", tech: "gemini-embedding-001 (768D) + pgvector", detail: "Sanskrit Vedic texts vectorized and stored in Supabase for RAG retrieval" },
  { layer: "Image Generation", tech: "OpenAI DALL-E 3", detail: "Procedurally generates custom yoga and nutrition visual aids" },
  { layer: "Payments", tech: "Stripe + Supabase Edge Functions", detail: "14-day free trial → subscription billing; webhook state sync for premium tier gating" },
  { layer: "Auth", tech: "Supabase Auth", detail: "Google OAuth, Email Magic Links (OTP), and standard email/password with RLS enforcement" },
  { layer: "Backend", tech: "Supabase Edge Functions (Deno) + Vercel Functions (Node.js)", detail: "Checkout, TTS, webhook handling, AI proxy, and contact email as isolated serverless functions" },
  { layer: "Streaming", tech: "Server-Sent Events (SSE)", detail: "Low-latency streaming chat responses from Gemini to client" },
  { layer: "Frontend", tech: "React 18 + Vite + Tailwind + Framer Motion", detail: "Premium UI with fluid animations and markdown-rendered AI responses" },
];

const NATURENANI_AGENTIC_STEPS = [
  {
    step: "01",
    title: "Vector Retrieval",
    detail: "User query is embedded via gemini-embedding-001 and semantically searched against a curated pgvector library of Sanskrit source texts (Caraka Samhita, Sushruta Samhita).",
  },
  {
    step: "02",
    title: "Context Injection",
    detail: "User-specific Prakriti/Vikriti dosha profile, age, sex, allergies, and intent are injected into the prompt — ensuring personalized, not generic, recommendations.",
  },
  {
    step: "03",
    title: "Constraint Enforcement",
    detail: "Ayurvedic food law engine applies 200+ Viruddha Ahara dietary rules (e.g., no dairy + meat combinations) regardless of retrieved text, as a hard constraint layer.",
  },
  {
    step: "04",
    title: "Specialist Modules",
    detail: "YogaAid (locked procedural asana library + AI rationale) and NutriHeal (meal plan validation engine) run as downstream specialist agents after base reasoning.",
  },
  {
    step: "05",
    title: "Structured Output",
    detail: "Agent produces valid JSON for interactive UI components — Yoga cards, Diet tables, dosha cards — rather than raw prose, enabling dynamic component rendering.",
  },
];

const DENTAL_STACK = [
  { layer: "LLM", tech: "OpenAI GPT-4o / GPT-4o-mini", detail: "GPT-4o for RAG answers and conversation summaries; GPT-4o-mini for intent classification (cost optimization)" },
  { layer: "Vector DB", tech: "Pinecone", detail: "Namespace-based multi-tenant architecture — 'demo-dental' for single-tenant demo, designed for dynamic tenant-${tenantId} in Phase 4" },
  { layer: "Embeddings", tech: "text-embedding-3-small (1536D)", detail: "OpenAI embeddings for RAG document ingestion and semantic search" },
  { layer: "CRM", tech: "HubSpot API v3", detail: "Smart merge contact create/update — fill blanks only for name, always update phone. Conversation summaries auto-logged as notes." },
  { layer: "Scheduling", tech: "Calendly v2 API", detail: "Real-time availability check, prefilled booking link rendered as interactive button in chat UI" },
  { layer: "Auth", tech: "Clerk", detail: "Admin dashboard authentication (/admin/* routes only); patient chatbot remains public" },
  { layer: "Database", tech: "Supabase (PostgreSQL)", detail: "Conversations, documents, tenant_settings, and appointments tables — all with tenant_id column for Phase 4 multi-tenancy" },
  { layer: "Email", tech: "Resend", detail: "Scaffolded for Phase 4 appointment reminders (3-day and 1-day pre-appointment). Not yet active." },
  { layer: "Framework", tech: "Next.js 14 (App Router, TypeScript strict mode)", detail: "Vercel-hosted at demo.opound.com" },
];

const DENTAL_PHASES = [
  { phase: "Phase 1", label: "Complete", detail: "RAG chatbot — Pinecone + GPT-4o, intent classification, insurance FAQ via PDF ingestion" },
  { phase: "Phase 2", label: "Complete", detail: "Calendly booking integration + HubSpot CRM contact management with smart merge logic" },
  { phase: "Phase 3", label: "Complete", detail: "Admin dashboard (Clerk auth + Supabase) — document management, settings, analytics, conversation history" },
  { phase: "Phase 4", label: "Roadmap", detail: "Multi-tenancy (dynamic Pinecone namespacing), Stripe SaaS billing, Calendly webhooks, Resend appointment reminders" },
];

function StackTable({ rows }: { rows: typeof NATURENANI_STACK }) {
  return (
    <div className="rounded-xl overflow-hidden border border-gray-800">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gray-900 border-b border-gray-800">
            <th className="text-left text-xs font-mono text-gray-500 uppercase tracking-widest px-4 py-3 w-1/4">Layer</th>
            <th className="text-left text-xs font-mono text-gray-500 uppercase tracking-widest px-4 py-3 w-1/3">Technology</th>
            <th className="text-left text-xs font-mono text-gray-500 uppercase tracking-widest px-4 py-3">Detail</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={row.layer}
              className={`border-b border-gray-800/60 ${i % 2 === 0 ? "bg-gray-950" : "bg-black"}`}
            >
              <td className="px-4 py-3 font-semibold text-gray-300 align-top">{row.layer}</td>
              <td className="px-4 py-3 text-[#00A372] font-mono text-xs align-top leading-relaxed">{row.tech}</td>
              <td className="px-4 py-3 text-gray-500 align-top leading-relaxed">{row.detail}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* ── Back nav ── */}
      <div className="border-b border-gray-900 px-6 py-4">
        <div className="max-w-5xl mx-auto">
          <a
            href="/"
            className="text-xs font-mono text-gray-600 hover:text-[#00A372] transition-colors"
          >
            ← opound.com
          </a>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16">

        {/* ── Page header ── */}
        <div className="mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-[#00A372] uppercase">
            Technical Explorations
          </span>
          <h1 className="mt-3 text-4xl md:text-5xl font-black text-white leading-tight">
            Architecture & Build Portfolio
          </h1>
          <p className="mt-4 text-gray-400 max-w-2xl text-lg leading-relaxed">
            These projects demonstrate end-to-end AI system delivery across different domains —
            agentic RAG pipelines, multi-tenant SaaS architecture, payment and auth workflows,
            and production deployment. They are capability proofs, not domain expertise claims.
          </p>
          <div className="mt-4 text-sm text-gray-600 border-l-2 border-gray-800 pl-4">
            The primary Opound LLC practice focuses on FinTech and regulated financial services.{" "}
            <a href="/#work" className="text-[#00A372] hover:underline">
              See CryptoFIX Auditor →
            </a>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════
            NATURENANI
        ══════════════════════════════════════════════════════════ */}
        <section className="mb-20">
          <div className="flex items-start justify-between gap-4 mb-8 flex-wrap">
            <div>
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-2xl">🌿</span>
                <span className="text-xs font-mono font-bold tracking-widest bg-emerald-950 text-emerald-400 border border-emerald-800 px-2 py-0.5 rounded">
                  CONSUMER AI SAAS
                </span>
                <span className="text-xs font-mono text-gray-600">Solo build · 0 → Production</span>
              </div>
              <h2 className="mt-2 text-3xl font-black text-white">NatureNani</h2>
              <p className="mt-1 text-gray-400">
                Multi-agentic RAG platform — Ayurvedic health guidance with Stripe subscriptions, full auth, and voice mode.
              </p>
            </div>
            <a
              href="https://github.com/baggan1/naturenani"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-gray-600 hover:text-gray-300 transition-colors border border-gray-800 px-3 py-1.5 rounded-lg"
            >
              GitHub ↗
            </a>
          </div>

          {/* Architecture headline */}
          <div className="rounded-xl bg-gray-950 border border-gray-800 px-6 py-5 mb-6">
            <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-3">Build Scope</p>
            <div className="grid sm:grid-cols-3 gap-4 text-center">
              {[
                { label: "AI Models", value: "Multi-model", sub: "Gemini + DALL-E 3" },
                { label: "RAG Source", value: "Sanskrit texts", sub: "pgvector + Supabase" },
                { label: "Monetization", value: "Stripe SaaS", sub: "Trials → Subscriptions" },
              ].map(({ label, value, sub }) => (
                <div key={label} className="rounded-lg bg-black border border-gray-800 px-4 py-4">
                  <div className="text-xs font-mono text-gray-600 mb-1">{label}</div>
                  <div className="text-base font-bold text-[#00A372]">{value}</div>
                  <div className="text-xs text-gray-600 mt-0.5">{sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Agentic RAG pipeline */}
          <h3 className="text-sm font-mono font-bold text-gray-400 uppercase tracking-widest mb-4">
            Agentic RAG Pipeline
          </h3>
          <div className="space-y-3 mb-8">
            {NATURENANI_AGENTIC_STEPS.map(({ step, title, detail }) => (
              <div
                key={step}
                className="flex gap-4 rounded-xl border border-gray-800 bg-gray-950 px-5 py-4"
              >
                <span className="text-xs font-mono font-black text-[#00A372] mt-0.5 shrink-0">{step}</span>
                <div>
                  <div className="text-sm font-bold text-white mb-0.5">{title}</div>
                  <div className="text-sm text-gray-500 leading-relaxed">{detail}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Full stack table */}
          <h3 className="text-sm font-mono font-bold text-gray-400 uppercase tracking-widest mb-4">
            Full Stack
          </h3>
          <StackTable rows={NATURENANI_STACK} />
        </section>

        <div className="border-t border-gray-900 my-12" />

        {/* ══════════════════════════════════════════════════════════
            DENTAL DEMO
        ══════════════════════════════════════════════════════════ */}
        <section>
          <div className="flex items-start justify-between gap-4 mb-8 flex-wrap">
            <div>
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-2xl">🦷</span>
                <span className="text-xs font-mono font-bold tracking-widest bg-blue-950 text-blue-400 border border-blue-900 px-2 py-0.5 rounded">
                  MULTI-TENANT SAAS DEMO
                </span>
                <span className="text-xs font-mono text-gray-600">Phase 3 of 4 complete</span>
              </div>
              <h2 className="mt-2 text-3xl font-black text-white">Dental AI Chatbot Platform</h2>
              <p className="mt-1 text-gray-400">
                Multi-tenant RAG chatbot SaaS — appointment booking, CRM integration, and admin dashboard.
              </p>
            </div>
            <a
              href="https://demo.opound.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-gray-600 hover:text-gray-300 transition-colors border border-gray-800 px-3 py-1.5 rounded-lg"
            >
              Live Demo ↗
            </a>
          </div>

          {/* Phase tracker */}
          <div className="rounded-xl bg-gray-950 border border-gray-800 px-6 py-5 mb-6">
            <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-4">Build Phases</p>
            <div className="space-y-2">
              {DENTAL_PHASES.map(({ phase, label, detail }) => (
                <div key={phase} className="flex items-start gap-4">
                  <div className="flex items-center gap-2 shrink-0 w-36">
                    <span className="text-xs font-mono text-gray-600">{phase}</span>
                    <span
                      className={`text-xs font-mono font-bold px-1.5 py-0.5 rounded ${
                        label === "Complete"
                          ? "bg-[#00A372]/15 text-[#00A372]"
                          : "bg-gray-800 text-gray-500"
                      }`}
                    >
                      {label}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* What it handles */}
          <h3 className="text-sm font-mono font-bold text-gray-400 uppercase tracking-widest mb-4">
            System Capabilities
          </h3>
          <div className="grid sm:grid-cols-2 gap-3 mb-8">
            {[
              { icon: "◈", title: "RAG Q&A", body: "Patients ask questions answered from ingested PDFs and URLs via Pinecone semantic search." },
              { icon: "◈", title: "Intent Classification", body: "GPT-4o-mini routes booking vs. general vs. emergency intent with tuned prompt — bypassed during data collection." },
              { icon: "◈", title: "CRM Integration", body: "HubSpot smart merge: fills empty fields, always updates phone, logs conversation summary as note." },
              { icon: "◈", title: "Booking Flow", body: "Name → email → phone collection, Calendly availability check, prefilled booking link as interactive button." },
              { icon: "◈", title: "Admin Dashboard", body: "Clerk-protected /admin — document upload/ingestion, settings, analytics, full conversation history with transcripts." },
              { icon: "◈", title: "Multi-tenant Foundation", body: "All Supabase tables have tenant_id. Settings cached per tenant. Dynamic Pinecone namespace designed for Phase 4." },
            ].map(({ icon, title, body }) => (
              <div key={title} className="rounded-xl border border-gray-800 bg-gray-950 px-5 py-4">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-[#00A372] text-sm">{icon}</span>
                  <span className="text-sm font-bold text-gray-200">{title}</span>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>

          {/* Stack table */}
          <h3 className="text-sm font-mono font-bold text-gray-400 uppercase tracking-widest mb-4">
            Full Stack
          </h3>
          <StackTable rows={DENTAL_STACK} />
        </section>

        {/* ── Footer note ── */}
        <div className="mt-16 pt-8 border-t border-gray-900 text-center">
          <p className="text-sm text-gray-600">
            Opound LLC · Fractional AI Product Leadership for FinTech & Regulated Financial Services
          </p>
          <a
            href="/"
            className="mt-2 inline-block text-xs font-mono text-[#00A372] hover:underline"
          >
            ← Back to opound.com
          </a>
        </div>

      </div>
    </div>
  );
}
