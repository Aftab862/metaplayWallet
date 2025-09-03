import React, { Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./sections/Navbar";
import Footer from "./sections/footer";

// Lazy load components
const App = lazy(() => import("./App"));
const Download = lazy(() => import("./sections/Download"));
const Support = lazy(() => import("./sections/Support"));
const MobileDownload = lazy(() => import("./components/MobileDownload"));
const WebDownload = lazy(() => import("./components/WebDownload"));
const PrivacyPolicyPage = lazy(() => import("./sections/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./sections/TermsOfServices"));
const Stacking = lazy(() => import("./sections/Stacking"));
const CookieNotice = lazy(() => import("./sections/CookieNotice"));

const AppRoutes = () => {
    const { pathname: parms } = useLocation();
    console.log("current page", parms);

    return (
        <>
            <Navbar />
            <Suspense fallback={<div className="text-center p-4">Loading...</div>}>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/download" element={<Download />} />
                    <Route path="/support" element={<Support />} />
                    <Route path="/mobile-download" element={<MobileDownload />} />
                    <Route path="/web-download" element={<WebDownload />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                    <Route path="/terms-of-use" element={<TermsOfService />} />
                    <Route path="/staking" element={<Stacking />} />
                    <Route path="/cookie-notice" element={<CookieNotice />} />
                </Routes>
            </Suspense>
            <Footer />
        </>
    );
};

export default AppRoutes;
