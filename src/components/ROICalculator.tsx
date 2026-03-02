import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useROI } from '../context/ROIContext';

const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0
    }).format(amount);
};

export const ROICalculator: React.FC = () => {
    const navigate = useNavigate();
    const {
        employees, setEmployees,
        hours, setHours,
        rate, setRate,
        losingAmount,
        opoundCost
    } = useROI();

    return (
        <div id="roi-calculator" className="w-full bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-[2.5rem] p-8 md:p-10 shadow-2xl shadow-blue-900/20">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-2">ROI Calculator</h2>
                <p className="text-slate-400 text-sm">Discover how much manual tasks are costing your business.</p>
            </div>

            <div className="space-y-6 mb-8">
                <div className="space-y-3">
                    <div className="flex justify-between items-center">
                        <label className="text-sm font-semibold text-slate-400" htmlFor="employees">Front desk staff handling manual tasks</label>
                        <span className="text-lg font-bold text-slate-100 bg-slate-800/50 px-3 py-1 rounded-lg border border-slate-700/50">{employees}</span>
                    </div>
                    <input
                        type="range"
                        id="employees"
                        min="1"
                        max="10"
                        value={employees}
                        onChange={(e) => setEmployees(parseInt(e.target.value, 10))}
                        className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                    />
                </div>

                <div className="space-y-3">
                    <div className="flex justify-between items-center">
                        <label className="text-sm font-semibold text-slate-400" htmlFor="hours">Hours per week spent on scheduling, intake & calls</label>
                        <span className="text-lg font-bold text-slate-100 bg-slate-800/50 px-3 py-1 rounded-lg border border-slate-700/50">{hours}</span>
                    </div>
                    <input
                        type="range"
                        id="hours"
                        min="1"
                        max="20"
                        value={hours}
                        onChange={(e) => setHours(parseInt(e.target.value, 10))}
                        className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                    />
                </div>

                <div className="space-y-3">
                    <div className="flex justify-between items-center">
                        <label className="text-sm font-semibold text-slate-400" htmlFor="rate">Average hourly rate for front desk staff ($)</label>
                        <span className="text-lg font-bold text-slate-100 bg-slate-800/50 px-3 py-1 rounded-lg border border-slate-700/50">${rate}</span>
                    </div>
                    <input
                        type="range"
                        id="rate"
                        min="18"
                        max="60"
                        value={rate}
                        onChange={(e) => setRate(parseInt(e.target.value, 10))}
                        className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                    />
                </div>
            </div>

            <div className="bg-slate-950/50 border border-slate-800/50 rounded-2xl p-6 text-center space-y-6">
                <div className="pb-6 border-b border-slate-800 border-dashed">
                    <h3 className="text-xl md:text-2xl font-bold text-red-400 drop-shadow-md uppercase tracking-tight">
                        YOUR PRACTICE IS LOSING — {formatCurrency(losingAmount)} <span className="text-sm md:text-lg text-red-400/80 font-medium normal-case">/mo to manual admin work</span>
                    </h3>
                </div>

                <div className="space-y-2">
                    <h3 className="text-lg md:text-xl font-bold text-emerald-400 drop-shadow-md uppercase tracking-tight">
                        OPOUND AUDIT STARTS AT — $2,450 <span className="text-sm font-medium md:text-base">(one-time)</span>
                    </h3>
                    <p className="text-teal-500/70 text-xs md:text-sm font-medium">
                        Then $3,000/mo fully managed — a fraction of what you're losing.
                    </p>
                </div>

                <div className="pt-4">
                    <button
                        onClick={() => { window.scrollTo(0, 0); navigate('/'); setTimeout(() => { const el = document.getElementById('contact'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }, 150); }}
                        className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 px-10 rounded-xl shadow-lg shadow-emerald-500/20 transition-all uppercase tracking-widest text-sm cursor-pointer"
                    >
                        Get Your Free AI Audit
                    </button>
                </div>
            </div>
        </div>
    );
};
