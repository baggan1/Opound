import React from 'react';
import { ExternalLink, Shield, Wrench, FlaskConical } from 'lucide-react';

export const FounderBio: React.FC = () => {
    return (
        <section id="founder" className="py-24 bg-transparent">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-16">

                    {/* Column 1: The Visual */}
                    <div className="w-full md:w-[40%] flex flex-col items-center md:items-start">
                        <div className="relative w-full max-w-[280px] mx-auto md:mx-0">
                            <img
                                src="/images/navilla-bagga.jpg"
                                alt="Navilla Bagga - Founder of Opound"
                                className="w-full h-auto md:h-[320px] object-cover rounded-2xl border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.1)] bg-[#1e293b]"
                            />
                            <p className="text-center md:text-left text-[11px] text-slate-500 mt-4 font-medium tracking-wide">
                                Navilla Bagga · Principal Consultant · Opound LLC
                            </p>
                        </div>
                    </div>

                    {/* Column 2: The Bio */}
                    <div className="w-full md:w-[60%] space-y-6">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Meet the Founder</h2>
                            <h3 className="text-xl md:text-2xl font-bold text-emerald-400 mb-6 drop-shadow-sm">Navilla Bagga | Principal Consultant</h3>
                        </div>

                        <div className="space-y-5 text-slate-300 leading-relaxed font-light text-lg">
                            <h4 className="font-bold text-xl text-emerald-400 drop-shadow-sm mb-2">Bringing Enterprise-Grade AI to the Businesses That Need It Most</h4>
                            <p>
                                I spent 15+ years inside some of the most demanding technology environments in FinTech and asset management — building systems where precision isn't optional and downtime isn't acceptable. I learned what it takes to build AI that actually works in production, not just in demos.
                            </p>
                            <p>
                                Then I looked at small businesses — dental practices, service companies, professional firms — and saw the same operational chaos that large institutions had already solved with automation. Missed calls after hours. Front desks buried in scheduling and intake paperwork. Staff spending half their day on work that software could handle.
                            </p>
                            <p className="font-medium text-slate-200 text-xl py-2 drop-shadow-sm">
                                I founded <strong className="text-white">Opound LLC</strong> to close that gap.
                            </p>

                            <h4 className="font-bold text-xl text-emerald-400 drop-shadow-sm mt-8 mb-2">A Builder, Not Just an Advisor</h4>
                            <p>
                                I don't recommend AI tools I haven't built and tested myself. My approach is Applied Intelligence — every system I deploy for a client is one I've already stress-tested in my own environment.
                            </p>
                            <ul className="list-none space-y-4 pt-2">
                                <li className="flex items-start gap-3">
                                    <span className="text-emerald-500 mt-1 drop-shadow-sm">•</span>
                                    <span>
                                        <strong className="text-slate-200">Dental AI Agent</strong> — A fully deployed AI receptionist that handles appointment booking, patient intake, insurance FAQs, and CRM sync. Built end-to-end by Opound and live at <a href="https://demo.opound.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-baseline gap-1 transition-colors">demo.opound.com <ExternalLink size={14} className="translate-y-0.5" /></a>
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-emerald-500 mt-1 drop-shadow-sm">•</span>
                                    <span>
                                        <strong className="text-slate-200">NatureNani</strong> — An AI-powered wellness platform built with custom RAG pipelines and data infrastructure. Live at <a href="https://www.naturenani.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-baseline gap-1 transition-colors">naturenani.com <ExternalLink size={14} className="translate-y-0.5" /></a>
                                    </span>
                                </li>
                            </ul>
                            <p className="pt-2">
                                When you work with Opound, you're not getting a generalist who learned AI last year. You're getting a systems builder with 15+ years of production experience, focused entirely on making your practice run better.
                            </p>

                            <h4 className="font-bold text-xl text-white drop-shadow-sm mt-8 mb-4">The Opound Philosophy: Secure, Scalable, Human</h4>
                            <div className="space-y-4">
                                <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-xl p-5 hover:border-emerald-500/20 transition-colors">
                                    <p>
                                        <strong className="text-slate-200 drop-shadow-sm inline-flex items-center gap-2"><Shield size={18} className="text-emerald-500" /> FinTech-Grade Security</strong><br /><span className="inline-block mt-1">Your patient data and business workflows are handled with the same rigor applied to financial systems. No shortcuts on data privacy, access controls, or compliance.</span>
                                    </p>
                                </div>
                                <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-xl p-5 hover:border-emerald-500/20 transition-colors">
                                    <p>
                                        <strong className="text-slate-200 drop-shadow-sm inline-flex items-center gap-2"><Wrench size={18} className="text-emerald-500" /> Built to Last</strong><br /><span className="inline-block mt-1">I don't hand you a tool and disappear. Every system is architected for your specific workflows, integrated with the software you already use, and monitored after launch.</span>
                                    </p>
                                </div>
                                <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-xl p-5 hover:border-emerald-500/20 transition-colors">
                                    <p>
                                        <strong className="text-slate-200 drop-shadow-sm inline-flex items-center gap-2"><FlaskConical size={18} className="text-emerald-500" /> Practitioner-Led</strong><br /><span className="inline-block mt-1">Before I recommend anything to a client, I've already built it. Your practice gets a proven system, not an experiment.</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
