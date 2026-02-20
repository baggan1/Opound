import React, { useState, useEffect } from 'react';

const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0
    }).format(amount);
};

export const ROICalculator: React.FC = () => {
    const [employees, setEmployees] = useState(5);
    const [hours, setHours] = useState(5);
    const [rate, setRate] = useState(42);
    const [losingAmount, setLosingAmount] = useState(4200);
    const [opoundCost, setOpoundCost] = useState(2500); // Wait, new tier 1 price is $2450.

    const WEEKS_PER_MONTH = 4;

    useEffect(() => {
        const totalHoursPerMonth = employees * hours * WEEKS_PER_MONTH;
        const loss = totalHoursPerMonth * rate;

        let cost = 2450; // New base starting price
        if (loss > 10000) {
            cost = Math.max(2450, Math.floor(loss * 0.20)); // Scales up safely
        }

        setLosingAmount(loss);
        setOpoundCost(cost);
    }, [employees, hours, rate]);

    return (
        <div className="w-full max-w-lg mx-auto bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 md:p-10 shadow-2xl shadow-blue-900/20">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-2">ROI Calculator</h2>
                <p className="text-slate-400 text-sm">Discover how much manual tasks are costing your business.</p>
            </div>

            <div className="space-y-6 mb-8">
                <div className="space-y-3">
                    <div className="flex justify-between items-center">
                        <label className="text-sm font-semibold text-slate-400" htmlFor="employees">Number of Employees</label>
                        <span className="text-lg font-bold text-slate-100 bg-slate-800/50 px-3 py-1 rounded-lg border border-slate-700/50">{employees}</span>
                    </div>
                    <input
                        type="range"
                        id="employees"
                        min="1"
                        max="100"
                        value={employees}
                        onChange={(e) => setEmployees(parseInt(e.target.value, 10))}
                        className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                    />
                </div>

                <div className="space-y-3">
                    <div className="flex justify-between items-center">
                        <label className="text-sm font-semibold text-slate-400" htmlFor="hours">Hours spent on manual tasks <br /><span className="text-xs font-normal">(per week, per employee)</span></label>
                        <span className="text-lg font-bold text-slate-100 bg-slate-800/50 px-3 py-1 rounded-lg border border-slate-700/50">{hours}</span>
                    </div>
                    <input
                        type="range"
                        id="hours"
                        min="1"
                        max="40"
                        value={hours}
                        onChange={(e) => setHours(parseInt(e.target.value, 10))}
                        className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                    />
                </div>

                <div className="space-y-3">
                    <div className="flex justify-between items-center">
                        <label className="text-sm font-semibold text-slate-400" htmlFor="rate">Average hourly rate ($)</label>
                        <span className="text-lg font-bold text-slate-100 bg-slate-800/50 px-3 py-1 rounded-lg border border-slate-700/50">${rate}</span>
                    </div>
                    <input
                        type="range"
                        id="rate"
                        min="10"
                        max="150"
                        value={rate}
                        onChange={(e) => setRate(parseInt(e.target.value, 10))}
                        className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                    />
                </div>
            </div>

            <div className="bg-slate-950/50 border border-slate-800/50 rounded-2xl p-6 text-center space-y-6">
                <div className="pb-6 border-b border-slate-800 border-dashed">
                    <h3 className="text-xs text-slate-400 uppercase tracking-widest mb-2 font-medium">You are losing</h3>
                    <div className="text-4xl font-bold text-red-400 flex items-baseline justify-center gap-1 drop-shadow-md">
                        {formatCurrency(losingAmount)}<span className="text-lg text-slate-500 font-normal">/mo</span>
                    </div>
                </div>

                <div>
                    <h3 className="text-xs text-slate-400 uppercase tracking-widest mb-2 font-medium">Opound can fix this for</h3>
                    <div className="text-4xl font-bold text-emerald-400 flex items-baseline justify-center gap-1 drop-shadow-md">
                        {formatCurrency(opoundCost)}<span className="text-lg text-slate-500 font-normal">/mo</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
