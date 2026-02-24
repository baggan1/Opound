import React from 'react';
import { Zap } from 'lucide-react';

export const Hero: React.FC = () => (
    <header className="pt-48 pb-32 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] hero-glow pointer-events-none opacity-50"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 bg-emerald-500/5 border border-emerald-500/10 text-emerald-500 px-4 py-1.5 rounded-full text-xs font-bold mb-8 uppercase tracking-widest">
                <Zap className="w-3 h-3 fill-emerald-500" /> Powered by 15 Years of FinTech Expertise
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-6 leading-[1.1] tracking-tighter">
                Unlock Efficiency. <br />
                <span className="gradient-text">Scale with AI.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
                We help small businesses identify bottlenecks and deploy custom AI solutions to reclaim 10+ hours a week. Professional grade automation for growing teams.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a
                    href="/pricing"
                    className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white text-lg font-bold px-10 py-5 rounded-2xl shadow-2xl shadow-emerald-500/25 transition-all transform hover:-translate-y-1 active:translate-y-0 text-center"
                >
                    View Pricing & Options
                </a>
                <a
                    href="/#services"
                    className="w-full sm:w-auto bg-slate-800/50 hover:bg-slate-800 text-slate-200 text-lg font-bold px-10 py-5 rounded-2xl border border-slate-700/50 backdrop-blur-sm transition-all text-center"
                >
                    Explore Services
                </a>
            </div>
        </div>
    </header>
);
