import React, { useState } from 'react';
import { X, ArrowRight, ChevronLeft, Loader2, ShieldCheck } from 'lucide-react';
import { InlineWidget } from 'react-calendly';
import { useForm } from 'react-hook-form';
import { STRATEGY_SERVICES } from '../constants/services';

interface FormData {
    fullName: string;
    email: string;
    company?: string;
    role?: string;
    service: string;
    message: string;
}

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
    const [step, setStep] = useState<1 | 2>(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState('');
    const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>();
    
    const formData = watch();

    if (!isOpen) return null;

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        setSubmitError('');
        try {
            const response = await fetch('/api/capture-lead-v2', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    full_name: data.fullName,
                    email: data.email,
                    company: data.company,
                    role: data.role,
                    service: data.service,
                    message: data.message,
                    source: 'strategy_call'
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to capture lead. Please try again.');
            }

            setStep(2);
        } catch (error: any) {
            setSubmitError(error.message);
        } finally {
            setIsSubmitting(false);
        }
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
                        <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto py-4">
                            <div className="text-center mb-10">
                                <div className="inline-flex items-center gap-2 bg-[#00A372]/10 text-[#00A372] px-4 py-1.5 rounded-full text-xs font-bold mb-4 uppercase tracking-widest">
                                    Step 1 of 2: Lead Information
                                </div>
                                <h3 className="text-3xl font-black text-white mb-4 tracking-tighter">
                                    Who are we meeting?
                                </h3>
                                <p className="text-slate-400 font-light">
                                    Every engagement starts with a 30-minute scope discussion. 
                                    Pre-fill your details to save time on the next step.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 ml-1">
                                        Full Name
                                    </label>
                                    <input
                                        {...register('fullName', { required: 'Full name is required' })}
                                        type="text"
                                        placeholder="Enter your name"
                                        className={`w-full bg-slate-900 border ${errors.fullName ? 'border-red-500' : 'border-slate-800'} rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-[#00A372]/50 transition-all placeholder:text-slate-600`}
                                    />
                                    {errors.fullName && <p className="text-red-500 text-xs mt-1 ml-1">{errors.fullName.message}</p>}
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 ml-1">
                                        Work Email
                                    </label>
                                    <input
                                        {...register('email', { 
                                            required: 'Work email is required',
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: "Invalid email address"
                                            }
                                        })}
                                        type="email"
                                        placeholder="email@company.com"
                                        className={`w-full bg-slate-900 border ${errors.email ? 'border-red-500' : 'border-slate-800'} rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-[#00A372]/50 transition-all placeholder:text-slate-600`}
                                    />
                                    {errors.email && <p className="text-red-500 text-xs mt-1 ml-1">{errors.email.message}</p>}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 ml-1">
                                        Company Name <span className="text-slate-600">(Optional)</span>
                                    </label>
                                    <input
                                        {...register('company')}
                                        type="text"
                                        placeholder="e.g. Acme Corp"
                                        className="w-full bg-slate-900 border border-slate-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-[#00A372]/50 transition-all placeholder:text-slate-600"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 ml-1">
                                        Role <span className="text-slate-600">(Optional)</span>
                                    </label>
                                    <input
                                        {...register('role')}
                                        type="text"
                                        placeholder="e.g. CTO, Founder"
                                        className="w-full bg-slate-900 border border-slate-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-[#00A372]/50 transition-all placeholder:text-slate-600"
                                    />
                                </div>
                            </div>

                            <div className="mb-6">
                                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 ml-1">
                                    Interested Service
                                </label>
                                <select
                                    {...register('service', { required: 'Please select a service' })}
                                    className={`w-full bg-slate-900 border ${errors.service ? 'border-red-500' : 'border-slate-800'} rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-[#00A372]/50 transition-all appearance-none cursor-pointer`}
                                >
                                    <option value="" disabled selected>Select a service...</option>
                                    {STRATEGY_SERVICES.map(s => (
                                        <option key={s} value={s}>{s}</option>
                                    ))}
                                </select>
                                {errors.service && <p className="text-red-500 text-xs mt-1 ml-1">{errors.service.message}</p>}
                            </div>

                            <div className="mb-6">
                                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 ml-1">
                                    What are you looking to solve?
                                </label>
                                <textarea
                                    {...register('message', { required: 'Please describe what you are looking to solve' })}
                                    rows={3}
                                    placeholder="Tell us about your current challenges..."
                                    className={`w-full bg-slate-900 border ${errors.message ? 'border-red-500' : 'border-slate-800'} rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-[#00A372]/50 transition-all placeholder:text-slate-600 resize-none`}
                                />
                                {errors.message && <p className="text-red-500 text-xs mt-1 ml-1">{errors.message.message}</p>}
                            </div>

                            {submitError && (
                                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-sm text-center">
                                    {submitError}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-[#00A372] hover:bg-[#008f64] disabled:opacity-50 disabled:cursor-not-allowed text-white text-lg font-bold py-5 rounded-2xl shadow-xl shadow-[#00A372]/20 transition-all flex items-center justify-center gap-3 mt-4"
                            >
                                {isSubmitting ? (
                                    <Loader2 className="w-6 h-6 animate-spin" />
                                ) : (
                                    <>Continue to Scheduling <ArrowRight className="w-5 h-5" /></>
                                )}
                            </button>
                        </form>
                    ) : (
                        <div className="w-full h-full min-h-[600px]">
                            <InlineWidget
                                url="https://calendly.com/navilla-bagga/30min"
                                prefill={{
                                    name: formData.fullName,
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
                <div className="p-6 border-t border-slate-800 text-center flex flex-col md:flex-row items-center justify-center gap-4">
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em] flex items-center gap-2">
                        <ShieldCheck className="w-3 h-3 text-[#00A372]" /> Confidentiality Assured • Clear Scope Proposal within 48 Hours
                    </p>
                </div>
            </div>
        </div>
    );
};
