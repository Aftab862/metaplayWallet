import React, { useState } from "react";
import epay from "../assets/epay.svg";
import { Menu, X } from "lucide-react"; // or use any icon library

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="w-full bg-transparent py-4 px-4 md:px-8">
            <div className="max-w-screen-xl mx-auto flex items-center justify-between">

                {/* Logo */}
                <div className="flex items-center gap-2">
                    <img src={epay} alt="Epay Logo" className="w-5 h-5 object-contain" />
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8 text-sm md:text-base font-medium text-black">
                    <span className="cursor-pointer">Blog</span>
                    <span className="cursor-pointer">About</span>
                    <span className="cursor-pointer">Community</span>
                    <span className="cursor-pointer">Help Center</span>
                </div>

                {/* Auth Buttons */}
                <div className="hidden md:flex items-center gap-4">
                    <span className="text-[#203b81] font-medium cursor-pointer">Login</span>
                    <button className="bg-[#203b81] text-white font-medium px-6 py-2 rounded-lg text-sm md:text-base">
                        Sign Up
                    </button>
                </div>

                {/* Hamburger menu (mobile only) */}
                <div className="md:hidden">
                    <button onClick={toggleMenu}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Side Drawer Menu */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="p-4 flex justify-between items-center border-b">
                    <img src={epay} alt="Epay Logo" className="w-5 h-5" />
                    <button onClick={toggleMenu}><X size={24} /></button>
                </div>

                <div className="flex flex-col px-6 py-4 gap-6 text-black font-medium text-base">
                    <span className="cursor-pointer">Blog</span>
                    <span className="cursor-pointer">About</span>
                    <span className="cursor-pointer">Community</span>
                    <span className="cursor-pointer">Help Center</span>
                </div>

                <div className="flex flex-col px-6 mt-4 gap-4">
                    <span className="text-[#203b81] cursor-pointer font-medium">Login</span>
                    <button className="bg-[#203b81] text-white font-medium py-2 rounded-lg">
                        Sign Up
                    </button>
                </div>
            </div>

            {/* Overlay when menu open */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-40 z-40"
                    onClick={toggleMenu}
                />
            )}
        </nav>
    );
};

export default Navbar;
