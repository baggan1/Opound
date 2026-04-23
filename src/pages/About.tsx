import React from 'react';
import { FounderBio } from '../components/FounderBio';
import { TrustSection } from '../components/TrustSection';

interface AboutProps {
    onOpenBooking: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenBooking }) => {
    return (
        <div className="bg-slate-950 min-h-screen">
            <div className="pt-32 pb-16 text-center">
                <h1 className="text-5xl font-black text-white mb-4 tracking-tighter">About Us</h1>
                <p className="text-slate-400 max-w-2xl mx-auto">The expertise and principles behind Opound LLC.</p>
            </div>

            {/* Block 1: Opening Statement */}
            <div className="max-w-3xl mx-auto px-6 pb-24 text-center">
                <h2 className="text-xl font-bold text-emerald-400 mb-6 tracking-wide uppercase">
                    Why Opound Exists
                </h2>
                <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
                    <p>
                        FinTech firms, digital asset companies, and regulated financial businesses
                        are under pressure to adopt AI — but most don't have a senior AI product
                        leader on staff who understands the compliance layer, the integration
                        complexity, and how to actually ship.
                    </p>
                    <p>
                        Opound fills that gap. Senior product and technical program leadership,
                        embedded into your team on a fractional basis — so you get the expertise
                        of a seasoned FinTech AI lead without a 6-month hiring process or a
                        full-time salary.
                    </p>
                </div>
            </div>

            {/* Block 2: The Expertise Behind Opound (Domain Pillars) */}
            <div className="max-w-6xl mx-auto px-6 pb-32">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-white mb-2">The Expertise Behind Opound</h2>
                    <p className="text-slate-400 text-lg">Three domains that are rare to find in one practitioner.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Pillar 1 — unchanged */}
                    <div className="bg-[#0a0f1e] border border-emerald-500/30 rounded-2xl p-8 shadow-lg shadow-emerald-500/5 hover:border-emerald-500/60 transition-colors flex flex-col h-full">
                        <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 w-fit">
                            INSTITUTIONAL COMPLIANCE
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Digital Asset Compliance & AML Surveillance</h3>
                        <p className="text-slate-400 text-sm leading-relaxed flex-grow">
                            Direct experience with Solidus Labs — serving 25+ institutional clients on AML surveillance, market manipulation detection, and compliance infrastructure for digital asset markets. Production compliance tooling used by real institutions, not whitepapers.
                        </p>
                    </div>

                    {/* Pillar 2 — unchanged */}
                    <div className="bg-[#0a0f1e] border border-emerald-500/30 rounded-2xl p-8 shadow-lg shadow-emerald-500/5 hover:border-emerald-500/60 transition-colors flex flex-col h-full">
                        <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 w-fit">
                            ENTERPRISE FINTECH
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Mission-Critical Trading Infrastructure</h3>
                        <p className="text-slate-400 text-sm leading-relaxed flex-grow">
                            Built and maintained systems at Wellington Management — one of the world's largest independent investment firms, $1T+ AUM — where latency, reliability, and auditability are non-negotiable. That standard of engineering rigor carries into every Opound engagement.
                        </p>
                    </div>

                    {/* Pillar 3 — UPDATED: removed NatureNani/dental, replaced with CryptoFIX + builder proof */}
                    <div className="bg-[#0a0f1e] border border-emerald-500/30 rounded-2xl p-8 shadow-lg shadow-emerald-500/5 hover:border-emerald-500/60 transition-colors flex flex-col h-full">
                        <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 w-fit">
                            LIVE PRODUCTION SYSTEMS
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Production AI in the Domain, Not Adjacent to It</h3>
                        <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                            Opound's AI work is in production in regulated financial infrastructure. CryptoFIX — an automated FIX protocol readiness auditor for institutional crypto connectivity — is a live, deployed tool that scores exchanges against an 80+ checkpoint rubric built from real TradFi certification standards. The difference between a strategist and a builder matters. Every engagement is backed by someone who has shipped in this domain.
                        </p>
                        <a href="/#work" className="text-emerald-400 hover:text-emerald-300 font-bold text-sm inline-flex items-center transition-colors">
                            View CryptoFIX <span className="ml-1 tracking-tighter">→</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Block 3: How We Work — unchanged */}
            <div className="max-w-3xl mx-auto px-6 pb-24">
                <div className="border-l-4 border-emerald-500 pl-8 space-y-4">
                    <h2 className="text-2xl font-bold text-white mb-6">
                        Senior Expertise, Fractional Commitment
                    </h2>
                    <div className="space-y-4 text-slate-300 text-lg leading-relaxed font-light">
                        <p>
                            Most FinTech firms at the Series A–C stage don't need a full-time
                            AI product lead yet — but they do need someone who can own the
                            roadmap, manage vendors, lead cross-functional delivery, and be
                            accountable when something ships wrong.
                        </p>
                        <p>
                            That's the gap Opound fills. Not a consulting firm that delivers
                            a report and leaves. Not a vendor that needs managing. A senior
                            practitioner embedded in your team, with direct experience in the
                            compliance, infrastructure, and AI domains your business operates in.
                        </p>
                        <p>
                            Engagements are scoped to what you actually need — a bounded
                            audit, a delivery sprint, or an ongoing fractional retainer.
                            Every engagement starts with a direct conversation about scope,
                            not a sales deck.
                        </p>
                        <p className="font-bold text-white pt-2">
                            If it needs to be defensible in front of a compliance team or
                            a board — that's the work we do.
                        </p>
                    </div>
                </div>
            </div>

            <FounderBio />
            <TrustSection />

            {/* Block 5: Calendly CTA */}
            <div className="pb-20 pt-10 text-center px-6">
                <button
                    onClick={onOpenBooking}
                    className="inline-block bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black px-8 py-4 rounded-xl text-lg transition-colors"
                >
                    Book a Strategy Call
                </button>
                <p className="text-slate-500 mt-4 text-sm max-w-2xl mx-auto">
                    30 minutes. Scoped to your situation.
                </p>
            </div>
        </div>
    );
};
