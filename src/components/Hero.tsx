import React from 'react';
import { ArrowRight, Play, TrendingUp } from 'lucide-react';

export const Hero: React.FC = () => (
    <header className="pt-48 pb-32 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] hero-glow pointer-events-none opacity-50"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[1.1] tracking-tighter">
                Your front desk is drowning <br />
                <span className="gradient-text">in admin work.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed font-light">
                We build AI systems that handle after-hours calls, appointment booking, patient intake,
                and insurance questions — so your staff focuses on patients, not paperwork.
            </p>

            {/* ROI stat callout */}
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 px-5 py-2.5 rounded-full text-sm font-semibold mb-12">
                <TrendingUp className="w-4 h-4 shrink-0" />
                Dental practices on the Eastside recapture an average of <strong className="text-emerald-300">8 front desk hours per week.</strong>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                {/* Primary CTA */}
                <a
                    href="/#contact"
                    className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white text-base font-bold px-9 py-5 rounded-2xl shadow-2xl shadow-emerald-500/25 transition-all transform hover:-translate-y-1 active:translate-y-0 text-center flex items-center justify-center gap-2"
                >
                    Book Your Free AI Audit <ArrowRight className="w-4 h-4" />
                </a>
                {/* Secondary CTA */}
                <a
                    href="https://demo.opound.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto bg-slate-800/50 hover:bg-slate-800 text-slate-200 text-base font-bold px-9 py-5 rounded-2xl border border-slate-700/50 backdrop-blur-sm transition-all text-center flex items-center justify-center gap-2"
                >
                    <Play className="w-4 h-4 text-emerald-400" />
                    See the Dental AI Agent Live
                </a>
            </div>
        </div>
    </header>
);
