import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { CalendarModal } from './CalendarModal';

export const Hero: React.FC = () => {
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);

    return (
        <header className="pt-48 pb-32 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] hero-glow pointer-events-none opacity-50"></div>
            <div className="container mx-auto px-6 relative z-10 text-center">
                <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[1.1] tracking-tighter">
                    Fractional AI Product & FinTech Leadership <br />
                    <span className="gradient-text">for Regulated Businesses.</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed font-light">
                    Opound LLC embeds senior product and technical program expertise into your team — without the full-time overhead. Strategy that ships. Execution you can audit.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
                    {/* Primary CTA */}
                    <button
                        onClick={() => setIsCalendarOpen(true)}
                        className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white text-base font-bold px-9 py-5 rounded-2xl shadow-2xl shadow-emerald-500/25 transition-all transform hover:-translate-y-1 active:translate-y-0 text-center flex items-center justify-center gap-2"
                    >
                        Book a Strategy Call <ArrowRight className="w-4 h-4" />
                    </button>
                </div>

                {/* Supporting trust line */}
                <p className="text-sm font-light text-slate-500 mt-6 max-w-xl mx-auto">
                    FinTech infrastructure, digital asset compliance, and production AI systems — built and shipped.
                </p>

                {/* Zoho Calendar Modal */}
                <CalendarModal
                    isOpen={isCalendarOpen}
                    onClose={() => setIsCalendarOpen(false)}
                />
            </div>
        </header>
    );
};
