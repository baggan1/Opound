import React, { useState, useCallback } from 'react';
import { useROI } from '../context/ROIContext';

// ─── Types ────────────────────────────────────────────────────────────────────

interface IndustryConfig {
    id: string;
    label: string;
    icon: string;
    tagline: string;
    defaults: { employees: number; hours: number; rate: number };
    sliders: {
        employees: { min: number; max: number; label: string };
        hours: { min: number; max: number; label: string };
        rate: { min: number; max: number; label: string; prefix: string };
    };
    riskLine: string;
    auditLabel: string;
    auditPrice: string;
    retainerPrice: string;
}

// ─── Industry Configurations ──────────────────────────────────────────────────

const INDUSTRIES: IndustryConfig[] = [
    {
        id: 'fintech',
        label: 'FinTech / Digital Assets',
        icon: '◈',
        tagline: 'Compliance, surveillance & trading infrastructure',
        defaults: { employees: 4, hours: 10, rate: 110 },
        sliders: {
            employees: { min: 1, max: 25, label: 'Team members in compliance, ops, or data workflows' },
            hours: { min: 1, max: 30, label: 'Hours/week on manual reporting, reconciliation, or monitoring' },
            rate: { min: 75, max: 200, label: 'Avg. fully-loaded hourly cost of senior staff', prefix: '$' },
        },
        riskLine: 'annually — before accounting for compliance risk, audit exposure, and regulatory penalties.',
        auditLabel: 'AI Readiness Audit for Regulated FinTech',
        auditPrice: '$4,200',
        retainerPrice: '$9,500',
    },
    {
        id: 'healthcare',
        label: 'Healthcare / Dental',
        icon: '⬡',
        tagline: 'Front desk, scheduling & patient workflows',
        defaults: { employees: 3, hours: 8, rate: 32 },
        sliders: {
            employees: { min: 1, max: 15, label: 'Staff handling scheduling, intake, or billing manually' },
            hours: { min: 1, max: 20, label: 'Hours/week on tasks AI could automate' },
            rate: { min: 18, max: 65, label: 'Average hourly staff cost', prefix: '$' },
        },
        riskLine: 'annually — plus missed appointments, front-desk burnout, and patient churn.',
        auditLabel: 'AI Practice Efficiency Audit',
        auditPrice: '$1,950',
        retainerPrice: '$4,500',
    },
    {
        id: 'saas',
        label: 'SaaS / Operations',
        icon: '⬟',
        tagline: 'Product ops, implementation & customer success',
        defaults: { employees: 5, hours: 12, rate: 75 },
        sliders: {
            employees: { min: 1, max: 20, label: 'Team members in ops, CS, or implementation roles' },
            hours: { min: 1, max: 25, label: 'Hours/week on manual ops, reporting, or onboarding tasks' },
            rate: { min: 40, max: 150, label: 'Avg. fully-loaded hourly cost of ops staff', prefix: '$' },
        },
        riskLine: 'annually — before accounting for churn risk, delayed onboarding, and engineering distraction.',
        auditLabel: 'AI Operations Readiness Audit',
        auditPrice: '$2,800',
        retainerPrice: '$8,500',
    },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

const fmt = (n: number) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);

// ─── Slider ───────────────────────────────────────────────────────────────────

interface SliderProps {
    id: string;
    label: string;
    value: number;
    min: number;
    max: number;
    prefix?: string;
    accentColor: string;
    onChange: (v: number) => void;
}

const Slider: React.FC<SliderProps> = ({ id, label, value, min, max, prefix = '', accentColor, onChange }) => {
    const pct = ((value - min) / (max - min)) * 100;

    return (
        <div className="space-y-3">
            <div className="flex justify-between items-start gap-4">
                <label htmlFor={id} className="text-sm font-medium text-slate-400 leading-snug max-w-[72%]">
                    {label}
                </label>
                <span
                    className="text-base font-black tracking-tight shrink-0 tabular-nums"
                    style={{ color: accentColor }}
                >
                    {prefix}{value.toLocaleString()}
                </span>
            </div>
            <div className="relative h-2 rounded-full bg-slate-800">
                <div
                    className="absolute left-0 top-0 h-2 rounded-full transition-all duration-150"
                    style={{ width: `${pct}%`, background: `linear-gradient(90deg, ${accentColor}88, ${accentColor})` }}
                />
                <input
                    type="range"
                    id={id}
                    min={min}
                    max={max}
                    value={value}
                    onChange={(e) => onChange(parseInt(e.target.value, 10))}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div
                    className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-slate-900 shadow-lg transition-all duration-150 pointer-events-none"
                    style={{ left: `calc(${pct}% - 8px)`, background: accentColor }}
                />
            </div>
            <div className="flex justify-between text-[10px] text-slate-600 font-medium tracking-wider">
                <span>{prefix}{min.toLocaleString()}</span>
                <span>{prefix}{max.toLocaleString()}</span>
            </div>
        </div>
    );
};

// ─── Main Component ───────────────────────────────────────────────────────────

interface ROICalculatorProps {
    onOpenBooking?: () => void;
}

export const ROICalculator: React.FC<ROICalculatorProps> = ({ onOpenBooking }) => {
    const [activeId, setActiveId] = useState<string>('fintech');
    const [transitioning, setTransitioning] = useState(false);

    const { employees, setEmployees, hours, setHours, rate, setRate, losingAmount } = useROI();

    const industry = INDUSTRIES.find((i) => i.id === activeId)!;
    const annualAmount = losingAmount * 12;

    // Accent colors per industry
    const accent = activeId === 'fintech' ? '#6ee7b7' : activeId === 'healthcare' ? '#67e8f9' : '#a78bfa';
    const accentDim = activeId === 'fintech' ? '#10b981' : activeId === 'healthcare' ? '#06b6d4' : '#7c3aed';

    const switchIndustry = useCallback((id: string) => {
        if (id === activeId) return;
        setTransitioning(true);
        setTimeout(() => {
            setActiveId(id);
            const cfg = INDUSTRIES.find((i) => i.id === id)!;
            setEmployees(cfg.defaults.employees);
            setHours(cfg.defaults.hours);
            setRate(cfg.defaults.rate);
            setTransitioning(false);
        }, 220);
    }, [activeId, setEmployees, setHours, setRate]);

    return (
        <div
            id="roi-calculator"
            className="w-full rounded-[2rem] overflow-hidden shadow-2xl"
            style={{
                background: 'linear-gradient(145deg, #0f172a 0%, #0c1628 60%, #0f172a 100%)',
                border: '1px solid rgba(255,255,255,0.07)',
            }}
        >
            {/* ── Header ── */}
            <div className="px-8 pt-8 pb-6 border-b border-slate-800/60">
                <div className="flex flex-col sm:flex-row sm:items-end gap-2 sm:gap-4 mb-1">
                    <h2
                        className="text-2xl md:text-3xl font-black tracking-tight"
                        style={{ color: accent }}
                    >
                        Operational Cost Calculator
                    </h2>
                    <span className="text-xs text-slate-500 font-medium tracking-widest uppercase pb-1">
                        by Opound LLC
                    </span>
                </div>
                <p className="text-slate-500 text-sm">
                    Estimate the monthly cost of work your team is handling without AI automation.
                </p>
            </div>

            {/* ── Industry Toggle ── */}
            <div className="px-8 py-5 border-b border-slate-800/60">
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">
                    Select your industry
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {INDUSTRIES.map((ind) => {
                        const isActive = ind.id === activeId;
                        return (
                            <button
                                key={ind.id}
                                onClick={() => switchIndustry(ind.id)}
                                className="relative text-left rounded-xl px-4 py-3 transition-all duration-200 cursor-pointer"
                                style={{
                                    background: isActive
                                        ? `linear-gradient(135deg, ${accentDim}22, ${accentDim}11)`
                                        : 'rgba(255,255,255,0.02)',
                                    border: isActive
                                        ? `1px solid ${accent}55`
                                        : '1px solid rgba(255,255,255,0.06)',
                                    boxShadow: isActive ? `0 0 20px ${accentDim}22` : 'none',
                                }}
                            >
                                <div className="flex items-center gap-2 mb-0.5">
                                    <span
                                        className="text-base leading-none"
                                        style={{ color: isActive ? accent : '#475569' }}
                                    >
                                        {ind.icon}
                                    </span>
                                    <span
                                        className="text-sm font-bold leading-tight"
                                        style={{ color: isActive ? accent : '#64748b' }}
                                    >
                                        {ind.label}
                                    </span>
                                </div>
                                <p className="text-[11px] text-slate-600 leading-tight pl-6">{ind.tagline}</p>
                                {isActive && (
                                    <div
                                        className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full"
                                        style={{ background: accent }}
                                    />
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* ── Sliders ── */}
            <div
                className="px-8 py-7 space-y-7 transition-opacity duration-200"
                style={{ opacity: transitioning ? 0 : 1 }}
            >
                <Slider
                    id="employees"
                    label={industry.sliders.employees.label}
                    value={employees}
                    min={industry.sliders.employees.min}
                    max={industry.sliders.employees.max}
                    accentColor={accent}
                    onChange={setEmployees}
                />
                <Slider
                    id="hours"
                    label={industry.sliders.hours.label}
                    value={hours}
                    min={industry.sliders.hours.min}
                    max={industry.sliders.hours.max}
                    accentColor={accent}
                    onChange={setHours}
                />
                <Slider
                    id="rate"
                    label={industry.sliders.rate.label}
                    value={rate}
                    min={industry.sliders.rate.min}
                    max={industry.sliders.rate.max}
                    prefix={industry.sliders.rate.prefix}
                    accentColor={accent}
                    onChange={setRate}
                />
            </div>

            {/* ── Result Block ── */}
            <div
                className="mx-6 mb-6 rounded-2xl overflow-hidden transition-opacity duration-200"
                style={{
                    opacity: transitioning ? 0 : 1,
                    background: 'rgba(0,0,0,0.35)',
                    border: '1px solid rgba(255,255,255,0.06)',
                }}
            >
                {/* Monthly loss */}
                <div className="px-6 pt-6 pb-5 border-b border-slate-800/60 text-center">
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">
                        Estimated monthly spend on automatable work
                    </p>
                    <div className="flex items-baseline justify-center gap-2">
                        <span className="text-4xl md:text-5xl font-black tabular-nums text-red-400 tracking-tighter">
                            {fmt(losingAmount)}
                        </span>
                        <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">/mo</span>
                    </div>
                    <p className="text-slate-500 text-xs mt-2">
                        <span className="text-slate-300 font-semibold">{fmt(annualAmount)}</span>{' '}
                        {industry.riskLine}
                    </p>
                </div>

                {/* Audit CTA */}
                <div className="px-6 py-5 text-center space-y-1">
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">
                        The fix starts here
                    </p>
                    <p className="font-bold text-slate-100">
                        {industry.auditLabel}{' '}
                        <span style={{ color: accent }}>— starting at {industry.auditPrice}</span>
                        <span className="text-slate-500 font-normal text-sm"> (one-time)</span>
                    </p>
                    <p className="text-slate-500 text-xs">
                        Fractional AI leadership from{' '}
                        <span className="text-slate-300 font-semibold">{industry.retainerPrice}/month</span>
                        {' '}— or start with a scoped audit.
                    </p>
                </div>

                {/* CTA Button */}
                <div className="px-6 pb-6">
                    <button
                        onClick={onOpenBooking}
                        className="w-full py-4 px-8 rounded-xl font-black uppercase tracking-widest text-sm transition-all duration-200 cursor-pointer"
                        style={{
                            background: `linear-gradient(135deg, ${accentDim}, ${accentDim}cc)`,
                            color: '#0f172a',
                            boxShadow: `0 4px 24px ${accentDim}44`,
                        }}
                        onMouseEnter={(e) => {
                            (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-1px)';
                            (e.currentTarget as HTMLButtonElement).style.boxShadow = `0 8px 32px ${accentDim}66`;
                        }}
                        onMouseLeave={(e) => {
                            (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)';
                            (e.currentTarget as HTMLButtonElement).style.boxShadow = `0 4px 24px ${accentDim}44`;
                        }}
                    >
                        Book a Strategy Call →
                    </button>
                </div>
            </div>
        </div>
    );
};

// ─── Mini Widget (sticky banner) ─────────────────────────────────────────────

interface MiniROIWidgetProps {
    losingAmount: number;
}

export const MiniROIWidget: React.FC<MiniROIWidgetProps> = ({ losingAmount }) => {
    return (
        <div className="sticky top-[88px] z-40 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 shadow-xl shadow-slate-900/50">
            <div className="container mx-auto px-6 py-3 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse inline-block" />
                    <span className="text-sm font-medium text-slate-300">
                        Your estimated monthly loss to manual tasks:
                    </span>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex items-baseline gap-1.5">
                        <span className="text-2xl md:text-3xl font-black text-red-400 tracking-tighter tabular-nums">
                            {new Intl.NumberFormat('en-US', {
                                style: 'currency',
                                currency: 'USD',
                                maximumFractionDigits: 0,
                            }).format(losingAmount)}
                        </span>
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">/mo</span>
                    </div>
                    <a
                        href="/#roi-calculator"
                        className="text-[10px] text-slate-500 hover:text-slate-300 underline underline-offset-4 transition-colors uppercase tracking-widest font-medium"
                    >
                        ← Adjust
                    </a>
                </div>
            </div>
            <div className="h-[2px] w-full bg-gradient-to-r from-emerald-500/0 via-emerald-500/40 to-emerald-500/0" />
        </div>
    );
};

export default ROICalculator;
