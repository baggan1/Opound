
import React, { useState } from 'react';
import { Send, Zap, Clock, Lightbulb, Loader2, Sparkles, CheckCircle } from 'lucide-react';
import { analyzeBottleneck } from '../services/geminiService';
import { AnalysisResult } from '../types';

/**
 * EfficiencyLab Component: An interactive tool for users to describe their business
 * bottlenecks and receive an AI-powered analysis using Gemini.
 */
export const EfficiencyLab: React.FC = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);

  const handleAnalyze = async () => {
    if (!input.trim()) return;
    
    setLoading(true);
    setResult(null); // Clear previous result to show fresh loading state
    
    try {
      const data = await analyzeBottleneck(input);
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
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-500 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
              <Sparkles size={12} className="fill-emerald-500" /> Free AI Audit Tool
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Efficiency Lab</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Define your most repetitive task. Our consultant-grade AI will analyze the ROI of automation and suggest a technical path forward.
            </p>
          </div>

          <div className="bg-slate-800/20 border border-slate-700/50 rounded-[2.5rem] p-6 md:p-12 backdrop-blur-md shadow-2xl">
            <div className="relative mb-10 group">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Describe your bottleneck (e.g., 'We manually copy customer data from Stripe to our tracking spreadsheet every Monday...')"
                className="w-full bg-slate-900/60 border border-slate-700/50 rounded-3xl px-8 py-8 text-white text-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all resize-none min-h-[180px] placeholder:text-slate-700 shadow-inner group-hover:border-slate-600/50"
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
                    <span className="hidden sm:inline font-bold text-sm uppercase tracking-widest mr-2">Run Analysis</span>
                    <Send className="w-6 h-6 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </div>

            {loading && (
              <div className="flex flex-col items-center justify-center py-20 animate-in fade-in duration-700">
                <div className="relative">
                  <div className="absolute inset-0 bg-emerald-500 blur-2xl opacity-20 animate-pulse"></div>
                  <Sparkles className="w-16 h-16 text-emerald-500 mb-6 relative animate-bounce" />
                </div>
                <p className="text-emerald-500 font-black uppercase tracking-[0.3em] text-[10px]">Processing via Gemini 3 Pro...</p>
                <p className="text-slate-500 mt-2 text-sm">Identifying automation patterns and ROI metrics...</p>
              </div>
            )}

            {result && !loading && (
              <div className="space-y-6 animate-in fade-in zoom-in-95 duration-700">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-slate-900/80 p-8 rounded-[2rem] border border-emerald-500/20 hover:border-emerald-500/40 transition-colors group">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                        <Zap size={20} />
                      </div>
                      <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Efficiency Gain</span>
                    </div>
                    <p className="text-3xl font-black text-white tracking-tighter leading-none">{result.efficiencyGain}</p>
                    <p className="text-slate-500 mt-2 text-xs font-medium uppercase tracking-widest">Estimated Weekly Reclaim</p>
                  </div>

                  <div className="bg-slate-900/80 p-8 rounded-[2rem] border border-blue-500/20 hover:border-blue-500/40 transition-colors group">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all">
                        <Clock size={20} />
                      </div>
                      <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Deployment Cycle</span>
                    </div>
                    <p className="text-3xl font-black text-white tracking-tighter leading-none">{result.implementationTime}</p>
                    <p className="text-slate-500 mt-2 text-xs font-medium uppercase tracking-widest">Typical Implementation Time</p>
                  </div>
                </div>

                <div className="bg-slate-900/80 p-8 md:p-10 rounded-[2.5rem] border border-slate-700/50 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-8 opacity-5">
                    <Lightbulb size={120} className="text-emerald-500" />
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-500">
                        <Lightbulb size={20} />
                      </div>
                      <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Strategic Recommendation</span>
                    </div>
                    <p className="text-xl text-slate-200 leading-relaxed font-light italic">
                      "{result.recommendedSolution}"
                    </p>
                  </div>
                </div>

                <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-[1.5rem] p-6 flex flex-col sm:flex-row items-center justify-between gap-6 backdrop-blur-sm">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/20">
                      <CheckCircle size={20} className="text-slate-900" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">Analysis complete and verified.</p>
                      <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Built with Opound Intelligence</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => {
                      const contactSection = document.getElementById('contact');
                      if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-white text-slate-900 px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-emerald-500 hover:text-white transition-all shadow-lg"
                  >
                    Request Full Audit
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
