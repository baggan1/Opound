import React from 'react';
import { ExternalLink, Database, Layers } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

export const ProvenTech: React.FC = () => (
    <section id="case-studies" className="py-24 bg-slate-900 border-t border-slate-800">
        <div className="container mx-auto px-6 max-w-6xl">
            <SectionHeading
                title="Work We've Shipped"
                subtitle="Not demos. Not prototypes. Production systems."
            />

            <div className="flex flex-col gap-12 mt-16">

                {/* Case Study 1: NatureNani */}
                <div className="bg-[#0a0f1e] border border-slate-800 rounded-3xl p-8 md:p-12 hover:border-emerald-500/30 transition-colors shadow-2xl relative overflow-hidden">
                    {/* Subtle bg glow */}
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-500/5 blur-[100px] pointer-events-none rounded-full"></div>

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
                                <p className="text-white leading-relaxed font-medium">
                                    Sub-250ms average query latency. Live SaaS with 1,000+ active users and Stripe billing in production. Full-stack ownership from architecture through deployment.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Case Study 2: Dental Practice AI Platform */}
                <div className="bg-[#0a0f1e] border border-slate-800 rounded-3xl p-8 md:p-12 hover:border-blue-500/30 transition-colors shadow-2xl relative overflow-hidden">
                    {/* Subtle bg glow */}
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-500/5 blur-[100px] pointer-events-none rounded-full"></div>

                    <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                        <div className="w-full md:w-1/3">
                            <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 border border-blue-500/20 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
                                OPERATIONAL AUTOMATION
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Dental Practice AI Platform</h3>
                            <a href="https://demo.opound.com" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 text-sm font-bold inline-flex items-center gap-1 transition-colors">
                                Try the demo <ExternalLink size={14} />
                            </a>
                        </div>

                        <div className="w-full md:w-2/3 space-y-8">
                            <div>
                                <h4 className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-2">Problem</h4>
                                <p className="text-slate-300 leading-relaxed font-light">
                                    A dental practice's front desk bottlenecked by appointment booking, patient intake, and insurance questions — tasks consuming staff time that didn't require a human.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-2">Approach</h4>
                                <p className="text-slate-300 leading-relaxed font-light">
                                    Multi-component AI platform: RAG chatbot for insurance/procedure FAQs, Calendly-integrated booking flow with patient data collection, HubSpot CRM sync, and an admin dashboard with document management and analytics.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-[10px] uppercase tracking-widest text-blue-400 font-bold mb-2">Result</h4>
                                <p className="text-white leading-relaxed font-medium">
                                    End-to-end system handling booking, intake, and FAQ autonomously. Admin dashboard gives practice owner full visibility into every conversation and booking event. Demonstrates AI deployment in a compliance-adjacent, regulated-adjacent vertical.
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
