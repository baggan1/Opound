import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

const faqs = [
    {
        question: "Why do I keep paying $3,000/month after the system is built?",
        answer: "The $3,000/month isn't a software subscription — it's a managed AI system with a human behind it. Your AI needs to be retrained when your insurance accepted list changes, your fee schedule updates, or you add new services. The integrations need monitoring — a silent webhook failure means patients stop receiving booking confirmations and nobody notices until reviews suffer. I review conversation logs weekly, catch misrouted intents, deliver a monthly performance report, and roll out new capabilities over time. The day that work stops is the day the system starts degrading. You're not paying to keep the lights on — you're paying for a system that keeps improving."
    },
    {
        question: "We already have online scheduling. Why do we need this?",
        answer: "Online scheduling tells patients when you're available. It doesn't answer the questions that drive the decision to book — \"do you take my insurance,\" \"what does a crown cost,\" \"are you taking new patients,\" \"what's your emergency protocol.\" Those conversations happen before a patient ever reaches a calendar, usually after hours when your front desk isn't there. Opound is the layer that sits in front of your booking system and handles that conversation — 24/7, trained on your actual practice documents, not generic scripts."
    },
    {
        question: "How is this different from the AI my current software already includes?",
        answer: "Most platform AI handles call routing, appointment reminders, and scripted responses — it's trained on generic dental content, not your practice. It can't answer \"does your office accept Delta Dental Premier and what's the out-of-pocket for a crown under my plan\" from your actual fee schedule. Opound's RAG system is trained on your documents — your insurance guide, your procedure pricing, your membership plan, your specific policies. That's a meaningfully different patient experience, and it's the difference between an AI that deflects questions and one that actually answers them."
    },
    {
        question: "What happens if I want to stop? Am I locked in?",
        answer: "No long-term contract is required. You can cancel the managed retainer with 30 days notice. If you want to own the system outright and bring it in-house, there's a Build-Operate-Transfer option — you pay a transfer fee, and I hand you the full codebase, credentials, and documentation. Most practices choose to keep the managed retainer because they don't want the operational burden of running it themselves — but knowing the exit exists changes the conversation from \"am I locked in\" to \"am I getting ongoing value.\" That's a question I'm comfortable answering every month."
    },
    {
        question: "Do I need technical staff to use this?",
        answer: "No. Your team interacts with a simple admin dashboard — view conversation history, see analytics, upload new documents, update your practice settings. Nothing requires technical knowledge. I handle everything on the infrastructure side: deployment, integrations, monitoring, updates. Your front desk doesn't change their workflow. They just start seeing more booked appointments and fewer repetitive phone calls."
    },
    {
        question: "How long does it take to get up and running?",
        answer: "The AI Readiness Audit takes 2 weeks and gives you a complete picture of your practice's funnel gaps and a prioritized implementation roadmap. Core AI deployment — chatbot, booking integration, CRM sync, admin dashboard — is typically live within 3–4 weeks of kickoff. Appointment reminders and the full automation stack roll out in the following 4–6 weeks. From first conversation to fully operational system: roughly 8–10 weeks."
    },
    {
        question: "What kind of ROI should I expect?",
        answer: "The clearest ROI comes from three places: after-hours lead capture (patients who would have called a competitor instead), no-show reduction from automated reminders, and front desk time reclaimed from repetitive intake and FAQ calls. A conservative estimate for a 1–2 provider practice: $8,000–$18,000 in recovered annual revenue from after-hours bookings alone, plus 6–10 hours of front desk time saved per week. The AI Audit quantifies this specifically for your practice before you commit to anything."
    }
];

export const PricingFAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24 bg-slate-900 border-t border-slate-800/50">
            <div className="container mx-auto px-6 max-w-4xl">
                <SectionHeading
                    title="Frequently Asked Questions"
                    subtitle="Everything you need to know about working with Opound."
                />
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-slate-800 rounded-2xl bg-slate-950 overflow-hidden transition-all duration-300"
                        >
                            <button
                                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                                onClick={() => toggleAccordion(index)}
                                aria-expanded={openIndex === index}
                            >
                                <span className="text-lg font-medium text-slate-200 pr-8">{faq.question}</span>
                                <ChevronDown
                                    className={`w-5 h-5 text-emerald-500 transition-transform duration-300 flex-shrink-0 ${openIndex === index ? 'transform rotate-180' : ''
                                        }`}
                                />
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                                aria-hidden={openIndex !== index}
                            >
                                <div className="px-6 pb-6 text-slate-400 leading-relaxed md:text-lg">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
