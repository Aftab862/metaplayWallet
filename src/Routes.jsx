import React from 'react'
import App from './App'
import Download from './sections/Download'
import { Routes, Route } from "react-router-dom";
import Navbar from './sections/Navbar'
const AppRoutes = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' Component={App} />
                <Route path="/download" Component={Download} />
            </Routes>

        </>

    )
}

export default AppRoutes;
