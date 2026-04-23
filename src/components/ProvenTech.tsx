import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

interface ProvenTechProps {
    onOpenContact: (service?: string) => void;
}

export const ProvenTech: React.FC<ProvenTechProps> = ({ onOpenContact }) => (
    <section id="case-studies" className="py-24 bg-slate-900 border-t border-slate-800">
        <div className="container mx-auto px-6 max-w-6xl">
            <SectionHeading
                title="Work We've Shipped"
                subtitle="Not demos. Not prototypes. Production systems."
            />

            <div className="flex flex-col gap-12 mt-16">

                {/* Case Study 0: CryptoFIX Auditor */}
                <div className="bg-[#0a0f1e] border border-slate-800 rounded-3xl p-8 md:p-12 hover:border-[#00A372]/30 transition-colors shadow-2xl relative overflow-hidden">
                    {/* Subtle bg glow */}
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-[#00A372]/5 blur-[100px] pointer-events-none rounded-full"></div>

                    <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                        <div className="w-full md:w-1/3">
                            <div className="inline-flex items-center gap-2 bg-[#00A372]/10 text-[#00A372] border border-[#00A372]/20 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
                                REGULATORY TECH
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">CryptoFIX Auditor</h3>
                            <div className="flex flex-col gap-3">
                                <a href="https://fix.opound.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-sm font-bold inline-flex items-center gap-1 transition-colors">
                                    Try the free audit tool <ExternalLink size={14} />
                                </a>
                                <button 
                                    onClick={() => onOpenContact('Crypto FIX Audit')}
                                    className="text-[#00A372] hover:text-[#008f64] text-sm font-bold inline-flex items-center gap-1 transition-colors w-fit"
                                >
                                    Send message <ArrowRight size={14} />
                                </button>
                            </div>
                        </div>

                        <div className="w-full md:w-2/3 space-y-8">
                            <div>
                                <h4 className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-2">Problem</h4>
                                <p className="text-slate-300 leading-relaxed font-light">
                                    Crypto exchanges struggle to attract institutional capital due to non-standard FIX implementations and lack of TradFi-grade Rules of Engagement (RoE) documentation.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-2">Approach</h4>
                                <p className="text-slate-300 leading-relaxed font-light">
                                    Built an automated audit engine that validates FIX protocol sessions against institutional expectations. Integrated lead-gated RoE generation and custom remediation roadmapping.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-[10px] uppercase tracking-widest text-[#00A372] font-bold mb-2">Result</h4>
                                <p className="text-white leading-relaxed font-medium">
                                    Launched at <a href="https://fix.opound.com" className="underline underline-offset-4 decoration-[#00A372]">fix.opound.com</a>. Provides instant institutional readiness scoring and automated gap analysis for exchange connectivity teams.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Case Study 1: NatureNani */}
                <div className="bg-[#0a0f1e] border border-slate-800 rounded-3xl p-8 md:p-12 hover:border-slate-700/50 transition-colors shadow-xl relative overflow-hidden opacity-80 hover:opacity-100">
                    <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                        <div className="w-full md:w-1/3">
                            <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
                                LIVE SAAS PLATFORM
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">NatureNani</h3>
                            <a href="https://www.naturenani.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-sm font-bold inline-flex items-center gap-1 transition-colors">
                                View live <ExternalLink size={14} />
                            </a>
                        </div>

                        <div className="w-full md:w-2/3 space-y-8">
                            <div>
                                <h4 className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-2">Problem</h4>
                                <p className="text-slate-300 leading-relaxed font-light">
                                    Building a production SaaS with a conversational AI layer that could serve 1,000+ concurrent users with reliable, low-latency responses — without enterprise infrastructure budget.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-2">Approach</h4>
                                <p className="text-slate-300 leading-relaxed font-light">
                                    RAG architecture using pgvector (Supabase), Gemini AI, and a Stripe-monetized SaaS shell. Retrieval precision and response latency as primary engineering constraints.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-[10px] uppercase tracking-widest text-emerald-500 font-bold mb-2">Result</h4>
                                <p className="text-white leading-relaxed font-medium text-sm">
                                    Sub-250ms average query latency. Live SaaS with 1,000+ active users and Stripe billing in production.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Case Study 2: Dental Practice AI Platform */}
                <div className="bg-[#0a0f1e] border border-slate-800 rounded-3xl p-8 md:p-12 hover:border-slate-700/50 transition-colors shadow-xl relative overflow-hidden opacity-80 hover:opacity-100">
                    <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                        <div className="w-full md:w-1/3">
                            <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 border border-blue-500/20 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
                                OPERATIONAL AUTOMATION
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Dental AI Platform</h3>
                            <a href="https://demo.opound.com" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 text-sm font-bold inline-flex items-center gap-1 transition-colors">
                                Try the demo <ExternalLink size={14} />
                            </a>
                        </div>

                        <div className="w-full md:w-2/3 space-y-8">
                            <div>
                                <h4 className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-2">Problem</h4>
                                <p className="text-slate-300 leading-relaxed font-light text-sm">
                                    A dental practice's front desk bottlenecked by appointment booking, patient intake, and insurance questions.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-[10px] uppercase tracking-widest text-blue-400 font-bold mb-2">Result</h4>
                                <p className="text-white leading-relaxed font-medium text-sm">
                                    End-to-end system handling booking, intake, and FAQ autonomously. HubSpot CRM sync and admin dashboard.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="text-center mt-12">
                <p className="text-slate-500 font-medium tracking-wide italic text-lg">
                    "These aren't demos. They're running."
                </p>
            </div>
        </div>
    </section>
);
