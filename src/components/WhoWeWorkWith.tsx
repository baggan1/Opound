import React from 'react';
import { ArrowDown } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

interface TargetSegment {
    label: string;
    description: string;
}

// No onOpenBooking prop needed — CTA replaced with scroll-to-services
export const WhoWeWorkWith: React.FC = () => {

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

    const scrollToServices = () => {
        const el = document.getElementById('services');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

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

                {/* Replaced booking CTA with a softer scroll-forward — user hasn't seen the work yet */}
                <div className="text-center max-w-3xl mx-auto border-t border-slate-800 pt-16">
                    <p className="text-xl font-medium text-slate-300 mb-8 italic">
                        "If your AI initiative needs to survive a compliance review — that's the work we do."
                    </p>
                    <button
                        onClick={scrollToServices}
                        className="inline-flex items-center gap-2 text-sm font-bold text-emerald-400 hover:text-emerald-300 transition-colors group"
                    >
                        See how we engage
                        <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
};
