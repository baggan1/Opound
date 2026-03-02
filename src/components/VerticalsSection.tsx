import React from 'react';
import { CalendarHeart, Wrench, ExternalLink } from 'lucide-react';

export const VerticalsSection: React.FC = () => (
    <section className="py-20 border-t border-slate-800/50">
        <div className="container mx-auto px-6">
            <div className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-3">
                    Built for the businesses where admin work never stops
                </h2>
                <p className="text-slate-400 text-base max-w-xl mx-auto">
                    Opound deploys vertical-specific AI agents — purpose-built for high-volume, repetitive workflows.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {/* Tile 1 — Dental Practices (Active) */}
                <div className="relative bg-slate-800/30 border border-emerald-500/30 rounded-[2rem] p-10 hover:border-emerald-500/60 hover:bg-slate-800/50 transition-all group">
                    <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-8 border border-emerald-500/20 group-hover:bg-emerald-500 transition-all duration-300">
                        <CalendarHeart size={28} className="text-emerald-400 group-hover:text-white transition-colors" />
                    </div>
                    <div className="inline-flex items-center gap-1.5 bg-emerald-500/10 text-emerald-400 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full mb-4 border border-emerald-500/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        Live
                    </div>
                    <h3 className="text-2xl font-black text-white mb-3 tracking-tight">Dental Practices</h3>
                    <p className="text-slate-400 leading-relaxed mb-8 font-light">
                        Booking, intake, insurance FAQs, after-hours calls — fully automated. Purpose-built for Eastside dental offices.
                    </p>
                    <a
                        href="https://demo.opound.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold px-6 py-3 rounded-xl shadow-lg shadow-emerald-500/20 transition-all"
                    >
                        See the Live Demo <ExternalLink size={14} />
                    </a>
                </div>

                {/* Tile 2 — HVAC (Coming Soon, muted) */}
                <div className="relative bg-slate-800/10 border border-slate-800/50 rounded-[2rem] p-10 opacity-60 cursor-not-allowed">
                    <div className="w-14 h-14 bg-slate-700/30 rounded-2xl flex items-center justify-center mb-8 border border-slate-700/30 grayscale">
                        <Wrench size={28} className="text-slate-500" />
                    </div>
                    <div className="inline-flex items-center gap-1.5 bg-slate-700/40 text-slate-500 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full mb-4 border border-slate-700/30">
                        Coming Soon
                    </div>
                    <h3 className="text-2xl font-black text-slate-400 mb-3 tracking-tight">HVAC Companies</h3>
                    <p className="text-slate-500 leading-relaxed font-light">
                        After-hours dispatch, quote pre-qualification, and maintenance reminders. Coming soon.
                    </p>
                </div>
            </div>
        </div>
    </section>
);
