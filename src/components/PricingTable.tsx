import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { CalendarModal } from './CalendarModal';

// Define the shape of our new engagement tiers
interface EngagementTier {
    name: string;
    description: string;
    whoItsFor: string;
    investment: string;
    comparisonSnippet?: string;
}

export const PricingTable: React.FC = () => {
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);

    const tiers: EngagementTier[] = [
        {
            name: "Tier 1 — AI Readiness Audit",
            description: "A structured 2-week engagement that maps your current operational landscape, identifies where AI creates defensible leverage, and delivers a prioritized implementation roadmap with cost and timeline estimates. Designed for firms that want to move deliberately, not experimentally.",
            whoItsFor: "FinTech firms, RIAs, and regulated businesses evaluating AI adoption before committing to build.",
            investment: "Starting at $2,450"
        },
        {
            name: "Tier 2 — Integration & Delivery Sprint",
            description: "A scoped, project-based engagement to design, build, and ship a specific AI integration — LLM pipelines, RAG systems, CRM automation, compliance tooling, or workflow orchestration. Scope and timeline defined upfront. No retainer required.",
            whoItsFor: "Teams with a defined problem and a timeline. Ideal when you know what needs to be built but need senior execution capacity to ship it.",
            investment: "Scoped per engagement — typically $8,000–$25,000 depending on complexity and timeline."
        },
        {
            name: "Tier 3 — Fractional AI Product Lead",
            description: "Embedded senior product and technical program leadership — working inside your team 1–2 days per week on a retainer basis. Own the AI roadmap, manage vendor relationships, lead cross-functional delivery, and serve as the accountable senior voice on AI initiatives. Without the full-time overhead or the 6-month hiring process.",
            whoItsFor: "Series A–C FinTech firms, digital asset companies, compliance platforms, and regulated businesses that need senior AI product leadership but aren't ready for a full-time hire.",
            investment: "Retainer engagements from $8,500/month",
            comparisonSnippet: "A senior AI Product Manager in FinTech costs $180,000–$220,000 annually in base salary alone — before benefits, equity, and a 4–6 month hiring process."
        },
        {
            name: "Tier 4 — Strategic Advisory",
            description: "Monthly working sessions for founders, CTOs, and senior leaders navigating AI adoption decisions, compliance implications, or product strategy at the intersection of AI and regulated markets. Structured around your current decisions and blockers — not generic frameworks.",
            whoItsFor: "Executives who need a senior thinking partner with direct experience in FinTech infrastructure and digital asset compliance, not a generalist consultant.",
            investment: "From $3,000/month for monthly engagements."
        }
    ];

    return (
        <section id="pricing" className="py-32 bg-slate-950 border-t border-slate-800/50">
            <div className="container mx-auto px-6">
                <SectionHeading
                    title="Engagements Built Around Your Situation"
                    subtitle="Every engagement starts with a conversation about scope, timeline, and what success looks like for your business. These are the frameworks we work within — not a menu."
                />

                {/* Engagement Tiers */}
                <div className="flex flex-col gap-6 max-w-4xl mx-auto mb-20">
                    {tiers.map((tier, idx) => (
                        <div key={idx} className="bg-slate-900 border border-slate-800 p-8 rounded-3xl flex flex-col md:flex-row gap-8 items-start">
                            <div className="flex-grow">
                                <h3 className="text-xl font-bold text-white mb-3">{tier.name}</h3>
                                <p className="text-slate-400 font-light leading-relaxed mb-6">
                                    {tier.description}
                                </p>
                                <div className="space-y-4">
                                    <div>
                                        <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold block mb-1">Who It's For</span>
                                        <p className="text-sm text-slate-300">{tier.whoItsFor}</p>
                                    </div>
                                    <div>
                                        <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold block mb-1">Investment</span>
                                        <p className="text-sm text-white font-medium">{tier.investment}</p>
                                        {tier.comparisonSnippet && (
                                            <p className="text-xs text-slate-400 font-medium italic mt-2 border-l-2 border-slate-700 pl-3 py-1">
                                                {tier.comparisonSnippet}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-auto md:shrink-0 pt-2 md:pt-0">
                                <button
                                    onClick={() => setIsCalendarOpen(true)}
                                    className="w-full md:w-auto bg-slate-800 hover:bg-slate-700 text-white text-sm font-bold px-6 py-4 rounded-xl transition-all border border-slate-700/50 whitespace-nowrap"
                                >
                                    Start with a Strategy Call
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* How Engagements Typically Start Section */}
                <div className="max-w-5xl mx-auto border-t border-slate-800/50 pt-20">
                    <h3 className="text-3xl font-black text-white mb-12 text-center tracking-tight">How Engagements Typically Start</h3>

                    <div className="grid md:grid-cols-3 gap-8 mb-16 relative">
                        {/* Connecting line for desktop */}
                        <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-px bg-slate-800"></div>

                        <div className="relative text-center group">
                            <div className="w-14 h-14 bg-slate-900 border border-slate-700 text-emerald-400 rounded-2xl flex items-center justify-center font-black text-xl mx-auto mb-6 relative z-10 group-hover:bg-slate-800 group-hover:border-emerald-500/50 transition-colors">
                                1
                            </div>
                            <h4 className="text-white font-bold mb-3">Strategy Call (30 min)</h4>
                            <p className="text-sm text-slate-400 font-light leading-relaxed px-4">
                                We map your situation, your constraints, and where AI creates the most defensible value for your business.
                            </p>
                        </div>

                        <div className="relative text-center group">
                            <div className="w-14 h-14 bg-slate-900 border border-slate-700 text-emerald-400 rounded-2xl flex items-center justify-center font-black text-xl mx-auto mb-6 relative z-10 group-hover:bg-slate-800 group-hover:border-emerald-500/50 transition-colors">
                                2
                            </div>
                            <h4 className="text-white font-bold mb-3">Scope Proposal</h4>
                            <p className="text-sm text-slate-400 font-light leading-relaxed px-4">
                                You receive a written scope, timeline, and investment range within 48 hours. No vague retainer discussions.
                            </p>
                        </div>

                        <div className="relative text-center group">
                            <div className="w-14 h-14 bg-slate-900 border border-slate-700 text-emerald-400 rounded-2xl flex items-center justify-center font-black text-xl mx-auto mb-6 relative z-10 group-hover:bg-slate-800 group-hover:border-emerald-500/50 transition-colors">
                                3
                            </div>
                            <h4 className="text-white font-bold mb-3">Engagement Begins</h4>
                            <p className="text-sm text-slate-400 font-light leading-relaxed px-4">
                                Work starts on an agreed date. You have a single accountable point of contact throughout.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <button
                            onClick={() => setIsCalendarOpen(true)}
                            className="bg-emerald-600 hover:bg-emerald-500 text-white text-base font-bold px-10 py-5 rounded-2xl shadow-xl shadow-emerald-500/20 transition-all transform hover:-translate-y-1"
                        >
                            Book Your Strategy Call
                        </button>
                        <p className="text-sm text-slate-500 mt-4 italic">30 minutes. No pitch deck. Just a direct conversation.</p>
                    </div>
                </div>

                {/* Zoho Calendar Modal Overlay */}
                <CalendarModal isOpen={isCalendarOpen} onClose={() => setIsCalendarOpen(false)} />
            </div>
        </section>
    );
};
