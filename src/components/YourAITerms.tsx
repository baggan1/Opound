import React from 'react';
import { SectionHeading } from './SectionHeading';
import { Check } from 'lucide-react';
interface YourAITermsProps {
    onOpenBooking?: () => void;
}

export const YourAITerms: React.FC<YourAITermsProps> = ({ onOpenBooking }) => {

    return (
        <section id="ai-terms" className="py-24 bg-slate-900 border-t border-slate-800">
            <div className="container mx-auto px-6 max-w-6xl">
                <SectionHeading
                    title="Your AI, Your Terms"
                    subtitle="You're not locked in. Every engagement is built on transparency — you see what's being built, you can audit how it's working, and you choose how the relationship evolves."
                />

                <div className="grid lg:grid-cols-12 gap-8 mt-16 items-start">

                    {/* Option B — Primary */}
                    <div className="lg:col-span-7 bg-emerald-900/20 border border-emerald-500 shadow-2xl shadow-emerald-500/20 p-10 lg:p-12 rounded-[2.5rem] h-full flex flex-col relative z-10 transition-all hover:scale-[1.01]">
                        <h3 className="text-3xl font-black text-white mb-2 tracking-tight">
                            Opound Managed — Stay and Scale
                        </h3>
                        <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full text-xs font-bold mb-6 w-max border border-emerald-500/20">
                            The default path for most clients
                        </div>

                        <p className="text-slate-300 leading-relaxed font-light mb-8">
                            We own the infrastructure, you own the results. Opound handles all hosting, security patches, system updates, and performance monitoring on an ongoing basis. As your business scales or your needs evolve, we expand the system — no additional technical overhead required from your team.
                        </p>

                        <div className="space-y-4 mb-8 flex-grow">
                            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">What this means for you:</div>
                            {[
                                "No servers to manage, no software to update",
                                "One flat Opound fee — no surprise invoices from us. Third-party infrastructure costs (APIs, databases, tooling) are billed directly to you at standard rates and outlined transparently before engagement begins.",
                                "System gets smarter over time as we refine it",
                                "Cancel with 30 days notice after your minimum commitment period"
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-start gap-3 text-slate-300">
                                    <Check className="w-5 h-5 shrink-0 mt-0.5 text-emerald-400" />
                                    <span className="text-sm leading-relaxed font-light">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-auto flex flex-col gap-5 pt-8 border-t border-emerald-500/20">
                            <p className="text-sm text-emerald-400/80 italic">
                                The right path if you need AI systems running in production without managing the infrastructure yourself.
                            </p>
                            <button
                                onClick={onOpenBooking}
                                className="bg-emerald-600 hover:bg-emerald-500 text-white font-black py-4 px-8 rounded-2xl shadow-xl shadow-emerald-500/30 transition-all uppercase tracking-widest text-xs tracking-widest mt-2"
                            >
                                Book a Strategy Call →
                            </button>
                        </div>
                    </div>

                    {/* Option A — Secondary */}
                    <div className="lg:col-span-5 bg-transparent border border-slate-700/80 p-8 lg:p-10 rounded-[2.5rem] h-full flex flex-col transition-all hover:border-slate-500 hover:bg-slate-800/10">
                        <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
                            Build-Operate-Transfer
                        </h3>
                        <p className="text-slate-400 font-medium mb-6 text-sm">Own It Outright — Available after 6 months of managed service</p>

                        <p className="text-slate-400 leading-relaxed font-light mb-8 text-sm">
                            After a minimum 6-month engagement where we've proven the system works for your business, you can elect to take full ownership. We transfer everything — all source code, integrations, API configurations, documentation, and credentials — directly to your accounts. You own it permanently, with no ongoing fees to Opound.
                        </p>

                        <div className="space-y-4 mb-6 flex-grow">
                            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">What's included in the transfer:</div>
                            {[
                                "Full source code and deployment configuration",
                                "All third-party integration credentials transferred to your accounts",
                                "Complete technical documentation",
                                "30-day post-transfer support window"
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-start gap-3 text-slate-400">
                                    <span className="text-slate-500 mt-0.5 text-xs">○</span>
                                    <span className="text-sm leading-relaxed font-light">{item}</span>
                                </div>
                            ))}
                            <p className="text-slate-500 text-sm leading-relaxed font-light pt-2">
                                One-time Transfer Fee applies — quoted based on system complexity at time of transfer.
                            </p>
                        </div>

                        <div className="mt-auto flex flex-col gap-5 pt-8 border-t border-slate-800">
                            <p className="text-sm text-slate-500 italic">
                                The right path if long-term code ownership and independence matter more than ongoing managed support.
                            </p>
                            <button
                                onClick={() => { window.location.href = '/#contact'; }}
                                className="bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold py-3 px-6 rounded-2xl border border-slate-700 transition-all uppercase tracking-widest text-xs mt-2"
                            >
                                Ask About Transfer →
                            </button>
                        </div>
                    </div>

                </div>

                <div className="mt-16 text-center">
                    <div className="bg-slate-800/50 border border-slate-700/50 p-6 rounded-2xl inline-block max-w-3xl">
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Not sure which path fits your situation? The audit is the right first step regardless — we'll recommend the engagement model that makes the most sense for your situation.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
