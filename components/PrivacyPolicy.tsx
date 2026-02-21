import React, { useEffect } from 'react';

export const PrivacyPolicy: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="pt-32 pb-32 relative min-h-screen">
            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <h1 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">
                    Privacy Policy
                </h1>
                <p className="text-slate-400 mb-12">Last Updated: February 2026</p>

                <div className="prose prose-invert max-w-none">
                    <p className="text-slate-300 leading-relaxed mb-8">
                        Opound LLC ("we," "our," or "us") respects your privacy. This Privacy Policy explains how we collect, use, and protect your information when you interact with our website and consulting services.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">1. Information We Collect</h2>
                    <p className="text-slate-300 leading-relaxed mb-6">
                        We strictly limit our data collection to the information necessary to provide our business consulting services. We only collect:
                    </p>
                    <ul className="list-disc pl-6 text-slate-300 mb-6 space-y-2">
                        <li><strong>Consulting Inquiries:</strong> Information you provide when requesting an 'AI Readiness Assessment' or contacting us (e.g., Name, Email, Business Name, Bottleneck details).</li>
                        <li><strong>Newsletter & Lead Magnets:</strong> Email addresses and contact information submitted to receive our content, such as the "Small Business AI Efficiency Checklist."</li>
                        <li><strong>Client Project Data:</strong> Information and operational data shared by clients specifically for the execution of the 'AI Readiness Audit' or the development of custom automation tools.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">2. How We Use Your Information</h2>
                    <ul className="list-disc pl-6 text-slate-300 mb-6 space-y-2">
                        <li>To respond to your consulting inquiries and schedule assessments.</li>
                        <li>To deliver requested resources (like our Efficiency Checklist) and relevant business communications.</li>
                        <li>To analyze project requirements and build custom automations as part of an active consultant-client engagement.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">3. Data Protection and AI</h2>
                    <p className="text-slate-300 leading-relaxed mb-6">
                        Opound LLC uses industry-standard security practices. When building custom workflows or processing client data, we may utilize third-party AI platforms. We ensure that any sensitive client project data processed through these platforms is handled with strict confidentiality and is not used to train public AI models unless explicitly agreed upon.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">4. Third-Party Sharing</h2>
                    <p className="text-slate-300 leading-relaxed mb-6">
                        We do not sell, rent, or trade your personal or business data. We may share information only with trusted service providers necessary to operate our business (e.g., email providers, secure cloud hosting), subject to strict confidentiality obligations.
                    </p>
                </div>
            </div>
        </section>
    );
};
