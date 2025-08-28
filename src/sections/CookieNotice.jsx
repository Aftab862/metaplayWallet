import React from "react";

const CookieNotice = () => {
    const sections = [
        { id: "intro", title: "1. What are Cookies?" },
        { id: "why-used", title: "2. Why Cookies are used" },
        { id: "no-tracking", title: "3. No Tracking Policy" },
        { id: "third-party", title: "4. Third-Party Cookies" },
        { id: "future-policy", title: "5. Future Cookie Usage" },
        { id: "contact", title: "6. Contact Us" },
    ];

    return (
        <div className="scroll-smooth">
            <div className="flex flex-col items-center text-start text-[#202124] px-6 sm:px-8 md:px-16 py-10">

                {/* Header */}
                <div className="w-full max-w-7xl rounded-4xl bg-[#1976d2] text-white text-start py-8 md:py-15 px-10 md:px-25 mb-10">
                    <h1 className="text-3xl sm:text-5xl font-bold mb-2">MetaPlay Wallet – Cookie Notice</h1>
                    <p className="text-sm sm:text-lg mt-4 font-light">Effective Date: 30th July, 2025</p>
                </div>


                {/* Sidebar ToC */}
                <div className="w-full max-w-7xl space-y-6 text-sm sm:text-base">


                    <p>
                        MetaPlay Wallet does not use cookies or tracking technologies. Your data stays private
                    </p>

                    <aside className="self-start py-5 hidden md:block italic font-bold">
                        <ul className="space-y-3 text-sm font-medium">
                            {sections.map((sec) => (
                                <li key={sec.id}>
                                    <a href={`#${sec.id}`} className="hover:underline">{sec.title}</a>
                                </li>
                            ))}
                        </ul>
                    </aside>



                    {/* Main Content */}

                    <h2 id="intro" className="font-bold ">1. What are Cookies?</h2>
                    <p>
                        Cookies are small data files placed on your device when you visit a site. They help improve your experience by enabling essential functionality, performance tracking, security features, and personalized settings.
                    </p>

                    <h2 id="why-used" className="font-bold ">2. Why Cookies are used</h2>
                    <ul className="list-disc list-inside ml-4">
                        <li><strong>Strictly Necessary Cookies:</strong> Required for core site operations (e.g., login, navigation).</li>
                        <li><strong>Performance & Analytics Cookies:</strong> Collect anonymized data to help us understand usage patterns, optimize performance, and maintain uptime.</li>
                        <li><strong>Functional Cookies:</strong> Enable enhanced features such as wallet binding workflows or remembered login states.</li>
                        <li><strong>Targeting & Third‑Party Cookies:</strong> May be used to deliver relevant product updates, secure partnerships, or wallet ecosystem integrations.</li>
                    </ul>

                    <h2 id="no-tracking" className="font-bold ">3. No Tracking Policy</h2>
                    <p>
                        <strong>Note:</strong> MetaPlay Wallet does not use cookies or similar tracking technologies to collect or store any user data. We do not track user behavior, personalize content, or serve advertisements based on cookies.
                    </p>

                    <h2 id="third-party" className="font-bold ">4. Third-Party Cookies</h2>
                    <p>
                        Some third-party services (e.g., node providers, wallet connectors, or dApps you interact with) may independently use cookies. MetaPlay Wallet does not control or access such technologies.
                    </p>

                    <h2 id="future-policy" className="font-bold ">5. Future Cookie Usage</h2>
                    <p>
                        If we introduce cookies in the future (e.g., to save wallet themes or chain preferences), we will notify you and request explicit consent before storing anything.
                    </p>

                    <h2 id="contact" className="font-bold ">6. Contact Us</h2>

                    <p>
                        If you have questions or concerns about this Cookie Notice, please contact:
                        <br />Email: <a href="mailto:support@metaplaywallet.org" className="text-blue-600 underline">support@metaplaywallet.org</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CookieNotice;
