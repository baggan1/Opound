import React from 'react';
import { Check, Zap } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { PricingPlan } from '../types';

export const PricingTable: React.FC = () => {
    const plans: PricingPlan[] = [
        {
            name: "Tier 1: The AI Readiness Audit",
            price: "Starting at $2,450",
            description: "Focus: Diagnosis. A deep-dive roadmap identifying $10k+ in monthly operational savings.",
            features: [
                "Full Tech & Workflow Audit",
                "Top Bottleneck Identification",
                "Prioritized AI Roadmap",
            ],
            cta: "Get Started Now",
            highlighted: true
        },
        {
            name: "Tier 2: The Specialist Agent",
            price: "Starting at $3,000/mo",
            description: "Focus: Deployment. A custom-built, autonomous agent with a performance-based upside.",
            features: [
                "Booking, Triage, or RAG",
                "CRM Integration",
                "Performance Upside Tracking",
            ],
            cta: "Book Discovery Call"
        },
        {
            name: "Tier 3: Fractional AI Officer",
            price: "Starting at $7,500/mo",
            description: "Focus: Leadership. Comprehensive AI strategy, staff training, and product management.",
            features: [
                "Enterprise level expertise",
                "Ongoing Performance Optimization",
                "Strategic Tool Expansion",
            ],
            cta: "Inquire for Availability"
        }
    ];

    return (
        <section id="pricing" className="py-32 bg-slate-950 border-t border-slate-800/50">
            <div className="container mx-auto px-6">
                <SectionHeading title="Transparent & Scalable Engagement" subtitle="Simple entry points. Professional implementation. Long-term partnership." />



                <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 xl:gap-8 max-w-6xl mx-auto items-start">
                    {plans.map((p, idx) => (
                        <div key={idx} className={`relative flex flex-col p-8 xl:p-10 rounded-[2.5rem] border transition-all duration-500 hover:scale-[1.03] h-full ${p.highlighted ? 'bg-blue-900/20 border-blue-500 shadow-2xl shadow-blue-500/20 z-10' : 'bg-slate-900 border-slate-800'}`}>
                            {p.highlighted && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-slate-900 text-[10px] font-black uppercase py-1.5 px-6 rounded-full tracking-tighter shadow-lg whitespace-nowrap">
                                    Best Way to Start
                                </div>
                            )}
                            <h3 className={`text-base font-black mb-4 uppercase tracking-[0.1em] ${p.highlighted ? 'text-blue-400' : 'text-slate-400'}`}>{p.name}</h3>
                            <div className="mb-6 flex-shrink-0">
                                <span className="text-3xl lg:text-4xl font-bold text-slate-100 tracking-tighter block">{p.price}</span>
                            </div>
                            <p className="text-slate-400 mb-8 text-sm leading-relaxed font-light min-h-[4rem]">{p.description}</p>

                            <div className="space-y-4 mb-10 flex-grow">
                                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">What's Included:</div>
                                {p.features.map((f, i) => (
                                    <div key={i} className="flex items-start gap-3 text-slate-300">
                                        <Check className={`w-4 h-4 shrink-0 mt-0.5 ${p.highlighted ? 'text-blue-400' : 'text-slate-500'}`} />
                                        <span className="text-sm leading-relaxed font-light">{f}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-auto pt-6 border-t border-slate-800/50">
                                <button
                                    onClick={() => { window.location.href = '/#contact'; }}
                                    className={`w-full py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all ${p.highlighted ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-xl shadow-blue-500/30' : 'bg-slate-800 hover:bg-slate-700 text-slate-300'}`}
                                >
                                    {p.cta}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
