import React from 'react';
import { Search, Zap, Users, MessageSquare, Shield } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

interface ServiceCardProps {
    title: string;
    description: string;
    tagline?: string;
    engagement: string;
    icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, tagline, engagement, icon }) => (
    <div className="bg-slate-800/20 border border-slate-800/50 p-10 rounded-[2rem] hover:border-[#00A372]/40 transition-all group hover:bg-slate-800/40 cursor-default flex flex-col">
        <div className="w-14 h-14 bg-[#00A372]/5 rounded-2xl flex items-center justify-center mb-8 border border-[#00A372]/10 group-hover:bg-[#00A372] group-hover:text-white transition-all duration-300">
            <div className="text-[#00A372] group-hover:text-white">{icon}</div>
        </div>
        <h3 className="text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-white transition-colors">
            {title}
        </h3>
        {tagline && (
            <p className="text-xs font-bold text-[#00A372] uppercase tracking-[0.2em] mb-4">
                {tagline}
            </p>
        )}
        <p className="text-slate-400 leading-relaxed font-light mb-6 flex-grow text-sm">{description}</p>
        <div className="inline-flex items-center gap-2 bg-slate-800/50 text-slate-500 border border-slate-700/50 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest w-fit">
            {engagement}
        </div>
    </div>
);

export const ServicesGrid: React.FC = () => {
    const services: ServiceCardProps[] = [
        {
            title: "Fractional AI Product Lead",
            description: "Embedded senior product and technical program leadership, 1–2 days per week. Own the AI roadmap, manage vendors, lead cross-functional delivery, and serve as the accountable senior voice on AI initiatives — without the full-time hire.",
            engagement: "Retainer · 1–2 days/week",
            icon: <Users size={28} />
        },
        {
            title: "AI Readiness Audit",
            description: "A structured 2-week engagement that maps your operational landscape, identifies where AI creates defensible leverage, and delivers a prioritized implementation roadmap. Designed for firms that want to move deliberately, not experimentally.",
            engagement: "Fixed-Scope · 2-week engagement",
            icon: <Search size={28} />
        },
        {
            title: "Integration & Delivery Sprint",
            description: "A scoped, project-based engagement to design, build, and ship a specific AI integration — LLM pipelines, RAG systems, CRM automation, compliance tooling, or workflow orchestration. Scope and timeline defined upfront.",
            engagement: "Project-Based · Scoped per engagement",
            icon: <Zap size={28} />
        },
        {
            title: "Strategic Advisory",
            description: "Monthly working sessions for founders, CTOs, and senior leaders navigating AI adoption, compliance implications, or product strategy at the intersection of AI and regulated markets. Structured around your decisions — not generic frameworks.",
            engagement: "Monthly · Founders & CTOs",
            icon: <MessageSquare size={28} />
        }
    ];

    return (
        <section id="services" className="py-32">
            <div className="container mx-auto px-6">
                <SectionHeading
                    title="How We Engage"
                    subtitle="Four ways to bring Opound expertise into your business — each scoped for how you actually work."
                />
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((s, idx) => <ServiceCard key={idx} {...s} />)}
                </div>
            </div>
        </section>
    );
};
