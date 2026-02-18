
import React, { useState } from 'react';
import { Send, Zap, Clock, Lightbulb, Loader2 } from 'lucide-react';
import { analyzeBottleneck } from '../services/geminiService';
import { AnalysisResult } from '../types';

export const EfficiencyLab: React.FC = () => {
  const [bottleneck, setBottleneck] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!bottleneck.trim()) return;
    
    setLoading(true);
    const analysis = await analyzeBottleneck(bottleneck);
    setResult(analysis);
    setLoading(false);
  };

  return (
    <section id="analyzer" className="py-24 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl">
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-emerald-500/10 rounded-lg">
                  <Zap className="w-6 h-6 text-emerald-500" />
                </div>
                <h2 className="text-2xl font-bold text-white">Efficiency Lab: Free AI Triage</h2>
              </div>
              
              <p className="text-slate-400 mb-8">
                Describe your biggest operational bottleneck. Our AI consultant will analyze it and suggest a path to recovery.
              </p>

              <form onSubmit={handleAnalyze} className="relative mb-10">
                <textarea
                  value={bottleneck}
                  onChange={(e) => setBottleneck(e.target.value)}
                  placeholder="Example: We spend 3 hours a day manually triaging customer support emails and routing them to the right departments..."
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 text-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 min-h-[120px] resize-none"
                />
                <button
                  type="submit"
                  disabled={loading || !bottleneck}
                  className="absolute bottom-4 right-4 bg-emerald-500 hover:bg-emerald-600 disabled:bg-slate-700 text-white font-semibold py-2 px-4 rounded-lg flex items-center gap-2 transition-all"
                >
                  {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                  Analyze Now
                </button>
              </form>

              {result && (
                <div className="grid md:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                  <div className="p-6 bg-slate-800 rounded-xl border border-emerald-500/20">
                    <Clock className="w-6 h-6 text-emerald-500 mb-3" />
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">Efficiency Gain</h4>
                    <p className="text-xl font-bold text-white">{result.efficiencyGain}</p>
                  </div>
                  <div className="p-6 bg-slate-800 rounded-xl border border-blue-500/20 md:col-span-2">
                    <Lightbulb className="w-6 h-6 text-blue-500 mb-3" />
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">Recommended Solution</h4>
                    <p className="text-white leading-relaxed">{result.recommendedSolution}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
