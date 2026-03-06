import React from 'react';
import { ShieldCheck, Award } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

export const TrustSection: React.FC = () => (
    <section className="py-24 bg-slate-900 border-t border-slate-800">
        <div className="container mx-auto px-6 max-w-5xl">
            <SectionHeading title="Built for Production" subtitle="Proven expertise in high-stakes environments." />

            <div className="grid md:grid-cols-2 gap-12 mt-16">
                <div className="bg-slate-800/30 border border-slate-700/50 p-10 rounded-[2rem]">
                    <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 border border-emerald-500/20">
                        <Award className="text-emerald-500" size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">15+ Years Across the Full Regulated Financial Stack</h3>
                    <p className="text-slate-400 leading-relaxed font-light">
                        Fidelity Investments, ITG, Fannie Mae, Wellington Management (9 years, $1T+ AUM), Solidus Labs (digital asset AML, 25+ institutional clients). Retail brokerage, institutional equities execution, federal mortgage infrastructure, long-only asset management, digital asset compliance — the full range of regulated financial services. That depth is what Opound brings to every engagement.
                    </p>
                </div>

                <div className="bg-slate-800/30 border border-slate-700/50 p-10 rounded-[2rem]">
                    <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 border border-blue-500/20">
                        <ShieldCheck className="text-blue-500" size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Discipline Is the Differentiator</h3>
                    <p className="text-slate-400 leading-relaxed font-light">
                        As a Tang Soo Do 2nd Degree Black Belt, I know that mastery comes from precision and showing up consistently — not just talent. A FinTech compliance team will ask hard questions about your AI system. You want someone who has already thought through the answers.
                    </p>
                </div>
            </div>
        </div>
    </section>
);
