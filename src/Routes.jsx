import React from 'react'
import App from './App'
import Download from './sections/Download'
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from './sections/Navbar'
import Support from './sections/Support';
import Footer from './sections/footer';
import MobileDownload from './components/MobileDownload';
import WebDownload from './components/WebDownload';
import PrivacyPolicyPage from './sections/PrivacyPolicy';
import TermsOfService from './sections/TermsOfServices';

const AppRoutes = () => {
    const { pathname: parms } = useLocation();
    console.log("current page", parms)
    const restrictedRoutes = ["/privay-policy", "/terms-conditions"];


    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' Component={App} />
                <Route path="/download" Component={Download} />
                <Route path="/support" Component={Support} />
                <Route path="/mobile-download" Component={MobileDownload} />
                <Route path="/web-download" Component={WebDownload} />
                <Route path="/privacy-policy" Component={PrivacyPolicyPage} />
                <Route path="/terms-of-use" Component={TermsOfService} />



            </Routes>

            {/* {
                !restrictedRoutes.includes(parms) && 
            } */}

            < Footer />
        </>

    )
}

export default AppRoutes;
