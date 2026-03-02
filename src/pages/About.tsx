import React from 'react';
import { FounderBio } from '../components/FounderBio';
import { TrustSection } from '../components/TrustSection';

export const About: React.FC = () => {
    return (
        <div className="bg-slate-950 min-h-screen">
            <div className="pt-32 pb-16 text-center">
                <h1 className="text-5xl font-black text-white mb-4 tracking-tighter">About Us</h1>
                <p className="text-slate-400 max-w-2xl mx-auto">The people and principles behind Opound AI Consulting.</p>
            </div>
            {/* Block 1: Opening Statement */}
            <div className="max-w-3xl mx-auto px-6 pb-24 text-center">
                <h2 className="text-xl font-bold text-emerald-400 mb-6 tracking-wide uppercase">Why Opound Exists</h2>
                <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
                    <p>
                        Most small businesses are running on the same manual workflows they used five years ago — not because automation isn't available, but because the tools built for enterprise are out of reach, and the generic chatbot builders don't actually solve operational problems.
                    </p>
                    <p>
                        Opound exists to close that gap. We take the same AI systems that financial institutions use to automate high-stakes workflows and build them specifically for dental practices, service businesses, and professional firms — at a price point that makes sense for an SMB.
                    </p>
                </div>
            </div>

            {/* Block 2: What We've Built (Proof Tiles) */}
            <div className="max-w-6xl mx-auto px-6 pb-32">
                <h2 className="text-3xl font-bold text-white mb-10">What We've Built</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Tile 1 */}
                    <div className="bg-[#0a0f1e] border border-emerald-500/30 rounded-2xl p-8 shadow-lg shadow-emerald-500/5 hover:border-emerald-500/60 transition-colors flex flex-col h-full">
                        <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 w-fit">
                            LIVE PRODUCTION SYSTEM
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Dental AI Agent</h3>
                        <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                            AI receptionist for dental practices. Handles appointment booking, patient intake, insurance FAQs, and HubSpot CRM sync. Built end-to-end by Opound.
                        </p>
                        <a href="https://demo.opound.com" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 font-bold text-sm inline-flex items-center transition-colors">
                            Try the Demo <span className="ml-1 tracking-tighter">→</span>
                        </a>
                    </div>

                    {/* Tile 2 */}
                    <div className="bg-[#0a0f1e] border border-emerald-500/30 rounded-2xl p-8 shadow-lg shadow-emerald-500/5 hover:border-emerald-500/60 transition-colors flex flex-col h-full">
                        <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 w-fit">
                            LIVE RAG PLATFORM
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">NatureNani</h3>
                        <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                            AI-powered wellness platform built on custom RAG pipelines. Answers health questions from curated Ayurvedic and clinical sources. 1,000+ active users.
                        </p>
                        <a href="https://www.naturenani.com" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 font-bold text-sm inline-flex items-center transition-colors">
                            View Live <span className="ml-1 tracking-tighter">→</span>
                        </a>
                    </div>

                    {/* Tile 3 */}
                    <div className="bg-[#0a0f1e] border border-emerald-500/30 rounded-2xl p-8 shadow-lg shadow-emerald-500/5 hover:border-emerald-500/60 transition-colors flex flex-col h-full">
                        <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 w-fit">
                            PROPRIETARY METHODOLOGY
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">AI Readiness Audit Framework</h3>
                        <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                            A 10-page diagnostic framework developed across multiple SMB engagements. Maps workflows, identifies automation opportunities, and delivers a sequenced 90-day roadmap.
                        </p>
                        <a href="/pricing" className="text-emerald-400 hover:text-emerald-300 font-bold text-sm inline-flex items-center transition-colors">
                            See What's Included <span className="ml-1 tracking-tighter">→</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Block 3: Personal Paragraph */}
            <div className="max-w-3xl mx-auto px-6 pb-24">
                <div className="border-l-4 border-emerald-500 pl-8 space-y-4">
                    <h2 className="text-2xl font-bold text-white mb-6">Why I Left FinTech to Build This</h2>
                    <div className="space-y-4 text-slate-300 text-lg leading-relaxed font-light">
                        <p>
                            After 15 years building systems for financial institutions — environments where a bad automation costs millions — I kept noticing the same thing: the small businesses I'd grown up around were drowning in work that software could handle in seconds.
                        </p>
                        <p>
                            A dental practice losing a patient because no one answered at 6pm. An HVAC company missing a $3,000 job because the after-hours voicemail was full. A law firm spending Friday afternoons on intake paperwork that an AI could process in minutes.
                        </p>
                        <p>
                            The technology existed. The expertise existed. What was missing was someone willing to build it at the scale these businesses actually needed — not a $50,000 enterprise contract, not a generic SaaS subscription, but a real system built for their specific workflows and operated by someone who cares if it works.
                        </p>
                        <p className="font-bold text-white pt-2">
                            That's what Opound is.
                        </p>
                    </div>
                </div>
            </div>

            <FounderBio />
            <TrustSection />
            <div className="pb-20 pt-10 text-center px-6">
                <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
                    Based in Mountlake Terrace, WA — centrally located to serve dental practices and businesses across Bellevue, Redmond, Kirkland, Bothell, and the greater Seattle area
                </p>
            </div>
        </div>
    );
};
