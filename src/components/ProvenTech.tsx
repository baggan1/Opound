import React from 'react';
import { ExternalLink } from 'lucide-react';

export const ProvenTech: React.FC = () => (
    <section id="proven-tech" className="py-24 relative">
        <div className="container mx-auto px-6">
            {/* Top header text */}
            <div className="text-center mb-16">
                <div className="inline-flex items-center gap-3 mb-4">
                    <div className="h-px w-8 bg-emerald-500"></div>
                    <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-500">Proof of Work</h3>
                    <div className="h-px w-8 bg-emerald-500"></div>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
                    Built for Production. Not just for Demo.
                </h2>
                <p className="text-xl text-slate-400 mt-6 max-w-2xl mx-auto leading-relaxed font-light">
                    Every system we deliver is live, tested, and handling real users. Here's the proof.
                </p>
            </div>

            {/* Two-tile grid */}
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

                {/* Tile 1 — Dental AI Agent (Primary / Most Prominent) */}
                <div className="relative group">
                    <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full group-hover:bg-blue-500/30 transition-colors pointer-events-none"></div>
                    <a
                        href="https://demo.opound.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block relative bg-slate-900 border border-blue-500/40 rounded-3xl p-6 overflow-hidden shadow-2xl shadow-blue-500/10 transition-all hover:-translate-y-2 duration-500 hover:border-blue-400/60 hover:shadow-blue-500/20"
                    >
                        {/* Badge */}
                        <div className="flex items-center justify-between mb-5">
                            <span className="inline-flex items-center gap-1.5 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
                                Live Demo
                            </span>
                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Primary Sales Asset</span>
                        </div>

                        {/* Visual - Chat UI Preview */}
                        <div className="rounded-2xl w-full h-[260px] overflow-hidden bg-[#0f172a] relative border border-emerald-500/30 mb-5 shadow-[0_0_15px_rgba(16,185,129,0.1)] flex flex-col group-hover:border-emerald-500/50 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all duration-700">

                            {/* Browser/Chat Header */}
                            <div className="h-10 bg-slate-900 border-b border-slate-800 flex items-center px-4 justify-between flex-shrink-0 z-10">
                                <div className="flex items-center gap-2">
                                    <div className="flex gap-1.5">
                                        <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                                    </div>
                                </div>
                                <div className="text-[10px] font-medium text-slate-400 font-mono tracking-wide flex items-center gap-2">
                                    Dental AI Assistant
                                    <span className="text-slate-600">·</span>
                                    demo.opound.com
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                                    <span className="text-[9px] font-bold text-emerald-500 uppercase tracking-widest">Live</span>
                                </div>
                            </div>

                            {/* Chat Area */}
                            <div className="flex-1 p-4 flex flex-col gap-3 relative overflow-hidden text-xs">
                                {/* Bot Message */}
                                <div className="flex gap-2 mr-6">
                                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex-shrink-0 flex items-center justify-center shadow-md">
                                        <span className="text-[10px]">🦷</span>
                                    </div>
                                    <div className="bg-slate-800/80 text-slate-200 p-2.5 rounded-2xl rounded-tl-sm border border-slate-700/50 shadow-sm leading-relaxed">
                                        Hi! I'm the Dental AI Assistant for Bright Smile Dental. How can I help you today?
                                    </div>
                                </div>

                                {/* Quick Replies */}
                                <div className="flex flex-wrap gap-1.5 ml-8 mr-4 mt-0.5">
                                    <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-2.5 py-1 rounded-full text-[9px] font-medium whitespace-nowrap">Book Appointment</div>
                                    <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-2.5 py-1 rounded-full text-[9px] font-medium whitespace-nowrap">Insurance Questions</div>
                                    <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-2.5 py-1 rounded-full text-[9px] font-medium whitespace-nowrap">Office Hours</div>
                                </div>

                                {/* Patient Message */}
                                <div className="flex gap-2 ml-10 mt-1 self-end">
                                    <div className="bg-blue-600/90 text-white p-2.5 rounded-2xl rounded-tr-sm shadow-sm leading-relaxed border border-blue-500/50">
                                        I'd like to book a cleaning
                                    </div>
                                </div>

                                {/* Bot Response */}
                                <div className="flex gap-2 mr-6 mt-1">
                                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex-shrink-0 flex items-center justify-center shadow-md">
                                        <span className="text-[10px]">🦷</span>
                                    </div>
                                    <div className="bg-slate-800/80 text-slate-200 p-2.5 rounded-2xl rounded-tl-sm border border-slate-700/50 shadow-sm leading-relaxed">
                                        Great! I can help with that. May I get your name to get started?
                                    </div>
                                </div>

                                {/* Fade Overlay */}
                                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0f172a] to-transparent z-10 pointer-events-none"></div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div>
                                <span className="text-white font-bold text-xl flex items-center gap-2 group-hover:text-blue-400 transition-colors">
                                    Dental AI Agent — Live Demo
                                    <ExternalLink size={14} className="text-blue-400" />
                                </span>
                                <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                                    A fully deployed AI receptionist for dental practices. Handles appointment booking via Calendly, patient intake, insurance FAQs via RAG, and CRM sync via HubSpot. Built and operated by Opound.
                                </p>
                            </div>
                        </div>

                        <div className="mt-6 pt-4 border-t border-slate-800/50">
                            <span className="text-blue-400 font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                                Try the Live Demo <ExternalLink size={13} />
                            </span>
                        </div>
                    </a>
                </div>

                {/* Tile 2 — NatureNani */}
                <div className="relative group">
                    <div className="absolute inset-0 bg-emerald-500/10 blur-3xl rounded-full group-hover:bg-emerald-500/20 transition-colors pointer-events-none"></div>
                    <a
                        href="https://www.naturenani.com/about"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block relative bg-white border border-slate-200 rounded-3xl p-4 overflow-hidden shadow-2xl transition-all hover:-translate-y-2 duration-500 hover:shadow-emerald-500/10"
                    >
                        {/* Visual - RAG Card Preview (Matching Dental AI style shell) */}
                        <div className="rounded-2xl w-full h-[260px] overflow-hidden bg-[#0f172a] relative border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.1)] flex flex-col group-hover:border-emerald-500/50 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all duration-700">

                            {/* Browser/Chat Header */}
                            <div className="h-10 bg-slate-900 border-b border-slate-800 flex items-center px-4 justify-between flex-shrink-0 z-10">
                                <div className="flex items-center gap-2">
                                    <div className="flex gap-1.5">
                                        <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                                    </div>
                                </div>
                                <div className="text-[10px] font-medium text-slate-400 font-mono tracking-wide flex items-center gap-2">
                                    NatureNani
                                    <span className="text-slate-600">·</span>
                                    naturenani.com
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                                    <span className="text-[9px] font-bold text-emerald-500 uppercase tracking-widest">Live</span>
                                </div>
                            </div>

                            {/* RAG Area */}
                            <div className="flex-1 p-4 flex flex-col gap-4 relative overflow-hidden text-xs">

                                {/* Patient Message */}
                                <div className="flex gap-2 ml-10 mt-1 self-end">
                                    <div className="bg-blue-600/90 text-white p-2.5 rounded-2xl rounded-tr-sm shadow-sm leading-relaxed border border-blue-500/50">
                                        What helps with chronic fatigue?
                                    </div>
                                </div>

                                {/* RAG Knowledge Card */}
                                <div className="bg-slate-800/60 border border-slate-700/50 rounded-xl overflow-hidden mt-1 shadow-md">
                                    {/* Card Header */}
                                    <div className="bg-slate-800 border-b border-slate-700/50 px-3 py-2 flex items-center gap-2">
                                        <span className="text-[10px]">📄</span>
                                        <span className="text-[10px] font-medium text-teal-500 uppercase tracking-widest">AI Response · 3 sources referenced</span>
                                    </div>

                                    {/* Card Body */}
                                    <div className="p-3 text-slate-300 leading-relaxed font-light">
                                        Ashwagandha and B-complex vitamins show strong evidence for adrenal fatigue support based on Ayurvedic and clinical research.
                                    </div>

                                    {/* Source Tags */}
                                    <div className="px-3 pb-3 flex flex-wrap gap-2">
                                        <span className="inline-flex items-center gap-1 bg-teal-500/10 border border-teal-500/20 text-teal-400 px-2 py-0.5 rounded text-[9px] font-medium">
                                            Ayurveda Guide
                                        </span>
                                        <span className="inline-flex items-center gap-1 bg-teal-500/10 border border-teal-500/20 text-teal-400 px-2 py-0.5 rounded text-[9px] font-medium">
                                            Clinical Research PDF
                                        </span>
                                    </div>
                                </div>

                                {/* Fade Overlay */}
                                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0f172a] to-transparent z-10 pointer-events-none"></div>
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
                            <p className="text-slate-500 text-sm leading-relaxed">Translating ancient wisdom from Ayurveda and Naturopathy for modern life via secure, private AI architecture. 1k+ active users.</p>
                        </div>
                    </a>
                </div>

            </div>

            {/* Supporting stats */}
            <div className="flex flex-wrap justify-center gap-12 mt-20 text-center">
                <div>
                    <p className="text-3xl font-bold text-white mb-1">15+</p>
                    <p className="text-sm text-slate-500 uppercase tracking-wider">Years Experience</p>
                </div>
                <div>
                    <p className="text-3xl font-bold text-white mb-1">1k+</p>
                    <p className="text-sm text-slate-500 uppercase tracking-wider">Active AI Users</p>
                </div>
                <div>
                    <p className="text-3xl font-bold text-white mb-1">24/7</p>
                    <p className="text-sm text-slate-500 uppercase tracking-wider">Always-On AI</p>
                </div>
            </div>
        </div>
    </section>
);
