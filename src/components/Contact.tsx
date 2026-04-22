import React, { useState } from 'react';
import { Mail, Globe, ArrowRight, Loader2, CheckCircle2, ShieldCheck } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { STRATEGY_SERVICES } from '../constants/services';

interface ContactFormData {
    fullName: string;
    email: string;
    businessName: string;
    businessType: string;
    service: string;
    message: string;
}

export const Contact: React.FC = () => {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>();

    const onSubmit = async (data: ContactFormData) => {
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
                    source: 'direct_message'
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
        <section id="contact" className="py-32 relative">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto bg-slate-800/20 rounded-[3rem] overflow-hidden border border-slate-700/50 flex flex-col lg:flex-row backdrop-blur-md">
                    <div className="flex-1 p-10 md:p-20 bg-slate-900/40 border-r border-slate-700/50">
                        <h2 className="text-4xl font-bold text-white mb-6 tracking-tighter">
                            Ready to bring senior AI expertise <br /><span className="text-[#00A372]">into your team?</span>
                        </h2>
                        <p className="text-slate-400 mb-12 text-lg font-light leading-relaxed">
                            FinTech firms, RIAs, and regulated businesses work with Opound to move from AI exploration to production systems — without the full-time hire.
                        </p>

                        <div className="space-y-10">
                            <div className="flex items-center gap-6 group cursor-pointer" onClick={() => window.location.href = 'mailto:hello@opound.com'}>
                                <div className="w-14 h-14 rounded-2xl bg-[#00A372]/5 flex items-center justify-center text-[#00A372] border border-[#00A372]/10 group-hover:bg-[#00A372] group-hover:text-white transition-all">
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

                    <div className="flex-1 p-8 md:p-12 relative flex flex-col justify-center bg-slate-900/60">
                        <div className="w-full max-w-xl mx-auto">
                            {status === 'success' ? (
                                <div className="bg-[#00A372]/10 border border-[#00A372]/20 rounded-3xl p-10 text-center flex flex-col items-center shadow-xl">
                                    <div className="w-16 h-16 bg-[#00A372]/20 rounded-2xl flex items-center justify-center mb-6 border border-[#00A372]/20">
                                        <CheckCircle2 className="text-[#00A372] w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">Thanks — we'll be in touch within one business day.</h3>
                                    <button
                                        onClick={() => setStatus('idle')}
                                        className="mt-6 text-[#00A372] hover:text-[#008f64] font-bold uppercase text-xs tracking-widest underline underline-offset-4 transition-colors"
                                    >
                                        Submit another response
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                                    {status === 'error' && (
                                        <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-xl text-sm mb-6 text-center font-medium">
                                            Something went wrong — please email us directly at <a href="mailto:hello@opound.com" className="font-bold underline text-white hover:text-red-300">hello@opound.com</a>
                                        </div>
                                    )}
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-1.5">
                                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">Full Name *</label>
                                            <input 
                                                {...register('fullName', { required: 'Full name is required' })}
                                                type="text" 
                                                className={`w-full bg-slate-800/40 border ${errors.fullName ? 'border-red-500' : 'border-slate-700/50'} text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00A372] focus:ring-1 focus:ring-[#00A372] transition-all placeholder:text-slate-600 shadow-inner`} 
                                                placeholder="Jane Doe" 
                                            />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">Email Address *</label>
                                            <input 
                                                {...register('email', { 
                                                    required: 'Email is required',
                                                    pattern: {
                                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                        message: "Invalid email address"
                                                    }
                                                })}
                                                type="email" 
                                                className={`w-full bg-slate-800/40 border ${errors.email ? 'border-red-500' : 'border-slate-700/50'} text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00A372] focus:ring-1 focus:ring-[#00A372] transition-all placeholder:text-slate-600 shadow-inner`} 
                                                placeholder="jane@example.com" 
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-1.5">
                                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">Business Name *</label>
                                            <input 
                                                {...register('businessName', { required: 'Business name is required' })}
                                                type="text" 
                                                className={`w-full bg-slate-800/40 border ${errors.businessName ? 'border-red-500' : 'border-slate-700/50'} text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00A372] focus:ring-1 focus:ring-[#00A372] transition-all placeholder:text-slate-600 shadow-inner`} 
                                                placeholder="Acme Capital Management" 
                                            />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">Business Type (Industry) *</label>
                                            <div className="relative">
                                                <select 
                                                    {...register('businessType', { required: 'Business type is required' })}
                                                    defaultValue=""
                                                    className={`w-full bg-slate-800/40 border ${errors.businessType ? 'border-red-500' : 'border-slate-700/50'} text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00A372] focus:ring-1 focus:ring-[#00A372] transition-all appearance-none cursor-pointer shadow-inner`}
                                                >
                                                    <option value="" disabled>Select your industry</option>
                                                    <option value="FinTech / Payments">FinTech / Payments</option>
                                                    <option value="Digital Asset / Crypto">Digital Asset / Crypto</option>
                                                    <option value="RIA / Family Office / Fund">RIA / Family Office / Fund</option>
                                                    <option value="Compliance / Surveillance Platform">Compliance / Surveillance Platform</option>
                                                    <option value="Wealth Management / Insurance">Wealth Management / Insurance</option>
                                                    <option value="Legal / Professional Services">Legal / Professional Services</option>
                                                    <option value="Other Regulated Industry">Other Regulated Industry</option>
                                                </select>
                                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
                                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">Interested Service *</label>
                                        <div className="relative">
                                            <select 
                                                {...register('service', { required: 'Please select a service' })}
                                                defaultValue=""
                                                className={`w-full bg-slate-800/40 border ${errors.service ? 'border-red-500' : 'border-slate-700/50'} text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00A372] focus:ring-1 focus:ring-[#00A372] transition-all appearance-none cursor-pointer shadow-inner`}
                                            >
                                                <option value="" disabled>Select a service...</option>
                                                {STRATEGY_SERVICES.map(s => (
                                                    <option key={s} value={s}>{s}</option>
                                                ))}
                                            </select>
                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
                                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">What are you looking to solve? *</label>
                                        <textarea 
                                            {...register('message', { required: 'Please describe your needs' })}
                                            rows={4} 
                                            className={`w-full bg-slate-800/40 border ${errors.message ? 'border-red-500' : 'border-slate-700/50'} text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00A372] focus:ring-1 focus:ring-[#00A372] transition-all placeholder:text-slate-600 resize-none shadow-inner`} 
                                            placeholder="Tell us about your current workflows or operational bottlenecks..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={status === 'submitting'}
                                        className={`w-full bg-[#00A372] hover:bg-[#008f64] text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-[#00A372]/20 transition-all flex items-center justify-center gap-2 uppercase tracking-widest text-xs mt-6 ${(status === 'submitting') ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer hover:-translate-y-0.5'}`}
                                    >
                                        {status === 'submitting' ? (
                                            <><Loader2 size={16} className="animate-spin" /> Submitting...</>
                                        ) : (
                                            <>Send Message <ArrowRight size={16} /></>
                                        )}
                                    </button>
                                </form>
                            )}
                            <p className="mt-8 text-center text-[10px] text-slate-500 font-bold uppercase tracking-widest flex items-center justify-center gap-2">
                                <ShieldCheck size={12} className="text-[#00A372]" /> Confidentiality Assured • Scope Proposal Within 48 Hours
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
