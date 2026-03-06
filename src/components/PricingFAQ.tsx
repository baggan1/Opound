import React, { useState } from 'react';
import { ChevronDown, MessageCircleQuestion } from 'lucide-react';

interface FAQ {
    question: string;
    answer: string;
}

export const PricingFAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

    const faqs: FAQ[] = [
        {
            question: "How is a fractional engagement different from hiring a consultant?",
            answer: "A consultant delivers a report. A fractional lead is embedded in your team — attending standups, managing vendors, owning deliverables, and accountable for outcomes. The scope is defined upfront, but the working relationship is operational, not advisory-at-a-distance. You get someone who can be in your Jira, on your Slack, and in front of your engineering team — not just on a monthly call."
        },
        {
            question: "Do you work with firms that have compliance or regulatory constraints?",
            answer: "Yes — that's the primary context we operate in. Direct experience with AML surveillance platforms (Solidus Labs, 25+ institutional clients) and institutional trading infrastructure (Wellington Management, $1T+ AUM) means compliance requirements aren't a constraint to work around, they're a design input. If your system needs to be defensible in front of a compliance team or a regulator, that's the environment this work was built for."
        },
        {
            question: "What does a typical engagement look like in the first 30 days?",
            answer: "For fractional retainers: a discovery sprint covering stakeholder interviews, system audit, and backlog review — followed by a prioritized roadmap and the first delivery milestone within 30 days. For Delivery Sprints: scope is locked before day one, so execution begins immediately. Either way, you have a written deliverable within the first two weeks that you can show internal stakeholders."
        },
        {
            question: "Can we start with the AI Readiness Audit and expand from there?",
            answer: "Yes — and that's a common path. The Audit gives you a defensible document for internal stakeholders and a clear sequenced roadmap with cost and timeline estimates. Many clients move into a Delivery Sprint or Fractional retainer immediately after. The Audit is designed so that if you do nothing else, you still have something valuable. If you do continue, the Audit work doesn't get repeated — it becomes the foundation."
        },
        {
            question: "Do you work with teams that already have engineering resources?",
            answer: "Yes. The fractional model is designed to sit alongside your existing team — providing product and program leadership, not replacing engineers. The goal is to accelerate what your team is already capable of, with senior direction on the AI layer: architecture decisions, vendor evaluation, integration sequencing, and keeping delivery on track when complexity increases."
        },
        {
            question: "What's your experience with regulated industries specifically?",
            answer: "It's the primary context I've operated in for 15+ years. Solidus Labs — AML surveillance and market manipulation detection for institutional digital asset clients. Wellington Management — mission-critical trading and data infrastructure at $1T+ AUM. These environments require you to think about auditability, failure modes, and compliance implications before you write a line of code. That's the default operating mode Opound brings to every engagement."
        },
        {
            question: "What industries do you work with?",
            answer: "Primary focus: FinTech firms, digital asset and crypto companies, RIAs, family offices, boutique funds, compliance and surveillance platforms, and regulated financial services businesses. Secondary: professional services firms (legal, insurance, wealth management) evaluating AI adoption. We don't actively pursue general SMB work — not because it isn't valuable, but because our background and network are strongest in regulated financial services, and that's where we can add the most differentiated value."
        }
    ];

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24 bg-slate-900 border-t border-slate-800/50">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-12 max-w-6xl mx-auto">
                    {/* Left Column - Heading */}
                    <div className="md:w-1/3">
                        <div className="sticky top-24">
                            <div className="w-12 h-12 bg-emerald-500/10 text-emerald-400 rounded-xl flex items-center justify-center mb-6 border border-emerald-500/20">
                                <MessageCircleQuestion className="w-6 h-6" />
                            </div>
                            <h2 className="text-3xl font-black text-white mb-4 tracking-tighter">
                                Frequently Asked Questions
                            </h2>
                            <p className="text-slate-400 leading-relaxed font-light">
                                Common questions about our engagement models, processes, and focus areas.
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Accordion */}
                    <div className="md:w-2/3">
                        <div className="space-y-4">
                            {faqs.map((faq, index) => {
                                const isOpen = openIndex === index;
                                return (
                                    <div
                                        key={index}
                                        className={`bg-[#0a0f1e] border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-emerald-500/50 shadow-lg shadow-emerald-500/5' : 'border-slate-800'
                                            }`}
                                    >
                                        <button
                                            onClick={() => toggleFaq(index)}
                                            className="w-full flex items-center justify-between p-6 text-left"
                                        >
                                            <span className={`font-bold pr-8 transition-colors ${isOpen ? 'text-white' : 'text-slate-300'}`}>
                                                {faq.question}
                                            </span>
                                            <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-800 text-slate-400'
                                                }`}>
                                                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                                            </div>
                                        </button>
                                        <div
                                            className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                                }`}
                                        >
                                            <div className="p-6 pt-0 border-t border-slate-800/50">
                                                <p className="text-slate-400 leading-relaxed font-light text-sm">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
