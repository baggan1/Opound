import React from 'react';
import { Mail, Globe } from 'lucide-react';

export const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-32 relative">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto bg-slate-800/20 rounded-[3rem] overflow-hidden border border-slate-700/50 flex flex-col lg:flex-row backdrop-blur-md">
                    <div className="flex-1 p-10 md:p-20 bg-slate-900/40 border-r border-slate-700/50">
                        <h2 className="text-4xl font-bold text-white mb-6 tracking-tighter">Ready to reclaim <br /><span className="text-emerald-500">10 hours a week?</span></h2>
                        <p className="text-slate-400 mb-12 text-lg font-light leading-relaxed">Join 50+ businesses that have optimized their operations with Opound.</p>

                        <div className="space-y-10">
                            <div className="flex items-center gap-6 group cursor-pointer" onClick={() => window.location.href = 'mailto:hello@opound.com'}>
                                <div className="w-14 h-14 rounded-2xl bg-emerald-500/5 flex items-center justify-center text-emerald-500 border border-emerald-500/10 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Direct Line</p>
                                    <p className="text-white font-medium text-lg">hello@opound.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-blue-500/5 flex items-center justify-center text-blue-500 border border-blue-500/10 group-hover:bg-blue-500 group-hover:text-white transition-all">
                                    <Globe size={24} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Global HQ</p>
                                    <p className="text-white font-medium text-lg">Remote-First Efficiency</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 p-10 md:p-12 relative flex flex-col justify-center items-center bg-slate-900/60">
                        {/* Zoho Form Container with Deep Navy Border and Subtle Shadow */}
                        <div className="w-full max-w-lg bg-white rounded-2xl border-4 border-[#001F3F] p-2 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                            <iframe
                                title="Client Details"
                                aria-label="Client Details"
                                frameBorder="0"
                                style={{ height: '500px', width: '99%', border: 'none' }}
                                src="https://forms.zohopublic.com/navillaopo1/form/ClientDetails/formperma/slPbK0cG8ddA1RZeQTDUiAMHbzezHaVUaJ6UwwLdvKU"
                            ></iframe>
                        </div>
                        <p className="mt-6 text-center text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                            Confidentiality Assured • Free 30-Min Discovery Session
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
