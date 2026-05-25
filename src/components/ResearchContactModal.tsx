import React, { useState } from 'react';
import { X, ArrowRight, Loader2, CheckCircle2, ShieldCheck } from 'lucide-react';

interface ResearchContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const ResearchContactModal: React.FC<ResearchContactModalProps> = ({ isOpen, onClose }) => {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    if (!isOpen) return null;

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('submitting');

        const payload = {
            name,
            email,
            message,
            _subject: "Direct Inquiry from Research Page - Opound",
            _to: "navilla@opound.com"
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
                // Reset form fields
                setName('');
                setEmail('');
                setMessage('');
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="relative bg-[#0f172a] border border-slate-800 rounded-[2.5rem] shadow-2xl overflow-hidden max-w-lg w-full max-h-[90vh] flex flex-col transition-all duration-300">
                
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-slate-800">
                    <h2 className="text-xl font-bold text-white tracking-tight">Direct Message</h2>
                    <button
                        onClick={onClose}
                        className="p-2 text-slate-400 hover:text-white bg-slate-800/50 rounded-full transition-colors cursor-pointer"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Content */}
                <div className="flex-grow overflow-y-auto p-8">
                    {status === 'success' ? (
                        <div className="text-center py-12">
                            <div className="w-20 h-20 bg-[#00A372]/20 rounded-3xl flex items-center justify-center mb-8 mx-auto border border-[#00A372]/20 shadow-lg shadow-[#00A372]/10">
                                <CheckCircle2 className="text-[#00A372] w-10 h-10" />
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">Message Sent</h3>
                            <p className="text-slate-400 font-light mb-8 max-w-sm mx-auto leading-relaxed">
                                Thank you for contacting me. I have received your message and will get back to you as soon as possible.
                            </p>
                            <button
                                onClick={onClose}
                                className="bg-[#00A372] hover:bg-[#008f64] text-white font-bold py-4 px-10 rounded-2xl transition-all shadow-xl shadow-[#00A372]/20 cursor-pointer"
                            >
                                Close Window
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={onSubmit} className="space-y-6">
                            {status === 'error' && (
                                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-sm text-center">
                                    Something went wrong. Please try again or email me directly at <a href="mailto:navilla@opound.com" className="font-bold underline text-white hover:text-red-300">navilla@opound.com</a>
                                </div>
                            )}

                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Name *</label>
                                <input
                                    required
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Your Name"
                                    className="w-full bg-slate-900 border border-slate-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-[#00A372]/50 focus:border-[#00A372]/50 transition-all placeholder:text-slate-700 shadow-inner"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Email Address *</label>
                                <input
                                    required
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="you@example.com"
                                    className="w-full bg-slate-900 border border-slate-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-[#00A372]/50 focus:border-[#00A372]/50 transition-all placeholder:text-slate-700 shadow-inner"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Message *</label>
                                <textarea
                                    required
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    rows={4}
                                    placeholder="Enter your message here..."
                                    className="w-full bg-slate-900 border border-slate-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-[#00A372]/50 focus:border-[#00A372]/50 transition-all placeholder:text-slate-700 resize-none shadow-inner"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'submitting'}
                                className="w-full bg-[#00A372] hover:bg-[#008f64] disabled:opacity-50 text-white text-lg font-bold py-5 rounded-2xl shadow-xl shadow-[#00A372]/20 transition-all flex items-center justify-center gap-3 mt-4 cursor-pointer"
                            >
                                {status === 'submitting' ? (
                                    <Loader2 className="w-6 h-6 animate-spin" />
                                ) : (
                                    <>Send Message <ArrowRight className="w-5 h-5" /></>
                                )}
                            </button>
                        </form>
                    )}
                </div>

                {/* Footer Info */}
                <div className="p-6 border-t border-slate-800 text-center flex items-center justify-center gap-4">
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em] flex items-center gap-2">
                        <ShieldCheck className="w-3 h-3 text-[#00A372]" /> Confidentiality Assured • Direct Communication
                    </p>
                </div>
            </div>
        </div>
    );
};
