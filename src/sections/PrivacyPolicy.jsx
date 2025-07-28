import { div } from "framer-motion/client";
import React from "react";

const PrivacyPolicy = () => {

    const sections = [
        { id: "applicability", title: "1. Applicability of This Policy" },
        { id: "no-data", title: "2. No Personal Data Collection" },
        { id: "blockchain", title: "3. Blockchain & Wallet Data" },
        { id: "third-party", title: "4. Third-Party Services" },
        { id: "analytics", title: "5. Analytics and Crash Reporting" },
        { id: "security", title: "6. Security of Private Keys" },
        { id: "rights", title: "7. Your Rights & Contacting Us" },
        { id: "cookies", title: "8. Cookies Policy" },
        { id: "changes", title: "9. Changes to This Privacy Policy" },
        { id: "eligibility", title: "10. Eligibility" },
        { id: "summary", title: "11. Summary" },
    ];

    return (
        <div className="scroll-smooth">
            <div className="flex flex-col items-center text-start text-[#202124] px-6 sm:px-8 md:px-16 py-10">
                {/* Header Section */}
                <div className="w-full max-w-7xl rounded-4xl bg-[#1976d2] text-white text-start py-8 md:py-15 px-10 md:px-25 mb-10">
                    <h1 className="text-3xl sm:text-5xl font-bold mb-2">MetaPlay Wallet – Privacy Policy</h1>
                    <p className="text-sm sm:text-lg mt-4 font-light">Effective Date: 24th July, 2025</p>
                </div>



                {/* Main Content */}
                <div className="w-full max-w-7xl space-y-6 text-sm sm:text-base">
                    <p>
                        MetaPlay Wallet (hereinafter referred to as "MetaPlay", "we", "us" or "our") is
                        committed to safeguarding user privacy. This Privacy Policy outlines our practices
                        regarding the collection, use, and protection of Personal Information for visitors of our
                        website and users of our services (hereinafter referred to as "User", "you" or "your").

                        By accessing or using our services, you agree to the terms of this Privacy Policy. If you
                        do not agree with this Policy, please do not access or use MetaPlay Wallet or its related
                        services.
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


                    <h2 id="applicability" className="font-bold">1. Applicability of This Policy</h2>

                    <p>
                        This Privacy Policy applies solely to the MetaPlay Wallet platform and related services. It
                        does not apply to any anonymized or aggregated data that cannot identify you as an
                        individual.
                    </p>
                    <p>
                        We use commercially reasonable physical, electronic, and procedural safeguards to protect
                        the information you entrust to us. However, we do not collect personal data by default,
                        and this Policy reflects our privacy-by-design approach.
                    </p>

                    <h2 id="no-data" className="font-bold">2. No Personal Data Collection</h2>
                    <p>MetaPlay Wallet does not collect, store, or process any of the following:</p>
                    <ul className="list-disc list-inside ml-4">
                        <li>Name</li>
                        <li>Email address</li>
                        <li>Phone number</li>
                        <li>National ID or passport details</li>
                        <li>Biometric information</li>
                        <li>Physical address</li>
                    </ul>
                    <p>
                        We do not offer account registration, and we do not track or profile our users. Your
                        private keys and recovery phrases are stored only on your device and are never transmitted
                        to our servers.
                    </p>

                    <h2 id="blockchain" className="font-bold">3. Blockchain & Wallet Data</h2>
                    <p>
                        MetaPlay enables interaction with decentralized networks, which generates publicly visible
                        blockchain data such as:
                    </p>
                    <ul className="list-disc list-inside ml-4">
                        <li>Wallet addresses</li>
                        <li>Transactions and balances</li>
                        <li>Smart contract interactions</li>
                    </ul>
                    <p>This data is stored on public blockchains and is outside of MetaPlay’s control.</p>

                    <h2 id="third-party" className="font-bold">4. Third-Party Services</h2>
                    <p>
                        MetaPlay Wallet may interact with third-party decentralized or centralized services,
                        including:
                    </p>
                    <ul className="list-disc list-inside ml-4">
                        <li>Token swap protocols</li>
                        <li>RPC providers</li>
                        <li>DApps</li>
                        <li>Decentralized exchanges</li>
                        <li>Payment providers</li>
                    </ul>
                    <p>
                        These third parties may collect or request personal information independently. MetaPlay
                        Wallet does not share your personal data with them, and we do not instruct any third-party
                        service to do so.
                    </p>
                    <p>
                        <strong>Important:</strong> You are encouraged to read the privacy policies of any
                        third-party service before using it or submitting any information.
                    </p>

                    <h2 id="analytics" className="font-bold">5. Analytics and Crash Reporting</h2>
                    <p>
                        MetaPlay Wallet does not use cookies, tracking technologies, or third-party analytics tools
                        to monitor your usage.
                    </p>
                    <p>
                        Should we introduce any performance monitoring tools in the future, they will be strictly
                        anonymized, and we will clearly inform users beforehand with the ability to opt-in.
                    </p>

                    <h2 id="security" className="font-bold">6. Security of Private Keys</h2>
                    <p>
                        Your private keys, seed phrases, and wallet credentials are never accessible to MetaPlay
                        Wallet. They are stored securely on your local device.
                    </p>
                    <p>
                        We cannot restore lost keys. You are solely responsible for backing up and protecting your
                        recovery information.
                    </p>

                    <h2 id="rights" className="font-bold">7. Your Rights & Contacting Us</h2>
                    <p>
                        Since we do not process your personal data, we do not use it for marketing or promotional
                        purposes.
                    </p>
                    <p>
                        However, if we ever introduce features that involve optional user contact or
                        notifications, you will always:
                    </p>
                    <ul className="list-disc list-inside ml-4">
                        <li>Be asked for explicit consent</li>
                        <li>Be given the option to opt out at any time</li>
                    </ul>
                    <p>
                        For questions or concerns related to this Privacy Policy, contact us at:
                        <br />📧 Email: <a href="mailto:support@metaplaywallet.com" className="text-blue-600 underline">support@metaplaywallet.com</a>
                    </p>

                    <h2 id="cookies" className="font-bold">8. Cookies Policy</h2>
                    <p>
                        MetaPlay Wallet does not use cookies on our website or app. If we implement cookies in the
                        future to enhance user experience, we will update this Privacy Policy accordingly and
                        provide a clear Cookies Policy.
                    </p>

                    <h2 id="changes" className="font-bold">9. Changes to This Privacy Policy</h2>
                    <p>
                        We may revise this Privacy Policy from time to time. When changes occur:
                    </p>
                    <ul className="list-disc list-inside ml-4">
                        <li>The “Effective Date” will be updated</li>
                        <li>Changes will be posted on our website or in-app</li>
                        <li>Your continued use of MetaPlay Wallet means you accept the new terms</li>
                    </ul>
                    <p>We recommend reviewing this policy periodically.</p>

                    <h2 id="eligibility" className="font-bold">10. Eligibility</h2>
                    <p>
                        MetaPlay Wallet is intended for users who are of legal age in their country or
                        jurisdiction. We do not knowingly allow underage individuals to use our services.
                    </p>
                    <p>
                        If we become aware that a minor is using MetaPlay Wallet, we will take steps to prevent
                        access and delete any inadvertently collected data.
                    </p>

                    <h2 id="summary" className="font-bold">11. Summary</h2>
                    <p>
                        MetaPlay Wallet is designed to put you in control. We do not collect or store personal
                        data, and your keys stay on your device. Our mission is to provide secure, decentralized
                        access to Web3 while respecting your privacy at every step.
                    </p>
                </div>
            </div>
        </div>

    );
};

export default PrivacyPolicy;