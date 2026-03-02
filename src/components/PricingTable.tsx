import React from 'react';
import { Check } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { PricingPlan } from '../types';

export const PricingTable: React.FC = () => {
    const plans: PricingPlan[] = [
        {
            name: "Tier 1: The AI Readiness Audit",
            price: "$2,450",
            badge: "Start Here",
            timeline: "One Time • Delivered in 2 weeks",
            headline: "Find out exactly where AI can save your practice time and money — before you spend a dollar on implementation.",
            features: [
                "60-minute discovery call to map your current workflows",
                "Full audit of your scheduling, intake, communications, and admin processes",
                "Identification of your top 3 highest-ROI automation opportunities",
                "A 10-page written report with findings and recommendations",
                "A 90-day AI implementation roadmap with sequenced priorities",
                "A cost/benefit estimate for each recommended system",
                "30-minute debrief call to walk through findings together"
            ],
            whatHappensNext: "If you decide to move forward, the $2,450 audit fee is credited toward your first month of the Managed AI Agent plan.",
            cta: "Book Your Audit →",
            highlighted: true
        },
        {
            name: "Tier 2: Managed AI Agent",
            price: "Starting at $3,000/mo",
            badge: "Most Popular",
            minimumCommitment: "Minimum commitment: 6 months",
            headline: "Your AI system, built and managed by Opound — so your staff never has to touch it.",
            features: [
                "Custom AI agent built for your practice (booking, intake, insurance FAQ, or after-hours — based on audit findings)",
                "Full integration with your existing tools (Calendly, HubSpot, or equivalent)",
                "Patient data handling with FinTech-grade security standards",
                "Ongoing monitoring — we watch it so you don't have to",
                "Monthly performance report (conversations handled, bookings made, hours saved)",
                "RAG knowledge base updates as your services or documents change",
                "Priority support with 24-hour response time"
            ],
            notIncluded: [
                "Third-party software subscription costs (Calendly, HubSpot, etc.) — billed directly to you at their standard rates",
                "Major scope additions (new agents or verticals) — quoted separately"
            ],
            after6Months: "Option to continue the managed retainer or transfer full ownership of the system to your accounts for a one-time Transfer Fee.",
            cta: "Book Your Audit First →",
            ctaNote: "We recommend starting with the AI Audit so the system we build is tailored to your specific workflows."
        },
        {
            name: "Tier 3: Fractional AI Officer",
            price: "Starting at $7,500/mo",
            minimumCommitment: "Minimum commitment: 3 months",
            headline: "For practices ready to make AI a core part of how they operate — not just one tool, but an ongoing strategy.",
            features: [
                "Up to 3 active AI agents managed simultaneously (e.g. booking bot + insurance FAQ + follow-up reminders)",
                "Monthly strategy session (60 minutes) to review performance and plan next priorities",
                "Staff training session each quarter — we make sure your team knows how to work alongside the AI",
                "Proactive recommendations as new AI tools and capabilities become available",
                "AI roadmap management — we track what's next, so you don't have to stay current on the technology",
                "First access to new Opound agent products as they launch (HVAC dispatcher, legal intake — coming 2026)"
            ],
            whoThisIsFor: "Practice owners or office managers who want AI embedded into their operations long-term — not just one automation, but a practice that continuously gets more efficient over time.",
            cta: "Let's Talk →",
            ctaNote: "This tier is typically a fit after 2–3 months on the Managed Agent plan. Reach out and we'll tell you if it's the right time."
        }
    ];

    return (
        <section id="pricing" className="py-32 bg-slate-950 border-t border-slate-800/50">
            <div className="container mx-auto px-6">
                <SectionHeading title="Transparent & Scalable Engagement" subtitle="Simple entry points. Professional implementation. Long-term partnership." />

                <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 xl:gap-8 max-w-6xl mx-auto items-start">
                    {plans.map((p, idx) => (
                        <div key={idx} className={`relative flex flex-col p-8 xl:p-10 rounded-[2.5rem] border transition-all duration-500 h-full ${p.highlighted ? 'bg-emerald-900/20 border-emerald-500 shadow-2xl shadow-emerald-500/20 z-10 hover:scale-[1.03]' : 'bg-slate-900 border-slate-800 hover:scale-[1.01]'}`}>
                            {p.badge && (
                                <div className={`absolute -top-4 left-1/2 -translate-x-1/2 ${p.highlighted ? 'bg-emerald-500 text-slate-900' : 'bg-blue-500 text-white'} text-[10px] font-black uppercase py-1.5 px-6 rounded-full tracking-tighter shadow-lg whitespace-nowrap`}>
                                    {p.badge}
                                </div>
                            )}
                            <h3 className={`text-base font-black mb-2 uppercase tracking-[0.1em] ${p.highlighted ? 'text-emerald-400' : 'text-slate-400'}`}>{p.name}</h3>
                            <div className="mb-4 flex-shrink-0 flex flex-col">
                                <span className="text-3xl lg:text-4xl font-bold text-slate-100 tracking-tighter block">{p.price}</span>
                                {p.timeline && <span className="text-sm text-slate-400 mt-2 font-medium">{p.timeline}</span>}
                                {p.minimumCommitment && <span className="text-sm text-slate-400 mt-2 font-medium">{p.minimumCommitment}</span>}
                            </div>
                            <p className="text-slate-300 mb-8 text-sm leading-relaxed font-semibold min-h-[4rem]">{p.headline}</p>

                            <div className="space-y-4 mb-8 flex-grow">
                                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">What's Included:</div>
                                {p.features.map((f, i) => (
                                    <div key={i} className="flex items-start gap-3 text-slate-300">
                                        <Check className={`w-4 h-4 shrink-0 mt-0.5 ${p.highlighted ? 'text-emerald-400' : 'text-slate-500'}`} />
                                        <span className="text-sm leading-relaxed font-light">{f}</span>
                                    </div>
                                ))}

                                {p.notIncluded && (
                                    <div className="pt-4 border-t border-slate-800/50 mt-4">
                                        <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">What's Not Included:</div>
                                        <ul className="space-y-3">
                                            {p.notIncluded.map((ni, i) => (
                                                <li key={i} className="flex items-start gap-3 text-slate-400">
                                                    <span className="text-slate-600 mt-0.5 text-xs">✕</span>
                                                    <span className="text-sm leading-relaxed font-light">{ni}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {p.whatHappensNext && (
                                    <div className="pt-4 border-t border-slate-800/50 mt-4">
                                        <div className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest mb-2">What Happens Next:</div>
                                        <p className="text-sm text-slate-300 leading-relaxed font-light">{p.whatHappensNext}</p>
                                    </div>
                                )}

                                {p.after6Months && (
                                    <div className="pt-4 border-t border-slate-800/50 mt-4">
                                        <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">After 6 Months:</div>
                                        <p className="text-sm text-slate-300 leading-relaxed font-light">{p.after6Months}</p>
                                    </div>
                                )}

                                {p.whoThisIsFor && (
                                    <div className="pt-4 border-t border-slate-800/50 mt-4">
                                        <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Who This Is For:</div>
                                        <p className="text-sm text-slate-300 leading-relaxed font-light">{p.whoThisIsFor}</p>
                                    </div>
                                )}
                            </div>

                            <div className="mt-auto pt-6 border-t border-slate-800/50">
                                <button
                                    onClick={() => { window.location.href = '/#contact'; }}
                                    className={`w-full py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all ${p.highlighted
                                            ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-500/30'
                                            : 'bg-transparent border border-slate-700 hover:border-slate-500 text-slate-400 hover:text-slate-200'
                                        }`}
                                >
                                    {p.cta}
                                </button>
                                {p.ctaNote && (
                                    <p className="text-xs text-slate-500 mt-4 text-center italic leading-relaxed">
                                        {p.ctaNote}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
