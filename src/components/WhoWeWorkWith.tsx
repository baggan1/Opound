import React, { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

interface TargetSegment {
    label: string;
    description: string;
}

export const WhoWeWorkWith: React.FC = () => {
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);

    const segments: TargetSegment[] = [
        {
            label: "FinTech & Digital Asset Firms",
            description: "Series A–C companies scaling operations without a senior AI product lead on staff. Crypto exchanges, digital asset platforms, payments infrastructure, and trading technology."
        },
        {
            label: "Compliance, AML & Surveillance Platforms",
            description: "Teams building or upgrading compliance infrastructure who need a partner that understands the regulatory layer — not just the tech stack. AML detection, market surveillance, transaction monitoring."
        },
        {
            label: "RIAs, Family Offices & Boutique Funds",
            description: "Registered investment advisors, family offices, and hedge funds in the 20–100 person range. Real budgets, real compliance pain, and no internal AI leadership. Wellington-caliber thinking without the enterprise overhead."
        },
        {
            label: "Regulated Businesses Evaluating AI Adoption",
            description: "Wealth management, insurance, and legal firms that need a credible, security-conscious entry point into AI — not a demo, not a whitepaper. A scoped engagement with a defensible outcome."
        }
    ];

    return (
        <section id="who-we-work-with" className="py-24 bg-slate-900 border-t border-slate-800/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-500/5 blur-[120px] pointer-events-none rounded-full"></div>
            <div className="container mx-auto px-6 relative z-10">
                <SectionHeading
                    title="Who We Work With"
                    subtitle="Opound is built for teams where the stakes are high, the compliance requirements are real, and a generic AI vendor isn't going to cut it."
                />

                <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
                    {segments.map((segment, idx) => (
                        <div key={idx} className="bg-slate-950 border border-slate-800 p-8 rounded-3xl hover:border-emerald-500/30 transition-colors group">
                            <div className="w-2 h-12 bg-emerald-500 rounded-full mb-6 group-hover:bg-emerald-400 transition-colors"></div>
                            <h3 className="text-xl font-bold text-white mb-3">{segment.label}</h3>
                            <p className="text-slate-400 font-light leading-relaxed">
                                {segment.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="text-center max-w-3xl mx-auto border-t border-slate-800 pt-16">
                    <p className="text-xl font-medium text-slate-300 mb-8 italic">
                        "If your AI initiative needs to survive a compliance review — that's the work we do."
                    </p>
                    <button
                        onClick={() => setIsCalendarOpen(true)}
                        className="bg-emerald-600 hover:bg-emerald-500 text-white text-base font-bold px-10 py-5 rounded-2xl shadow-xl shadow-emerald-500/20 transition-all transform hover:-translate-y-1 inline-flex items-center gap-2"
                    >
                        Book a Strategy Call <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* Zoho Calendar Modal Overlay */}
            {isCalendarOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm">
                    <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden max-w-md w-full">
                        <button
                            onClick={() => setIsCalendarOpen(false)}
                            className="absolute top-4 right-4 z-10 p-2 text-slate-500 hover:text-slate-700 bg-white/80 rounded-full hover:bg-slate-100 transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>
                        <div className="w-full bg-white h-[500px]">
                            <iframe
                                src="https://calendar.zoho.com/zc/ui/embed/#calendar=zz080112301ff36847f46335da8e80ee4d12f8ac9425067f3e6f0f6486dbd39b4d0120142e50352b2ea7aca43d973c325351ab0dae&title=navilla&type=1&language=en&timezone=America%2FLos_Angeles&showTitle=1&showTimezone=1&view=day&showDetail=0&theme=1&eventColorType=light"
                                title="navilla"
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                scrolling="no"
                                className="border-0"
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};
