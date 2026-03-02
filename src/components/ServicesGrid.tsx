import React from 'react';
import { Phone, CalendarCheck, ClipboardList, ShieldQuestion, DatabaseZap, Map } from 'lucide-react';
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
            title: "After-Hours AI Receptionist",
            description: "Never miss a call after closing time. Our AI answers patient questions, books appointments, and captures leads 24/7 — even on weekends.",
            icon: <Phone size={28} />
        },
        {
            title: "Appointment Booking Automation",
            description: "AI handles scheduling end-to-end: checks availability, collects patient details, and delivers a booking link — without your front desk lifting a finger.",
            icon: <CalendarCheck size={28} />
        },
        {
            title: "Patient Intake & Data Collection",
            description: "Collect patient name, contact info, and reason for visit through natural conversation before they ever walk through your door.",
            icon: <ClipboardList size={28} />
        },
        {
            title: "Insurance FAQ Bot",
            description: "Instantly answer common insurance questions — coverage types, in-network providers, co-pays — trained on your own documents.",
            icon: <ShieldQuestion size={28} />
        },
        {
            title: "CRM & Contact Sync",
            description: "Every patient interaction automatically logged in HubSpot. New contacts created, returning patients updated, conversation notes attached.",
            icon: <DatabaseZap size={28} />
        },
        {
            title: "AI Readiness Audit",
            description: "Not sure where to start? We map your practice's workflows, identify the highest-ROI automation opportunities, and deliver a 90-day implementation roadmap.",
            icon: <Map size={28} />
        }
    ];

    return (
        <section id="services" className="py-32">
            <div className="container mx-auto px-6">
                <SectionHeading
                    title="Everything Your Front Desk Handles. Automated."
                    subtitle="Custom-built AI systems for dental practices — from after-hours calls to patient intake and insurance FAQs."
                />
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((s, idx) => <ServiceCard key={idx} {...s} />)}
                </div>
            </div>
        </section>
    );
};
