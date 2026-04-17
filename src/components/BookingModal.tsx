import React, { useState } from 'react';
import { X, ArrowRight, ChevronLeft, Loader2 } from 'lucide-react';
import { InlineWidget } from 'react-calendly';

interface FormData {
    name: string;
    email: string;
}

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
    const [step, setStep] = useState<1 | 2>(1);
    const [formData, setFormData] = useState<FormData>({ name: '', email: '' });
    const [emailError, setEmailError] = useState('');

    if (!isOpen) return null;

    const validateEmail = (email: string) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const handleContinue = () => {
        if (!formData.name.trim()) {
            return;
        }
        if (!validateEmail(formData.email)) {
            setEmailError('Please enter a valid email address');
            return;
        }
        setEmailError('');
        setStep(2);
    };

    const handleBack = () => {
        setStep(1);
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
            <div className="relative bg-[#0f172a] border border-slate-800 rounded-[2.5rem] shadow-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-slate-800">
                    <div className="flex items-center gap-3">
                        {step === 2 && (
                            <button
                                onClick={handleBack}
                                className="p-2 text-slate-400 hover:text-white bg-slate-800/50 rounded-full transition-colors"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                        )}
                        <h2 className="text-xl font-bold text-white tracking-tight">
                            {step === 1 ? 'Start with a Strategy Call' : 'Schedule Your Call'}
                        </h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 text-slate-400 hover:text-white bg-slate-800/50 rounded-full transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Content */}
                <div className="flex-grow overflow-y-auto p-8">
                    {step === 1 ? (
                        <div className="max-w-md mx-auto py-10">
                            <div className="text-center mb-10">
                                <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-500 px-4 py-1.5 rounded-full text-xs font-bold mb-4 uppercase tracking-widest">
                                    Step 1 of 2
                                </div>
                                <h3 className="text-3xl font-black text-white mb-4 tracking-tighter">
                                    Who are we meeting?
                                </h3>
                                <p className="text-slate-400 font-light">
                                    Every engagement starts with a 30-minute scope discussion. 
                                    Pre-fill your details to save time on the next step.
                                </p>
                            </div>

                            <div className="space-y-5">
                                <div>
                                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 ml-1">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter your name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full bg-slate-900 border border-slate-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all placeholder:text-slate-600"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 ml-1">
                                        Work Email
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="email@company.com"
                                        value={formData.email}
                                        onChange={(e) => {
                                            setFormData({ ...formData, email: e.target.value });
                                            if (emailError) setEmailError('');
                                        }}
                                        className={`w-full bg-slate-900 border ${emailError ? 'border-red-500/50' : 'border-slate-800'} rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all placeholder:text-slate-600`}
                                    />
                                    {emailError && (
                                        <p className="text-red-400 text-xs mt-2 ml-1 font-medium">{emailError}</p>
                                    )}
                                </div>

                                <button
                                    onClick={handleContinue}
                                    disabled={!formData.name.trim() || !formData.email.trim()}
                                    className="w-full bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed text-white text-lg font-bold py-5 rounded-2xl shadow-xl shadow-emerald-500/20 transition-all flex items-center justify-center gap-3 mt-4"
                                >
                                    Continue to Scheduling <ArrowRight className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="w-full h-full min-h-[600px]">
                            <InlineWidget
                                url="https://calendly.com/navilla-bagga/30min"
                                prefill={{
                                    name: formData.name,
                                    email: formData.email,
                                }}
                                styles={{
                                    height: '700px',
                                    minWidth: '320px'
                                }}
                            />
                        </div>
                    )}
                </div>

                {/* Footer Info */}
                <div className="p-6 border-t border-slate-800 text-center">
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em]">
                        Confidentiality Assured • Clear Scope Proposal within 48 Hours
                    </p>
                </div>
            </div>
        </div>
    );
};
