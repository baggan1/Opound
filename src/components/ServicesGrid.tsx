import React from 'react';
import { Workflow, Bot, ShieldCheck, Search, BarChart3, AlertCircle } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { ServiceCardProps } from '../types';

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => (
    <div className="bg-slate-800/20 border border-slate-800/50 p-10 rounded-[2rem] hover:border-emerald-500/40 transition-all group hover:bg-slate-800/40 cursor-default">
        <div className="w-14 h-14 bg-emerald-500/5 rounded-2xl flex items-center justify-center mb-8 border border-emerald-500/10 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
            <div className="text-emerald-500 group-hover:text-white">{icon}</div>
        </div>
        <h3 className="text-2xl font-bold text-white mb-5 tracking-tight group-hover:text-emerald-400 transition-colors">{title}</h3>
        <p className="text-slate-400 leading-relaxed font-light">{description}</p>
    </div>
);

export const ServicesGrid: React.FC = () => {
    const services: ServiceCardProps[] = [
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
