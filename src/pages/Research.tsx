import React, { useState } from 'react';
import { Mail, ArrowRight, Loader2, CheckCircle2, ShieldCheck, Download, FileText, ArrowUpRight, BookOpen } from 'lucide-react';
import { ResearchContactModal } from '../components/ResearchContactModal';

interface ResearchProps {
    onOpenBooking: () => void;
}

export const Research: React.FC<ResearchProps> = ({ onOpenBooking }) => {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [company, setCompany] = useState('');
    const [role, setRole] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('submitting');

        const payload = {
            fullName,
            email,
            company,
            role,
            _subject: "Whitepaper Download - FIX Stablecoin 2026",
            _to: "hello@opound.com"
        };

        try {
            const response = await fetch('https://formspree.io/f/xykdaqly', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                setStatus('success');
            } else {
                setStatus('error');
            }
        } catch (err) {
            setStatus('error');
        }
    };

    return (
        <div className="bg-slate-950 min-h-screen text-slate-100">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] hero-glow pointer-events-none opacity-40 z-0"></div>

            <div className="container mx-auto px-6 pt-32 pb-24 relative z-10">
                {/* Back to Home / Breadcrumb */}
                <div className="max-w-6xl mx-auto mb-8">
                    <a href="/" className="text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors inline-flex items-center gap-1.5">
                        <span>←</span> Back to Opound AI Consulting
                    </a>
                </div>

                {/* Main Split Layout */}
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-stretch">

                    {/* Left Column: Title, Metadata, Abstract */}
                    <div className="flex-1 flex flex-col justify-between py-2">
                        <div>
                            {/* Category Badge */}
                            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase mb-6">
                                <BookOpen className="w-3.5 h-3.5" /> Institutional Research
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.15] tracking-tight mb-6">
                                FIX Protocol as <br />the Bridge
                            </h1>
                            <p className="text-sm font-bold text-emerald-500/80 mb-6 tracking-wide">
                                Version 1.0 — Draft for FIX Trading Community Review, May 2026
                            </p>
                            <p className="text-xl md:text-2xl font-bold text-slate-300 leading-normal mb-8 max-w-2xl">
                                Standardizing Stablecoin Collateral and Settlement Workflows for Regulated Financial Markets
                            </p>

                            {/* Meta Metrics */}
                            <div className="flex flex-wrap gap-6 mb-10 text-xs font-bold uppercase tracking-wider text-slate-500 border-b border-slate-900 pb-8">
                                <div>
                                    <span className="block text-slate-600 font-bold mb-1">Author</span>
                                    <span className="text-slate-300 font-extrabold text-sm">Navilla Bagga</span>
                                </div>
                                <div>
                                    <span className="block text-slate-600 font-bold mb-1">Published</span>
                                    <span className="text-slate-300 font-extrabold text-sm">May 2026</span>
                                </div>
                                <div>
                                    <span className="block text-slate-600 font-bold mb-1">Document ID</span>
                                    <span className="text-slate-300 font-extrabold text-sm">OP-WP-2026-01</span>
                                </div>
                            </div>

                            {/* Section 1 Abstract Box */}
                            <div className="space-y-4">
                                <h3 className="text-xs font-black uppercase text-emerald-400 tracking-[0.2em] mb-4">
                                    Section 1: The Collateral Gap (Abstract)
                                </h3>
                                <p className="text-slate-300 text-lg leading-relaxed font-light mb-6 border-l-2 border-emerald-500/50 pl-6 py-1">
                                    Stablecoins — dollar-pegged digital assets led by USDT (~$190 billion), USDC (~$76 billion), and the DAI/USDS ecosystem (~$5 billion) — collectively represent over $320 billion in circulating supply as of May 2026, a figure that has doubled in under 18 months. On derivatives exchanges, they serve as the primary margin currency: a trader opening a 10x leveraged Bitcoin futures position posts USDC or USDT as initial margin, variation margin calls are denominated in stablecoins, and liquidations settle in stablecoins. Despite this scale, the institutional workflow governing stablecoin collateral lacks the standardization that has defined professional fixed income and equity markets for decades.
                                </p>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    This paper proposes applying the FIX Protocol to stablecoin collateral and settlement workflows, drawing direct parallels with TradFi repo market structure. It classifies stablecoin collateral as open repo — not overnight or term — maps a six-stage workflow to existing FIX message types, and proposes eight new tag extensions covering on-chain identity, settlement proof, oracle pricing, initial margin ratio, and reserve attestation. The framework addresses GENIUS Act proof-of-reserve requirements, the settlement finality constraints identified by the Chicago Fed (Letter No. 519, February 2026), and regulatory alignment across FinCEN, MiCA, SAB 122, and Basel III.
                                </p>
                            </div>
                        </div>

                        {/* Quick Highlights / Takeaways */}
                        <div className="mt-12 p-6 bg-slate-900/40 border border-slate-800 rounded-2xl">
                            <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-3">Key Technical Themes</h4>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-400">
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span> 6-Stage Collateral Workflow Mapping
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span> 8 Proposed FIX Tag Extensions
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span> Open Repo Structure — Stablecoin Classification
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span> Smart Contract as Custodian Reframing
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span> GENIUS Act, SAB 122 & MiCA Regulatory Alignment
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span> Settlement Finality Constraints (Chicago Fed Letter No. 519)
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Column: Visual Mock & Gated Form Container */}
                    <div className="w-full lg:w-[440px] flex flex-col justify-start">
                        {/* Interactive Gate Card */}
                        <div className="bg-[#0b1021] border border-slate-800 rounded-[2.5rem] p-8 md:p-10 shadow-2xl flex flex-col h-full justify-between z-10 sticky top-28">

                            {/* Whitepaper Stylized Visual Cover Mock */}
                            <div className="bg-[#0f172a] rounded-2xl border border-slate-800 p-6 shadow-inner mb-8 text-center relative overflow-hidden group">
                                <div className="absolute -top-16 -right-16 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl"></div>
                                <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>

                                <div className="text-[9px] font-black text-emerald-400 uppercase tracking-widest mb-3">
                                    Opound Technical Whitepaper
                                </div>
                                <div className="text-lg font-bold text-white leading-tight tracking-tight mb-2 max-w-[240px] mx-auto">
                                    FIX Protocol as the Bridge
                                </div>
                                <div className="w-8 h-0.5 bg-emerald-500 mx-auto rounded-full mb-3"></div>
                                <p className="text-[10px] text-slate-500 leading-normal max-w-[220px] mx-auto font-light mb-1">
                                    Standardizing stablecoin collateral and settlement workflows.
                                </p>
                                <p className="text-[9px] text-slate-600 font-extrabold uppercase mt-4">
                                    Navilla Bagga · May 2026
                                </p>
                            </div>

                            {status === 'success' ? (
                                <div className="text-center py-6 flex-grow flex flex-col justify-center items-center">
                                    <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mb-6 shadow-xl shadow-emerald-500/10 border border-emerald-500/30">
                                        <CheckCircle2 size={32} className="text-emerald-400" strokeWidth={2.5} />
                                    </div>
                                    <h3 className="text-2xl font-black text-white mb-2">Access Granted</h3>
                                    <p className="text-slate-400 text-sm mb-8 leading-relaxed max-w-xs mx-auto">
                                        The whitepaper has been prepared. Click below to download.
                                    </p>

                                    <div className="space-y-4 w-full">
                                        <a
                                            href="/FIX_Stablecoin_Whitepaper_Opound_2026.pdf"
                                            download
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full bg-[#00A372] hover:bg-[#008f64] text-white font-bold py-4 px-6 rounded-2xl shadow-xl shadow-[#00A372]/20 transition-all flex items-center justify-center gap-2.5 active:scale-[0.98]"
                                        >
                                            <Download className="w-5 h-5" /> Download Whitepaper (PDF)
                                        </a>
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <div className="mb-6">
                                        <h3 className="text-2xl font-black text-white tracking-tight mb-2">Download Whitepaper</h3>
                                        <p className="text-slate-400 text-sm font-light leading-relaxed">
                                            Provide your details below to receive instant access to the whitepaper.
                                        </p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-4 mb-6">
                                        {status === 'error' && (
                                            <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-xs text-center font-medium">
                                                Something went wrong. Please check your network and try again.
                                            </div>
                                        )}

                                        <div>
                                            <input
                                                type="text"
                                                value={fullName}
                                                onChange={(e) => setFullName(e.target.value)}
                                                placeholder="Full Name (Optional)"
                                                className="w-full bg-slate-900/60 border border-slate-800 rounded-2xl px-5 py-4 text-white text-sm focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/30 transition-all placeholder:text-slate-600 shadow-inner"
                                            />
                                        </div>

                                        <div>
                                            <input
                                                required
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="Institutional Email *"
                                                className="w-full bg-slate-900/60 border border-slate-800 rounded-2xl px-5 py-4 text-white text-sm focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/30 transition-all placeholder:text-slate-600 shadow-inner"
                                            />
                                        </div>

                                        <div>
                                            <input
                                                type="text"
                                                value={company}
                                                onChange={(e) => setCompany(e.target.value)}
                                                placeholder="Company Name (Optional)"
                                                className="w-full bg-slate-900/60 border border-slate-800 rounded-2xl px-5 py-4 text-white text-sm focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/30 transition-all placeholder:text-slate-600 shadow-inner"
                                            />
                                        </div>

                                        <div>
                                            <input
                                                type="text"
                                                value={role}
                                                onChange={(e) => setRole(e.target.value)}
                                                placeholder="Role / Title (Optional)"
                                                className="w-full bg-slate-900/60 border border-slate-800 rounded-2xl px-5 py-4 text-white text-sm focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/30 transition-all placeholder:text-slate-600 shadow-inner"
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={status === 'submitting'}
                                            className="w-full bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white font-bold py-4.5 rounded-2xl shadow-xl shadow-emerald-500/10 transition-all flex items-center justify-center gap-2 text-sm mt-6 cursor-pointer"
                                        >
                                            {status === 'submitting' ? (
                                                <>
                                                    <Loader2 className="w-4 h-4 animate-spin" />
                                                    Preparing Files...
                                                </>
                                            ) : (
                                                <>
                                                    Request Access <ArrowRight className="w-4 h-4" />
                                                </>
                                            )}
                                        </button>
                                    </form>

                                    <div className="pt-5 border-t border-slate-900 flex items-center justify-center gap-2">
                                        <p className="text-[11px] text-slate-500 font-medium flex items-center gap-1.5 leading-normal text-center">
                                            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0" /> Your details are used only to send the whitepaper and are not shared with third parties.
                                        </p>
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>

                </div>

                {/* About the Author Section */}
                <div className="max-w-6xl mx-auto mt-24 pt-20 border-t border-slate-900">
                    <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
                        {/* Author Headshot / Visual */}
                        <div className="w-40 h-40 shrink-0">
                            <img
                                src="/images/navilla-bagga.png"
                                alt="Navilla Bagga - Founder of Opound"
                                className="w-full h-full object-cover rounded-3xl border border-slate-800 bg-slate-900 shadow-xl shadow-emerald-500/2"
                            />
                        </div>
                        {/* Author Text Details */}
                        <div>
                            <div className="text-[10px] font-black text-emerald-400 uppercase tracking-widest mb-2">
                                About the Author
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Navilla Bagga</h3>
                            <h4 className="text-sm font-semibold text-slate-400 mb-4">
                                Founder of Opound LLC & Senior FinTech Systems Architect
                            </h4>
                            <p className="text-slate-300 leading-relaxed font-light max-w-4xl text-base">
                                Navilla Bagga is the founder and Principal Consultant of Opound LLC, an AI and financial technology consulting firm. She brings 15+ years of experience across the full regulated financial services stack: retail brokerage, institutional equities execution, federal mortgage infrastructure, buy-side asset management (Wellington Management), and digital asset compliance (Solidus Labs). Opound LLC advises FinTech, digital asset, and regulated financial services firms on AI product strategy, workflow automation, and technology infrastructure. The firm's fractional AI product leadership engagements focus on the intersection of institutional finance operations and emerging technology.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Practitioner Engagement CTA */}
                <div className="max-w-6xl mx-auto mt-16">
                    <div className="bg-gradient-to-r from-slate-900/60 to-emerald-950/20 border border-emerald-500/10 p-8 md:p-12 rounded-[2.5rem] flex flex-col md:flex-row justify-between items-center gap-8 shadow-xl">
                        <div className="max-w-2xl">
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-2 flex items-center gap-2">
                                Invite for FIX Trading Community Practitioners <ArrowUpRight className="w-5 h-5 text-emerald-400" />
                            </h3>
                            <p className="text-slate-400 font-light leading-relaxed text-sm">
                                If you are a prime brokerage technology leader, digital asset compliance practitioner, or exchange operations specialist, Navilla welcomes direct feedback or collaborative discussion regarding these stablecoin collateral proposals. Let's align on standards.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full sm:w-auto">
                            <button
                                onClick={() => setIsContactOpen(true)}
                                className="bg-[#0b1021] hover:bg-slate-900 border border-slate-800 text-slate-200 font-bold px-6 py-4 rounded-xl text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 transition-all cursor-pointer"
                            >
                                <Mail className="w-4 h-4 text-emerald-400" /> Contact Direct
                            </button>
                            <button
                                onClick={onOpenBooking}
                                className="bg-[#00A372] hover:bg-[#008f64] text-white font-bold px-6 py-4 rounded-xl text-xs uppercase tracking-wider text-center transition-all"
                            >
                                Book a Discussion
                            </button>
                        </div>
                    </div>
                </div>

            </div>
            <ResearchContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
        </div>
    );
};
