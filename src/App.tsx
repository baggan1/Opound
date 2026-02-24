import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ROIProvider } from './context/ROIContext';
import { Check, X, ShieldCheck, Settings, CheckCircle2, Loader2 } from 'lucide-react';

import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Pricing } from './pages/Pricing';
import { TermsOfService } from './components/TermsOfService';
import { PrivacyPolicy } from './components/PrivacyPolicy';

// Lead Magnet Popup Component
const LeadMagnetPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Only show on home page
    if (location.pathname !== '/') return;

    // Show popup after 3 seconds if not previously closed/submitted this session
    const hasSeenPopup = sessionStorage.getItem('opound_popup_dismissed');
    if (!hasSeenPopup) {
      const timer = setTimeout(() => setIsVisible(true), 3000);
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  const closePopup = () => {
    setIsVisible(false);
    sessionStorage.setItem('opound_popup_dismissed', 'true');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const payload = {
      ...Object.fromEntries(formData.entries()),
      _subject: "Lead Magnet Download - Efficiency Checklist",
      _to: "hello@opound.com"
    };

    try {
      await fetch('https://formspree.io/f/hello-at-opound-mock-id', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(payload)
      });
      setSubmitted(true);
    } catch (err) {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 animate-in fade-in duration-500">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        onClick={closePopup}
      ></div>

      {/* Content */}
      <div className="relative bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl overflow-hidden p-10 md:p-14 transform animate-in zoom-in slide-in-from-bottom-8 duration-500">
        <button
          onClick={closePopup}
          className="absolute top-8 right-8 text-slate-400 hover:text-slate-900 transition-colors p-2"
        >
          <X size={24} />
        </button>

        {submitted ? (
          <div className="text-center py-12 flex flex-col items-center">
            <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mb-6 shadow-xl shadow-emerald-500/20">
              <Check size={32} className="text-white" strokeWidth={3} />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-2">You're All Set!</h3>
            <p className="text-slate-500 mb-6">Click below to download your checklist.</p>
            <a
              href="/Opound_AI_Efficiency_Checklist.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#001F3F] hover:bg-slate-800 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition-transform active:scale-95"
            >
              Download PDF Checklist
            </a>
          </div>
        ) : (
          <>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
              Claim Your Spot
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-4 tracking-tighter">
              Stop Losing 10+ Hours a Week to Busy Work.
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-8 font-medium">
              Most small businesses are overpaying for manual tasks that AI can handle in seconds. Get our <span className="text-slate-900 font-bold">"Small Business AI Efficiency Checklist"</span> and see exactly where you can automate.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 mb-8">
              <input
                name="email"
                required
                type="email"
                placeholder="Email Address"
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-slate-400"
              />
              <button
                disabled={loading}
                type="submit"
                className="w-full bg-[#3b82f6] hover:bg-[#2563eb] disabled:bg-slate-300 text-white font-black py-5 rounded-2xl shadow-xl shadow-blue-600/20 transition-all active:scale-95 uppercase tracking-widest text-xs flex items-center justify-center gap-3"
              >
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
                {loading ? 'Preparing Checklist...' : 'Send Me the Checklist'}
              </button>
            </form>

            <div className="pt-6 border-t border-slate-100">
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] leading-relaxed">
                Built by a 15-year IT & FinTech veteran. <br />Your data security is our priority.
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const LegalModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-6 animate-in fade-in duration-300">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose}></div>

      <div className="relative bg-slate-900 border border-slate-700/50 w-full max-w-2xl rounded-[2rem] shadow-2xl p-8 md:p-12 z-10 shadow-emerald-500/10">
        <button onClick={onClose} className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors p-2 bg-slate-800 rounded-full">
          <X size={20} />
        </button>

        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-emerald-400 border border-slate-700">
            <ShieldCheck size={24} />
          </div>
          <h2 className="text-3xl font-bold text-white tracking-tight">Legal Transparency</h2>
        </div>

        <div className="space-y-6">
          <div className="bg-slate-800/40 border border-slate-700/50 p-6 rounded-[1.5rem]">
            <h3 className="text-white text-lg font-bold mb-3 flex items-center gap-2">
              <CheckCircle2 size={20} className="text-emerald-500" /> Ownership & Transfer
            </h3>
            <p className="text-slate-400 leading-relaxed font-light">
              Upon payment of the Transfer Fee, Opound LLC transfers all source code and logic to Client-owned accounts.
            </p>
          </div>
          <div className="bg-slate-800/40 border border-slate-700/50 p-6 rounded-[1.5rem]">
            <h3 className="text-white text-lg font-bold mb-3 flex items-center gap-2">
              <Settings size={20} className="text-blue-500" /> Managed Services
            </h3>
            <p className="text-slate-400 leading-relaxed font-light">
              Opound LLC remains the administrative owner of subscriptions and guarantees 99.9% uptime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer: React.FC<{ onOpenLegal: () => void }> = ({ onOpenLegal }) => (
  <footer className="py-20 border-t border-slate-800/50 bg-slate-950/30">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-12">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center font-bold text-white text-lg">
            O
          </div>
          <span className="text-xl font-bold text-white tracking-tighter">Opound AI Consulting</span>
        </div>
        <div className="flex flex-wrap justify-center gap-10 text-slate-500 text-sm font-bold uppercase tracking-widest">
          <a href="/#services" className="hover:text-white transition-colors">Services</a>
          <a href="/pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="/about" className="hover:text-white transition-colors">About Us</a>
          <a href="/#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-12 border-t border-slate-800/30 text-[10px] font-bold text-slate-600 uppercase tracking-[0.3em]">
        <div>© {new Date().getFullYear()} OPOUND LLC. ALL RIGHTS RESERVED.</div>
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          <button onClick={onOpenLegal} className="hover:text-emerald-500 transition-colors uppercase cursor-pointer tracking-[0.3em]">Legal Transparency</button>
          <a href="/privacy" className="hover:text-emerald-500 transition-colors">Privacy Policy</a>
          <a href="/terms" className="hover:text-emerald-500 transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);

  return (
    <ROIProvider>
      <Router>
        <div className="min-h-screen selection:bg-emerald-500/30 selection:text-emerald-200">
          <Navbar />

          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
            </Routes>
          </main>

          <Footer onOpenLegal={() => setIsLegalModalOpen(true)} />
          <LeadMagnetPopup />
          <LegalModal isOpen={isLegalModalOpen} onClose={() => setIsLegalModalOpen(false)} />
        </div>
      </Router>
    </ROIProvider>
  );
}
