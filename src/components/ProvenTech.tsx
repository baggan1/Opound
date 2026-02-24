import React from 'react';
import { ExternalLink } from 'lucide-react';

export const ProvenTech: React.FC = () => (
    <section id="proven-tech" className="py-24 relative">
        <div className="container mx-auto px-6">
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-[2.5rem] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-16 backdrop-blur-sm">
                <div className="flex-1">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-px w-8 bg-emerald-500"></div>
                        <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-500">The Creator Economy</h3>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight tracking-tight">Built for Production. Not just for Demo.</h2>
                    <p className="text-xl text-slate-400 mb-10 leading-relaxed font-light">
                        I don't just consult; I build. From the creator of <strong>NatureNani</strong> — a production-grade RAG wellness platform processing real-time medical data with enterprise security. We bring that same level of rigor to your small business workflows.
                    </p>
                    <div className="grid grid-cols-2 gap-8 mb-4">
                        <div>
                            <p className="text-3xl font-bold text-white mb-1">15+</p>
                            <p className="text-sm text-slate-500 uppercase tracking-wider">Years Experience</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-white mb-1">1k+</p>
                            <p className="text-sm text-slate-500 uppercase tracking-wider">Active AI Users</p>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-[460px] relative group">
                    <div className="absolute inset-0 bg-emerald-500/20 blur-3xl rounded-full group-hover:bg-emerald-500/30 transition-colors"></div>
                    <a
                        href="https://www.naturenani.com/about"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block relative bg-white border border-slate-200 rounded-3xl p-4 overflow-hidden shadow-2xl transition-all hover:-translate-y-2 duration-500 hover:shadow-emerald-500/10"
                    >
                        <div className="rounded-2xl w-full h-[300px] overflow-hidden bg-slate-50 relative border border-slate-100">
                            <img
                                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800"
                                alt="NatureNani Platform Screenshot"
                                className="w-full h-full object-cover opacity-95 group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-white/40 backdrop-blur-[2px]">
                                <div className="bg-white/90 p-6 rounded-2xl shadow-xl border border-emerald-100">
                                    <div className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.2em] mb-2">NatureNani.com</div>
                                    <h4 className="text-slate-900 font-bold text-xl mb-2 leading-tight">Understand Your Body. <br />Heal Naturally.</h4>
                                    <div className="w-12 h-0.5 bg-emerald-500 mx-auto rounded-full"></div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 p-4">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-slate-900 font-bold text-lg flex items-center gap-2 group-hover:text-emerald-600 transition-colors">
                                    NatureNani Case Study
                                    <ExternalLink size={14} className="text-emerald-500" />
                                </span>
                                <span className="px-2 py-1 bg-emerald-500/10 text-emerald-600 text-[10px] font-bold uppercase rounded">LIVE RAG PLATFORM</span>
                            </div>
                            <p className="text-slate-500 text-sm leading-relaxed">Translating ancient wisdom from Ayurveda and Naturopathy for modern life via secure, private AI architecture.</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>
);
