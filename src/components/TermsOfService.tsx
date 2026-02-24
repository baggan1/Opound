import React, { useEffect } from 'react';

export const TermsOfService: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="pt-32 pb-32 relative min-h-screen">
            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <h1 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">
                    Terms of Service
                </h1>
                <p className="text-slate-400 mb-12">Last Updated: February 2026</p>

                <div className="prose prose-invert max-w-none">
                    <p className="text-slate-300 leading-relaxed mb-8">
                        Welcome to Opound LLC. These Terms of Service ("Terms") govern your access to and use of Opound LLC's website, consulting services, 'AI Readiness Audit', and custom automation builds (collectively, the "Services"). By engaging with our Services, you agree to comply with these Terms.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">1. Scope of Services</h2>
                    <p className="text-slate-300 leading-relaxed mb-6">
                        Opound LLC specializes in providing AI consulting services to small businesses. Our core offerings include the 'AI Readiness Audit' and the development of custom automation builds designed to improve operational efficiency. The consultant-client relationship is strictly professional and project-based as defined in individual Statements of Work (SOW) or consulting agreements.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">2. Educational Boundary & Case Studies</h2>
                    <p className="text-slate-300 leading-relaxed mb-6">
                        Opound LLC showcases various projects, including <strong>NatureNani</strong> (a wellness companion) and <strong>Gourmet Canopy Botanicals</strong> (a botanicals library).
                    </p>
                    <ul className="list-disc pl-6 text-slate-300 mb-6 space-y-2">
                        <li><strong>Disclaimer:</strong> These specific projects are provided strictly for <strong>educational and informational purposes only</strong>.</li>
                        <li>They are provided "as-is" to serve as case studies demonstrating Opound LLC’s technical capabilities and architecture. They are not intended to provide medical, dietary, or professional advice.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">3. No Professional Advice (Liability Disclaimer)</h2>
                    <p className="text-slate-300 leading-relaxed mb-6">
                        Opound LLC provides technical consulting, system integrations, and strategic roadmaps drawing on 15+ years of IT and FinTech experience.
                    </p>
                    <ul className="list-disc pl-6 text-slate-300 mb-6 space-y-2">
                        <li><strong>Limitation of Scope:</strong> Our services are intended solely for decision-support and workflow optimization.</li>
                        <li><strong>Not Specialized Advice:</strong> Opound LLC does not provide legal, financial, accounting, or medical advice.</li>
                        <li><strong>Client Responsibility:</strong> All final business decisions, interpretations of data, and implementations of our technical recommendations remain the sole responsibility of the Client. Opound LLC assumes no liability for business outcomes resulting from the use of our consulting services or automation tools.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">4. Intellectual Property</h2>
                    <p className="text-slate-300 leading-relaxed mb-6">
                        All methodologies, pre-existing code, templates, and proprietary AI workflows developed by Opound LLC remain the exclusive intellectual property of Opound LLC. Clients are granted a limited license to use custom automation builds specifically developed for their operations, as detailed in their specific service agreements.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">5. AI Tool Usage</h2>
                    <p className="text-slate-300 leading-relaxed mb-6">
                        In delivering our consulting and development services, Opound LLC transparently utilizes advanced Artificial Intelligence (AI) tools to accelerate coding, analysis, and architecture design. By engaging with our services, you acknowledge and consent to our use of AI tools in the professional workflow.
                    </p>
                </div>
            </div>
        </section>
    );
};
