// src/components/EfficiencyLab.tsx

import React, { useState } from "react";
import {
  Send,
  Zap,
  Clock,
  Lightbulb,
  Loader2,
  Sparkles,
  CheckCircle,
  ShieldAlert,
  Layers,
  ArrowRight,
  AlertTriangle,
} from "lucide-react";
import { analyzeBottleneck, type Industry } from "../services/geminiService";
import { AnalysisResult } from "../types";

const INDUSTRIES: { id: Industry; label: string; description: string }[] = [
  { id: "fintech", label: "FinTech / Financial Services", description: "Digital asset, payments, trading, compliance platforms, RIAs" },
  { id: "healthcare", label: "Healthcare", description: "Clinical operations, practice management, HIPAA-regulated workflows" },
  { id: "saas", label: "SaaS / Operations", description: "SaaS companies, internal ops teams, SOC 2 environments" },
];

const PLACEHOLDERS: Record<Industry, string> = {
  fintech:
    "E.g. 'Our compliance team manually reviews 200+ transaction alerts per day in spreadsheets. Reviews take 4–6 hours and create no audit trail...'",
  healthcare:
    "E.g. 'We manually copy patient intake forms into our EHR every morning. Staff spend 2 hours a day on this and errors cause billing delays...'",
  saas:
    "E.g. 'We manually generate customer health score reports every month by pulling data from Stripe, Mixpanel, and Intercom into a spreadsheet...'",
  general:
    "Describe your biggest operational bottleneck — the manual, repetitive workflow that consumes the most time or creates the most risk...",
};

export const EfficiencyLab: React.FC = () => {
  const [input, setInput] = useState("");
  const [industry, setIndustry] = useState<Industry>("fintech");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);

  const handleAnalyze = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setResult(null);
    try {
      const data = await analyzeBottleneck(input, industry);
      setResult(data);
    } catch (error) {
      console.error("Analysis failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="analyzer" className="py-24 bg-slate-900/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-500 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
              <Sparkles size={12} className="fill-emerald-500" /> Free AI Strategy Analysis
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Efficiency Lab
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Describe your biggest operational bottleneck. Get a senior-level AI strategy
              analysis — including compliance risk, recommended architecture, and a concrete
              first step.
            </p>
          </div>

          <div className="bg-slate-800/20 border border-slate-700/50 rounded-[2.5rem] p-6 md:p-12 backdrop-blur-md shadow-2xl">

            {/* Industry Selector */}
            <div className="mb-8">
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3">
                Select your industry for tailored analysis
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {INDUSTRIES.map((ind) => (
                  <button
                    key={ind.id}
                    onClick={() => setIndustry(ind.id)}
                    className={`text-left p-4 rounded-2xl border transition-all ${industry === ind.id
                        ? "border-emerald-500 bg-emerald-500/10 text-white"
                        : "border-slate-700/50 bg-slate-800/20 text-slate-400 hover:border-slate-600"
                      }`}
                  >
                    <p className={`text-sm font-bold mb-1 ${industry === ind.id ? "text-emerald-400" : "text-slate-300"}`}>
                      {ind.label}
                    </p>
                    <p className="text-[11px] text-slate-500 leading-relaxed">{ind.description}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Textarea */}
            <div className="relative mb-10 group">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={PLACEHOLDERS[industry]}
                className="w-full bg-slate-900/60 border border-slate-700/50 rounded-3xl px-8 py-8 text-white text-base focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all resize-none min-h-[180px] placeholder:text-slate-600 shadow-inner group-hover:border-slate-600/50"
              />
              <button
                onClick={handleAnalyze}
                disabled={loading || !input.trim()}
                className="absolute bottom-6 right-6 bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-700 text-white p-5 rounded-2xl shadow-xl shadow-emerald-500/20 transition-all active:scale-95 flex items-center gap-2 group/btn"
              >
                {loading ? (
                  <Loader2 className="w-6 h-6 animate-spin" />
                ) : (
                  <>
                    <span className="hidden sm:inline font-bold text-sm uppercase tracking-widest mr-2">
                      Run Analysis
                    </span>
                    <Send className="w-6 h-6 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </div>

            {/* Loading */}
            {loading && (
              <div className="flex flex-col items-center justify-center py-20 animate-in fade-in duration-700">
                <div className="relative">
                  <div className="absolute inset-0 bg-emerald-500 blur-2xl opacity-20 animate-pulse"></div>
                  <Sparkles className="w-16 h-16 text-emerald-500 mb-6 relative animate-bounce" />
                </div>
                <p className="text-emerald-500 font-black uppercase tracking-[0.3em] text-[10px]">
                  Analyzing with Opound Intelligence...
                </p>
                <p className="text-slate-500 mt-2 text-sm">
                  Assessing operational risk, compliance exposure, and architecture fit...
                </p>
              </div>
            )}

            {/* Results */}
            {result && !loading && (
              <div className="space-y-5 animate-in fade-in zoom-in-95 duration-700">

                {/* Row 1: Core Problem (full width) */}
                <div className="bg-slate-900/80 p-6 rounded-[2rem] border border-slate-700/50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 bg-slate-700/50 rounded-xl flex items-center justify-center">
                      <Lightbulb size={16} className="text-slate-300" />
                    </div>
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">
                      Core Problem
                    </span>
                  </div>
                  <p className="text-slate-200 text-base leading-relaxed font-medium">
                    {result.coreProblem}
                  </p>
                </div>

                {/* Row 2: Efficiency Gain + Implementation Time */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="bg-slate-900/80 p-6 rounded-[2rem] border border-emerald-500/20 hover:border-emerald-500/40 transition-colors group">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-9 h-9 bg-emerald-500/10 rounded-xl flex items-center justify-center group-hover:bg-emerald-500 transition-all">
                        <Zap size={16} className="text-emerald-500 group-hover:text-white transition-colors" />
                      </div>
                      <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">
                        Efficiency Gain
                      </span>
                    </div>
                    <p className="text-2xl font-black text-white tracking-tighter leading-none">
                      {result.efficiencyGain}
                    </p>
                  </div>

                  <div className="bg-slate-900/80 p-6 rounded-[2rem] border border-blue-500/20 hover:border-blue-500/40 transition-colors group">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-9 h-9 bg-blue-500/10 rounded-xl flex items-center justify-center group-hover:bg-blue-500 transition-all">
                        <Clock size={16} className="text-blue-500 group-hover:text-white transition-colors" />
                      </div>
                      <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">
                        Deployment Timeline
                      </span>
                    </div>
                    <p className="text-2xl font-black text-white tracking-tighter leading-none">
                      {result.implementationTime}
                    </p>
                  </div>
                </div>

                {/* Row 3: Compliance Risk (highlighted — the differentiator) */}
                <div className="bg-amber-500/5 p-6 rounded-[2rem] border border-amber-500/30 hover:border-amber-500/50 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 bg-amber-500/10 rounded-xl flex items-center justify-center">
                      <AlertTriangle size={16} className="text-amber-400" />
                    </div>
                    <span className="text-[10px] font-black text-amber-500/80 uppercase tracking-[0.2em]">
                      Compliance & Audit Risk
                    </span>
                    <span className="text-[9px] bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2 py-0.5 rounded-full font-bold uppercase tracking-widest">
                      If Unaddressed
                    </span>
                  </div>
                  <p className="text-slate-200 text-sm leading-relaxed">
                    {result.complianceRisk}
                  </p>
                </div>

                {/* Row 4: Recommended Solution */}
                <div className="bg-slate-900/80 p-6 md:p-8 rounded-[2rem] border border-slate-700/50 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-5">
                    <Lightbulb size={100} className="text-emerald-500" />
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-9 h-9 bg-emerald-500/10 rounded-xl flex items-center justify-center">
                        <ShieldAlert size={16} className="text-emerald-500" />
                      </div>
                      <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">
                        Recommended Solution
                      </span>
                    </div>
                    <p className="text-slate-200 text-base leading-relaxed">
                      {result.recommendedSolution}
                    </p>
                  </div>
                </div>

                {/* Row 5: Tech Stack */}
                <div className="bg-slate-900/80 p-6 rounded-[2rem] border border-slate-700/50">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 bg-slate-700/50 rounded-xl flex items-center justify-center">
                      <Layers size={16} className="text-slate-400" />
                    </div>
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">
                      Recommended Capabilities
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {result.techStack.map((item, i) => (
                      <span
                        key={i}
                        className="bg-slate-800 border border-slate-700 text-slate-300 text-xs font-medium px-3 py-1.5 rounded-lg"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Row 6: First Step CTA */}
                <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-[1.5rem] p-6">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/20 shrink-0 mt-0.5">
                      <CheckCircle size={18} className="text-slate-900" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">
                        Your First Step
                      </p>
                      <p className="text-white text-sm leading-relaxed font-medium">
                        {result.firstStep}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-emerald-500/10">
                    <button
                      onClick={() => {
                        const contactSection = document.getElementById("contact");
                        if (contactSection)
                          contactSection.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="flex-1 bg-white text-slate-900 px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-emerald-500 hover:text-white transition-all shadow-lg flex items-center justify-center gap-2"
                    >
                      Book a Strategy Call <ArrowRight size={14} />
                    </button>
                    <button
                      onClick={() => { setResult(null); setInput(""); }}
                      className="flex-1 bg-transparent border border-slate-700 text-slate-400 px-6 py-3 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:border-slate-500 hover:text-slate-300 transition-all"
                    >
                      Run Another Analysis
                    </button>
                  </div>
                </div>

              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
