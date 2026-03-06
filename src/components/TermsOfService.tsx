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
                <p className="text-slate-400 mb-12">Last Updated: March 2026</p>

                <div className="prose prose-invert max-w-none">
                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">1. About Opound LLC</h2>
                    <p className="text-slate-300 leading-relaxed mb-6">
                        Opound LLC is an AI product leadership and technical consulting firm based in Washington State. We provide fractional AI product leadership, AI readiness audits, integration and delivery engagements, and strategic advisory services to clients in regulated financial services and related industries. Our services are governed by individual Statements of Work executed prior to each engagement.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">2. Services</h2>
                    <p className="text-slate-300 leading-relaxed mb-6">
                        Opound LLC offers the following primary engagement types:
                    </p>
                    <ul className="list-disc pl-6 text-slate-300 mb-6 space-y-2">
                        <li><strong>AI Readiness Audit:</strong> A fixed-scope, 2-week engagement delivering an operational assessment and prioritized AI implementation roadmap.</li>
                        <li><strong>Integration & Delivery Sprint:</strong> A project-based engagement to design, build, and ship a specific AI integration, scoped and priced per project.</li>
                        <li><strong>Fractional AI Product Lead:</strong> An ongoing retainer engagement providing embedded senior product and technical program leadership on a part-time basis.</li>
                        <li><strong>Strategic Advisory:</strong> Monthly working sessions for senior leadership navigating AI adoption, compliance implications, or product strategy.</li>
                    </ul>
                    <p className="text-slate-300 leading-relaxed mb-6">
                        Current engagement descriptions and investment ranges are published at www.opound.com/pricing. All pricing, scope, and deliverables governing an active engagement are confirmed in a signed Statement of Work prior to engagement start. Published pricing ranges are subject to change and do not constitute a binding offer.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">3. Payment Terms</h2>
                    <p className="text-slate-300 leading-relaxed mb-4">
                        All fees are as stated in the client's signed Statement of Work. Opound's standard payment terms are as follows:
                    </p>
                    <ul className="list-disc pl-6 text-slate-300 mb-6 space-y-2">
                        <li>Audit fees are due in full prior to engagement start unless otherwise agreed in writing.</li>
                        <li>Project-based engagement fees are invoiced per the milestone schedule defined in the Statement of Work.</li>
                        <li>Monthly retainer fees are billed on the first of each month and due within 7 days of invoice.</li>
                        <li>Late payments beyond 14 days may result in suspension of services until the account is current.</li>
                        <li>All fees are non-refundable except where explicitly stated in a signed Service Agreement.</li>
                        <li>Third-party software, infrastructure, and API costs required for client engagements are the client's responsibility and are billed directly by those providers at their standard rates unless otherwise specified in the Statement of Work. Opound does not mark up third-party costs.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">4. Minimum Commitment and Cancellation</h2>
                    <ul className="list-disc pl-6 text-slate-300 mb-6 space-y-2">
                        <li>The Fractional AI Product Lead engagement requires a 3-month minimum commitment from the date of first invoice.</li>
                        <li>Strategic Advisory engagements require a 2-month minimum commitment.</li>
                        <li>Integration & Delivery Sprint engagements are project-scoped with no ongoing commitment beyond the defined project term.</li>
                        <li>The AI Readiness Audit is a fixed-scope, one-time engagement with no ongoing commitment.</li>
                        <li>After the applicable minimum commitment period, either party may terminate an ongoing engagement with 30 days written notice sent to hello@opound.com.</li>
                        <li>Early termination before the minimum commitment period is complete does not relieve the client of payment obligations for the remaining minimum term unless otherwise agreed in writing.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">5. Code and System Ownership</h2>
                    <p className="text-slate-300 leading-relaxed mb-4">
                        For engagements that include the design and development of custom AI systems, integrations, or software:
                    </p>
                    <ul className="list-disc pl-6 text-slate-300 mb-6 space-y-2">
                        <li><strong>Client-owned:</strong> All custom AI systems, source code, integrations, and documentation developed specifically for a client engagement become the client's property upon full payment of all fees.</li>
                        <li><strong>Opound-owned:</strong> Opound retains ownership of all proprietary frameworks, methodologies, prompt architectures, base templates, and reusable components developed independently of any specific client engagement. These may be applied across client engagements.</li>
                        <li><strong>Third-party tools:</strong> Software and platforms used in client systems remain subject to their respective terms of service and licensing agreements.</li>
                        <li><strong>Client data:</strong> All data, content, and materials provided by the client remain the sole property of the client at all times.</li>
                    </ul>
                    <p className="text-slate-300 leading-relaxed mb-6">
                        For managed service engagements where Opound retains administrative ownership of hosting infrastructure, full transition of all accounts, credentials, source code, and documentation to client-owned accounts is available at any time subject to the terms of the applicable Service Agreement. Transfer timelines and any applicable transfer fees are scoped and documented in writing before the engagement begins.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">6. Intellectual Property</h2>
                    <ul className="list-disc pl-6 text-slate-300 mb-6 space-y-2">
                        <li><strong>Client-owned:</strong> All custom AI systems, source code, integrations, and documentation developed specifically for a client engagement become the client's property upon full payment of all fees, including any applicable Transfer Fee.</li>
                        <li><strong>Opound-owned:</strong> Opound retains ownership of all proprietary frameworks, methodologies, prompt architectures, base templates, and reusable components developed independently of any specific client engagement. These may be reused across client engagements.</li>
                        <li><strong>Third-party tools:</strong> Software and platforms used in client systems (OpenAI, HubSpot, Calendly, etc.) remain subject to their respective terms of service and licensing agreements.</li>
                        <li><strong>Client data:</strong> All data, content, and materials provided by the client remain the sole property of the client at all times.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">7. Confidentiality</h2>
                    <p className="text-slate-300 leading-relaxed mb-4">
                        Both parties agree to keep confidential any non-public business information shared during the engagement. Opound will not disclose client business data, operational details, financial data, compliance information, or proprietary processes to any third party except as required to deliver the agreed services, as outlined in our Privacy Policy, or as required by law.
                    </p>
                    <p className="text-slate-300 leading-relaxed mb-4">
                        Clients operating in regulated industries should ensure any engagement scope is reviewed by their compliance function prior to start. Opound will cooperate with reasonable compliance review requests.
                    </p>
                    <p className="text-slate-300 leading-relaxed mb-4">
                        Clients agree not to disclose Opound's proprietary methodologies, prompt architectures, or internal system designs to third parties without written consent.
                    </p>
                    <p className="text-slate-300 leading-relaxed mb-6">
                        Confidentiality obligations survive termination of the engagement for a period of 2 years.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">8. Regulated Industries and Compliance</h2>
                    <p className="text-slate-300 leading-relaxed mb-4">
                        Opound LLC provides services to clients in regulated financial industries. Clients subject to SEC, FINRA, CFTC, FinCEN, or equivalent regulatory requirements are responsible for ensuring that the scope and structure of any Opound engagement complies with their applicable regulatory obligations before engagement start.
                    </p>
                    <p className="text-slate-300 leading-relaxed mb-6">
                        Opound does not provide legal, compliance, or regulatory advice. Nothing in any engagement agreement or deliverable constitutes legal, financial, investment, or regulatory counsel. Clients requiring compliance-specific guidance should engage qualified legal or compliance counsel independently.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">9. HIPAA</h2>
                    <p className="text-slate-300 leading-relaxed mb-4">
                        Opound LLC is not a covered entity or business associate as defined under HIPAA and does not collect or store protected health information (PHI) as part of its standard services.
                    </p>
                    <p className="text-slate-300 leading-relaxed mb-6">
                        Healthcare clients are responsible for ensuring their own HIPAA compliance in connection with any AI systems or services provided by Opound. Clients must not share patient-identifiable information with Opound without first executing a written Business Associate Agreement (BAA). To request a BAA review prior to engagement, contact hello@opound.com.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">10. Warranties and Disclaimers</h2>
                    <p className="text-slate-300 leading-relaxed mb-4">
                        Opound warrants that services will be performed in a professional manner consistent with industry standards.
                    </p>
                    <p className="text-slate-300 leading-relaxed mb-4">
                        Opound does not warrant that AI systems will be error-free, uninterrupted, or produce specific business outcomes. AI systems are probabilistic by nature — outputs should be reviewed by qualified personnel before being acted upon in critical business decisions.
                    </p>
                    <p className="text-slate-300 leading-relaxed mb-6">
                        All services are provided "as is" except as explicitly stated in a signed Service Agreement. Opound makes no warranties beyond those expressly stated herein.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">11. Limitation of Liability</h2>
                    <p className="text-slate-300 leading-relaxed mb-4">
                        To the maximum extent permitted by applicable law, Opound LLC's total liability for any claim arising from or related to these Terms or any engagement shall not exceed the total fees paid by the client to Opound in the three months immediately preceding the claim.
                    </p>
                    <p className="text-slate-300 leading-relaxed mb-6">
                        Opound shall not be liable for any indirect, incidental, consequential, or punitive damages, including but not limited to lost revenue, lost profits, data loss, or business interruption, even if advised of the possibility of such damages.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">12. Indemnification</h2>
                    <p className="text-slate-300 leading-relaxed mb-6">
                        You agree to indemnify and hold harmless Opound LLC, its principal, employees, and contractors from any claims, damages, or expenses (including reasonable attorney fees) arising from your use of our services, your violation of these Terms, or your violation of any third-party rights.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">13. Independent Contractor</h2>
                    <p className="text-slate-300 leading-relaxed mb-6">
                        Opound LLC operates as an independent contractor. Nothing in these Terms or any Service Agreement creates an employment, partnership, joint venture, or agency relationship between Opound and the client.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">14. Portfolio and Case Study References</h2>
                    <p className="text-slate-300 leading-relaxed mb-4">
                        Case studies, demo systems, and portfolio references displayed on www.opound.com are provided for informational and demonstration purposes only. They reflect production systems built by Opound and are intended to illustrate the nature and quality of work delivered — they do not guarantee identical outcomes for future client engagements.
                    </p>
                    <p className="text-slate-300 leading-relaxed mb-6">
                        Opound will not reference a client by name, describe client-specific project details, or use client materials in any public-facing context without the client's explicit written permission. Opound may reference the general nature of an engagement (industry, engagement type) in aggregate or anonymized descriptions without identifying the client.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">15. Governing Law and Disputes</h2>
                    <p className="text-slate-300 leading-relaxed mb-6">
                        These Terms are governed by the laws of the State of Washington, without regard to conflict of law principles. Any disputes arising from these Terms or an engagement that cannot be resolved informally shall be submitted to binding arbitration in Snohomish County, Washington, under the rules of the American Arbitration Association, except that either party may seek injunctive relief in a court of competent jurisdiction where necessary to protect intellectual property or confidential information.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">16. Changes to These Terms</h2>
                    <p className="text-slate-300 leading-relaxed mb-6">
                        Opound reserves the right to update these Terms at any time. Changes will be posted to this page with an updated date. Continued use of our website or services after changes are posted constitutes acceptance of the updated Terms. Active client engagements are governed by the Terms in effect at the time the Service Agreement was signed.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">17. Promotional and Founding Client Rates</h2>
                    <p className="text-slate-300 leading-relaxed mb-6">
                        Opound may offer promotional, founding, or discounted rates from time to time. All promotional rates, eligibility criteria, duration, and transition terms are specified in the client's signed Statement of Work. Promotional rates do not constitute the standard rate for any service and do not obligate Opound to offer the same rate to other clients or in future engagements. Upon expiration of a promotional rate period as defined in the SOW, fees revert to the standard rate then in effect unless otherwise agreed in writing.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">18. Contact</h2>
                    <p className="text-slate-300 leading-relaxed mb-6">
                        For questions about these Terms, engagement agreements, compliance review requests, or to request a BAA review:<br />
                        Opound LLC<br />
                        <a href="mailto:hello@opound.com" className="text-emerald-500 hover:text-emerald-400">hello@opound.com</a><br />
                        www.opound.com<br />
                        Washington State
                    </p>
                </div>
            </div>
        </section>
    );
};
