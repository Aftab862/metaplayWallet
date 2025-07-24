import React, { useState } from "react";
import epay from "../assets/epay.svg";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const navItems = [
    {
        label: "Wallet",
        submenu: ["Mobile App", "Browser Extension"],
    },
    {
        label: "Features",
        submenu: ["VRCN Staking and APY", "Launchpad", "Swap"],
    },
    {
        label: "Get Support",
        // submenu: ["FAQs", "Help Center"],
    },
    {
        label: "Language",
        submenu: ["English", "Spanish", "French"],
    },
    {
        label: "Download",
        url: "/download"
        // submenu: ["iOS", "Android"],
    },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [openMobileSubmenus, setOpenMobileSubmenus] = useState({});

    const toggleMenu = () => setIsOpen(!isOpen);
    const toggleSubmenu = (label) => {
        setOpenMobileSubmenus((prev) => ({
            ...prev,
            [label]: !prev[label],
        }));
    };

    return (
        <nav className="w-full bg-transparent py-6 px-4 md:px-8">
            <div className="max-w-screen-xl mx-auto flex items-center justify-between relative">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <img src={epay} alt="Epay Logo" className="w-5 h-5 object-contain" />
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8 text-sm md:text-base font-medium text-black">
                    {navItems.map((item) => (
                        <div key={item.label} className="relative group">
                            <Link to={item.url} className="cursor-pointer flex items-center gap-1">
                                {item.label} {item.submenu && <ChevronDown className="w-4 h-4" />}
                            </Link>
                            {/* Submenu (on hover) */}
                            <div className="absolute left-0  py-2 hidden group-hover:block bg-white shadow-lg rounded z-50">
                                {item.submenu && item.submenu.map((subItem) => (
                                    <a
                                        key={subItem}
                                        href="#"
                                        className="block px-5 py-2 hover:bg-gray-100 text-sm whitespace-nowrap"
                                    >
                                        {subItem}
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div>

                </div>

                {/* Mobile Hamburger */}
                <div className="md:hidden">
                    <button onClick={toggleMenu}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Drawer */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="p-4 flex justify-between items-center border-b">
                    <img src={epay} alt="Epay Logo" className="w-5 h-5" />
                    <button onClick={toggleMenu}>
                        <X size={24} />
                    </button>
                </div>

                <div className="flex flex-col px-6 py-4 gap-4 text-black font-medium text-base">
                    {navItems.map((item) => (
                        <div key={item.label}>
                            <div
                                className="flex justify-between items-center cursor-pointer"
                                onClick={() => toggleSubmenu(item.label)}
                            >
                                {item.label}
                                <ChevronDown
                                    className={`w-4 h-4 transition-transform ${openMobileSubmenus[item.label] ? "rotate-180" : ""
                                        }`}
                                />
                            </div>
                            {openMobileSubmenus[item.label] && (
                                <div className="pl-4 mt-2 flex flex-col gap-2 text-sm text-gray-600">
                                    {item.submenu.map((sub) => (
                                        <a key={sub} href="#" className="hover:text-black">
                                            {sub}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Overlay */}
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
