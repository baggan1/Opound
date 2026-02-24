import React from 'react';
import { ExternalLink } from 'lucide-react';

export const FounderBio: React.FC = () => {
    return (
        <section id="founder" className="py-24 bg-[#F8FAFC]">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-16">

                    {/* Column 1: The Visual */}
                    <div className="w-full md:w-1/3 flex justify-center">
                        <div className="relative">
                            <img
                                src="/navilla-headshot.png"
                                alt="Navilla Bagga - Founder of Opound"
                                className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-2 border-[#001F3F] shadow-xl"
                            />
                        </div>
                    </div>

                    {/* Column 2: The Bio */}
                    <div className="w-full md:w-2/3 space-y-6">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#001F3F] mb-2">Meet the Founder</h2>
                            <h3 className="text-xl md:text-2xl font-bold text-blue-600 mb-6">Navilla Bagga | Principal Consultant</h3>
                        </div>

                        <div className="space-y-5 text-slate-700 leading-relaxed font-light text-lg">
                            <h4 className="font-bold text-xl text-slate-900 mb-2">The Bridge Between Enterprise Rigor and Small Business Growth</h4>
                            <p>
                                With over 15 years of experience at the intersection of <strong>FinTech, Asset Management, and IT Infrastructure</strong>, I have spent my career navigating the most complex data environments in the world. I've seen firsthand how large-scale financial institutions leverage automation to dominate their markets—and I've seen how small businesses often get left behind because the technology feels out of reach.
                            </p>
                            <p className="font-medium text-slate-900 text-xl py-2">
                                I founded <strong>Opound LLC</strong> to change that.
                            </p>

                            <h4 className="font-bold text-xl text-slate-900 mt-8 mb-2">A Practitioner, Not Just a Theorist</h4>
                            <p>
                                I don't just consult on AI; I build it. My philosophy is rooted in "Applied Intelligence." Before I recommend a strategy to a client, I test it within my own ecosystem.
                            </p>
                            <ul className="list-none space-y-2">
                                <li className="flex items-start gap-3">
                                    <span className="text-blue-500 mt-1">•</span>
                                    <span>
                                        <strong>NatureNani:</strong> I designed and deployed this AI-powered wellness platform using advanced RAG (Retrieval-Augmented Generation) and custom data pipelines. <a href="https://www.naturenani.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline font-medium inline-flex items-baseline gap-1">www.naturenani.com <ExternalLink size={14} className="translate-y-0.5" /></a>
                                    </span>
                                </li>
                            </ul>
                            <p>
                                When you work with Opound, you aren't getting a generalist who "knows how to use ChatGPT." You are getting a <strong>Systems Architect</strong> who understands how to integrate AI into your existing P&L, ensure your data is secure, and build workflows that actually return time to your day.
                            </p>

                            <h4 className="font-bold text-xl text-slate-900 mt-8 mb-2">The Opound Philosophy: Secure, Scalable, Human</h4>
                            <p>
                                My background in electronic trading and compliance taught me that in technology, <strong>precision is everything.</strong> I bring that same FinTech-grade discipline to every small business I audit. Whether we are automating your invoice reconciliation or deploying a custom knowledge base for your team, the goal is always the same: <strong>reclaiming your time so you can focus on the work only a human can do.</strong>
                            </p>
                        </div>

                        <div className="pt-8 mt-8 border-t border-slate-200">
                            <div className="flex flex-col sm:flex-row gap-6 justify-between text-sm font-bold text-[#001F3F]">
                                <div className="flex items-center gap-3">
                                    <span className="text-2xl">🛡️</span>
                                    <span>FinTech-Grade<br />Security</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-2xl">🏗️</span>
                                    <span>Architectural<br />Precision</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-2xl">🧪</span>
                                    <span>Practitioner-Led<br />Strategy</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
