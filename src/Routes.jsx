import React from 'react'
import App from './App'
import Download from './sections/Download'
import { Routes, Route } from "react-router-dom";
import Navbar from './sections/Navbar'
import Support from './sections/Support';
import Footer from './sections/footer';
import MobileDownload from './components/MobileDownload';
import WebDownload from './components/WebDownload';
const AppRoutes = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' Component={App} />
                <Route path="/download" Component={Download} />
                <Route path="/support" Component={Support} />
                <Route path="/mobile-download" Component={MobileDownload} />
                <Route path="/web-download" Component={WebDownload} />

            </Routes>
            <Footer />

        </>

    )
}

export default AppRoutes;
