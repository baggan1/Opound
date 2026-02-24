import React from 'react';
import { SectionHeading } from './SectionHeading';

export const YourAITerms: React.FC = () => (
    <section id="ai-terms" className="py-24 bg-slate-900 border-t border-slate-800">
        <div className="container mx-auto px-6 max-w-5xl">
            <SectionHeading title="Your AI, Your Terms" subtitle="Flexible engagement models designed for your business needs." />
            <div className="grid md:grid-cols-2 gap-8 mt-16">
                <div className="bg-slate-800/20 border border-slate-700/50 p-10 rounded-[2rem] hover:border-emerald-500/40 transition-all group">
                    <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">
                        Option A: The Opound Exit Guarantee<br />
                        <span className="text-emerald-400 text-lg font-medium tracking-normal">(Build-Operate-Transfer)</span>
                    </h3>
                    <p className="text-slate-400 leading-relaxed font-light">
                        We build your AI infrastructure in our secure sandbox for maximum speed. Once the system is delivering proven ROI, we offer a seamless transfer to your own internal accounts. You own the logic, the code, and the results—permanently.
                    </p>
                </div>
                <div className="bg-slate-800/20 border border-slate-700/50 p-10 rounded-[2rem] hover:border-blue-500/40 transition-all group">
                    <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">
                        Option B: Opound Managed Retainer<br />
                        <span className="text-blue-400 text-lg font-medium tracking-normal">(Fractional AI Department)</span>
                    </h3>
                    <p className="text-slate-400 leading-relaxed font-light">
                        Let Opound act as your Fractional AI Department. We handle all hosting, security patches, and iterative improvements for a flat monthly fee.
                    </p>
                </div>
            </div>
        </div>
    </section>
);
