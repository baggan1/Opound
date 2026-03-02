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
                        Opound LLC ("we," "our," or "us") respects your privacy. This policy explains how we collect, use, protect, and delete your information when you interact with our website and consulting services.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">1. Information We Collect</h2>
                    <p className="text-slate-300 leading-relaxed mb-6">
                        We limit data collection to what is necessary to deliver our services. We collect:
                    </p>
                    <ul className="list-disc pl-6 text-slate-300 mb-6 space-y-2">
                        <li><strong>Contact and Inquiry Data:</strong> Name, email address, phone number, business name, business type, and details you provide when contacting us or requesting an AI Readiness Assessment.</li>
                        <li><strong>Lead Magnet Submissions:</strong> Email addresses submitted to receive resources such as the Small Business AI Efficiency Checklist.</li>
                        <li><strong>Client Project Data:</strong> Operational data, workflow details, and business information shared by clients during an active engagement for the purpose of building, auditing, or operating AI systems.</li>
                        <li><strong>Website Usage Data:</strong> Basic analytics data collected automatically by our hosting infrastructure, including pages visited, referral source, and browser type. This data is aggregated and not linked to individual identities.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">2. How We Use Your Information</h2>
                    <ul className="list-disc pl-6 text-slate-300 mb-6 space-y-2">
                        <li>To respond to inquiries and schedule assessments</li>
                        <li>To deliver requested resources and relevant business communications</li>
                        <li>To build and operate custom AI systems during active client engagements</li>
                        <li>To improve our services based on aggregated, anonymized usage patterns</li>
                    </ul>
                    <p className="text-slate-300 leading-relaxed mb-6">
                        We do not use client business data for marketing, public case studies, or portfolio references without your explicit written permission. We do not use your data to train AI models.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">3. AI Systems and Data Handling</h2>
                    <p className="text-slate-300 leading-relaxed mb-4">
                        Our consulting services involve building and operating AI-powered systems on behalf of clients. These systems may process business operational data provided by the client as part of the agreed scope of work.
                    </p>
                    <p className="text-slate-300 leading-relaxed mb-4">
                        We use reputable, enterprise-grade AI and cloud infrastructure providers to deliver these services. Any client data processed through these platforms is handled under strict confidentiality obligations and is not used to train public AI models. Our infrastructure providers are contractually bound to data protection standards consistent with industry best practices.
                    </p>
                    <p className="text-slate-300 leading-relaxed mb-6">
                        We use separate internal tools for website design, development, and content creation. These tools do not have access to client business data and are not considered data processors under this policy.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">4. HIPAA Notice</h2>
                    <p className="text-slate-300 leading-relaxed mb-4">
                        Opound LLC is an AI consulting and development firm. We are not a covered entity or business associate as defined under HIPAA and do not collect or store protected health information (PHI) as part of our standard services.
                    </p>
                    <p className="text-slate-300 leading-relaxed mb-6">
                        Healthcare and dental clients are responsible for maintaining their own HIPAA compliance in connection with any AI systems deployed by Opound. Clients must not share patient-identifiable information with Opound without first executing a written Business Associate Agreement (BAA). To request a BAA review prior to engagement, contact us at <a href="mailto:hello@opound.com" className="text-emerald-500 hover:text-emerald-400">hello@opound.com</a>.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">5. Third-Party Service Providers</h2>
                    <p className="text-slate-300 leading-relaxed mb-4">
                        We do not sell, rent, or trade your personal or business data. We share information only with service providers necessary to operate our business and deliver our services. These providers are bound by confidentiality obligations and their own data protection policies.
                    </p>
                    <p className="text-slate-300 leading-relaxed mb-4">
                        Our service providers fall into the following categories:
                    </p>
                    <ul className="list-disc pl-6 text-slate-300 mb-6 space-y-2">
                        <li><strong>Contact and communication tools</strong> — for handling inquiries and delivering requested resources</li>
                        <li><strong>Hosting and infrastructure</strong> — for website delivery and system operation</li>
                        <li><strong>Database and storage providers</strong> — for secure data storage within client AI systems</li>
                        <li><strong>CRM and workflow tools</strong> — for client communication management where applicable per engagement</li>
                    </ul>
                    <p className="text-slate-300 leading-relaxed mb-6">
                        Specific provider information is available upon request by contacting <a href="mailto:hello@opound.com" className="text-emerald-500 hover:text-emerald-400">hello@opound.com</a>.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">6. Data Retention and Deletion</h2>
                    <ul className="list-disc pl-6 text-slate-300 mb-6 space-y-2">
                        <li><strong>Contact and inquiry data:</strong> Retained for up to 24 months from last contact, then deleted unless an active engagement exists.</li>
                        <li><strong>Client project data:</strong> Retained for the duration of the engagement plus 90 days. Upon written request, all client data is deleted or returned within 30 days of engagement termination.</li>
                        <li><strong>Website analytics:</strong> Aggregated and retained per our hosting provider's standard policy. Not linked to individual identities.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">7. Your Rights</h2>
                    <p className="text-slate-300 leading-relaxed mb-6">
                        You may request access to, correction of, or deletion of your personal data at any time by contacting us at <a href="mailto:hello@opound.com" className="text-emerald-500 hover:text-emerald-400">hello@opound.com</a>. We will respond within 10 business days.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">8. Changes to This Policy</h2>
                    <p className="text-slate-300 leading-relaxed mb-6">
                        We may update this policy as our services evolve. Changes will be posted to this page with an updated date. Continued use of our website or services after changes are posted constitutes acceptance of the updated policy. Active client engagements are governed by the privacy terms in effect at the time the Service Agreement was signed.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">9. Contact</h2>
                    <p className="text-slate-300 leading-relaxed mb-6">
                        Opound LLC<br />
                        Mountlake Terrace, Washington<br />
                        <a href="mailto:hello@opound.com" className="text-emerald-500 hover:text-emerald-400">hello@opound.com</a><br />
                        www.opound.com
                    </p>
                </div>
            </div>
        </section>
    );
};
