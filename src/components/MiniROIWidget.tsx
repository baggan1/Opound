import React from 'react';
import { useROI } from '../context/ROIContext';

const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0
    }).format(amount);
};

export const MiniROIWidget: React.FC = () => {
    const { losingAmount } = useROI();

    return (
        <div className="sticky top-[88px] z-40 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 shadow-xl shadow-slate-900/50 transform transition-all duration-300">
            <div className="container mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 animate-pulse">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                    </div>
                    <span className="text-sm font-medium text-slate-300">Your Estimated Monthly Loss to Manual Tasks:</span>
                </div>

                <div className="flex flex-col sm:flex-row items-end sm:items-center gap-1 sm:gap-4">
                    <div className="flex items-baseline gap-2">
                        <span className="text-2xl md:text-3xl font-black text-red-400 drop-shadow-md tracking-tighter">
                            {formatCurrency(losingAmount)}
                        </span>
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">/mo</span>
                    </div>
                    <a href="/#roi-calculator" className="text-[10px] text-slate-500 hover:text-slate-300 underline underline-offset-4 transition-colors uppercase tracking-widest font-medium">
                        ← Adjust your numbers
                    </a>
                </div>
            </div>
            {/* Subtle progress bar indicating calculation lock */}
            <div className="h-[2px] w-full bg-gradient-to-r from-emerald-500/0 via-emerald-500/50 to-emerald-500/0"></div>
        </div>
    );
};
