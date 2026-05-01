import React from 'react';
import { Shield, Wrench, FlaskConical } from 'lucide-react';

export const FounderBio: React.FC = () => {
    return (
        <section id="founder" className="py-24 bg-transparent border-t border-slate-800/50">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-16">

                    {/* Column 1: The Visual */}
                    <div className="w-full md:w-[40%] flex flex-col items-center md:items-start">
                        <div className="relative w-full max-w-[240px] mx-auto md:mx-0">
                            <img
                                src="/images/navilla-bagga.jpg"
                                alt="Navilla Bagga - Founder of Opound"
                                className="w-full aspect-square object-cover rounded-full border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.1)] bg-[#1e293b]"
                            />
                            <p className="text-center md:text-left text-[11px] text-slate-500 mt-4 font-medium tracking-wide">
                                Navilla Bagga · Fractional AI Product Lead & FinTech Systems Architect
                            </p>
                        </div>
                    </div>

                    {/* Column 2: The Bio */}
                    <div className="w-full md:w-[60%] space-y-6">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Meet the Founder</h2>
                            <h3 className="text-xl md:text-2xl font-bold text-emerald-400 mb-6 drop-shadow-sm">
                                Navilla Bagga | Fractional AI Product Lead & FinTech Systems Architect
                            </h3>
                        </div>

                        <div className="space-y-5 text-slate-300 leading-relaxed font-light text-lg">

                            {/* ── Career narrative — unchanged, this is the strong part ── */}
                            <h4 className="font-bold text-xl text-emerald-400 drop-shadow-sm mb-2">
                                15 Years Building Systems Where Failure Isn't an Option
                            </h4>
                            <p>
                                I spent 15+ years inside the most demanding technology environments in FinTech and institutional asset management — environments where a compliance miss costs millions, a latency problem costs clients, and 'good enough' isn't a phrase anyone uses twice.
                            </p>
                            <p>
                                My career covers the full regulated financial services stack. At Fidelity Investments and Investment Technology Group, I built and maintained equities trading and execution infrastructure. At Fannie Mae, I worked within federal mortgage finance systems where regulatory compliance isn't aspirational — it's the baseline. Nine years at Wellington Management ($1T+ AUM) building mission-critical trading and data infrastructure. Then two years at Solidus Labs, working directly on AML surveillance and market manipulation detection for 25+ institutional digital asset clients.
                            </p>
                            <p className="font-medium text-slate-200 text-xl py-2 drop-shadow-sm">
                                I founded Opound LLC to make that caliber of AI product leadership available on a fractional basis — so FinTech firms, RIAs, and regulated businesses can access senior expertise without a 6-month hiring cycle.
                            </p>

                            {/* ── UPDATED: proof section rewritten around CryptoFIX ── */}
                            <h4 className="font-bold text-xl text-emerald-400 drop-shadow-sm mt-8 mb-2">
                                Production AI in the Domain, Not Adjacent to It
                            </h4>
                            <p>
                                Every recommendation I make is backed by something I've already built and stress-tested in a regulated context. Opound's flagship AI system is deployed in institutional FinTech infrastructure:
                            </p>

                            <div className="border-l-2 border-slate-800 pl-6 my-6 space-y-2">
                                <div>
                                    <strong className="text-slate-200 text-base tracking-wide">
                                        CryptoFIX Institutional Readiness Auditor
                                    </strong>
                                    <p className="text-sm text-slate-400 mt-1 leading-relaxed">
                                        An automated FIX protocol gap analysis tool built against an 80+ checkpoint rubric derived from real TradFi certification standards. Scores crypto exchanges against the same criteria institutional OMS teams — Bloomberg EMSX, Charles River, Fidessa — actually certify against. Kraken scores 67.6/100. Coinbase Exchange scores 59.6/100. Live at{' '}
                                        <a
                                            href="https://fix.opound.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-emerald-400 hover:underline"
                                        >
                                            fix.opound.com
                                        </a>
                                        .
                                    </p>
                                </div>
                            </div>

                            <p className="mt-4 pt-2">
                                When you work with Opound, you're getting a practitioner who has shipped production AI in institutional FinTech environments — and can do the same for your business.
                            </p>

                            {/* ── Philosophy — unchanged ── */}
                            <h4 className="font-bold text-xl text-white drop-shadow-sm mt-8 mb-4">
                                The Opound Philosophy: Secure, Scalable, Human
                            </h4>
                            <div className="space-y-4">
                                <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-xl p-5 hover:border-emerald-500/20 transition-colors">
                                    <p>
                                        <strong className="text-slate-200 drop-shadow-sm inline-flex items-center gap-2">
                                            <Shield size={18} className="text-emerald-500" /> FinTech-Grade Security
                                        </strong>
                                        <br />
                                        <span className="inline-block mt-1">
                                            Every system is built with the same rigor applied to financial infrastructure. Data privacy, access controls, audit logging, and compliance considerations are design inputs — not afterthoughts.
                                        </span>
                                    </p>
                                </div>
                                <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-xl p-5 hover:border-emerald-500/20 transition-colors">
                                    <p>
                                        <strong className="text-slate-200 drop-shadow-sm inline-flex items-center gap-2">
                                            <Wrench size={18} className="text-emerald-500" /> Built to Ship
                                        </strong>
                                        <br />
                                        <span className="inline-block mt-1">
                                            I don't deliver strategy documents and disappear. Every engagement ends with something running in production — a deployed system, a shipped integration, or a roadmap with sequenced deliverables you can act on immediately.
                                        </span>
                                    </p>
                                </div>
                                <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-xl p-5 hover:border-emerald-500/20 transition-colors">
                                    <p>
                                        <strong className="text-slate-200 drop-shadow-sm inline-flex items-center gap-2">
                                            <FlaskConical size={18} className="text-emerald-500" /> Practitioner-Led
                                        </strong>
                                        <br />
                                        <span className="inline-block mt-1">
                                            Before I recommend anything to a client, I've already built it. You get a proven system and a senior practitioner who can defend every architectural decision in front of your engineering team or your board.
                                        </span>
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
