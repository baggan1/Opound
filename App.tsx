
import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Bot,
  Workflow,
  BarChart3,
  ShieldCheck,
  Search,
  CheckCircle2,
  ExternalLink,
  Mail,
  Building,
  AlertCircle,
  Menu,
  X,
  Zap,
  Check,
  Globe,
  Settings,
  Users,
  Loader2
} from 'lucide-react';
import { SectionHeading } from './components/SectionHeading';
import { EfficiencyLab } from './components/EfficiencyLab';
import { ROICalculator } from './components/ROICalculator';
import { FounderBio } from './components/FounderBio';
import { TermsOfService } from './components/TermsOfService';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { ServiceCardProps, PricingPlan } from './types';

// Helper: Programmatic smooth scroll to avoid hash-navigation reload issues
const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) => {
  if (e) e.preventDefault();

  if (window.location.hash === '#terms' || window.location.hash === '#privacy') {
    window.location.hash = '';
    setTimeout(() => {
      const element = document.getElementById(id.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
    return;
  }

  const element = document.getElementById(id.replace('#', ''));
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

// Component: Navigation
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Efficiency Lab', href: '#analyzer' },
    { name: 'Experience', href: '#proven-tech' },
    { name: 'Pricing', href: '#pricing' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer" onClick={() => { window.location.hash = ''; window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center font-bold text-white text-2xl group-hover:rotate-12 transition-transform">
            O
          </div>
          <span className="text-xl font-bold tracking-tight text-white">Opound AI Consulting</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-slate-400 font-medium">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="hover:text-emerald-500 transition-colors text-sm"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            className="bg-emerald-600 hover:bg-emerald-500 hover:scale-105 active:scale-95 text-white px-6 py-2.5 rounded-full transition-all flex items-center gap-2 text-sm shadow-lg shadow-emerald-500/20"
          >
            Get Started <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white p-2">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-slate-900 z-40 md:hidden transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8">
          <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 text-white"><X size={32} /></button>
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => { setIsOpen(false); scrollToSection(e, link.href); }}
              className="text-2xl font-bold text-white hover:text-emerald-500"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => { setIsOpen(false); scrollToSection(e, '#contact'); }}
            className="bg-emerald-600 text-white px-10 py-4 rounded-full text-xl font-bold"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
};

// Component: Hero Section
const Hero: React.FC = () => (
  <header className="pt-48 pb-32 relative overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] hero-glow pointer-events-none opacity-50"></div>
    <div className="container mx-auto px-6 relative z-10 text-center">
      <div className="inline-flex items-center gap-2 bg-emerald-500/5 border border-emerald-500/10 text-emerald-500 px-4 py-1.5 rounded-full text-xs font-bold mb-8 uppercase tracking-widest">
        <Zap className="w-3 h-3 fill-emerald-500" /> Powered by 15 Years of FinTech Expertise
      </div>
      <h1 className="text-5xl md:text-8xl font-black text-white mb-6 leading-[1.1] tracking-tighter">
        Unlock Efficiency. <br />
        <span className="gradient-text">Scale with AI.</span>
      </h1>
      <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
        We help small businesses identify bottlenecks and deploy custom AI solutions to reclaim 10+ hours a week. Professional grade automation for growing teams.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        <a
          href="#contact"
          onClick={(e) => scrollToSection(e, '#contact')}
          className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white text-lg font-bold px-10 py-5 rounded-2xl shadow-2xl shadow-emerald-500/25 transition-all transform hover:-translate-y-1 active:translate-y-0 text-center"
        >
          Book Readiness Assessment
        </a>
        <a
          href="#services"
          onClick={(e) => scrollToSection(e, '#services')}
          className="w-full sm:w-auto bg-slate-800/50 hover:bg-slate-800 text-slate-200 text-lg font-bold px-10 py-5 rounded-2xl border border-slate-700/50 backdrop-blur-sm transition-all text-center"
        >
          Explore Services
        </a>
      </div>
    </div>
  </header>
);

// Component: Proven Tech
const ProvenTech: React.FC = () => (
  <section id="proven-tech" className="py-24 relative">
    <div className="container mx-auto px-6">
      <div className="bg-slate-800/30 border border-slate-700/50 rounded-[2.5rem] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-16 backdrop-blur-sm">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-emerald-500"></div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-500">The Creator Economy</h3>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight tracking-tight">Built for Production. Not just for Demo.</h2>
          <p className="text-xl text-slate-400 mb-10 leading-relaxed font-light">
            I don't just consult; I build. From the creator of <strong>NatureNani</strong> — a production-grade RAG wellness platform processing real-time medical data with enterprise security. We bring that same level of rigor to your small business workflows.
          </p>
          <div className="grid grid-cols-2 gap-8 mb-4">
            <div>
              <p className="text-3xl font-bold text-white mb-1">15+</p>
              <p className="text-sm text-slate-500 uppercase tracking-wider">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white mb-1">1k+</p>
              <p className="text-sm text-slate-500 uppercase tracking-wider">Active AI Users</p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[460px] relative group">
          <div className="absolute inset-0 bg-emerald-500/20 blur-3xl rounded-full group-hover:bg-emerald-500/30 transition-colors"></div>
          <a
            href="https://www.naturenani.com/about"
            target="_blank"
            rel="noopener noreferrer"
            className="block relative bg-white border border-slate-200 rounded-3xl p-4 overflow-hidden shadow-2xl transition-all hover:-translate-y-2 duration-500 hover:shadow-emerald-500/10"
          >
            <div className="rounded-2xl w-full h-[300px] overflow-hidden bg-slate-50 relative border border-slate-100">
              <img
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800"
                alt="NatureNani Platform Screenshot"
                className="w-full h-full object-cover opacity-95 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-white/40 backdrop-blur-[2px]">
                <div className="bg-white/90 p-6 rounded-2xl shadow-xl border border-emerald-100">
                  <div className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.2em] mb-2">NatureNani.com</div>
                  <h4 className="text-slate-900 font-bold text-xl mb-2 leading-tight">Understand Your Body. <br />Heal Naturally.</h4>
                  <div className="w-12 h-0.5 bg-emerald-500 mx-auto rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="mt-6 p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-slate-900 font-bold text-lg flex items-center gap-2 group-hover:text-emerald-600 transition-colors">
                  NatureNani Case Study
                  <ExternalLink size={14} className="text-emerald-500" />
                </span>
                <span className="px-2 py-1 bg-emerald-500/10 text-emerald-600 text-[10px] font-bold uppercase rounded">LIVE RAG PLATFORM</span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">Translating ancient wisdom from Ayurveda and Naturopathy for modern life via secure, private AI architecture.</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
);

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => (
  <div className="bg-slate-800/20 border border-slate-800/50 p-10 rounded-[2rem] hover:border-emerald-500/40 transition-all group hover:bg-slate-800/40 cursor-default">
    <div className="w-14 h-14 bg-emerald-500/5 rounded-2xl flex items-center justify-center mb-8 border border-emerald-500/10 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
      <div className="text-emerald-500 group-hover:text-white">{icon}</div>
    </div>
    <h3 className="text-2xl font-bold text-white mb-5 tracking-tight group-hover:text-emerald-400 transition-colors">{title}</h3>
    <p className="text-slate-400 leading-relaxed font-light">{description}</p>
  </div>
);

const ServicesGrid: React.FC = () => {
  const services = [
    {
      title: "Business Automation",
      description: "Eliminate manual data entry. We design Gmail, Slack, and CRM workflows that triage tasks and route data automatically.",
      icon: <Workflow size={28} />
    },
    {
      title: "Custom RAG Chatbots",
      description: "Deploy internal knowledge bases that know your company inside out. 24/7 support via SMS, WhatsApp, and Webhooks.",
      icon: <Bot size={28} />
    },
    {
      title: "Financial Intelligence",
      description: "AI-driven cash flow forecasting, fraud detection, and automated invoice processing tailored for FinTech operations.",
      icon: <ShieldCheck size={28} />
    },
    {
      title: "AI Marketing & SEO",
      description: "Automate lead responses and generate data-driven content strategies that capture high-intent traffic without the overhead.",
      icon: <Search size={28} />
    },
    {
      title: "Data Visualization",
      description: "Turn raw spreadsheets into Looker Studio or Power BI dashboards. Real-time visualization of your key performance metrics.",
      icon: <BarChart3 size={28} />
    },
    {
      title: "Readiness Assessment",
      description: "The scaling entry point. We audit your tech stack and map out a 12-month AI roadmap for maximum operational ROI.",
      icon: <AlertCircle size={28} />
    }
  ];

  return (
    <section id="services" className="py-32">
      <div className="container mx-auto px-6">
        <SectionHeading
          title="Enterprise Tech for Scaling Teams"
          subtitle="Stop fighting your software. We specialize in low-maintenance, high-impact AI solutions that work while you sleep."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, idx) => <ServiceCard key={idx} {...s} />)}
        </div>
      </div>
    </section>
  );
};

const PricingTable: React.FC = () => {
  const plans: PricingPlan[] = [
    {
      name: "The AI Readiness Audit",
      price: "Starting at $2,450",
      description: "A deep-dive roadmap identifying $10k+ in monthly operational savings.",
      features: [
        "Focus: Diagnosis",
        "Full Tech & Workflow Audit",
        "Top Bottleneck Identification",
        "Prioritized AI Roadmap",
      ],
      cta: "Get Started Now",
      highlighted: true
    },
    {
      name: "The Specialist Agent",
      price: "Starting at $3,000/mo",
      description: "A custom-built, autonomous agent with a performance-based upside.",
      features: [
        "Focus: Deployment",
        "Booking, Triage, or RAG",
        "CRM Integration",
        "Performance Upside Tracking",
      ],
      cta: "Book Discovery Call"
    },
    {
      name: "Fractional AI Officer",
      price: "Starting at $7,500/mo",
      description: "Comprehensive AI strategy, staff training, and product management.",
      features: [
        "Focus: Leadership",
        "NatureNani-level expertise",
        "Ongoing Performance Optimization",
        "Strategic Tool Expansion",
      ],
      cta: "Inquire for Availability"
    }
  ];

  return (
    <section id="pricing" className="py-32 bg-slate-950">
      <div className="container mx-auto px-6">
        <SectionHeading title="Transparent & Scalable Engagement" subtitle="Simple entry points. Professional implementation. Long-term partnership." />

        <div className="mb-24">
          <ROICalculator />
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {plans.map((p, idx) => (
            <div key={idx} className={`relative flex flex-col p-8 rounded-[2.5rem] border transition-all duration-500 hover:scale-[1.03] ${p.highlighted ? 'bg-blue-900/20 border-blue-500 shadow-2xl shadow-blue-500/20 z-10' : 'bg-slate-900 border-slate-800'}`}>
              {p.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-slate-900 text-[10px] font-black uppercase py-1.5 px-6 rounded-full tracking-tighter shadow-lg">
                  Best Way to Start
                </div>
              )}
              <h3 className={`text-lg font-black mb-4 uppercase tracking-[0.2em] ${p.highlighted ? 'text-blue-400' : 'text-slate-400'}`}>{p.name}</h3>
              <div className="mb-6">
                <span className="text-3xl md:text-4xl font-bold text-slate-100 tracking-tighter">{p.price}</span>
              </div>
              <p className="text-slate-400 mb-8 text-sm leading-relaxed font-light min-h-[3rem]">{p.description}</p>

              <div className="space-y-4 mb-10 flex-grow">
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">What's Included:</div>
                {p.features.map((f, i) => (
                  <div key={i} className="flex items-start gap-3 text-slate-300">
                    <Check className={`w-4 h-4 shrink-0 mt-0.5 ${p.highlighted ? 'text-blue-400' : 'text-slate-500'}`} />
                    <span className="text-xs leading-relaxed">{f}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={(e) => scrollToSection(e, '#contact')}
                className={`w-full py-5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all ${p.highlighted ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-xl shadow-blue-500/30' : 'bg-slate-800 hover:bg-slate-700 text-slate-300'}`}
              >
                {p.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center p-8 border border-blue-500/10 bg-blue-500/[0.02] rounded-3xl backdrop-blur-sm">
          <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.3em] flex items-center justify-center gap-3">
            <Zap className="w-3 h-3 text-blue-500 fill-blue-500" />
            Special "Founding Client" rates available for local small businesses through Q2 2026.
          </p>
        </div>
      </div>
    </section>
  );
};

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto bg-slate-800/20 rounded-[3rem] overflow-hidden border border-slate-700/50 flex flex-col lg:flex-row backdrop-blur-md">
          <div className="flex-1 p-10 md:p-20 bg-slate-900/40 border-r border-slate-700/50">
            <h2 className="text-4xl font-bold text-white mb-6 tracking-tighter">Ready to reclaim <br /><span className="text-emerald-500">10 hours a week?</span></h2>
            <p className="text-slate-400 mb-12 text-lg font-light leading-relaxed">Join 50+ businesses that have optimized their operations with Opound.</p>

            <div className="space-y-10">
              <div className="flex items-center gap-6 group cursor-pointer" onClick={() => window.location.href = 'mailto:hello@opound.com'}>
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/5 flex items-center justify-center text-emerald-500 border border-emerald-500/10 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Direct Line</p>
                  <p className="text-white font-medium text-lg">hello@opound.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/5 flex items-center justify-center text-blue-500 border border-blue-500/10 group-hover:bg-blue-500 group-hover:text-white transition-all">
                  <Globe size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Global HQ</p>
                  <p className="text-white font-medium text-lg">Remote-First Efficiency</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 p-10 md:p-12 relative flex flex-col justify-center items-center bg-slate-900/60">
            {/* Zoho Form Container with Deep Navy Border and Subtle Shadow */}
            <div className="w-full max-w-lg bg-white rounded-2xl border-4 border-[#001F3F] p-2 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
              <iframe
                aria-label="Client Details"
                frameBorder="0"
                style={{ height: '500px', width: '99%', border: 'none' }}
                src="https://forms.zohopublic.com/navillaopo1/form/ClientDetails/formperma/slPbK0cG8ddA1RZeQTDUiAMHbzezHaVUaJ6UwwLdvKU"
              ></iframe>
            </div>
            <p className="mt-6 text-center text-[10px] text-slate-500 font-bold uppercase tracking-widest">
              Confidentiality Assured • Free 30-Min Discovery Session
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer: React.FC = () => (
  <footer className="py-20 border-t border-slate-800/50 bg-slate-950/30">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-12">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => { window.location.hash = ''; window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center font-bold text-white text-lg">
            O
          </div>
          <span className="text-xl font-bold text-white tracking-tighter">Opound AI Consulting</span>
        </div>
        <div className="flex flex-wrap justify-center gap-10 text-slate-500 text-sm font-bold uppercase tracking-widest">
          <a href="#services" onClick={(e) => scrollToSection(e, '#services')} className="hover:text-white transition-colors">Services</a>
          <a href="#analyzer" onClick={(e) => scrollToSection(e, '#analyzer')} className="hover:text-white transition-colors">Lab</a>
          <a href="#pricing" onClick={(e) => scrollToSection(e, '#pricing')} className="hover:text-white transition-colors">Pricing</a>
          <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')} className="hover:text-white transition-colors">Contact</a>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-12 border-t border-slate-800/30 text-[10px] font-bold text-slate-600 uppercase tracking-[0.3em]">
        <div>© {new Date().getFullYear()} OPOUND LLC. ALL RIGHTS RESERVED.</div>
        <div className="flex gap-8">
          <a href="#privacy" className="hover:text-emerald-500 transition-colors">Privacy Policy</a>
          <a href="#terms" className="hover:text-emerald-500 transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

// Lead Magnet Popup Component
const LeadMagnetPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Show popup after 3 seconds if not previously closed/submitted this session
    const hasSeenPopup = sessionStorage.getItem('opound_popup_dismissed');
    if (!hasSeenPopup) {
      const timer = setTimeout(() => setIsVisible(true), 3000);
      return () => clearTimeout(timer);
    }
  }, []);

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
      setTimeout(() => closePopup(), 2500);
    } catch (err) {
      setSubmitted(true);
      setTimeout(() => closePopup(), 2500);
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
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-emerald-500/20">
              <Check size={32} className="text-white" strokeWidth={3} />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-2">Check Your Inbox!</h3>
            <p className="text-slate-500">The AI Efficiency Checklist is on its way.</p>
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

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'tos' | 'privacy'>('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#terms') {
        setCurrentView('tos');
      } else if (hash === '#privacy') {
        setCurrentView('privacy');
      } else {
        setCurrentView('home');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen selection:bg-emerald-500/30 selection:text-emerald-200">
      <Navbar />
      {currentView === 'home' && (
        <>
          <Hero />
          <ProvenTech />
          <EfficiencyLab />
          <ServicesGrid />
          <FounderBio />
          <PricingTable />
          <Contact />
        </>
      )}
      {currentView === 'tos' && <TermsOfService />}
      {currentView === 'privacy' && <PrivacyPolicy />}
      <Footer />
      {currentView === 'home' && <LeadMagnetPopup />}
    </div>
  );
}
