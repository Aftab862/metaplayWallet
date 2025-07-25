import React from 'react'
import App from './App'
import Download from './sections/Download'
import { Routes, Route } from "react-router-dom";
import Navbar from './sections/Navbar'
import Support from './sections/Support';
const AppRoutes = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' Component={App} />
                <Route path="/download" Component={Download} />
                <Route path="/support" Component={Support} />

            </Routes>

        </>

    )
}

export default AppRoutes;
