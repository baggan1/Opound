import React, { useState } from 'react';
import { PricingTable } from '../components/PricingTable';
import { PricingFAQ } from '../components/PricingFAQ';
import { CalendarModal } from '../components/CalendarModal';

export const Pricing: React.FC = () => {
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);

    return (
        <>
            <PricingTable />
            <PricingFAQ />

            {/* Closing CTA Section */}
            <section className="py-24 bg-slate-950 border-t border-slate-800/50">
                <div className="container mx-auto px-6 text-center max-w-2xl">
                    <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-4">
                        Ready to talk scope?
                    </h2>
                    <p className="text-slate-400 text-lg leading-relaxed mb-10">
                        Every engagement starts with a 30-minute strategy call. You'll leave
                        with a clear sense of whether Opound is the right fit — and if it is,
                        a written scope proposal within 48 hours.
                    </p>
                    <button
                        onClick={() => setIsCalendarOpen(true)}
                        className="bg-emerald-600 hover:bg-emerald-500 text-white text-base
                                   font-bold px-10 py-5 rounded-2xl shadow-xl shadow-emerald-500/20
                                   transition-all transform hover:-translate-y-1"
                    >
                        Book a Strategy Call
                    </button>
                    <p className="text-sm text-slate-500 mt-4 italic">
                        30 minutes. No pitch deck. Scope proposal within 48 hours if there's a fit.
                    </p>
                </div>
            </section>

            <CalendarModal isOpen={isCalendarOpen} onClose={() => setIsCalendarOpen(false)} />
        </>
    );
};
