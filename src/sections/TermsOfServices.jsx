import React from "react";

const TermsOfUse = () => {
    const sections = [
        { id: "eligibility", title: "1. Eligibility" },
        { id: "custodial", title: "2. No Custodial Services" },
        { id: "advice", title: "3. No Financial or Investment Advice" },
        { id: "third-party", title: "4. Third-Party Services" },
        { id: "prohibited", title: "5. Prohibited Activities" },
        { id: "ip", title: "6. Intellectual Property" },
        { id: "disclaimers", title: "7. Disclaimers" },
        { id: "liability", title: "8. Limitation of Liability" },
        { id: "indemnification", title: "9. Indemnification" },
        { id: "modifications", title: "10. Modifications" },
        { id: "termination", title: "11. Termination" },
        { id: "contact", title: "12. Contact Us" },
    ];

    return (
        <div className="scroll-smooth">
            <div className="flex flex-col items-center text-start text-[#202124] px-6 sm:px-8 md:px-16 py-10">
                {/* Header Section */}
                <div className="w-full max-w-7xl rounded-4xl bg-[#1976d2] text-white text-start py-15 px-25 mb-10">
                    <h1 className="text-3xl sm:text-5xl font-bold mb-2">MetaPlay Wallet – Terms of Use</h1>
                    <p className="text-sm sm:text-lg mt-4 font-light">Effective Date: 24th July, 2025</p>
                </div>

                {/* Sidebar Navigation */}


                {/* Main Content */}
                <div className="w-full max-w-7xl space-y-6 text-sm sm:text-base">
                    <p>
                        These Terms of Use (“Terms”) govern your access to and use of the MetaPlay Wallet mobile application, browser extension, website, and all related services (collectively, the “Services”).
                        By using or accessing the Services, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree, please do not use MetaPlay Wallet.
                    </p>



                    <aside className=" self-start py-5 hidden md:block italic font-bold ">
                        <ul className="space-y-3 text-sm font-medium">
                            {sections.map((sec) => (
                                <li key={sec.id}>
                                    <a href={`#${sec.id}`} className="hover:underline">
                                        {sec.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </aside>


                    <h2 id="eligibility" className="font-bold">1. Eligibility</h2>
                    <p>
                        You must be at least the age of majority in your jurisdiction to use MetaPlay Wallet. You represent and warrant that:
                    </p>
                    <ul className="list-disc list-inside ml-4">
                        <li>You are legally eligible to use blockchain-based applications</li>
                        <li>You are not barred from using the Services under applicable laws</li>
                        <li>You are not in a jurisdiction subject to embargoes or sanctions</li>
                    </ul>

                    <h2 id="custodial" className="font-bold">2. No Custodial Services</h2>
                    <p>
                        MetaPlay Wallet is a non-custodial wallet. We do not access your private keys, recovery phrases, or wallet assets. You are solely responsible for securing your credentials.
                    </p>

                    <h2 id="advice" className="font-bold">3. No Financial or Investment Advice</h2>
                    <p>
                        MetaPlay Wallet provides tools for blockchain access. It does not offer financial, legal, tax, or investment advice. All transactions are irreversible and at your sole risk.
                    </p>

                    <h2 id="third-party" className="font-bold">4. Third-Party Services</h2>
                    <p>
                        MetaPlay Wallet may link or integrate with third-party platforms including:
                    </p>
                    <ul className="list-disc list-inside ml-4">
                        <li>Token swap protocols</li>
                        <li>RPC nodes</li>
                        <li>DApps and exchanges</li>
                        <li>Payment gateways</li>
                    </ul>
                    <p>
                        We are not responsible for third-party services. Use them at your own risk.
                    </p>

                    <h2 id="prohibited" className="font-bold">5. Prohibited Activities</h2>
                    <p>You agree not to:</p>
                    <ul className="list-disc list-inside ml-4">
                        <li>Use the Services for illegal or unauthorized purposes</li>
                        <li>Violate laws or regulations</li>
                        <li>Interfere with or damage infrastructure</li>
                        <li>Spread malware or attempt unauthorized access</li>
                    </ul>
                    <p>Violation may result in access restrictions or legal action.</p>

                    <h2 id="ip" className="font-bold">6. Intellectual Property</h2>
                    <p>
                        MetaPlay’s content (e.g., logos, UI, software) is protected by IP law. You may not use, copy, or distribute without written permission.
                    </p>

                    <h2 id="disclaimers" className="font-bold">7. Disclaimers</h2>
                    <p>
                        MetaPlay Wallet is provided “AS IS” and “AS AVAILABLE.” We:
                    </p>
                    <ul className="list-disc list-inside ml-4">
                        <li>Offer no warranties (express or implied)</li>
                        <li>Do not guarantee uptime, accuracy, or virus-free performance</li>
                        <li>Deny liability for blockchain or third-party disruptions</li>
                    </ul>

                    <h2 id="liability" className="font-bold">8. Limitation of Liability</h2>
                    <p>
                        To the fullest extent permitted, we are not liable for:
                    </p>
                    <ul className="list-disc list-inside ml-4">
                        <li>Direct or indirect damages</li>
                        <li>Asset loss, hacks, or downtime</li>
                        <li>Third-party or protocol errors</li>
                    </ul>
                    <p>Your only remedy is to stop using the Services.</p>

                    <h2 id="indemnification" className="font-bold">9. Indemnification</h2>
                    <p>
                        You agree to indemnify MetaPlay against any claims or liabilities arising from:
                    </p>
                    <ul className="list-disc list-inside ml-4">
                        <li>Your use of the Services</li>
                        <li>Your violation of the Terms or laws</li>
                    </ul>

                    <h2 id="modifications" className="font-bold">10. Modifications</h2>
                    <p>
                        We may update these Terms at any time. Updates will include a new effective date. Continued use after changes implies acceptance.
                    </p>

                    <h2 id="termination" className="font-bold">11. Termination</h2>
                    <p>
                        We reserve the right to suspend or terminate your access for any violation of these Terms.
                    </p>

                    <h2 id="contact" className="font-bold">12. Contact Us</h2>
                    <p>
                        For any questions or concerns:
                        <br />
                        Email: <a href="mailto:support@metaplaywallet.org" className="text-blue-600 underline">support@metaplaywallet.org</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TermsOfUse;
