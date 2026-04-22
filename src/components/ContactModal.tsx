import React, { useState } from 'react';
import { X, ArrowRight, Loader2, CheckCircle2, ShieldCheck } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { STRATEGY_SERVICES } from '../constants/services';

interface ContactModalFormData {
    fullName: string;
    email: string;
    businessName: string;
    businessType: string;
    service: string;
    message: string;
}

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
    initialService?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, initialService }) => {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const { register, handleSubmit, formState: { errors } } = useForm<ContactModalFormData>({
        defaultValues: {
            service: initialService || ''
        }
    });

    if (!isOpen) return null;

    const onSubmit = async (data: ContactModalFormData) => {
        setStatus('submitting');
        try {
            const response = await fetch('/api/capture-lead-v2', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    full_name: data.fullName,
                    email: data.email,
                    business_name: data.businessName,
                    business_type: data.businessType,
                    service: data.service,
                    message: data.message,
                    source: 'modal_contact'
                }),
            });

            if (response.ok) {
                setStatus('success');
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
            <div className="relative bg-[#0f172a] border border-slate-800 rounded-[2.5rem] shadow-2xl overflow-hidden max-w-2xl w-full max-h-[90vh] flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-slate-800">
                    <h2 className="text-xl font-bold text-white tracking-tight">Send a Message</h2>
                    <button
                        onClick={onClose}
                        className="p-2 text-slate-400 hover:text-white bg-slate-800/50 rounded-full transition-colors"
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
                            <p className="text-slate-400 font-light mb-8 max-w-sm mx-auto">
                                Thanks for reaching out. We've received your inquiry and will be in touch within one business day.
                            </p>
                            <button
                                onClick={onClose}
                                className="bg-[#00A372] hover:bg-[#008f64] text-white font-bold py-4 px-10 rounded-2xl transition-all shadow-xl shadow-[#00A372]/20"
                            >
                                Close Window
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            {status === 'error' && (
                                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-sm text-center">
                                    Something went wrong. Please try again or email us directly at hello@opound.com
                                </div>
                            )}

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Full Name *</label>
                                    <input
                                        {...register('fullName', { required: 'Full name is required' })}
                                        type="text"
                                        placeholder="Jane Doe"
                                        className={`w-full bg-slate-900 border ${errors.fullName ? 'border-red-500' : 'border-slate-800'} rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-[#00A372]/50 transition-all placeholder:text-slate-700`}
                                    />
                                    {errors.fullName && <p className="text-red-500 text-[10px] mt-1 ml-1">{errors.fullName.message}</p>}
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Email Address *</label>
                                    <input
                                        {...register('email', { 
                                            required: 'Email is required',
                                            pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Invalid email" }
                                        })}
                                        type="email"
                                        placeholder="jane@company.com"
                                        className={`w-full bg-slate-900 border ${errors.email ? 'border-red-500' : 'border-slate-800'} rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-[#00A372]/50 transition-all placeholder:text-slate-700`}
                                    />
                                    {errors.email && <p className="text-red-500 text-[10px] mt-1 ml-1">{errors.email.message}</p>}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Business Name *</label>
                                    <input
                                        {...register('businessName', { required: 'Business name is required' })}
                                        type="text"
                                        placeholder="Acme Corp"
                                        className={`w-full bg-slate-900 border ${errors.businessName ? 'border-red-500' : 'border-slate-800'} rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-[#00A372]/50 transition-all placeholder:text-slate-700`}
                                    />
                                    {errors.businessName && <p className="text-red-500 text-[10px] mt-1 ml-1">{errors.businessName.message}</p>}
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Business Type *</label>
                                    <input
                                        {...register('businessType', { required: 'Business type is required' })}
                                        type="text"
                                        placeholder="e.g. FinTech, Crypto"
                                        className={`w-full bg-slate-900 border ${errors.businessType ? 'border-red-500' : 'border-slate-800'} rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-[#00A372]/50 transition-all placeholder:text-slate-700`}
                                    />
                                    {errors.businessType && <p className="text-red-500 text-[10px] mt-1 ml-1">{errors.businessType.message}</p>}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Interested Service *</label>
                                <select 
                                    {...register('service', { required: 'Please select a service' })}
                                    className={`w-full bg-slate-900 border ${errors.service ? 'border-red-500' : 'border-slate-800'} rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-[#00A372]/50 transition-all appearance-none cursor-pointer`}
                                >
                                    <option value="" disabled>Select a service...</option>
                                    {STRATEGY_SERVICES.map(s => (
                                        <option key={s} value={s}>{s}</option>
                                    ))}
                                </select>
                                {errors.service && <p className="text-red-500 text-[10px] mt-1 ml-1">{errors.service.message}</p>}
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">What are you looking to solve? *</label>
                                <textarea
                                    {...register('message', { required: 'Message is required' })}
                                    rows={4}
                                    placeholder="Tell us about your project or inquiry..."
                                    className={`w-full bg-slate-900 border ${errors.message ? 'border-red-500' : 'border-slate-800'} rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-[#00A372]/50 transition-all placeholder:text-slate-700 resize-none`}
                                />
                                {errors.message && <p className="text-red-500 text-[10px] mt-1 ml-1">{errors.message.message}</p>}
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'submitting'}
                                className="w-full bg-[#00A372] hover:bg-[#008f64] disabled:opacity-50 text-white text-lg font-bold py-5 rounded-2xl shadow-xl shadow-[#00A372]/20 transition-all flex items-center justify-center gap-3 mt-4"
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
                        <ShieldCheck className="w-3 h-3 text-[#00A372]" /> Confidentiality Assured • Clear Scope Proposal Within 48 Hours
                    </p>
                </div>
            </div>
        </div>
    );
};
